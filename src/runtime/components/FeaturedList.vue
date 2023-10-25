<template>
  <section class="cb-blog-container cb-min-h-[50vh] cb-my-10 md:cb-my-16 cb-mx-2 sm:cb-mx-auto">
    <div class="md:cb-mx-8 xl:cb-mx-20 3xl:cb-px-24">
      <h1
        class="cb-my-6 md:cb-my-10 cb-text-[1.5rem] md:cb-text-[1.875rem] xl:cb-text-[2.25rem] cb-leading-7 cb-tracking-none cb-capitalize cb-font-inter-semibold"
      >
        Featured Blogs
      </h1>

      <div class="cb-mt-6 md:cb-mt-10 xl:cb-mt-20">
        <PostList
          :data="featurePosts"
          :mixpanel="mixpanel"
        />
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed, ref, toRefs } from "vue";
import { useAsyncData } from "#app";
import { useFeaturedBlogStore } from "../stores/resources";
import config from "../config";

const props = defineProps({
  mixpanel: Object,
  showDrafts: Boolean
});

const { mixpanel, showDrafts } = toRefs(props);

let postLimit = 10;
let posts = ref([]);

const store = useFeaturedBlogStore();
const featuredPosts = computed(() => store.items);

await useAsyncData("blogs", () => store.loadFeaturedBlog(showDrafts));

useSeoMeta({
  title: config.SEO_META_DATA.title,
  description: config.SEO_META_DATA.description,
  author: config.SEO_META_DATA.authorName,
});
</script>
