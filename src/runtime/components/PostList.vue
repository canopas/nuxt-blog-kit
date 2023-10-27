<template>
  <div class="cb-mt-4 md:cb-mt-6 xl:cb-mt-8">
    <div
      v-for="(post, i) in posts.slice(0, postLimit)"
      :key="i"
      class="cb-flex cb-flex-col cb-col-span-2 cb-mb-8 lg:cb-mb-10 cb-border-b-2"
    >
      <nuxt-link :to="'/' + post.slug">
        <div
          class="cb-flex cb-flex-row cb-space-x-2 cb-items-center cb-text-base md:cb-text-base cb-leading-5 cb-tracking-normal cb-capitalize"
        >
          <div
            class="cb-relative cb-w-[30px] md:cb-w-[31px] cb-h-[30px] cb-max-w-full cb-max-h-full cb-overflow-hidden"
          >
            <img
              width="30"
              height="30"
              class="cb-absolute cb-top-2/4 cb-left-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-rounded-full cb-object-cover"
              :src="post.authorImage"
              :alt="post.authorAltText"
            />
          </div>
          <span class="cb-font-inter-medium">
            {{ post.authorName }}
          </span>
          <span class="after:content-['\00B7']" />
          <span class="cb-text-black-core/[0.65]">
            {{ post.published_on }}
          </span>
        </div>
        <div
          class="cb-grid cb-grid-cols-2 md:cb-grid-cols-3 cb-gap-10 md:cb-gap-12 xl:cb-gap-16 cb-mt-4"
        >
          <div class="cb-col-span-2">
            <div
              class="cb-mb-2 lg:cb-mb-3.5 cb-text-[1.1875rem] md:cb-text-[1.40625rem] xl:cb-text-[1.625rem] cb-leading-7 md:cb-leading-snug cb-tracking-none cb-line-clamp-2 lg:cb-line-clamp-4 cb-font-inter-semibold"
              @click="
                mixpanel.track('tap_blog_title', {
                  Title: post.title,
                })
              "
            >
              {{ post.title }}
            </div>
            <div
              class="cb-mb-3 cb-text-black-core/[0.65] cb-text-base md:cb-text-[1.03125rem] xl:cb-text-[1.0625rem] md:cb-leading-7 cb-tracking-wide cb-line-clamp-2 xl:cb-line-clamp-3"
            >
              {{ post.summary }}
            </div>
          </div>
          <div
            class="cb-hidden md:cb-block cb-relative md:cb-mt-[-20px] xl:cb-mt-[-11px] cb-max-w-xs cb-max-h-full cb-overflow-hidden"
            :class="
              post.image.data == null
                ? 'md:cb-h-[8.125rem] lg:cb-h-[8.0831rem] xl:cb-h-[8.75rem] 2xl:cb-h-[10.5em] cb-bg-black-900'
                : 'md:cb-w-auto cb-h-[8.125rem] md:cb-h-[11.5rem]'
            "
          >
            <img
              width="300"
              height="300"
              :src="post.image_url || ''"
              :alt="post.alternativeText || ''"
              loading="lazy"
              class="cb-absolute cb-top-2/4 cb-left-2/4 cb-translate-x-[-50%] cb-translate-y-[-50%] cb-border cb-object-cover"
            />
          </div>
        </div>
      </nuxt-link>

      <div v-if="slug != null">
        <div
          class="cb-flex cb-flex-row cb-flex-wrap cb-space-x-2 cb-items-center cb-mb-10 md:cb-mb-14 cb-w-full cb-text-sm md:cb-text-[0.9375rem] xl:cb-text-base"
        >
          <nuxt-link
            :to="'/tag/' + slug"
            class="cb-my-1 cb-rounded-full cb-bg-[#f2f2f2] cb-px-2.5 cb-py-1 cb-font-normal cb-no-underline cb-capitalize"
          >
            {{ tagName }}
          </nuxt-link>
          <span class="cb-text-black-core/[0.65]">
            {{ post.readingTime }} min read
          </span>
        </div>
      </div>

      <div
        v-else
        class="cb-flex cb-flex-row cb-flex-wrap cb-mb-10 cb-mt-2 cb-text-sm md:cb-text-[0.9375rem] xl:cb-text-base"
      >
        <div
          v-for="tag in post.tags"
          :key="tag.id"
          class="cb-my-2.5 cb-mr-2"
        >
          <nuxt-link
            :to="'/tag/' + tag.slug"
            class="cb-my-1 cb-rounded-full cb-bg-[#f2f2f2] cb-px-2 cb-py-1.5 cb-font-normal cb-no-underline cb-capitalize"
          >
            {{ tag.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, toRefs } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  "tag-name": {
    type: String,
    required: true,
  },
  mixpanel: Object,
});

const { data, slug, tagName, mixpanel } = toRefs(props);

const posts = ref([]);

let postLimit = 2;
posts.value = data.value?.slice(0, postLimit);

const handleScroll = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 100
  ) {
    const oldCount = postLimit;
    postLimit += 2;
    posts.value.push(...data.value.slice(oldCount, postLimit));
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
