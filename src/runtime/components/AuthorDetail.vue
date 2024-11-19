<template>
  <div
    class="cb-mt-16 cb-w-full cb-rounded-xl cb-bg-[#f7f7f7] cb-py-0.5 cb-font-inter-regular cb-text-black-core/[0.75]"
  >
    <div class="sm:cb-hidden">
      <div
        class="cb-flex cb-flex-col cb-items-center cb-gap-5 !cb-px-5 !cb-py-10"
      >
        <div class="cb-h-auto cb-w-auto">
          <img
            width="150"
            height="150"
            class="!cb-my-0 cb-rounded-full cb-object-cover"
            :src="author.image"
            :alt="author.alt_text || author.name"
          />
        </div>
        <div class="cb-flex cb-flex-col cb-items-center">
          <nuxt-link
            :to="'/author/' + author.username"
            class="!cb-font-inter-semibold !cb-text-[1.6875rem] !cb-font-semibold !cb-tracking-normal !cb-text-black-core/[0.87] cb-no-underline"
          >
            {{ author.name }}
          </nuxt-link>

          <div
            class="cb-text-center cb-text-base cb-leading-normal cb-tracking-normal"
          >
            {{ author.bio }}
          </div>
        </div>
      </div>
    </div>
    <div class="cb-hidden sm:cb-block">
      <div class="cb-flex cb-gap-5 !cb-p-10">
        <div class="cb-h-auto cb-w-auto">
          <img
            width="100"
            height="100"
            class="!cb-my-0 cb-rounded-full cb-object-cover"
            :src="author.image"
            :alt="author.alt_text || author.name"
          />
        </div>

        <div class="cb-mt-1 cb-flex cb-w-[70%] cb-flex-col sm:cb-col-span-2">
          <nuxt-link
            :to="'/author/' + author.username"
            class="!cb-font-inter-semibold !cb-text-[1.6875rem] !cb-font-semibold !cb-tracking-normal !cb-text-black-core/[0.87] cb-no-underline"
          >
            {{ author.name }}
          </nuxt-link>

          <div class="cb-text-base cb-leading-normal cb-tracking-normal">
            {{ author.bio }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  author: {
    type: Object,
    required: true,
  },
});
</script>
