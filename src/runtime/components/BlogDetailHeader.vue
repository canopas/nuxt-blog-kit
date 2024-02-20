<template>
  <div
    class="cb-grid cb-h-full cb-w-full cb-grid-flow-row cb-gap-10 cb-rounded-3xl md:cb-bg-[#14161E] md:cb-px-10 md:cb-py-20 xl:cb-grid-flow-col xl:cb-gap-8 xl:cb-px-8 xl:cb-py-14"
  >
    <div
      class="cb-h-auto cb-w-full md:cb-blog-container sm:cb-h-72 md:cb-h-[21rem] lg:cb-h-[30rem] xl:cb-h-[19rem] xl:cb-w-[35rem] 2xl:cb-h-[23rem] 2xl:cb-w-[42rem]"
    >
      <img
        width="200"
        height="200"
        :src="post.image_url || ''"
        :alt="post.alternativeText || ''"
        loading="eager"
        :class="[
          post.image == null
            ? 'cb-mx-auto cb-my-[5%] cb-h-4/5 cb-w-[45%]'
            : 'cb-mx-auto cb-rounded-2xl lg:cb-rounded-3xl',
          loaded
            ? 'cb-h-full cb-w-full cb-transition-all cb-duration-[800ms] cb-ease-out'
            : 'cb-h-[95%] cb-w-[95%] cb-opacity-10',
        ]"
      />
    </div>

    <div
      class="cb-flex cb-flex-col cb-justify-between cb-space-y-5 md:cb-text-white"
    >
      <div class="cb-flex cb-flex-col cb-space-y-5 cb-font-inter-regular">
        <h1
          class="cb-tracking-none cb-text-[2rem] cb-font-normal cb-leading-tight lg:cb-text-[2.50rem] xl:cb-text-[2.6875rem]"
        >
          {{ post.title }}
        </h1>
        <div
          class="cb-text-base cb-tracking-wide md:cb-text-[1.09rem] md:cb-leading-7 md:cb-text-white/[0.87] xl:cb-text-[1.125rem]"
        >
          {{ post.summary }}
        </div>
        <div
          class="cb-flex cb-items-center cb-space-x-4 cb-text-base cb-tracking-wide md:cb-text-white/[0.65]"
        >
          <div class="cb-w-5">
            <Icon
              class="cb-h-full cb-w-full cb-text-sm"
              name="fa6-regular:clock"
            />
          </div>
          <div>
            <span>{{ published_on }}</span> ·{{ " " }}
            <span> {{ post.reading_time }} min read</span>

            <span v-if="!post.is_published">
              <span class="after:cb-mx-1 after:cb-content-['\00B7']" />
              <span class="cb-capitalize cb-text-green-600"> draft </span>
            </span>
          </div>
        </div>
      </div>
      <div class="cb-grid cb-grid-cols-2 cb-items-center cb-text-sm">
        <nuxt-link
          :to="'/author/' + post.authorSlug"
          class="cb-flex cb-items-center cb-space-x-4"
        >
          <div
            class="cb-relative cb-h-[46px] cb-max-h-full cb-w-[46px] cb-max-w-full cb-overflow-hidden md:cb-w-[47px]"
          >
            <img
              width="45"
              height="45"
              class="cb-absolute cb-left-2/4 cb-top-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-rounded-full cb-object-cover"
              :src="post.authorImage"
              :alt="post.authorAltText"
            />
          </div>
          <div
            class="cb-text-base cb-tracking-wide md:cb-text-[1.09rem] xl:cb-text-[1.125rem]"
          >
            {{ post.authorName }}
          </div>
        </nuxt-link>

        <div class="cb-justify-self-end">
          <div class="cb-mr-4 lg:cb-hidden">
            <Icon
              class="cb-h-6 cb-w-6 hover:cb-cursor-pointer sm:cb-h-7 sm:cb-w-7"
              name="fa6-solid:arrow-up-right-from-square"
              @click="shareBlog()"
            />
          </div>

          <div
            class="cb-mr-4 cb-hidden cb-space-x-4 cb-text-white/[0.60] lg:cb-flex"
          >
            <Icon
              class="cb-h-7 cb-w-7 hover:cb-cursor-pointer hover:cb-text-white sm:cb-h-6 sm:cb-w-6"
              name="fa6-brands:facebook-f"
              @click="
                openUrl(
                  'https://www.facebook.com/sharer/sharer.php?u=' +
                    encodeURIComponent(websiteUrl + post.slug),
                  'tap_share_facebook',
                )
              "
            />

            <Icon
              class="cb-h-7 cb-w-7 hover:cb-cursor-pointer hover:cb-text-white sm:cb-h-6 sm:cb-w-6"
              name="fa6-brands:linkedin-in"
              @click="
                openUrl(
                  'https://www.linkedin.com/sharing/share-offsite/?url=' +
                    encodeURIComponent(websiteUrl + post.slug),
                  'tap_share_linkedin',
                )
              "
            />

            <Icon
              class="cb-h-7 cb-w-7 hover:cb-cursor-pointer hover:cb-text-white sm:cb-h-6 sm:cb-w-6"
              name="fa6-brands:x-twitter"
              @click="
                openUrl(
                  'https://twitter.com/intent/tweet?text=' +
                    encodeURIComponent(post.title) +
                    '&url=' +
                    encodeURIComponent(websiteUrl + post.slug),
                  'tap_share_twitter',
                )
              "
            />

            <Icon
              class="cb-h-7 cb-w-7 hover:cb-cursor-pointer hover:cb-text-white sm:cb-h-6 sm:cb-w-6"
              name="fa6-brands:reddit"
              @click="
                openUrl(
                  'https://www.reddit.com/submit?url=' +
                    encodeURIComponent(post.title) +
                    '&url=' +
                    encodeURIComponent(websiteUrl + post.slug),
                  'tap_share_reddit',
                )
              "
            />

            <Icon
              class="cb-h-7 cb-w-7 hover:cb-cursor-pointer hover:cb-text-white sm:cb-h-6 sm:cb-w-6"
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

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  websiteUrl: {
    type: String,
    required: true,
  },
  mixpanel: Object,
});

const emit = defineEmits(["show-alert"]);

const { post, websiteUrl, mixpanel } = toRefs(props);

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
      url: websiteUrl + post?.value?.slug,
    });
  } catch (err) {
    console.error(err);
  }
}

function openUrl(url, event) {
  mixpanel?.value?.track(event);
  window.open(url, "_blank");
}
</script>
