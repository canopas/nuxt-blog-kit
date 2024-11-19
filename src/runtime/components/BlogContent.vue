<template>
  <div
    class="cb-select-text cb-font-helvetica-regular cb-text-[17px] cb-tracking-wide !cb-text-black-core/[0.80]"
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
