<template>
  <div
    class="cb-w-full cb-mt-16 cb-bg-[#f7f7f7] cb-py-0.5 cb-text-black-core/[0.75] cb-font-inter-regular"
  >
    <div class="sm:cb-hidden cb-blog-container cb-mx-5">
      <hr class="cb-bg-gray-600 cb-w-full cb-py-[0.7px] !cb-mt-2 cb-mb-0">
      <div class="cb-flex cb-flex-col cb-items-center cb-my-5">
        <div class="cb-relative cb-w-48 cb-h-40 cb-mx-auto">
          <img
            width="150"
            height="100"
            class="cb-absolute cb-inset-x-5 !cb-my-0 cb-rounded-full cb-object-cover"
            :src="data.authorImage"
            :alt="data.authorAltText"
          />
        </div>
        <div class="cb-flex cb-flex-col cb-space-y-3 cb-items-center">
          <div
            class="cb-text-[1.6875rem] cb-font-inter-semibold cb-tracking-normal cb-text-black-core/[0.87]"
          >
            {{ data.authorName }}
          </div>
          <div
            class="cb-text-base cb-leading-normal cb-tracking-normal cb-text-center"
          >
            {{ data.authorBio }}
          </div>
        </div>
      </div>
      <hr class="cb-bg-gray-600 cb-w-full cb-py-[0.5px] !cb-mb-3 cb-mt-0">
    </div>
    <div class="cb-hidden sm:cb-block cb-blog-container cb-mx-5">
      <hr class="cb-bg-gray-600 cb-w-full cb-py-px !cb-my-3">
      <div class="cb-grid cb-grid-cols-3 cb-items-center">
        <div class="cb-relative cb-w-48 cb-h-48">
          <img
            width="100"
            height="100"
            class="cb-absolute lg:cb-left-4 cb-top-2 cb-rounded-full cb-object-cover"
            :src="data.authorImage"
            :alt="data.authorAltText"
          />
        </div>
        <div
          class="sm:cb-col-span-2 cb-flex cb-flex-col md:-cb-ml-16 xl:-cb-ml-10 2xl:-cb-ml-16"
          :class="data.authorBio ? 'cb-space-y-4' : 'cb-space-y-1'"
        >
          <div
            class="cb-text-[1.6875rem] cb-font-inter-semibold cb-tracking-normal cb-text-black-core/[0.87]"
          >
            {{ data.authorName }}
          </div>
          <div class="cb-text-base cb-leading-normal cb-tracking-normal">
            {{ data.authorBio }}
          </div>
        </div>
      </div>
      <hr class="cb-bg-gray-600 cb-w-full cb-py-px !cb-my-3">
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data } = toRefs(props);
</script>