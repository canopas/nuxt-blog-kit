<template>
  <div v-for="tag in tags" :key="tag.id" class="cb-my-4 cb-mr-4">
    <nuxt-link
      :to="'/tag/' + tag.slug"
      class="cb-rounded-full cb-bg-[#f2f2f2] cb-px-6 cb-py-2 !cb-font-comme-regular cb-capitalize cb-tracking-tight cb-no-underline cb-shadow-[4px_4px_4px_rgba(0,0,0,0.19)]"
      @click="mixpanel?.track('tap_tag_' + tag.slug.replace('-', '_'))"
    >
      {{ tag.name }}
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
