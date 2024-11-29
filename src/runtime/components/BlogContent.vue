<template>
  <div
    class="cb-select-text cb-font-charter-regular cb-text-[20px] !cb-font-normal cb-tracking-[-0.003em] !cb-text-[#000000bb]"
    v-html="processedContent"
  />
</template>

<script setup>
import hljs from "highlight.js";
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});

const processedContent = ref("");

function processContent(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const oembeds = doc.querySelectorAll("oembed[url]");

  oembeds.forEach((oembed) => {
    const url = oembed.getAttribute("url");

    // Check if URL is a video (i.e., ends with .webm or .mp4)
    if (url && (url.endsWith(".webm") || url.endsWith(".mp4"))) {
      const videoHTML = `
        <video style="margin:auto;max-height:70vh" autoplay loop muted playsinline>
          <source src="${url}" type="video/webm">
          <source src="${url.replace(".webm", ".mp4")}" type="video/mp4">
          Your browser does not support the video tag.
        </video>`;
      oembed.insertAdjacentHTML("afterend", videoHTML);
      oembed.remove();
    }
  });

  return doc.body.innerHTML;
}

watch(
  () => props.content,
  (newContent) => {
    processedContent.value = processContent(newContent);
  },
  { immediate: true }
);

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
