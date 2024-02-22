<template>
  <div class="cb-mt-4 md:cb-mt-6 xl:cb-mt-8">
    <div
      v-for="(post, i) in posts"
      :key="i"
      class="cb-flex cb-items-center cb-gap-10 cb-py-8"
      :class="i == posts.length - 1 ? 'cb-border-b-0' : 'cb-border-b-2'"
    >
      <div class="cb-flex cb-flex-col cb-gap-4 md:cb-basis-8/12">
        <nuxt-link
          :to="'/author/' + post.author.username"
          class="cb-relative cb-flex cb-items-center cb-gap-4 cb-overflow-hidden"
        >
          <img
            width="30"
            height="30"
            class="cb-rounded-full cb-object-cover"
            :src="post.author.image"
            :alt="post.author.alt_text"
          />
          <span class="cb-font-inter-medium">
            {{ post.author.name }}
          </span>
        </nuxt-link>
        <nuxt-link :to="'/' + post.slug">
          <div class="cb-flex">
            <div class="">
              <div
                class="cb-tracking-none cb-line-clamp-2 cb-font-inter-semibold cb-text-[1.1875rem] cb-leading-7 md:cb-text-[1.40625rem] md:cb-leading-snug lg:cb-line-clamp-4 xl:cb-text-[1.625rem]"
                @click="
                  mixpanel.track('tap_blog_title', {
                    Title: post.title,
                  })
                "
              >
                {{ post.title }}
              </div>
              <div
                class="cb-mb-3 cb-line-clamp-2 cb-text-base cb-tracking-wide cb-text-black-core/[0.65] md:cb-text-[1.03125rem] md:cb-leading-7 xl:cb-line-clamp-3 xl:cb-text-[1.0625rem]"
              >
                {{ post.summary }}
              </div>
            </div>
          </div>
        </nuxt-link>

        <div class="cb-flex cb-flex-col cb-justify-center cb-gap-6">
          <div
            class="cb-flex cb-flex-wrap cb-items-center cb-space-x-2 cb-text-sm md:cb-text-[0.9375rem] xl:cb-text-base"
          >
            <span class="cb-text-black-core/[0.65]">
              {{ post.published_on }}
            </span>
            <span class="after:cb-mx-0.5 after:cb-content-['\00B7']" />
            <span class="cb-text-black-core/[0.65]">
              {{ post.reading_time }} min read
            </span>
          </div>
          <div class="cb-flex cb-flex-wrap">
            <TagSection
              :tags="post.tags.filter((tag) => tag.slug !== slug)"
              :mixpanel="mixpanel"
            />
          </div>
        </div>
      </div>
      <div
        class="cb-relative cb-hidden cb-max-h-full cb-overflow-hidden md:cb-block md:cb-basis-4/12"
      >
        <img
          width="300"
          height="300"
          :src="post.image_url || ''"
          :alt="post.alternative_text || ''"
          loading="lazy"
          class="cb-border cb-object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Object,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  mixpanel: Object,
});
</script>
