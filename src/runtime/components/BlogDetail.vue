<template>
  <section>
    <div class="cb-blog-container cb-mt-16 cb-mb-10 md:cb-mb-24">
      <div :key="post.id" class="cb-flex cb-flex-col cb-space-y-20">
        <!-- Header  -->
        <blog-detail-header
          :websiteUrl="websiteUrl + '/'"
          :post="post"
          :mixpanel="mixpanel"
          @show-alert="showAlertMessage"
        />

        <div
          class="cb-flex cb-flex-col xl:cb-flex-row cb-space-y-20 xl:cb-space-y-0 cb-mx-2 lg:cb-mx-24 cb-rounded-3xl cb-text-lg xl:cb-space-x-6 2xl:cb-space-x-8 3xl:cb-space-x-12 xl:cb-mx-0"
        >
          <!-- main article  -->
          <BlogContent
            :content="blogContent"
            :indexContent="indexContent"
            :post="post"
            :mixpanel="mixpanel"
          />

          <!-- Recommended Posts Section Desktop View -->
          <div class="cb-relative cb-w-2/5">
            <div
              v-if="recommandedPosts.length != 0"
              class="xl:cb-sticky cb-top-28"
            >
              <div class="cb-hidden xl:cb-block cb-w-full cb-h-fit">
                <RecommandedPosts
                  :posts="recommandedPosts"
                  :mixpanel="mixpanel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended Posts Section Mobile,Tablet View -->
      <div
        v-if="recommandedPosts.length != 0"
        class="cb-blog-container cb-inline-block xl:cb-hidden cb-mt-10 lg:cb-mx-4"
      >
        <hr class="cb-mb-10" />
        <RecommandedPosts :posts="recommandedPosts" :mixpanel="mixpanel" />
      </div>

      <!-- alerts  -->
      <alert-section v-if="showAlert" :message="message" />
    </div>

    <!-- CTA -->
    <div class="cb-cta-section">
      <CTA1 v-if="CTACompName == 'CTA1'" />
      <CTA2
        v-if="CTACompName == 'CTA2'"
        :recaptchaKey="recaptchaKey"
        :contactApiUrl="contactApiUrl"
      />
      <CTA3
        v-if="CTACompName == 'CTA3'"
        :recaptchaKey="recaptchaKey"
        :contactApiUrl="contactApiUrl"
      />
      <CTA4 v-if="CTACompName == 'CTA4'" />
      <CTA5 v-if="CTACompName == 'CTA5'" />
    </div>
  </section>
</template>

<script setup>
import { toRefs, ref } from "vue";
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  mixpanel: Object,
  recaptchaKey: {
    type: String,
  },
  post: {
    type: Object,
    required: true,
  },
  recommandedPosts: Array,
  websiteUrl: String,
  contactApiUrl: String,
});

const { mixpanel, recaptchaKey, post, websiteUrl, contactApiUrl } =
  toRefs(props);

const CTACompName = ref("");
const showAlert = ref(false);
const message = ref("");

const CTAData = post.value?.cta.data;

const blogContent = post.value?.content;
const indexContent = post.value?.toc;

CTACompName.value = CTAData?.attributes.component_name;

function showAlertMessage(msg) {
  showAlert.value = true;
  message.value = msg;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
}
</script>
