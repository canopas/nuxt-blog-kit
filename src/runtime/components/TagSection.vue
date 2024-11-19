<template>
  <div v-for="tag in tags" :key="tag.id" class="cb-my-4 cb-mr-4">
    <nuxt-link
      :to="'/tag/' + tag.slug"
      class="cb-rounded-full cb-bg-[#f2f2f2] cb-px-6 cb-py-2.5 !cb-font-helvetica-regular !cb-text-base cb-capitalize cb-text-black-core/[0.60] cb-no-underline"
      @click="mixpanel?.track('tap_tag_' + tag.slug.replace('-', '_'))"
    >
      <span class="!cb-mt-1">{{ tag.name }}</span>
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});
</script>
