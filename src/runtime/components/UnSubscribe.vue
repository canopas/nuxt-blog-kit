<template>
  <div>
    <div
      class="cb-h-fit-content cb-blog-container cb-my-16 cb-min-h-[50vh] cb-w-[90%] cb-rounded-[12px] cb-bg-white cb-p-6 cb-shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:cb-w-[70%] lg:cb-w-1/2 2xl:cb-w-2/5"
    >
      <div class="cb-text-center">
        <h1 class="cb-mb-3 cb-text-3xl">Unsubscribe</h1>
        <hr />
        <p class="cb-my-3">
          {{ email }}
        </p>
        <div class="cb-mx-[24%] cb-h-auto cb-w-1/2">
          <img
            width="100"
            height="100"
            class="cb-inset-0 cb-h-full cb-w-full cb-rounded-full cb-object-cover"
            :src="emailTemplate"
            alt="email"
          />
        </div>

        <p class="cb-mb-4 cb-text-base cb-text-neutral-600">
          are you sure you wish to unsubscribe from {{ companyTitle }} blog?
        </p>
        <div class="cb-flex cb-justify-center cb-space-x-3">
          <button
            class="cb-w-auto cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-text-[1.1rem] cb-font-semibold cb-text-white hover:cb-cursor-pointer hover:cb-shadow-[inset_2px_1000px_1px_#fff]"
          >
            <div
              class="cb-hoverable-text cb-px-[1.35rem] cb-py-[0.3rem] cb-text-center cb-align-middle cb-capitalize cb-tracking-wider"
              @click="userUnsubscribe"
            >
              yes
            </div>
          </button>
          <nuxt-link :href="'/resources'" @click="handleLogout">
            <button
              class="cb-w-auto cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-text-[1.1rem] cb-font-semibold cb-text-white hover:cb-cursor-pointer hover:cb-shadow-[inset_2px_1000px_1px_#fff]"
            >
              <div
                class="cb-hoverable-text cb-px-[1.35rem] cb-py-[0.3rem] cb-text-center cb-align-middle cb-capitalize cb-tracking-wider"
              >
                no
              </div>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      v-if="alerts"
      class="cb-absolute cb-inset-x-[5%] cb-bottom-10 cb-z-10 cb-flex cb-w-[90%] cb-items-center cb-justify-between cb-rounded-[10px] cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-py-5 cb-text-white sm:cb-inset-x-[20%] sm:cb-w-7/12 md:cb-inset-x-[25%] md:cb-w-6/12 xl:cb-inset-x-[30%] xl:cb-w-5/12"
    >
      <p class="cb-mx-7 cb-font-medium cb-tracking-wider md:cb-text-xl">
        Unsubscribe Successfully!
      </p>
      <Icon
        name="fa6-solid:xmark"
        class="cb-mr-5 cb-h-5 cb-w-5 hover:cb-cursor-pointer"
        @click="showAlert = false"
      />
    </div>
  </div>
</template>

<script setup>
import emailTemplate from "../assets/images/emailTemplate.webp";
import axios from "axios";
import { ref, onMounted, toRefs } from "vue";
const props = defineProps({
  companyTitle: {
    type: String,
    required: true,
  },
  apiUrl: {
    type: String,
    required: true,
  },
});
const { companyTitle, apiUrl } = toRefs(props);
const showAlert = ref(false);
const email = ref("");

const userUnsubscribe = async (e) => {
  if (e.target.innerHTML == "yes") {
    if (email.value) {
      await axios
        .put(`${apiUrl}/v1/user/unSubscribeUser?email=${email.value}`)
        .then(() => {
          showAlert.value = false;
        });
    }
  }
};

const handleLogout = () => {
  localStorage.removeItem("userEmail");
};

onMounted(() => {
  const paramEmail = new URLSearchParams(window.location.search).get("email");

  if (
    paramEmail &&
    (localStorage.getItem("userEmail") === null ||
      localStorage.getItem("userEmail") != paramEmail)
  ) {
    localStorage.setItem("userEmail", paramEmail);
  }

  email.value = localStorage.getItem("userEmail");

  setTimeout(() => {
    window.history.replaceState(null, null, window.location.pathname);
  }, 100);
});
</script>
