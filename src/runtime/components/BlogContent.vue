<template>
  <div
    class="cb-select-text cb-font-helvetica-regular cb-tracking-wide cb-text-base !cb-text-[#14161e]"
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

.image.image_resized {
  width: 60% !important;
  margin: auto;
}

figcaption {
  text-align: center;
}

code {
  user-select: text;
}
</style>
