<template>
  <div>
    <div
      class="cb-my-4 cb-w-auto cb-h-auto cb-border cb-border-1 cb-border-gray-300 cb-transition-all cb-aspect-auto hover:cb-scale-105"
      :class="[
        index === 0 && count && count % 3 === 1
          ? 'md:cb-w-3/5 lg:cb-w-2/4 md:cb-h-[14.7rem] lg:cb-h-[16.51rem] xl:cb-h-[19.67rem] 2xl:cb-h-[22.836rem]'
          : 'md:cb-h-[7.742rem] lg:cb-h-[10.085rem] xl:cb-h-[12.195rem] 2xl:cb-h-[14.304em]',
        post.image?.data == null ? 'bg-black-900' : '',
      ]"
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
          :loading="index === 0 && count && count % 3 === 1 ? 'eager' : 'lazy'"
          :class="
            post.image?.data == null
              ? 'cb-w-[46%] cb-h-4/5 cb-mx-auto cb-my-[5%]'
              : 'cb-w-full cb-h-full'
          "
          class="cb-object-cover"
        />
      </nuxt-link>
    </div>

    <div
      class="cb-flex cb-flex-col cb-flex-[1_0_0%] cb-space-y-2"
      :class="
        index === 0 && count && count % 3 === 1 ? '' : 'cb-justify-between'
      "
    >
      <div
        class="cb-text-[1.3125rem] cb-leading-7 sm:cb-text-[1.375rem] sm:cb-leading-[1.875rem] cb-tracking-none cb-text-black-core/[0.87] hover:cb-underline cb-underline-offset-4 cb-transition-all hover:cb-scale-[0.96] cb-font-inter-semibold"
        :class="
          index === 0 && count && count % 3 === 1
            ? 'md:cb-text-2xl xl:cb-text-3xl md:cb-font-bold xl:cb-leading-10'
            : 'md:cb-text-xl lg:cb-text-[1.4375rem] lg:cb-leading-8'
        "
      >
        <nuxt-link
          :to="'/' + post.slug"
          @click="
            mixpanel?.track('tap_blog_title', {
              Title: post.title,
            })
          "
        >
          {{ post.title }}
        </nuxt-link>
      </div>
      <div
        class="cb-text-[1.0625rem] md:cb-text-base lg:cb-text-lg cb-tracking-wide cb-text-black-core/[0.65]"
      >
        <nuxt-link :to="'/' + post.slug">
          <p class="cb-line-clamp-3">
            {{ post.summary }}
          </p>
        </nuxt-link>
      </div>
      <div
        class="cb-flex cb-flex-row cb-items-center cb-pt-3 cb-text-sm xl:cb-text-lg cb-text-black-core/[0.65]"
      >
        <div
          class="cb-relative cb-w-10 md:cb-w-[41px] cb-h-10 cb-max-w-full cb-max-h-full cb-overflow-hidden"
        >
          <nuxt-link :to="'/' + post.slug">
            <img
              width="40"
              height="40"
              class="cb-absolute cb-top-2/4 cb-left-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-rounded-full cb-object-cover"
              :src="post.authorImage"
              :alt="post.authorAltText"
              loading="lazy"
            />
          </nuxt-link>
        </div>
        <nuxt-link :to="'/' + post.slug">
          <div class="cb-pl-3 cb-text-sm cb-tracking-wide">
            <span class="cb-text-green-700 cb-capitalize">
              {{ post.authorName }}
            </span>

            <div>
              <span>{{ post.published_on }}</span>
              <span class="after:cb-content-['\00B7'] after:cb-mx-1" />
              <span>{{ post.readingTime }} min read</span>

              <div v-if="post.publishedAt == null">
                <span class="after:cb-content-['\00B7'] after:cb-mx-1" />
                <span class="cb-text-green-700 cb-capitalize"> draft </span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  mixpanel: Object,
});
const { post, count, index, mixpanel } = toRefs(props);
</script>

