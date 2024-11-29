<template>
  <div
    class="cb-relative cb-w-full cb-tracking-tight cb-text-black-core/[0.87] xl:cb-w-[28%]"
  >
    <div class="cb-top-12 cb-flex cb-flex-col xl:cb-sticky">
      <div
        v-if="indexContent != null"
        class="cb-border-1 cb-h-fit cb-w-full cb-rounded-[12px] cb-border cb-border-black-900"
      >
        <div
          class="cb-rounded-t-[12px] cb-bg-gray-100 cb-py-5 cb-pl-4 cb-font-inter-regular"
        >
          Table of contents
        </div>
        <div
          class="hidden-scrollbar cb-h-fit cb-overflow-y-scroll cb-pl-5 cb-pr-6 cb-leading-relaxed lg:cb-pl-4 lg:cb-pr-4 2xl:cb-pl-5 2xl:cb-pr-6"
          style="max-height: calc(100vh - 14rem)"
        >
          <div class="cb-mt-4 cb-list-none cb-text-base">
            <div
              class="table-content cb-my-3 cb-font-inter-regular !cb-text-[#14161e]"
              @click="handleClick"
              v-html="indexContent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  "index-content": {
    type: String,
    required: true,
  },
  "content-ref": {
    type: Object,
  },
  "header-height": {
    type: Number,
    default: 0,
  },
  "show-recommended-posts": {
    type: Boolean,
    default: true,
  },
});

const { indexContent, contentRef, showRecommendedPosts } = toRefs(props);

function handleClick(event) {
  event.preventDefault();
  const linkHref = event.target.getAttribute("href");
  const element = contentRef.value.querySelector(linkHref);

  if (element) {
    const scrollToPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  }
}
</script>
