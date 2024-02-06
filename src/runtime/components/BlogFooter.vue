<template>
  <div
    class="cb-relative cb-overflow-hidden cb-px-0 cb-font-inter-medium cb-z-[1] cb-footer-section"
  >
    <img
      height="200"
      width="200"
      class="cb-absolute cb-top-[15px] sm:cb-top-0 cb-left-0 cb-w-full cb-h-full xl2:cb-h-[unset] -cb-z-[1] cb-object-cover xl2:cb-object-fill"
      :src="bg"
      alt="footer"
    />
    <div class="cb-blog-container lg:cb-px-20 2xl:cb-px-32">
      <div
        class="cb-grid cb-grid-rows-2 xl:cb-grid-rows-none xl:cb-grid-cols-2 cb-justify-items-stretch cb-mt-7 md:cb-mt-11 cb-mb-8 md:cb-mb-12 xl:cb-mb-[60px]"
      >
        <div
          class="cb-max-h-1 cb-justify-self-center xl:cb-justify-self-end xl:cb-order-last"
        >
          <div
            class="cb-mt-5 cb-text-[1.375rem] cb-leading-[1.6875rem] md:cb-text-[1.5rem] md:cb-leading-[1.8125rem] lg:cb-text-[1.75rem] lg:cb-leading-[1.9375rem] cb-text-white/[.87] cb-font-inter-bold"
          >
            Subscribe Here!
          </div>
          <form
            class="cb-flex cb-flex-row cb-space-x-2 cb-m-auto cb-mt-6 xl:cb-mt-8 cb-items-center"
            @submit="handleSubscription"
          >
            <div class="cb-w-56 md:cb-w-72">
              <input
                id="subscribeEmail"
                v-model="email"
                class="cb-w-full cb-rounded-full cb-border cb-border-white cb-bg-transparent cb-py-2 md:cb-py-3 cb-pl-3 cb-text-white cb-floating-input focus:cb-outline-none"
                placeholder="Enter Your E-mail"
                type="email"
                required
                @blur="showValidEmailError = isValidEmail(email)"
              />
            </div>

            <button
              class="cb-hidden md:cb-block cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] hover:cb-shadow-[inset_2px_1000px_1px_#fff] cb-text-white"
            >
              <div
                class="cb-py-[0.63rem] cb-px-2 md:cb-px-[1.1rem] cb-text-md md:cb-text-xl cb-hoverable-text cb-inline-block"
              >
                Subscribe
              </div>
            </button>
            <button
              class="md:cb-hidden cb-w-[45px] cb-h-[45px] cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] hover:cb-shadow-[inset_2px_1000px_1px_#fff]"
              aria-label="SubscribeBtn"
            >
              <div class="cb-w-[21px] cb-h-[21px] cb-inline-block">
                <Icon
                  name="fa6-solid:bell"
                  class="fab cb-footer-icon cb-w-full cb-h-full cb-hoverable-text cb-mt-0.5"
                />
              </div>
            </button>
          </form>

          <span
            v-if="email.trim().length != 0 && showValidEmailError"
            class="cb-error"
          >
            Please enter valid email address
          </span>
        </div>
        <div class="cb-justify-self-center xl:cb-justify-self-start">
          <div
            class="cb-mt-8 xl:cb-mt-5 cb-text-[1.375rem] cb-leading-[1.6875rem] md:cb-text-[1.5rem] md:cb-leading-[1.8125rem] lg:cb-text-[1.75rem] lg:cb-leading-[1.9375rem] cb-text-white/[.87] cb-font-inter-bold"
          >
            Follow us on
          </div>
          <ul
            class="cb-flex cb-flex-wrap cb-justify-center cb-w-full cb-m-auto cb-mt-6 xl:cb-mt-8 cb-pl-0 cb-cursor-pointer cb-list-none"
          >
            <li
              class="cb-flex cb-justify-center !cb-items-center cb-w-10 cb-h-10 md:cb-w-[62px] md:cb-h-[62px] cb-mr-1 md:cb-mr-1.5 !cb-rounded-full cb-text-center cb-cursor-pointer cb-gradient-border-btn !cb-border-0"
            >
              <nuxt-link
                :href="socialMediaData.facebook"
                target="_blank"
                aria-label="footerLink"
                class="cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                @click="handleIconClick('tap_footer_facebook')"
              >
                <Icon
                  name="fa6-brands:facebook-f"
                  class="fab cb-footer-icon cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-flex cb-justify-center !cb-items-center cb-w-10 cb-h-10 md:cb-w-[62px] md:cb-h-[62px] cb-mx-1 md:cb-mx-1.5 !cb-rounded-full cb-text-center cb-cursor-pointer cb-gradient-border-btn !cb-border-0"
            >
              <nuxt-link
                :href="socialMediaData.instagram"
                target="_blank"
                aria-label="footerLink"
                class="cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                @click="handleIconClick('tap_footer_instagram')"
              >
                <Icon
                  name="fa6-brands:instagram"
                  class="fab cb-footer-icon cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-flex cb-justify-center !cb-items-center cb-w-10 cb-h-10 md:cb-w-[62px] md:cb-h-[62px] cb-mx-1 md:cb-mx-1.5 !cb-rounded-full cb-text-center cb-cursor-pointer cb-gradient-border-btn !cb-border-0"
            >
              <nuxt-link
                :href="socialMediaData.twitter"
                target="_blank"
                aria-label="footerLink"
                class="cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                @click="handleIconClick('tap_footer_twitter')"
              >
                <Icon
                  name="fa6-brands:x-twitter"
                  class="fab cb-footer-icon cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-flex cb-justify-center !cb-items-center cb-w-10 cb-h-10 md:cb-w-[62px] md:cb-h-[62px] cb-mx-1 md:cb-mx-1.5 !cb-rounded-full cb-text-center cb-cursor-pointer cb-gradient-border-btn !cb-border-0"
            >
              <nuxt-link
                :href="socialMediaData.blog"
                target="_blank"
                aria-label="footerLink"
                class="cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                @click="handleIconClick('tap_footer_medium')"
              >
                <Icon
                  name="fa-brands:medium-m"
                  class="fab cb-footer-icon cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-flex cb-justify-center !cb-items-center cb-w-10 cb-h-10 md:cb-w-[62px] md:cb-h-[62px] cb-mx-1 md:cb-mx-1.5 !cb-rounded-full cb-text-center cb-cursor-pointer cb-gradient-border-btn !cb-border-0"
            >
              <nuxt-link
                :href="socialMediaData.linkedin"
                target="_blank"
                aria-label="footerLink"
                class="cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                @click="handleIconClick('tap_footer_linkedin')"
              >
                <Icon
                  name="fa-brands:linkedin-in"
                  class="fab cb-footer-icon cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-flex cb-justify-center !cb-items-center cb-w-10 cb-h-10 md:cb-w-[62px] md:cb-h-[62px] cb-mx-1 md:cb-mx-1.5 !cb-rounded-full cb-text-center cb-cursor-pointer cb-gradient-border-btn !cb-border-0"
            >
              <nuxt-link
                :href="socialMediaData.youtube"
                target="_blank"
                aria-label="footerLink"
                class="cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                @click="handleIconClick('tap_footer_youtube')"
              >
                <Icon
                  name="fa-brands:youtube"
                  class="fab cb-footer-icon cb-w-5 cb-h-5 md:cb-w-8 md:cb-h-8"
                />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="cb-mb-8 md:cb-mb-9 cb-text-xs cb-leading-[0.9375rem] md:cb-text-[0.84375rem] md:cb-leading-[1.03125rem] lg:cb-text-[0.9375rem] lg:cb-leading-[1.125rem] cb-text-white/[.87] cb-text-center"
      >
        <div class="cb-w-3 cb-h-3 md:cb-w-4 md:cb-h-4 cb-mr-1 cb-inline-block">
          <Icon
            name="fa-regular:copyright"
            class="cb-w-full cb-h-full cb-mt-0.5"
          />
        </div>
        {{ new Date().getFullYear() }} {{ companyName }} All rights reserved.
      </div>

      <svg width="0" height="0">
        <linearGradient id="lgrad" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="-24.42%" style="stop-color: #ff835b; stop-opacity: 1" />
          <stop offset="101.76%" style="stop-color: #f2709c; stop-opacity: 1" />
        </linearGradient>
      </svg>
    </div>

    <div
      v-if="showAlert"
      class="cb-fixed cb-bottom-[5%] cb-inset-x-[5%] sm:cb-inset-x-[20%] xl:vinset-x-[27%] cb-flex cb-flex-rows cb-justify-between cb-items-center cb-w-[90%] sm:cb-w-7/12 xl:cb-w-5/12 cb-z-[500] cb-rounded-[10px] cb-from-[#ff835b] cb-to-[#f2709c] cb-bg-gradient-to-r cb-py-5 cb-font-inter-semibold cb-text-center cb-text-white md:cb-text-xl"
      role="alert"
    >
      <p class="cb-block sm:cb-inline cb-mx-7">Subscribe Successfully!</p>
      <Icon
        name="fa6-solid:xmark"
        class="cb-w-5 cb-h-5 cb-mr-5 hover:cb-cursor-pointer"
        @click="showAlert = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { isValidEmail } from "./../utils";
import axios from "axios";
import bg from "../assets/images/footer/new-bg.svg";

const props = defineProps({
  mixpanel: Object,
  apiUrl: {
    type: String,
    required: true,
  },
  socialMediaData: {
    type: Object,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});

const { mixpanel, apiUrl, socialMediaData, companyName } = toRefs(props);

const email = ref("");
const showAlert = ref(false);
const showValidEmailError = ref(false);

const handleIconClick = (icon) => {
  mixpanel?.value?.track(icon);
};

const handleSubscription = async (event) => {
  event.preventDefault();

  if (!showValidEmailError.value) {
    await axios
      .post(apiUrl.value + "/v1/user/subscribeUser?populate=deep", {
        email: email.value,
      })
      .then(() => {
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 2000);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });

    email.value = "";
  }
};
</script>
