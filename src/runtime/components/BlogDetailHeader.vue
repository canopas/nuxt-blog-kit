<template>
  <div
    class="cb-grid cb-grid-flow-row xl:cb-grid-flow-col cb-gap-10 xl:cb-gap-8 cb-w-90 cb-h-90 cb-rounded-3xl md:cb-bg-[#14161E] md:cb-py-20 md:cb-px-10 xl:cb-py-14 xl:cb-px-8"
  >
    <div
      class="md:cb-blog-container cb-w-full xl:cb-w-[35rem] 2xl:cb-w-[42rem] cb-h-auto sm:cb-h-72 md:cb-h-[21rem] lg:cb-h-[30rem] xl:cb-h-[19rem] 2xl:cb-h-[23rem]"
    >
      <img
        width="200"
        height="200"
        :src="post.image_url || ''"
        :alt="post.alternativeText || ''"
        loading="eager"
        :class="[
          post.image.data == null
            ? 'cb-w-[45%] cb-h-4/5 cb-mx-auto cb-my-[5%]'
            : 'cb-mx-auto cb-rounded-2xl lg:cb-rounded-3xl cb-object-cover',
          loaded
            ? 'cb-w-full cb-h-full cb-transition-all cb-duration-[800ms] cb-ease-out'
            : 'cb-w-[95%] cb-h-[95%] cb-opacity-10',
        ]"
      />
    </div>

    <div
      class="cb-flex cb-flex-col cb-justify-between cb-space-y-5 md:cb-text-white"
    >
      <div class="cb-flex cb-flex-col cb-space-y-5">
        <h1
          class="cb-text-[2rem] lg:cb-text-[2.50rem] xl:cb-text-[2.6875rem] cb-font-normal cb-leading-tight cb-tracking-none"
        >
          {{ post.title }}
        </h1>
        <div
          class="md:cb-text-white/[0.87] cb-text-base md:cb-text-[1.09rem] xl:cb-text-[1.125rem] md:cb-leading-7 cb-tracking-wide"
        >
          {{ post.summary }}
        </div>
        <div
          class="cb-flex cb-flex-row cb-items-center cb-space-x-4 cb-text-base cb-tracking-wide md:cb-text-white/[0.65]"
        >
          <div class="cb-w-5 cb-h-5">
            <Icon
              class="cb-w-full cb-h-full cb-text-sm"
              name="fa6-solid:clock"
            />
          </div>
          <div>
            <span>{{ published_on }}</span> ·{{ " " }}
            <span> {{ post.readingTime }} min read</span>

            <div v-if="post.publishedAt == null">
              <span class="after:cb-content-['\00B7'] after:cb-mx-1" />
              <span class="cb-text-green-600 cb-capitalize"> draft </span>
            </div>
          </div>
        </div>
      </div>
      <div class="cb-grid cb-grid-cols-2 cb-items-center cb-text-sm">
        <div class="cb-flex cb-flex-row cb-items-center cb-space-x-4">
          <div
            class="cb-relative cb-w-[46px] md:cb-w-[47px] cb-h-[46px] cb-max-w-full cb-max-h-full cb-overflow-hidden"
          >
            <img
              width="45"
              height="45"
              class="cb-absolute cb-top-2/4 cb-left-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-rounded-full cb-object-cover"
              :src="post.authorImage"
              :alt="post.authorAltText"
            />
          </div>
          <div
            class="cb-text-base md:cb-text-[1.09rem] xl:cb-text-[1.125rem] cb-tracking-wide"
          >
            {{ post.authorName }}
          </div>
        </div>

        <div class="cb-justify-self-end">
          <div class="cb-mr-4 lg:cb-hidden">
            <Icon
              class="cb-w-6 cb-h-6 sm:cb-w-7 sm:cb-h-7 hover:cb-cursor-pointer"
              name="fa6-solid:arrow-up-right-from-square"
              @click="shareBlog()"
            />
          </div>

          <div
            class="cb-hidden lg:cb-flex cb-flex-row cb-space-x-4 cb-mr-4 cb-text-white/[0.60]"
          >
            <Icon
              class="cb-w-7 cb-h-7 sm:cb-w-6 sm:cb-h-6 hover:cb-cursor-pointer hover:cb-text-white"
              name="fa6-brands:facebook-f"
              @click="
                openUrl(
                  'https://www.facebook.com/sharer/sharer.php?u=' +
                    encodeURIComponent(
                      config.WEBSITE_URL + '/resources/' + post.slug
                    ),
                  'tap_share_facebook'
                )
              "
            />

            <Icon
              class="cb-w-7 cb-h-7 sm:cb-w-6 sm:cb-h-6 hover:cb-cursor-pointer hover:cb-text-white"
              name="fa6-brands:linkedin-in"
              @click="
                openUrl(
                  'https://www.linkedin.com/sharing/share-offsite/?url=' +
                    encodeURIComponent(
                      config.WEBSITE_URL + '/resources/' + post.slug
                    ),
                  'tap_share_linkedin'
                )
              "
            />

            <Icon
              class="cb-w-7 cb-h-7 sm:cb-w-6 sm:cb-h-6 hover:cb-cursor-pointer hover:cb-text-white"
              name="fa6-brands:x-twitter"
              @click="
                openUrl(
                  'https://twitter.com/intent/tweet?text=' +
                    encodeURIComponent(post.title) +
                    '&url=' +
                    encodeURIComponent(
                      config.WEBSITE_URL + '/resources/' + post.slug
                    ),
                  'tap_share_twitter'
                )
              "
            />

            <Icon
              class="cb-w-7 cb-h-7 sm:cb-w-6 sm:cb-h-6 hover:cb-cursor-pointer hover:cb-text-white"
              name="fa6-brands:reddit"
              @click="
                openUrl(
                  'https://www.reddit.com/submit?url=' +
                    encodeURIComponent(post.title) +
                    '&url=' +
                    encodeURIComponent(
                      config.WEBSITE_URL + '/resources/' + post.slug
                    ),
                  'tap_share_reddit'
                )
              "
            />

            <Icon
              class="cb-w-7 cb-h-7 sm:cb-w-6 sm:cb-h-6 hover:cb-cursor-pointer hover:cb-text-white"
              name="fa6-solid:link"
              @click="copyLink()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref } from "vue";
import config from "../config";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});

const emit = defineEmits(["show-alert"]);

const { post, mixpanel } = toRefs(props);

const loaded = ref(false);

setTimeout(() => {
  loaded.value = true;
}, 50);

const published_on = post?.value?.published_on.replace(",", "");

function copyLink() {
  mixpanel?.value?.track("tap_copy_link");
  const el = document.createElement("input");
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  emit("show-alert", "Link Copied");
}

async function shareBlog() {
  mixpanel?.value?.track("tap_share_mobile");
  try {
    await navigator.share({
      title: post?.value?.title,
      text: post?.value?.meta_description,
      url: config.WEBSITE_URL + "/resources/" + post?.value?.slug,
    });
  } catch (err) {
    console.error(err)
  }
}

function openUrl(url, event) {
  mixpanel?.value?.track(event);
  window.open(url, "_blank");
}
</script>