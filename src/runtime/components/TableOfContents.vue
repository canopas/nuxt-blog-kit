<template>
  <div
    class="cb-relative cb-w-full xl:cb-w-[45%] cb-tracking-tight cb-text-black-core/[0.87]"
  >
    <div class="xl:cb-sticky cb-top-[7.5rem] cb-flex cb-flex-col">
      <div
        v-if="indexContent != null"
        class="cb-w-full cb-border cb-h-fit cb-border-1 cb-border-black-900 cb-rounded-[12px]"
      >
        <div
          class="cb-rounded-t-[12px] cb-bg-gray-100 cb-py-5 cb-pl-4 cb-font-inter-regular"
        >
          Table of contents
        </div>
        <div
          class="cb-pl-5 cb-pr-6 cb-h-fit lg:cb-pl-4 lg:cb-pr-4 2xl:cb-pl-5 2xl:cb-pr-6 cb-leading-relaxed cb-overflow-y-scroll hidden-scrollbar"
          style="max-height: calc(100vh - 14rem)"
        >
          <div class="cb-mt-4 cb-text-[1.0625rem] cb-list-none">
            <div
              class="cb-my-3 !cb-tracking-normal cb-font-comme-light"
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
    required: true,
  },
  "header-height": {
    type: Number,
    required: true,
  },
});

const { indexContent, contentRef, headerHeight } = toRefs(props);

function handleClick(event) {
  event.preventDefault();
  const linkHref = event.target.getAttribute("href");
  const element = contentRef.value.querySelector(linkHref);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - (headerHeight.value ?? 0),
      behavior: "smooth",
    });
  }
}
</script>
