<template>
  <section v-if="status == config.SUCCESS">
    <div class="cb-blog-container cb-mt-16 cb-mb-10 md:cb-mb-24">
      <div :key="post.id" class="cb-flex cb-flex-col cb-space-y-20">
        <!-- Header  -->
        <blog-detail-header
          :post="post"
          :mixpanel="mixpanel"
          @show-alert="showAlertMessage"
        />

        <div
          class="cb-flex cb-flex-col xl:cb-flex-row cb-space-y-20 xl:cb-space-y-0 cb-mx-2 lg:cb-mx-24 cb-rounded-3xl cb-text-lg xl:cb-space-x-6 2xl:cb-space-x-8 3xl:cb-space-x-12 xl:cb-mx-0"
        >
          <!-- main article  -->
          <BlogContent
            :content="blogContent"
            :index-content="indexContent"
            :post="post"
            :mixpanel="mixpanel"
          />

          <!-- Recommended Posts Section Desktop View -->
          <div class="cb-relative cb-w-2/5">
            <div
              v-if="recommandedPosts.length != 0"
              class="xl:cb-sticky cb-top-28"
            >
              <div class="cb-hidden xl:cb-block cb-w-full cb-h-fit">
                <RecommandedPosts
                  :posts="recommandedPosts"
                  :mixpanel="mixpanel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended Posts Section Mobile,Tablet View -->
      <div
        v-if="recommandedPosts.length != 0"
        class="cb-blog-container cb-inline-block xl:cb-hidden cb-mt-10 lg:cb-mx-4"
      >
        <hr class="cb-mb-10" />
        <RecommandedPosts :posts="recommandedPosts" :mixpanel="mixpanel" />
      </div>

      <!-- alerts  -->
      <alert-section v-if="showAlert" :message="message" />
    </div>

    <!-- CTA -->
    <div class="cb-cta-section">
      <CTA1 v-if="CTACompName == 'CTA1'" />
      <CTA2 v-if="CTACompName == 'CTA2'" :recaptcha-key="recaptchaKey" />
      <CTA3 v-if="CTACompName == 'CTA3'" :recaptcha-key="recaptchaKey" />
      <CTA4 v-if="CTACompName == 'CTA4'" />
      <CTA5 v-if="CTACompName == 'CTA5'" />
    </div>
  </section>
</template>

<script setup>
import { toRefs, ref, computed } from "vue";
import config from "../config";
import { useAsyncData, useHead, useSeoMeta } from "#app";
import {
  useBlogDetailStore,
} from "../stores/resources";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  showDrafts: Boolean,
  mixpanel: Object,
  "iframely-key": {
    type: String,
    // required: true,
  },
  "recaptcha-key": {
    type: String,
    // required: true,
  },
});

const emit = defineEmits(["notfound"]);

const { mixpanel, slug, showDrafts, iframelyKey, recaptchaKey } = toRefs(props);

const store = useBlogDetailStore();
const postData = computed(() => store.item);
const status = computed(() => store.status);

const CTACompName = ref("");
const showAlert = ref(false);
const message = ref("");

const post = ref(null);

let blogContent, indexContent, published_time, recommandedPosts;

await useAsyncData("blog", () => store.loadResource(slug.value));

if (status.value !== config.SUCCESS) {
  emit("notfound");
} else {
  post.value = postData?.value;
  const CTAData = post.value?.cta.data;

  blogContent = config.SHOW_NEW_CONTENT
    ? post.value?.new_content || post.value?.content
    : post.value?.content;
  indexContent = config.SHOW_NEW_CONTENT
    ? post.value?.new_toc || post.value?.toc
    : post.value?.toc;

  published_time = new Date(post?.value?.published_on).toLocaleTimeString();

  CTACompName.value = CTAData?.attributes.component_name;

  await useAsyncData("recommandedBlog", () =>
    recStore.loadRecommandedBlog(slug.value, showDrafts)
  );

  recommandedPosts = post.value.recommandedPosts;

  useHead({
    script: [
      {
        innerHTML: JSON.stringify(getJsonLdSchema()),
        type: "application/ld+json",
      },
      {
        src: "//cdn.iframe.ly/embed.js?card=small&key=" + iframelyKey.value,
        onLoad: () => {
          // Load media preview
          document.querySelectorAll("oembed[url]").forEach((element) => {
            if (!element.getAttribute("data-loaded")) {
              iframely.load(element, element.attributes.url.value);
            }
          });
        },
      },
    ],
  });

  useSeoMeta(seoData);
}

function seoData() {
  return {
    title: post.value.title,
    description: post.value.meta_description,
    ogTitle: post.value.title,
    ogType: "article",
    ogImage: post.value.image_url,
    ogUrl: config.WEBSITE_URL + "/resources/" + post.value.slug,
    ogDescription: post.value.meta_description,
    twitterTitle: post.value.title,
    twitterDescription: post.value.meta_description,
    twitterSite: "https://canopas.com/",
    twitterCard: "summary_large_image",
    twitterLabel1: "Reading time",
    twitterData1: post.value.readingTime + ` min read`,
    twitterCta: "Read on Canopas",
    keywords: post.value.keywords,
    twitterTileInfo1Icon: "Person",
    twitterTileInfo1Text: post.value.authorName,
    twitterTileInfo2Icon: "Calendar",
    twitterTileInfo2Text: post.value.published_on,
    twitterImageSrc: post.value.image_url,
    twitterTileImage: post.value.image_url,
    articleAuthor: post.value.authorName,
    articlePublished_time: published_time,
    ogSite_name: "Canopas blogs",
    author: post.value.authorName,
  };
}

function getJsonLdSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.value.title,
    image: post.value.image_url,
    publisher: {
      "@type": "Organization",
      name: "Canopas",
      url: "https://canopas.com/",
    },
    url: config.WEBSITE_URL + "/resources/" + post.value.slug,
    datePublished: post.value.published_on,
    dateModified: post.value.published_on,
    description: post.value.meta_description,
    author: {
      "@type": "Person",
      name: post.value.authorName,
    },
    mainEntityOfPage: {
      "@type": "Blog Website",
      "@id": "https://canopas.com/resources",
    },
  };
}

function showAlertMessage(msg) {
  showAlert.value = true;
  message.value = msg;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
}
</script>
