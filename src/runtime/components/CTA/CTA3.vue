<template>
  <div>
    <hr class="md:cb-hidden" />
    <div class="cb-relative cb-top-5 md:cb-top-0.5 cb-w-full cb-h-auto">
      <div
        class="cb-blog-container cb-flex cb-flex-col md:cb-flex-row md:cb-space-x-6 lg:cb-space-x-0 md:-cb-mt-[60px] xl:cb-px-20 3xl:cb-px-32"
      >
        <div class="cb-mt-10 md:cb-mt-40 cb-basis-7/12 lg:cb-basis-3/5">
          <div
            class="cb-flex cb-flex-col cb-items-center md:cb-items-stretch cb-space-y-4 md:cb-w-[16.2rem] lg:cb-w-80 2xl:cb-w-[22.23rem]"
          >
            <div
              class="cb-text-[1.2rem] lg:cb-text-2xl 2xl:cb-text-[1.75rem] cb-leading-7 2xl:cb-leading-[2.3rem] cb-font-poppins-regular"
            >
              Talk to an expert
            </div>
            <div
              class="md:cb-grid cb-grid-rows-2 cb-justify-items-stretch cb-text-[2.3rem] sm:cb-text-5xl lg:cb-text-[3.4rem] lg:cb-text-[3.7rem] 2xl:cb-text-[4.125rem] cb-font-poppins-medium cb-uppercase"
            >
              <span class="cb-mr-3 md:cb-mr-0">get in</span>
              <span class="md:cb-justify-self-end">touch</span>
            </div>
            <div
              class="cb-text-center md:cb-text-left cb-text-[0.9rem] lg:cb-text-base 2xl:cb-text-xl cb-leading-5 cb-font-poppins-regular"
            >
              Our team is happy to answer your questions. Fill out the form and
              we’ll get back to you as soon as possible
            </div>
          </div>
        </div>
        <div
          class="cb-relative cb-top-14 lg:cb-top-20 xl:cb-top-[5.5rem] cb-h-fit cb-w-full cb-bg-white cb-cta-box-shadow cb-text-center cb-font-poppins-regular"
        >
          <form method="POST" @submit="submitForm">
            <div
              class="cb-pt-[3rem] md:cb-pt-20 lg:cb-pt-24 cb-pb-10 lg:cb-pb-14 cb-px-8"
            >
              <div class="cb-grid cb-grid-cols-1 md:cb-grid-cols-2 cb-gap-4">
                <div
                  class="cb-relative md:cb-col-span-2 md:cb-mb-5 cb-pt-3 lg:cb-pt-10 cb-text-left"
                >
                  <input
                    id="username"
                    v-model="name"
                    type="text"
                    class="cb-block cb-peer cb-mb-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-black-900 cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-md md:cb-text-lg lg:cb-text-xl cb-text-black-900 cb-placeholder-white/[.6] focus:cb-outline-none active:cb-outline-none"
                    name="username"
                    required
                    autoComplete="given-username"
                    placeholder=" "
                    @input="
                      showNameValidationError =
                        $event.target.value.trim().length === 0
                    "
                  />
                  <label
                    htmlFor="username"
                    class="cb-absolute cb-top-1 lg:cb-top-[1.6rem] cb-left-0 cb-mb-5 cb-z-[2] cb-text-black-900/[.8] cb-text-[1.07rem] cb-leading-[1.1875rem] lg:cb-text-[1.35rem] md:cb-leading-[1.6875rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-black-900 peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
                  >
                    Name*
                  </label>

                  <span
                    v-if="showNameValidationError"
                    class="cb-error cb-gradient-text"
                  >
                    Name is required
                  </span>
                </div>

                <div
                  class="cb-relative md:cb-mb-5 cb-pt-3 lg:cb-pt-9 cb-text-left"
                >
                  <input
                    id="email"
                    v-model="email"
                    class="cb-block cb-peer cb-mb-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-black-900 cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-md md:cb-text-lg lg:cb-text-xl cb-text-black-900 cb-placeholder-white/[.6] focus:cb-outline-none active:cb-outline-none"
                    type="text"
                    name="email"
                    required
                    autoComplete="given-email"
                    placeholder=" "
                    @input="
                      showEmailValidationError =
                        $event.target.value.trim().length === 0
                    "
                    @blur="showValidEmailError = isValidEmail(email)"
                  />
                  <label
                    htmlFor="email"
                    class="cb-absolute cb-top-1 lg:cb-top-[1.6rem] cb-left-0 cb-mb-5 cb-z-[2] cb-text-black-900/[.8] cb-text-[1.07rem] cb-leading-[1.1875rem] lg:cb-text-[1.35rem] md:cb-leading-[1.6875rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-black-900 peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
                  >
                    Email*
                  </label>

                  <span
                    v-if="showEmailValidationError"
                    class="cb-error cb-gradient-text"
                  >
                    Email is required
                  </span>

                  <span
                    v-if="email.trim().length != 0 && showValidEmailError"
                    class="cb-error cb-gradient-text"
                  >
                    Please enter valid email address
                  </span>
                </div>
                <div
                  class="cb-relative md:cb-mb-5 cb-pt-3 lg:cb-pt-9 cb-text-left"
                >
                  <input
                    id="phonenumber"
                    v-model="phoneNumber"
                    type="text"
                    class="cb-block cb-peer cb-mb-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-black-900 cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-md md:cb-text-lg lg:cb-text-xl cb-text-black-900 cb-placeholder-white/[.6] focus:cb-outline-none active:cb-outline-none"
                    name="phonenumber"
                    required
                    autoComplete="given-phonenumber"
                    placeholder=" "
                    @input="
                      showPhoneNumberValidationError =
                        $event.target.value.trim().length === 0
                    "
                    @blur="
                      showValidPhoneNumberError = isValidPhone(phoneNumber)
                    "
                  />
                  <label
                    htmlFor="phonenumber"
                    class="cb-absolute cb-top-1 lg:cb-top-[1.6rem] cb-left-0 cb-mb-5 cb-z-[2] cb-text-black-900/[.8] cb-text-[1.07rem] cb-leading-[1.1875rem] lg:cb-text-[1.35rem] md:cb-leading-[1.6875rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-black-900 peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
                  >
                    Phone number*
                  </label>

                  <span
                    v-if="showPhoneNumberValidationError"
                    class="cb-error cb-gradient-text"
                  >
                    Phone number is required
                  </span>

                  <span
                    v-if="
                      phoneNumber.trim().length != 0 &&
                      showValidPhoneNumberError
                    "
                    class="cb-error cb-gradient-text"
                  >
                    Please enter valid Phone number
                  </span>
                </div>
                <div
                  class="cb-relative md:cb-col-span-2 md:cb-mb-5 cb-pt-3 lg:cb-pt-10 cb-text-left"
                >
                  <textarea
                    id="project"
                    v-model="projectInfo"
                    class="cb-block cb-peer cb-mb-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-black-900 cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-md md:cb-text-lg lg:cb-text-xl cb-text-black-900 cb-placeholder-white/[.6] focus:cb-outline-none active:cb-outline-none"
                    name="project"
                    rows="3"
                    required
                    autoComplete="given-project-info"
                    placeholder=" "
                  />
                  <label
                    htmlFor="project"
                    class="cb-absolute cb-top-1 lg:cb-top-[1.6rem] cb-left-0 cb-mb-5 cb-z-[2] cb-text-black-900/[.8] cb-text-[1.07rem] cb-leading-[1.1875rem] lg:cb-text-[1.35rem] md:cb-leading-[1.6875rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-black-900 peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
                  >
                    Project detail*
                  </label>

                  <span
                    v-if="showProjectInfoValidationError"
                    class="cb-error cb-gradient-text"
                  >
                    This field is required
                  </span>
                </div>
              </div>

              <div class="cb-flex cb-mt-6 lg:cb-mt-10">
                <img
                  v-if="showLoader"
                  :src="loaderImage"
                  class="cb-w-16 cb-h-16"
                  alt="loader-image"
                />

                <div v-else class="relative">
                  <div
                    v-if="showErrorMessage"
                    class="cb-absolute -cb-top-8 sm:-cb-top-[1.875rem] md:-cb-top-[2.875rem] cb-text-center -cb-right-16 sm:-vright-44 md:-cb-right-60 lg:-cb-right-72 xl:-cb-right-72 2xl:-cb-right-[20.5rem] cb-w-[190%] sm:cb-w-max"
                  >
                    <span
                      class="cb-flex cb-text-center cb-gradient-text"
                      :class="
                        errorMessage === 'Invalid Recaptcha score'
                          ? 'sm:!cb-mr-[7rem] md:!cb-mr-[12rem] lg:!cb-mr-[15rem] xl:!cb-mr-[16rem] 2xl:!cb-mr-[17rem] !cb-text-2xl'
                          : ''
                      "
                    >
                      {{ errorMessage }}
                    </span>
                  </div>

                  <button
                    id="submit"
                    class="cb-border-2 cb-border-solid cb-border-transparent cb-bg-black-900 cb-text-white hover:cb-border-black-900 hover:cb-bg-white hover:cb-text-black-900 cb-font-inter-bold"
                  >
                    <span
                      class="cb-py-[0.6rem] cb-px-4 lg:cb-px-[1.8rem] lg:cb-py-[0.8rem] cb-text-base lg:cb-text-[1.1875rem] cb-inline-block"
                    >
                      Get Free Consultation
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="cb-bg-black-900 cb-w-full cb-h-[84px] md:cb-h-[70px] lg:cb-h-[83px] xl:cb-h-[94px]"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, toRefs } from "vue";
import axios from "axios";
import { isValidEmail, isValidPhone } from "./../../utils";
import config from "./../../config";
import loaderImage from "../../assets/images/small-loader.svg";

const name = ref("");
const email = ref("");
const projectInfo = ref("");
const phoneNumber = ref("");
const showNameValidationError = ref(false);
const showEmailValidationError = ref(false);
const showValidEmailError = ref(false);
const showProjectInfoValidationError = ref(false);
const showPhoneNumberValidationError = ref(false);
const showValidPhoneNumberError = ref(false);
const errorMessage = ref("Something went wrong on our side");
const showLoader = ref(false);
const showErrorMessage = ref(false);

const props = defineProps({
  "recaptcha-key": {
    type: String,
    required: true,
  },
});

const { recaptchaKey } = toRefs(props);

onMounted(() => {
  const recaptchaScript = document.createElement("script");
  recaptchaScript.setAttribute(
    "src",
    "https://www.google.com/recaptcha/enterprise.js?render=" +
      recaptchaKey.value
  );
  recaptchaScript.setAttribute("async", "true");
  recaptchaScript.setAttribute("defer", "true");
  document.head.appendChild(recaptchaScript);
});

function validateForm() {
  showNameValidationError.value = name.value.trim().length === 0;
  showEmailValidationError.value = email.value.trim().length === 0;
  showProjectInfoValidationError.value = projectInfo.value.trim().length === 0;
  showPhoneNumberValidationError.value = phoneNumber.value.trim().length === 0;

  return (
    showNameValidationError.value ||
    showEmailValidationError.value ||
    showValidEmailError.value ||
    showProjectInfoValidationError.value ||
    showPhoneNumberValidationError.value ||
    showValidPhoneNumberError.value
  );
}

const submitForm = (event) => {
  event.preventDefault();
  if (!validateForm()) {
    showLoader.value = true;
  }

  grecaptcha.enterprise.ready(() => {
    grecaptcha.enterprise
      .execute(recaptchaKey.value, {
        action: "verify",
      })
      .then((token) => {
        if (!validateForm()) {
          const formData = {
            name: name.value,
            email: email.value,
            project_info: projectInfo.value
              ? projectInfo.value.replace(/\./g, ".\n")
              : "NA",
            phone_number: phoneNumber.value,
            token,
          };
          axios
            .post(config.API_BASE + "/api/send-contact-mail", formData)
            .then(() => {
              localStorage.setItem(
                "client-name",
                JSON.stringify(formData.name)
              );
              window.location.href = "/thank-you";
              resetForm();
            })
            .catch((err) => {
              if (err.response.status === 401) {
                errorMessage.value = "Invalid recaptcha score";
                showErrorMessage.value = true;
                setTimeout(() => {
                  showErrorMessage.value = false;
                }, 3000);
              }
            })
            .finally(() => {
              showLoader.value = false;
            });
        }
      })
      .catch(() => {
        errorMessage.value = "Invalid recaptcha score";
        showErrorMessage.value = true;
        setTimeout(() => {
          showErrorMessage.value = false;
        }, 3000);
      });
  });
};

const resetForm = () => {
  name.value = "";
  email.value = "";
  projectInfo.value = "";
  phoneNumber.value = "";
};
</script>

