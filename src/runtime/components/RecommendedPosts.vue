<template>
  <div>
    <span
      class="cb-font-inter-medium cb-text-[1.6875rem] cb-capitalize lg:cb-text-[2rem] xl:cb-text-[1.5625rem]"
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
          class="cb-mb-10 cb-grid cb-grid-cols-3 cb-items-end cb-gap-5 xl:cb-mb-6 xl:cb-grid-cols-2 xl:cb-gap-2 2xl:cb-mb-8 2xl:cb-gap-5"
        >
          <div class="cb-col-span-2 cb-flex cb-flex-col cb-space-y-2">
            <nuxt-link
              :to="'/author/' + post.author.username"
              class="cb-flex cb-items-center cb-space-x-2 cb-text-[0.8125rem] cb-capitalize md:cb-text-[0.875rem] xl:cb-text-[0.8125rem]"
            >
              <div
                class="cb-relative cb-h-6 cb-max-h-full cb-w-6 cb-max-w-full cb-overflow-hidden md:cb-h-[30px] md:cb-w-[30px] xl:cb-h-6 xl:cb-w-6"
              >
                <img
                  width="30"
                  height="30"
                  class="cb-absolute cb-left-2/4 cb-top-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-rounded-full cb-object-cover"
                  :src="post.author.image.url"
                  :alt="post.author.name"
                />
              </div>
              <span class="cb-font-inter-medium cb-tracking-wide">
                {{ post.author.name }}
              </span>
            </nuxt-link>

            <div
              class="cb-font-inter-medium cb-text-base cb-text-black-core/[0.87] sm:cb-text-[1.0625rem] sm:cb-leading-[1.45rem] md:cb-text-xl md:cb-leading-[1.7rem] xl:cb-line-clamp-3 xl:cb-text-[1rem] xl:cb-leading-[1.35rem]"
              @click="
                mixpanel?.track('tap_blog_title', {
                  Title: post.title,
                })
              "
            >
              {{ post.title }}
            </div>
            <div
              class="cb-text-sm !cb-tracking-wide cb-text-black-core/[0.65] md:cb-text-base md:cb-leading-7 xl:cb-hidden"
            >
              <span class="cb-line-clamp-2">{{ post.summary }}</span>
            </div>
            <div
              class="cb-hidden cb-font-inter-regular cb-text-[0.875rem] !cb-tracking-wide cb-text-black-core/[0.65] xl:cb-block"
            >
              <span>{{ post.reading_time }} min read | </span>
              <span>Published on {{ post.published_on }}</span>
            </div>
          </div>
          <div
            class="cb-mb-1.5 cb-max-w-xs xl:cb-mt-2 xl:cb-hidden xl:cb-h-16"
            :class="
              post.image == null
                ? 'cb-h-[5.084rem] cb-bg-black-900 md:cb-h-[6.96rem] lg:cb-h-[8.9rem]'
                : 'cb-border-1 cb-aspect-w-2 cb-h-[5.084rem] cb-border md:cb-h-[7.5rem] lg:cb-h-[10.084rem]'
            "
          >
            <img
              width="100"
              height="100"
              :src="post.image.url || ''"
              :alt="post.alternative_text || ''"
              loading="eager"
              :class="
                post.image == null
                  ? 'cb-mx-auto cb-my-[5%] cb-h-4/5 cb-w-auto xl:cb-my-[7%]'
                  : 'cb-h-full cb-w-full'
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
