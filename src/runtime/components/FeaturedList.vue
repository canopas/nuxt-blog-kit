<template>
  <section
    class="cb-blog-container cb-mx-2 cb-my-10 cb-min-h-[50vh] sm:cb-mx-auto md:cb-my-16"
  >
    <div class="md:cb-mx-8 xl:cb-mx-20 3xl:cb-px-24">
      <h1
        class="cb-tracking-none cb-my-6 cb-font-inter-semibold cb-text-[1.5rem] cb-capitalize cb-leading-7 md:cb-my-10 md:cb-text-[1.875rem] xl:cb-text-[2.25rem]"
      >
        Featured Blogs
      </h1>

      <div class="cb-mt-6 md:cb-mt-10 xl:cb-mt-20">
        <PostList :data="featuredPosts" :mixpanel="mixpanel" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  mixpanel: Object,
  showDrafts: Boolean,
});

const { mixpanel } = toRefs(props);
</script>
