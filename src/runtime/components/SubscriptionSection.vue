<template>
  <div
    class="cb-w-full cb-py-0.5 cb-font-inter-regular cb-text-black-core/[0.75]"
  >
    <div>
      <hr class="cb-w-full cb-bg-gray-200" />
      <div class="!cb-mt-10 cb-flex cb-flex-col sm:cb-col-span-2">
        <div
          class="!cb-font-inter-semibold !cb-text-[1.6875rem] !cb-font-semibold !cb-tracking-normal !cb-text-black-core/[0.87] cb-no-underline"
        >
          Code, Build, Repeat.
        </div>
        <div class="cb-text-base cb-leading-normal cb-tracking-normal">
          Stay updated with the latest trends and tutorials in Android, iOS, and
          web development.
        </div>
      </div>
      <form
        class="cb-m-auto cb-mt-6 cb-flex cb-items-center cb-space-x-2 xl:cb-mt-8"
        @submit="handleSubscription"
      >
        <div class="cb-w-56 md:cb-w-72">
          <input
            id="subscribeEmail"
            v-model="email"
            class="cb-floating-input cb-text-black cb-w-full cb-rounded-xl cb-border cb-py-3 cb-pl-3 cb-text-base focus:cb-outline-none"
            placeholder="Enter Your E-mail"
            type="email"
            required
            @blur="showValidEmailError = isValidEmail(email)"
          />
        </div>

        <button
          class="cb-rounded-xl cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-text-white hover:cb-shadow-[inset_2px_1000px_1px_#fff]"
        >
          <div
            class="cb-hoverable-text sub-h1-semibold cb-inline-block cb-px-2.5 cb-py-[0.63rem]"
          >
            Subscribe
          </div>
        </button>
      </form>
      <span
        v-if="email.trim().length != 0 && showValidEmailError"
        class="cb-error cb-gradient-text cb-text-xs sm:cb-text-base"
      >
        Please enter valid email address
      </span>
    </div>
  </div>
  <div
    v-if="showAlert"
    class="cb-fixed cb-bottom-[5%] cb-z-[500] cb-mx-auto cb-flex cb-w-[90%] cb-items-center cb-justify-between cb-rounded-[10px] cb-bg-gradient-to-r cb-from-[#ff835b] cb-to-[#f2709c] cb-py-5 cb-text-center cb-font-inter-semibold cb-text-white sm:cb-inset-x-[20%] sm:cb-w-7/12 md:cb-text-xl xl:cb-w-5/12"
    role="alert"
  >
    <p class="cb-mx-7 !cb-mt-0">Subscribe Successfully!</p>
    <Icon
      name="fa6-solid:xmark"
      class="cb-mr-5 cb-h-5 cb-w-5 hover:cb-cursor-pointer"
      @click="showAlert = false"
    />
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import { isValidEmail } from "./../utils";
import axios from "axios";

const email = ref("");
const showAlert = ref(false);
const showValidEmailError = ref(false);

const props = defineProps({
  "api-url": {
    type: String,
    required: true,
  },
});

const { apiUrl } = toRefs(props);

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
