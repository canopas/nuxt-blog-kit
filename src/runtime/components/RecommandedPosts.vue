<template>
  <div>
    <span
      class="cb-text-[1.6875rem] lg:cb-text-[2rem] xl:cb-text-[1.5625rem] cb-capitalize cb-font-inter-medium"
    >
      Recommended for you
    </span>
    <div class="cb-mt-8">
      <nuxt-link
        v-for="(post, i) in posts.slice(0, 3)"
        :key="i"
        :to="'/' + post.slug"
      >
        <div
          class="cb-grid cb-grid-cols-3 xl:cb-grid-cols-2 cb-gap-5 xl:cb-gap-2 2xl:cb-gap-5 cb-items-end cb-mb-10 xl:cb-mb-6 2xl:cb-mb-8"
        >
          <div class="cb-flex cb-flex-col cb-col-span-2 cb-space-y-2">
            <div
              class="cb-flex cb-flex-row cb-space-x-2 cb-items-center cb-text-[0.8125rem] md:cb-text-[0.875rem] xl:cb-text-[0.8125rem] cb-capitalize"
            >
              <div
                class="cb-relative cb-w-6 cb-h-6 md:cb-w-[30px] md:cb-h-[30px] xl:cb-w-6 xl:cb-h-6 cb-max-w-full cb-max-h-full cb-overflow-hidden"
              >
                <img
                  width="30"
                  height="30"
                  class="cb-absolute cb-top-2/4 cb-left-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-rounded-full cb-object-cover"
                  :src="post.author.image.url"
                  :alt="post.authorAltText"
                />
              </div>
              <span class="cb-font-inter-medium cb-tracking-wide">
                {{ post.authorName }}
              </span>
            </div>

            <div
              class="cb-text-base sm:cb-text-[1.0625rem] md:cb-text-xl xl:cb-text-[1rem] sm:cb-leading-[1.45rem] md:cb-leading-[1.7rem] xl:cb-leading-[1.35rem] xl:cb-line-clamp-3 cb-text-black-core/[0.87] cb-font-inter-medium"
              @click="
                mixpanel?.track('tap_blog_title', {
                  Title: post.title,
                })
              "
            >
              {{ post.title }}
            </div>
            <div
              class="xl:cb-hidden cb-text-black-core/[0.65] cb-text-sm md:cb-text-base md:cb-leading-7 !cb-tracking-wide"
            >
              <span class="cb-line-clamp-2">{{ post.summary }}</span>
            </div>
            <div
              class="cb-font-inter-regular cb-hidden xl:cb-block cb-text-black-core/[0.65] cb-text-[0.875rem] !cb-tracking-wide"
            >
              <span>{{ post.readingTime }} min read | </span>
              <span>Published on {{ post.published_on }}</span>
            </div>
          </div>
          <div
            class="xl:cb-hidden cb-mb-1.5 xl:cb-mt-2 cb-max-w-xs xl:cb-h-16"
            :class="
              post.image?.data == null
                ? 'cb-h-[5.084rem] md:cb-h-[6.96rem] lg:cb-h-[8.9rem] cb-bg-black-900'
                : 'cb-aspect-w-2 md:cb-aspect-h-1 cb-h-[5.084rem] cb-border cb-border-1'
            "
          >
            <img
              width="100"
              height="100"
              :src="post.image.url || ''"
              :alt="post.alternativeText || ''"
              loading="eager"
              :class="
                post.image?.data == null
                  ? 'cb-w-auto cb-h-4/5 cb-mx-auto cb-my-[5%] xl:cb-my-[7%]'
                  : 'cb-w-full cb-h-full'
              "
              class="cb-object-cover"
            />
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  posts: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});

const { posts, mixpanel } = toRefs(props);

posts?.value?.forEach((post) => {
  post.published_on = new Date(post.published_on).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
});
</script>
