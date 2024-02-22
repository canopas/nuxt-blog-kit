<template>
  <div
    class="cb-select-text cb-font-comme-light !cb-tracking-wide cb-text-black-core/[0.80]"
    v-html="content"
  />
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});
</script>

<style>
.image {
  width: 100% !important;
}

code {
  user-select: text;
}
</style>
