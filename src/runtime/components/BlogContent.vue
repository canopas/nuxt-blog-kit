<template>
  <!-- Table of Contents  -->
  <table-of-contents
    :index-content="newIndexContent"
    :header-height="headerHeight"
    :content-ref="contentRef"
    :is_resource="post.is_resource"
  />

  <div
    ref="contentRef"
    class="cb-prose cb-scroll-smooth lg:cb-prose-lg"
    :class="
      post.is_resource
        ? 'xl:cb-w-full 2xl:cb-w-auto'
        : 'cb-w-full cb-max-w-[85ch] xl:cb-w-[75%]'
    "
  >
    <div
      class="cb-select-text cb-font-comme-light !cb-tracking-wide cb-text-black-core/[0.80]"
      v-html="newContent"
    />
    <div class="cb-mt-11 cb-flex cb-flex-wrap">
      <tag-section :tags="post.tags" :mixpanel="mixpanel" />
    </div>
    <author-detail v-if="post.authorBio" :post="post" />
  </div>
</template>

<script setup>
import { toRefs, onMounted, onUnmounted, ref } from "vue";
import mediumZoom from "medium-zoom/dist/pure";
import "medium-zoom/dist/style.css";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  mixpanel: Object,
});

const { post, mixpanel } = toRefs(props);
const contentRef = ref({});
const headerHeight = ref(0);

const content = post.value?.content;
const indexContent = post.value?.toc;

let firstHeadingId;

const newContent = content
  ?.replace(
    /<img/g,
    '<img class="cb-mx-auto cb-aspect-w-2 sm:cb-object-cover" style="width:min-content;height:min-content"',
  )
  .replace(/color:rgb\(14,16,26\);/g, "")
  .replace(/<a /g, '<a target="_blank"');

// table of contents formation
let tocIndex = -1;
const newIndexContent = indexContent?.replace(
  /<a\s+href="(.*?)"/g,
  (match, href) => {
    const match2 = /#([^\n]+-0)\b/g.exec(href);

    const classes =
      "cb-index-content cb-text-ellipsis hover:cb-bg-gradient-to-r cb-from-pink-300 cb-to-orange-300 hover:cb-text-transparent hover:cb-bg-clip-text";
    if (match2 && match2[1]) {
      firstHeadingId = match2[1].replace("#", "");
    }

    tocIndex++;
    return `<a id="${"link-" + tocIndex}" href="${href}" class="${classes}"`;
  },
);

const classes = [
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

const handleScroll = () => {
  if (window.innerWidth > 1200) {
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
      if (id !== "") {
        document.getElementById(id).classList.add(...classes);
      }
    }
  }
};

onMounted(() => {
  setTimeout(() => {
    headerHeight.value =
      document.getElementsByTagName("header")[0].clientHeight;
  }, 100);

  const element = document.getElementById(firstHeadingId);
  if (element) {
    element.style.marginTop = "0";
  }

  mediumZoom(document.querySelectorAll(".cb-prose img"));

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
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
