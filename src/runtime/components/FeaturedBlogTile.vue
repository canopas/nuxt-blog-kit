<template>
  <div>
    <div
      class="cb-border-1 cb-aspect-auto cb-h-auto cb-w-auto cb-border cb-border-gray-300 cb-transition-all hover:cb-scale-105 md:cb-h-[7.742rem] lg:cb-h-[10.085rem] xl:cb-h-[12.195rem] 2xl:cb-h-[14.304em]"
      :class="post.image == null ? 'bg-black-900' : ''"
    >
      <nuxt-link
        :to="'/' + post.slug"
        :aria-label="'Read more about ' + post.title"
      >
        <img
          width="100"
          height="100"
          :src="post.image_url || ''"
          :alt="post.alternativeText || ''"
          loading="lazy"
          class="object-cover"
          :class="
            post.image == null
              ? 'cb-mx-auto cb-my-[5%] cb-h-4/5 cb-w-[45%]'
              : 'cb-h-full cb-w-full'
          "
        />
      </nuxt-link>
    </div>
    <div class="mt-2 cb-items-center !cb-text-black-core/[0.65]">
      <nuxt-link :to="'/' + post.slug">
        <div class="cb-flex cb-justify-between cb-text-sm cb-tracking-wide">
          <div>
            <span>{{ post.published_on }}</span>
            <span
              class="cb-hidden after:cb-mx-1 after:cb-content-['\00B7'] lg:cb-inline-block"
            />
            <span class="cb-hidden lg:cb-inline-block">
              {{ post.reading_time }} min read
            </span>
          </div>
          <nuxt-link
            :to="'/author/' + post.authorSlug"
            class="cb-line-clamp-1 cb-capitalize cb-text-green-700"
          >
            {{ post.authorName }}
          </nuxt-link>
        </div>
        <div
          class="cb-tracking-none cb-my-2 cb-font-inter-semibold cb-text-[1.3125rem] cb-leading-7 cb-text-black-core/[0.87] cb-underline-offset-4 cb-transition-all hover:cb-scale-[0.96] hover:cb-underline md:cb-text-xl lg:cb-text-[1.4375rem] lg:cb-leading-8"
          @click="
            mixpanel?.track('tap_blog_title', {
              Title: post.title,
            })
          "
        >
          {{ post.title }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});
const { post, mixpanel } = toRefs(props);
</script>
