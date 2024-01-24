<template>
  <section
    class="cb-blog-container cb-min-h-[50vh] cb-my-14 cb-mx-2 sm:cb-mx-auto 3xl:cb-px-24"
  >
    <div>
      <div
        v-if="count == 0 || status == config.NOT_FOUND"
        class="cb-py-40 cb-text-[1.4rem] cb-text-center cb-text-black-900"
      >
        {{ config.POST_NOT_FOUND_MESSAGE }}
      </div>
      <!-- featured blogs  -->
      <div v-if="featurePosts?.length > 0">
        <span class="cb-text-[2.375rem] cb-tracking-none cb-font-inter-bold">
          Featured
        </span>
        <div
          class="cb-grid cb-gap-10 md:cb-gap-5 lg:cb-gap-10 md:cb-grid-cols-3 cb-mt-8"
        >
          <div
            v-for="featurePost in featurePosts?.slice(0, 6)"
            :key="featurePost.slug"
            class="cb-space-y-2"
          >
            <featured-blog-tile :post="featurePost" :mixpanel="mixpanel" />
          </div>
        </div>
        <div
          v-if="featurePosts?.length > 6"
          class="cb-flex cb-justify-end cb-mt-10"
        >
          <nuxt-link
            to="/featured"
            class="cb-relative cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] hover:cb-shadow-[inset_2px_1000px_1px_#fff] cb-py-2 cb-font-inter-semibold cb-text-white"
          >
            <span
              class="cb-py-4 cb-px-[1.05rem] cb-tracking-none cb-hoverable-text"
            >
              Read More Featured
            </span>
          </nuxt-link>
        </div>
        <hr class="cb-my-10" />
        <span class="cb-text-[2.375rem] cb-tracking-none cb-font-inter-bold">
          Blogs
        </span>
      </div>
      <!-- all blogs -->
      <div
        v-if="count > 0"
        class="cb-grid cb-gap-10 md:cb-gap-5 lg:cb-gap-10 md:cb-grid-cols-3 cb-mt-5"
        :class="count % 3 === 1 ? 'md:cb-col-span-1' : ''"
      >
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="cb-space-y-5"
          :class="
            index === 0 && count % 3 === 1
              ? 'md:cb-flex md:cb-space-x-6 md:cb-col-span-3'
              : ''
          "
        >
          <blog-tile
            :post="post"
            :index="index"
            :count="count"
            :mixpanel="mixpanel"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { computed, onMounted, onUnmounted, ref, toRefs } from "vue";
import { useAsyncData, useSeoMeta } from "#app";
import { useBlogListStore } from "../stores/resources";
import config from "../config";

const props = defineProps({
  mixpanel: Object,
  showDrafts: Boolean,
  showResources: Boolean,
});

const { mixpanel, showDrafts, showResources } = toRefs(props);

let postLimit = 10;
const posts = ref([]);

const store = useBlogListStore();
const resources = computed(() => store.items);
const status = computed(() => store.status);

await useAsyncData("blogs", () => store.loadResources(showDrafts.value));

const filteredPosts = resources.value.filter(
  (post) => post.is_resource == showResources.value
);

posts.value = filteredPosts?.slice(0, postLimit);
const count = filteredPosts?.length || 0;
const featurePosts = filteredPosts?.filter((post) => post.is_featured);

const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 100
  ) {
    const oldCount = postLimit;
    postLimit += 5;
    posts.value.push(...filteredPosts.slice(oldCount, postLimit));
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

useSeoMeta({
  title: config.SEO_META_DATA.title,
  description: config.SEO_META_DATA.description,
  author: config.SEO_META_DATA.authorName,
});
</script>

