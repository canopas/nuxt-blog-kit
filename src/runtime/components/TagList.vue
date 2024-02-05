<template>
  <section
    v-if="status == config.SUCCESS || tagName !== ''"
    class="cb-blog-container cb-min-h-[50vh] cb-my-10 md:cb-my-16 sm:cb-mx-auto 3xl:cb-px-24"
  >
    <div class="md:cb-mx-8 xl:cb-mx-20">
      <div class="cb-flex cb-flex-row cb-space-x-4 cb-items-center">
        <div class="cb-w-6 cb-h-6 md:cb-w-7 md:cb-h-7 cb-mt-1">
          <Icon name="fa6-solid:tags" class="cb-w-full cb-h-full" />
        </div>
        <h1
          class="cb-my-6 md:cb-my-10 cb-text-[1.5rem] md:cb-text-[1.875rem] xl:cb-text-[2.25rem] cb-leading-7 cb-tracking-none cb-capitalize cb-font-inter-semibold"
        >
          {{ tagName }}
        </h1>
      </div>
      <div class="cb-mt-4 md:cb-mt-6 xl:cb-mt-8">
         <PostList
          :data="posts"
          :slug="slug"
          :tagName="tagName"
          :mixpanel="mixpanel"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, toRefs } from "vue";
import { useAsyncData, useSeoMeta } from "#app";
import { useTagListStore } from "../stores/tags";
import config from "../config";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  mixpanel: Object,
});

const { slug, mixpanel } = toRefs(props);

const store = useTagListStore();
const posts = computed(() => store.items);
const status = computed(() => store.status);

const tagName = ref("");

await useAsyncData("tags", () => store.loadTagBlogs(slug.value));

if (status.value !== config.SUCCESS) {
  emit("notfound");
} else {
  tagName.value = posts.value.length != 0 ? posts.value[0].tagName : "";
}

useSeoMeta({
  title: config.SEO_META_DATA.title,
  description: config.SEO_META_DATA.description,
  author: config.SEO_META_DATA.authorName,
});
</script>
