<template>
  <div
    class="cb-select-text cb-font-charter-regular cb-text-[20px] !cb-font-normal cb-tracking-[-0.003em] !cb-text-[#000000bb]"
    v-html="content"
  />
</template>

<script setup>
import hljs from "highlight.js";
import { onMounted } from "vue";

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});

onMounted(() => {
  // Highlight all code blocks after component is mounted
  hljs.highlightAll();
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
