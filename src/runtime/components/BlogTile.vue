<template>
  <div
    class="cb-border-1 cb-aspect-auto cb-my-4 cb-h-auto cb-w-auto cb-border cb-border-gray-300 cb-transition-all hover:cb-scale-105"
    :class="[
      index === 0 && count && count % 3 === 1
        ? 'md:cb-h-[14.7rem] md:cb-w-3/5 lg:cb-h-[16.51rem] lg:cb-w-2/4 xl:cb-h-[19.67rem] 2xl:cb-h-[22.836rem]'
        : 'md:cb-h-[7.742rem] lg:cb-h-[10.085rem] xl:cb-h-[12.195rem] 2xl:cb-h-[14.304em]',
      post.image == null ? 'bg-black-900' : '',
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
        :alt="post.alternative_text || ''"
        :loading="index === 0 && count && count % 3 === 1 ? 'eager' : 'lazy'"
        :class="
          post.image == null
            ? 'cb-mx-auto cb-my-[5%] cb-h-4/5 cb-w-[46%] cb-object-cover'
            : 'cb-h-full cb-w-full'
        "
      />
    </nuxt-link>
  </div>

  <div
    class="cb-flex cb-flex-[1_0_0%] cb-flex-col cb-space-y-2"
    :class="index === 0 && count && count % 3 === 1 ? '' : 'cb-justify-between'"
  >
    <div
      class="cb-tracking-none cb-break-words cb-font-inter-semibold cb-text-[1.3125rem] cb-leading-7 cb-text-black-core/[0.87] cb-underline-offset-4 cb-transition-all hover:cb-scale-[0.96] hover:cb-underline sm:cb-text-[1.375rem] sm:cb-leading-[1.875rem]"
      :class="
        index === 0 && count && count % 3 === 1
          ? 'md:cb-text-2xl md:cb-font-bold xl:cb-text-3xl xl:cb-leading-10'
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
      class="cb-text-[1.0625rem] cb-tracking-wide cb-text-black-core/[0.65] md:cb-text-base lg:cb-text-lg"
    >
      <nuxt-link :to="'/' + post.slug">
        <p class="cb-line-clamp-3">
          {{ post.summary }}
        </p>
      </nuxt-link>
    </div>
    <div
      class="cb-flex cb-items-center cb-pt-3 cb-text-sm cb-text-black-core/[0.65] xl:cb-text-lg"
    >
      <div
        class="cb-relative cb-h-10 cb-max-h-full cb-w-10 cb-max-w-full cb-overflow-hidden md:cb-w-[41px]"
      >
        <nuxt-link :to="'/' + post.slug">
          <img
            width="40"
            height="40"
            class="cb-absolute cb-left-2/4 cb-top-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-rounded-full cb-object-cover"
            :src="post.author.image"
            :alt="post.author.alt_text || post.author.image"
            loading="lazy"
          />
        </nuxt-link>
      </div>
      <nuxt-link :to="'/author/' + post.author.username">
        <div class="cb-pl-3 cb-text-sm cb-tracking-wide">
          <span class="cb-capitalize cb-text-green-700">
            {{ post.author.name }}
          </span>

          <div>
            <span>{{ post.published_on }}</span>
            <span class="after:cb-mx-1 after:cb-content-['\00B7']" />
            <span>{{ post.reading_time }} min read </span>

            <span v-if="!post.is_published">
              <span class="after:cb-mx-1 after:cb-content-['\00B7']" />
              <span class="cb-capitalize cb-text-green-700"> draft </span>
            </span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  count: {
    type: Number,
    default: 1,
  },
  index: {
    type: Number,
    default: 0,
  },
  mixpanel: Object,
});
</script>
