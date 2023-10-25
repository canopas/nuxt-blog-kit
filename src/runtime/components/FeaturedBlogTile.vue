<template>
  <div>
    <div
      class="cb-w-auto cb-h-auto cb-border cb-border-1 cb-border-gray-300 cb-transition-all cb-aspect-auto hover:cb-scale-105 md:cb-h-[7.742rem] lg:cb-h-[10.085rem] xl:cb-h-[12.195rem] 2xl:cb-h-[14.304em]"
      :class="post.image.data == null ? 'bg-black-900' : ''"
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
            post.image.data == null
              ? 'cb-w-[45%] cb-h-4/5 cb-mx-auto cb-my-[5%]'
              : 'cb-w-full cb-h-full'
          "
        />
      </nuxt-link>
    </div>
    <div class="cb-items-center !cb-text-black-core/[0.65] mt-2">
      <nuxt-link :to="'/' + post.slug">
        <div class="cb-flex cb-flex-row cb-justify-between cb-text-sm cb-tracking-wide">
          <div>
            <span>{{ post.published_on }}</span>
            <span
              class="cb-hidden lg:cb-inline-block after:cb-content-['\00B7'] after:cb-mx-1"
            ></span>
            <span class="cb-hidden lg:cb-inline-block">
              {{ post.readingTime }} min read
            </span>
          </div>
          <span class="cb-text-green-700 cb-capitalize cb-line-clamp-1">
            {{ post.authorName }}
          </span>
        </div>
        <div
          class="cb-my-2 cb-text-[1.3125rem] cb-leading-7 md:cb-text-xl lg:cb-text-[1.4375rem] lg:cb-leading-8 cb-tracking-none cb-text-black-core/[0.87] hover:cb-underline cb-underline-offset-4 cb-transition-all hover:cb-scale-[0.96] cb-font-inter-semibold"
          @click="
            mixpanel.track('tap_blog_title', {
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


<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  post: Object,
  mixpanel: Object,
});
const { post, mixpanel } = toRefs(props);
</script>