<template>
  <!-- Table of Contents  -->
  <table-of-contents
    :indexContent="newIndexContent"
    :headerHeight="headerHeight"
    :contentRef="contentRef"
  />

  <div
    ref="contentRef"
    class="cb-prose lg:cb-prose-lg xl:cb-w-full 2xl:cb-w-auto cb-scroll-smooth"
  >
    <div
      v-html="newContent"
      class="!cb-tracking-wide cb-text-black-core/[0.80] cb-font-comme-light"
    />
    <div class="cb-flex cb-flex-row cb-flex-wrap cb-mt-11">
      <tag-section :tags="post.tags" :mixpanel="mixpanel" />
    </div>
    <author-detail v-if="post.authorBio" :data="post" />
  </div>
</template>

<script setup>
import { toRefs, onMounted, onUnmounted, ref } from "vue";
import hljs from "highlight.js";

const props = defineProps({
  content: String,
  indexContent: String,
  post: Object,
  mixpanel: Object,
  loaded: Boolean,
});

const { content, indexContent, post, mixpanel, loaded } = toRefs(props);
const contentRef = ref(null);
const activeId = ref(null);
const headerHeight = ref(0);

let firstHeadingId;

let newContent = content.value
  ?.replace(
    /<img/g,
    '<img class="cb-mx-auto cb-aspect-w-2 sm:cb-object-cover" style="width:min-content;height:min-content"'
  )
  .replace(/color:rgb\(14,16,26\);/g, "")
  .replace(/<a /g, '<a target="_blank"');

// table of contents formation
let tocIndex = -1;
let newIndexContent = indexContent.value?.replace(
  /<a\s+href="(.*?)"/g,
  (match, href) => {
    let match2 = /#([^\n]+-0)\b/g.exec(href);

    let classes =
      "cb-index-content cb-text-ellipsis hover:cb-bg-gradient-to-r cb-from-pink-300 cb-to-orange-300 hover:cb-text-transparent hover:cb-bg-clip-text";
    if (match2 && match2[1]) {
      firstHeadingId = match2[1].replace("#", "");
    }

    tocIndex++;
    return `<a id="${"link-" + tocIndex}" href="${href}" class="${classes}"`;
  }
);

const handleScroll = () => {
  let classes = [
    "cb-relative",
    "cb-bg-gradient-to-r",
    "cb-bg-clip-text",
    "cb-text-transparent",
    "after:cb-absolute",
    "after:cb-left-0",
    "after:cb-bottom-0",
    "after:cb-w-full",
    "after:cb-h-px",
    "after:cb-bg-gradient-to-r",
  ];
  let id = "";
  if (contentRef.value) {
    const headers = contentRef.value.querySelectorAll("h1, h2");
    const indices = document.querySelectorAll(".cb-index-content");

    indices.forEach((element) => {
      element.classList.remove(...classes);
    });

    headers.forEach((header, index) => {
      const documentHeight = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      if (
        currentScroll > documentHeight ||
        header.offsetTop - window.pageYOffset <= 200
      ) {
        id = "link-" + index;
      }
    });

    document.getElementById(id).classList.add(...classes);
  }
};

onMounted(() => {
  headerHeight.value =
    document.getElementsByTagName("header")["0"].clientHeight;

  window.hljs = hljs;
  hljs.highlightAll();

  // loaded.value = false;

  let element = document.getElementById(firstHeadingId);
  if (element) {
    element.style.marginTop = "0";
  }

  document.querySelectorAll("oembed[url]").forEach((element) => {
    if (
      typeof iframely !== "undefined" &&
      !element.getAttribute("data-loaded")
    ) {
      iframely.load(element, element.attributes.url.value);
      element.setAttribute("data-loaded", true);
    }
  });

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>