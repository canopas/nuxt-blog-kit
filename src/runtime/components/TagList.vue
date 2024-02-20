<template>
  <section
    v-if="slug !== ''"
    class="cb-blog-container cb-my-10 cb-min-h-[50vh] sm:cb-mx-auto md:cb-my-16 3xl:cb-px-24"
  >
    <div class="md:cb-mx-8 xl:cb-mx-20">
      <div class="cb-flex cb-items-center cb-space-x-4">
        <div class="cb-mt-1 cb-h-6 cb-w-6 md:cb-h-7 md:cb-w-7">
          <Icon name="fa6-solid:tags" class="cb-h-full cb-w-full" />
        </div>
        <h1
          class="cb-tracking-none cb-my-6 cb-font-inter-semibold cb-text-[1.5rem] cb-capitalize cb-leading-7 md:cb-my-10 md:cb-text-[1.875rem] xl:cb-text-[2.25rem]"
        >
          {{ slug }}
        </h1>
      </div>
      <div class="cb-mt-4 md:cb-mt-6 xl:cb-mt-8">
        <PostList :data="posts" :slug="slug" :mixpanel="mixpanel" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  posts: {
    type: Array,
    required: true,
  },
  mixpanel: Object,
});
</script>
