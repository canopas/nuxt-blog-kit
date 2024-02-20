<template>
  <section
    class="cb-blog-container cb-mx-2 cb-my-14 cb-min-h-[50vh] sm:cb-mx-auto 3xl:cb-px-24"
  >
    <div>
      <div
        v-if="count == 0 || status == config.NOT_FOUND"
        class="cb-py-40 cb-text-center cb-text-[1.4rem] cb-text-black-900"
      >
        {{ config.POST_NOT_FOUND_MESSAGE }}
      </div>
      <!-- featured blogs  -->
      <div v-if="featurePosts?.length > 0">
        <span class="cb-tracking-none cb-font-inter-bold cb-text-[2.375rem]">
          Featured
        </span>
        <div
          class="cb-mt-8 cb-grid cb-gap-10 md:cb-grid-cols-3 md:cb-gap-5 lg:cb-gap-10"
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
          class="cb-mt-10 cb-flex cb-justify-end"
        >
          <nuxt-link
            to="/featured"
            class="cb-relative cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-py-2 cb-font-inter-semibold cb-text-white hover:cb-shadow-[inset_2px_1000px_1px_#fff]"
          >
            <span
              class="cb-tracking-none cb-hoverable-text cb-px-[1.05rem] cb-py-4"
            >
              Read More Featured
            </span>
          </nuxt-link>
        </div>
        <hr class="cb-my-10" />
        <span class="cb-tracking-none cb-font-inter-bold cb-text-[2.375rem]">
          Blogs
        </span>
      </div>
      <!-- all blogs -->
      <div
        v-if="count > 0"
        class="cb-mt-5 cb-grid cb-gap-10 md:cb-grid-cols-3 md:cb-gap-5 lg:cb-gap-10"
        :class="count % 3 === 1 ? 'md:cb-col-span-1' : ''"
      >
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="cb-space-y-5"
          :class="
            index === 0 && count % 3 === 1
              ? 'md:cb-col-span-3 md:cb-flex md:cb-space-x-6'
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
import { toRefs } from "vue";
import config from "../config";

const props = defineProps({
  mixpanel: Object,
  showDrafts: Boolean,
  posts: {
    type: Array,
    required: true,
  },
  featurePosts: {
    type: Object,
  },
  count: {
    type: Number,
    default: 1,
  },
  status: {
    type: Number,
    default: 200,
  },
});

const { mixpanel, posts, featurePosts, count, status } = toRefs(props);
</script>
