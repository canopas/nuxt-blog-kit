<template>
  <div
    class="cb-z-[1] cb-overflow-hidden cb-px-0 cb-font-inter-medium"
    :class="footerClasses"
  >
    <img
      height="200"
      width="200"
      class="xl2:cb-h-[unset] xl2:cb-object-fill cb-absolute cb-left-0 cb-top-[15px] -cb-z-[1] cb-h-full cb-w-full cb-object-cover sm:cb-top-0"
      :src="bg"
      alt="footer"
    />
    <div class="cb-blog-container lg:cb-px-20 2xl:cb-px-32">
      <div
        class="cb-mb-8 cb-mt-7 cb-grid cb-grid-rows-2 cb-justify-items-stretch md:cb-mb-12 md:cb-mt-11 xl:cb-mb-[60px] xl:cb-grid-cols-2 xl:cb-grid-rows-none"
      >
        <div
          class="cb-max-h-1 cb-justify-self-center xl:cb-order-last xl:cb-justify-self-end"
        >
          <div
            class="cb-mt-5 cb-font-inter-bold cb-text-[1.375rem] cb-leading-[1.6875rem] cb-text-white/[.87] md:cb-text-[1.5rem] md:cb-leading-[1.8125rem] lg:cb-text-[1.75rem] lg:cb-leading-[1.9375rem]"
          >
            Subscribe Here!
          </div>
          <form
            class="cb-m-auto cb-mt-6 cb-flex cb-items-center cb-space-x-2 xl:cb-mt-8"
            @submit="handleSubscription"
          >
            <div class="cb-w-56 md:cb-w-72">
              <input
                id="subscribeEmail"
                v-model="email"
                class="cb-floating-input cb-w-full cb-rounded-full cb-border cb-border-white cb-bg-transparent cb-py-2 cb-pl-3 cb-text-white focus:cb-outline-none md:cb-py-3"
                placeholder="Enter Your E-mail"
                type="email"
                required
                @blur="showValidEmailError = isValidEmail(email)"
              />
            </div>

            <button
              class="cb-hidden cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-text-white hover:cb-shadow-[inset_2px_1000px_1px_#fff] md:cb-block"
            >
              <div
                class="cb-text-md cb-hoverable-text cb-inline-block cb-px-2 cb-py-[0.63rem] md:cb-px-[1.1rem] md:cb-text-xl"
              >
                Subscribe
              </div>
            </button>
            <button
              class="cb-h-[45px] cb-w-[45px] cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] hover:cb-shadow-[inset_2px_1000px_1px_#fff] md:cb-hidden"
              aria-label="SubscribeBtn"
            >
              <div class="cb-inline-block cb-h-[21px] cb-w-[21px]">
                <Icon
                  name="fa6-solid:bell"
                  class="fab cb-footer-icon cb-hoverable-text cb-mt-0.5 cb-h-full cb-w-full"
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
            class="cb-mt-8 cb-font-inter-bold cb-text-[1.375rem] cb-leading-[1.6875rem] cb-text-white/[.87] md:cb-text-[1.5rem] md:cb-leading-[1.8125rem] lg:cb-text-[1.75rem] lg:cb-leading-[1.9375rem] xl:cb-mt-5"
          >
            Follow us on
          </div>
          <ul
            class="cb-m-auto cb-mt-6 cb-flex cb-w-full cb-cursor-pointer cb-list-none cb-flex-wrap cb-justify-center cb-pl-0 xl:cb-mt-8"
          >
            <li
              class="cb-gradient-border-btn cb-mr-1 cb-flex cb-h-10 cb-w-10 cb-cursor-pointer !cb-items-center cb-justify-center !cb-rounded-full !cb-border-0 cb-text-center md:cb-mr-1.5 md:cb-h-[62px] md:cb-w-[62px]"
            >
              <nuxt-link
                :href="socialMediaData.facebook"
                target="_blank"
                aria-label="footerLink"
                class="cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                @click="handleIconClick('tap_footer_facebook')"
              >
                <Icon
                  name="fa6-brands:facebook-f"
                  class="fab cb-footer-icon cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-gradient-border-btn cb-mx-1 cb-flex cb-h-10 cb-w-10 cb-cursor-pointer !cb-items-center cb-justify-center !cb-rounded-full !cb-border-0 cb-text-center md:cb-mx-1.5 md:cb-h-[62px] md:cb-w-[62px]"
            >
              <nuxt-link
                :href="socialMediaData.instagram"
                target="_blank"
                aria-label="footerLink"
                class="cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                @click="handleIconClick('tap_footer_instagram')"
              >
                <Icon
                  name="fa6-brands:instagram"
                  class="fab cb-footer-icon cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-gradient-border-btn cb-mx-1 cb-flex cb-h-10 cb-w-10 cb-cursor-pointer !cb-items-center cb-justify-center !cb-rounded-full !cb-border-0 cb-text-center md:cb-mx-1.5 md:cb-h-[62px] md:cb-w-[62px]"
            >
              <nuxt-link
                :href="socialMediaData.twitter"
                target="_blank"
                aria-label="footerLink"
                class="cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                @click="handleIconClick('tap_footer_twitter')"
              >
                <Icon
                  name="fa6-brands:x-twitter"
                  class="fab cb-footer-icon cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-gradient-border-btn cb-mx-1 cb-flex cb-h-10 cb-w-10 cb-cursor-pointer !cb-items-center cb-justify-center !cb-rounded-full !cb-border-0 cb-text-center md:cb-mx-1.5 md:cb-h-[62px] md:cb-w-[62px]"
            >
              <nuxt-link
                :href="socialMediaData.linkedin"
                target="_blank"
                aria-label="footerLink"
                class="cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                @click="handleIconClick('tap_footer_linkedin')"
              >
                <Icon
                  name="fa-brands:linkedin-in"
                  class="fab cb-footer-icon cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                />
              </nuxt-link>
            </li>

            <li
              class="cb-gradient-border-btn cb-mx-1 cb-flex cb-h-10 cb-w-10 cb-cursor-pointer !cb-items-center cb-justify-center !cb-rounded-full !cb-border-0 cb-text-center md:cb-mx-1.5 md:cb-h-[62px] md:cb-w-[62px]"
            >
              <nuxt-link
                :href="socialMediaData.youtube"
                target="_blank"
                aria-label="footerLink"
                class="cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                @click="handleIconClick('tap_footer_youtube')"
              >
                <Icon
                  name="fa-brands:youtube"
                  class="fab cb-footer-icon cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                />
              </nuxt-link>
            </li>
            <li
              class="cb-gradient-border-btn cb-mx-1 cb-flex cb-h-10 cb-w-10 cb-cursor-pointer !cb-items-center cb-justify-center !cb-rounded-full !cb-border-0 cb-text-center md:cb-mx-1.5 md:cb-h-[62px] md:cb-w-[62px]"
            >
              <nuxt-link
                :href="socialMediaData.github"
                target="_blank"
                aria-label="footerLink"
                class="cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                @click="handleIconClick('tap_footer_github')"
              >
                <Icon
                  name="fa-brands:github"
                  class="fab cb-footer-icon cb-h-5 cb-w-5 md:cb-h-8 md:cb-w-8"
                />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="cb-mb-8 cb-text-center cb-text-xs cb-leading-[0.9375rem] cb-text-white/[.87] md:cb-mb-9 md:cb-text-[0.84375rem] md:cb-leading-[1.03125rem] lg:cb-text-[0.9375rem] lg:cb-leading-[1.125rem]"
      >
        <div class="cb-mr-1 cb-inline-block cb-h-3 cb-w-3 md:cb-h-4 md:cb-w-4">
          <Icon
            name="fa-regular:copyright"
            class="cb-mt-0.5 cb-h-full cb-w-full"
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
      class="xl:vinset-x-[27%] cb-fixed cb-inset-x-[5%] cb-bottom-[5%] cb-z-[500] cb-flex cb-w-[90%] cb-items-center cb-justify-between cb-rounded-[10px] cb-bg-gradient-to-r cb-from-[#ff835b] cb-to-[#f2709c] cb-py-5 cb-text-center cb-font-inter-semibold cb-text-white sm:cb-inset-x-[20%] sm:cb-w-7/12 md:cb-text-xl xl:cb-w-5/12"
      role="alert"
    >
      <p class="cb-mx-7 cb-block sm:cb-inline">Subscribe Successfully!</p>
      <Icon
        name="fa6-solid:xmark"
        class="cb-mr-5 cb-h-5 cb-w-5 hover:cb-cursor-pointer"
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

const footerClasses =  ref('')
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

onMounted(() => {
  onDevicePixelChange()
});

const listenOnDevicePixelRatio = () => {
  matchMedia(
    `(resolution: ${window.devicePixelRatio}dppx)`
  ).addEventListener("change", onDevicePixelChange, { once: true });
}

const onDevicePixelChange = () => {
  setFooterPosition()
  listenOnDevicePixelRatio();
}

const setFooterPosition = () => {
  footerClasses.value = 'cb-relative'
  const documentHeight = Math.round(window.devicePixelRatio * document.body.clientHeight)
  if(window.screen.height > documentHeight){
    footerClasses.value = 'cb-absolute cb-bottom-0 cb-w-full'
  }
}

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
