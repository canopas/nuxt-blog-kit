<template>
  <section>
    <div class="cb-blog-container cb-mb-10 cb-mt-16 md:cb-mb-24">
      <div :key="post.id" class="cb-flex cb-flex-col cb-space-y-20">
        <!-- Header  -->
        <blog-detail-header
          :websiteUrl="websiteUrl + '/'"
          :post="post"
          :mixpanel="mixpanel"
          @show-alert="showAlertMessage"
          class="cb-select-text"
        />

        <div
          class="cb-mx-2 cb-flex cb-flex-col cb-space-y-20 cb-rounded-3xl cb-text-lg lg:cb-mx-24 xl:cb-mx-0 xl:cb-flex-row xl:cb-space-x-6 xl:cb-space-y-0 2xl:cb-space-x-8 3xl:cb-space-x-12"
          :class="post.is_resource ? '' : 'sm:px-10'"
        >
          <!-- main article  -->
          <BlogContent :post="post" :mixpanel="mixpanel" />

          <!-- Recommended Posts Section Desktop View -->
          <div v-if="post.is_resource" class="cb-relative cb-w-2/5">
            <div
              v-if="post.recommandedPosts.length != 0"
              class="cb-top-28 xl:cb-sticky"
            >
              <div class="cb-hidden cb-h-fit cb-w-full xl:cb-block">
                <RecommandedPosts
                  :posts="post.recommandedPosts"
                  :mixpanel="mixpanel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended Posts Section Mobile,Tablet View -->
      <div
        v-if="post.recommandedPosts && post.recommandedPosts.length != 0"
        class="cb-blog-container cb-mt-10 cb-inline-block lg:cb-mx-4 xl:cb-hidden"
      >
        <hr class="cb-mb-10" />
        <RecommandedPosts :posts="post.recommandedPosts" :mixpanel="mixpanel" />
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
  websiteUrl: String,
  contactApiUrl: String,
});

const { mixpanel, recaptchaKey, post, websiteUrl, contactApiUrl } =
  toRefs(props);

const CTACompName = ref("");
const showAlert = ref(false);
const message = ref("");

const CTAData = post.value?.cta.data;

CTACompName.value = CTAData?.attributes.component_name;

function showAlertMessage(msg) {
  showAlert.value = true;
  message.value = msg;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
}
</script>
