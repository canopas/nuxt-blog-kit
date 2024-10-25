<template>
  <section>
    <div class="cb-blog-container cb-mb-10 cb-mt-16 md:cb-mb-24">
      <div :key="post.id" class="cb-flex cb-flex-col cb-space-y-20">
        <!-- Header  -->
        <BlogDetailHeader
          :website-url="websiteUrl + '/'"
          :post="post"
          :mixpanel="mixpanel"
          @show-alert="showAlertMessage"
          class="cb-select-text"
        />

        <div
          class="cb-relative cb-mx-2 cb-flex cb-flex-col xl:cb-flex-row cb-text-lg cb-space-y-20 lg:cb-mx-24 xl:cb-space-y-0"
          :class="post.is_resource ? 'xl:cb-mx-0 xl:cb-space-x-6 2xl:cb-space-x-8 3xl:cb-space-x-12' : 'xl:cb-justify-between xl:cb-w-full xl:cb-max-w-[947px] 2xl:cb-max-w-[1100px] xl:cb-mx-8 2xl:cb-mx-auto'"
        >
          <!-- Table of Contents  -->
          <TableOfContents
            :index-content="newIndexContent"
            :header-height="headerHeight"
            :content-ref="contentRef"
            :show-recommended-posts="post.is_resource"
          />

          <!-- main article  -->
          <div
            ref="contentRef"
            class="cb-prose cb-scroll-smooth lg:cb-prose-lg !cb-mt-0"
            :class="
              post.is_resource
                ? 'xl:cb-w-full 2xl:cb-w-auto'
                : 'cb-w-full cb-max-w-[645px] 2xl:cb-max-w-[692px]'
            "
          >
            <BlogContent :content="newContent" :mixpanel="mixpanel" />

            <div class="cb-mt-11 cb-flex cb-flex-wrap">
              <TagSection :tags="post.tags" :mixpanel="mixpanel" />
            </div>
            <AuthorDetail v-if="post.author.bio" :author="author" />
          </div>

          <div
            v-if="!post.is_resource"
            class="cb-hidden cb-absolute cb-h-full cb-right-[-10.5rem] 2xl:cb-right-[-11rem] xl:cb-block cb-max-w-[150px]"
          >
            <div
              class="cb-flex cb-flex-col cb-top-28 xl:cb-sticky cb-gap-1.5"
            >
              <div class="mr-4 mt-2 whitespace-nowrap text-[1.25rem] no-underline">
                <img
                  src="@/assets/images/logo/logo-header-black.svg"
                  class="cb-h-auto cb-w-[140px]"
                  alt="canopas-logo"
                />
              </div>
         
              <div class="cb-font-helvetica-regular cb-text-base cb-text-[#14161e]">We build products that customers can't help but love!</div>
              <nuxt-link
                :to="'/contact'"
                @click="mixpanel?.track('tap_blog_cta_right_contact')"
                class="flex gap-2 group relative m-0 px-2.5 pt-2 gradient-btn primary-btn sub-h3-semibold lg:sub-h1-semibold mt-1"
              >
                <span
                  class="hover:v2-canopas-gradient-text"
                >
                  Get in touch
                </span>
              </nuxt-link>
          </div>
        </div>

          <!-- Recommended Posts Section Desktop View -->
          <div
            v-if="post.is_resource && post.recommended_posts"
            class="cb-relative cb-w-2/5"
          >
            <div
              v-if="post.recommended_posts.length != 0"
              class="cb-top-28 xl:cb-sticky"
            >
              <div class="cb-hidden cb-h-fit cb-w-full xl:cb-block">
                <RecommendedPosts
                  :posts="post.recommended_posts"
                  :mixpanel="mixpanel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended Posts Section Mobile,Tablet View -->
      <div
        v-if="post.recommended_posts && post.recommended_posts.length != 0"
        class="cb-blog-container cb-mt-10 cb-inline-block lg:cb-mx-4 xl:cb-hidden"
      >
        <hr class="cb-mb-10" />
        <RecommendedPosts
          :posts="post.recommended_posts"
          :mixpanel="mixpanel"
        />
      </div>

      <!-- alerts  -->
      <AlertSection v-if="showAlert" :message="message" />
    </div>
  </section>
</template>

<script setup>
import { toRefs, ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
  "recaptcha-key": {
    type: String,
  },
  "website-url": String,
  "contact-api-url": String,
});

const { mixpanel, recaptchaKey, post, websiteUrl, contactApiUrl } =
  toRefs(props);

const contentRef = ref({});
const headerHeight = ref(0);
const CTACompName = ref("");
const showAlert = ref(false);
const message = ref("");
const firstHeadingId = ref("");

const author = post.value?.author;
const content = post.value?.content;
const indexContent = post.value?.toc;

const CTAData = post.value?.cta?.data;
CTACompName.value = CTAData?.attributes.component_name;

const newContent = content
  ?.replace(
    /<img/g,
    '<img class="cb-mx-auto cb-aspect-w-2 sm:cb-object-cover" style="width:min-content;height:min-content"',
  )
  .replace(/color:rgb\(14,16,26\);/g, "")
  .replace(/<a /g, '<a target="_blank"');

// table of contents formation
let tocIndex = -1;
const newIndexContent = indexContent?.replace(
  /<a\s+href="(.*?)"/g,
  (match, href) => {
    const match2 = /#([^\n]+-0)\b/g.exec(href);

    const classes =
      "cb-my-3 cb-index-content cb-text-ellipsis hover:cb-bg-gradient-to-r cb-from-pink-300 cb-to-orange-300 hover:cb-text-transparent hover:cb-bg-clip-text";
    if (match2 && match2[1]) {
      firstHeadingId.value = match2[1].replace("#", "");
    }

    tocIndex++;
    return `<a id="${"link-" + tocIndex}" href="${href}" class="${classes}"`;
  },
);

function showAlertMessage(msg) {
  showAlert.value = true;
  message.value = msg;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
}

const classes = [
  "cb-relative",
  "cb-bg-gradient-to-r",
  "cb-bg-clip-text",
  "cb-text-transparent",
  "after:cb-absolute",
  "after:cb-left-0",
  "after:cb-bottom-0",
  "after:cb-w-full",
  "after:cb-h-px",
  "after:cb-bg-gradient-to-r",
];

const handleScroll = () => {
  if (window.innerWidth > 1200) {
    let id = "";
    if (contentRef.value) {
      const headers = contentRef.value.querySelectorAll(
        "h1:not(figure h1), h2:not(figure h2)",
      );
      const indices = document.querySelectorAll(".cb-index-content");

      indices.forEach((element) => {
        element.classList.remove(...classes);
      });

      headers.forEach((header, index) => {
        const documentHeight = document.body.scrollHeight;
        const currentScroll = window.scrollY + window.innerHeight;
        if (
          currentScroll > documentHeight ||
          header.offsetTop - window.pageYOffset <= 200
        ) {
          id = "link-" + index;
        }
      });
      if (id !== "") {
        document.getElementById(id).classList.add(...classes);
      }
    }
  }
};

onMounted(() => {
  setTimeout(() => {
    headerHeight.value =
      document.getElementsByTagName("header")[0].clientHeight;
  }, 100);

  const element = document.getElementById(firstHeadingId);
  if (element) {
    element.style.marginTop = "0";
  }

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
