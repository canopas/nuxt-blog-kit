<template>
  <div
    class="cb-mt-16 cb-w-full cb-bg-[#f7f7f7] cb-py-0.5 cb-font-inter-regular cb-text-black-core/[0.75]"
  >
    <div class="cb-blog-container cb-mx-5 sm:cb-hidden">
      <hr class="!cb-mt-2 cb-mb-0 cb-w-full cb-bg-gray-600 cb-py-[0.7px]" />
      <div class="cb-my-5 cb-flex cb-flex-col cb-items-center">
        <div class="cb-relative cb-mx-auto cb-h-40 cb-w-48">
          <img
            width="150"
            height="100"
            class="cb-absolute cb-inset-x-5 !cb-my-0 cb-rounded-full cb-object-cover"
            :src="post.authorImage"
            :alt="post.authorAltText"
          />
        </div>
        <div class="cb-flex cb-flex-col cb-items-center cb-space-y-3">
          <nuxt-link
            :to="'/author/' + post.authorSlug"
            class="!cb-font-inter-semibold !cb-text-[1.6875rem] !cb-font-semibold !cb-tracking-normal !cb-text-black-core/[0.87] cb-no-underline"
          >
            {{ post.authorName }}
          </nuxt-link>

          <div
            class="cb-text-center cb-text-base cb-leading-normal cb-tracking-normal"
          >
            {{ post.authorBio }}
          </div>
        </div>
      </div>
      <hr class="!cb-mb-3 cb-mt-0 cb-w-full cb-bg-gray-600 cb-py-[0.5px]" />
    </div>
    <div class="cb-blog-container cb-mx-5 cb-hidden sm:cb-block">
      <hr class="!cb-my-3 cb-w-full cb-bg-gray-600 cb-py-px" />
      <div class="cb-flex cb-items-center cb-gap-10">
        <img
          width="100"
          height="100"
          class="cb-rounded-full cb-object-cover"
          :src="post.authorImage"
          :alt="post.authorAltText"
        />
        <div
          class="cb-flex cb-flex-col sm:cb-col-span-2"
          :class="post.authorBio ? 'cb-space-y-4' : 'cb-space-y-1'"
        >
          <nuxt-link
            :to="'/author/' + post.authorSlug"
            class="!cb-font-inter-semibold !cb-text-[1.6875rem] !cb-font-semibold !cb-tracking-normal !cb-text-black-core/[0.87] cb-no-underline"
          >
            {{ post.authorName }}
          </nuxt-link>

          <div class="cb-text-base cb-leading-normal cb-tracking-normal">
            {{ post.authorBio }}
          </div>
        </div>
      </div>
      <hr class="!cb-my-3 cb-w-full cb-bg-gray-600 cb-py-px" />
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
});

const { post } = toRefs(props);
</script>
