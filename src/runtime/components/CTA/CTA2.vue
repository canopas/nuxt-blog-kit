<template>
  <div
    class="cb-relative -cb-bottom-5 cb-z-[1] cb-overflow-hidden cb-px-0 cb-font-inter-medium sm:-cb-bottom-2 xl:cb-mt-32"
  >
    <div
      class="cb-absolute cb-h-[8%] cb-w-full cb-bg-white sm:cb-h-[6%] md:cb-hidden"
    />

    <img
      v-if="width < 600"
      :src="bg400"
      class="cb-absolute -cb-z-[1] cb-w-full"
      alt="contact-footer"
    />

    <img
      v-else
      :src="bg2400"
      class="xl2:cb-h-[unset] xl2:cb-object-fill cb-absolute cb-left-0 cb-top-0 -cb-z-[1] cb-h-full cb-w-full cb-object-cover"
      alt="contact-footer"
    />

    <div
      class="cb-gradient-text cb-mt-20 cb-text-center cb-font-inter-bold cb-text-3xl sm:cb-mt-14 md:cb-text-5xl md:cb-leading-[3.625rem] lg:cb-text-[4.0625rem] lg:cb-leading-[4.9375rem]"
    >
      Say Hello!
    </div>
    <div class="cb-blog-container cb-text-center">
      <div>
        <form method="POST" @submit="submitForm">
          <div class="vpx-8 cb-py-5 lg:cb-px-20 xl:cb-px-44">
            <div class="cb-grid cb-grid-cols-1 cb-gap-4 md:cb-grid-cols-2">
              <div
                class="cb-relative cb-pt-3 cb-text-left md:cb-col-span-2 md:cb-mb-5 lg:cb-pt-10"
              >
                <input
                  id="username"
                  v-model="name"
                  type="text"
                  class="cb-floating-input cb-peer cb-mx-0 cb-my-2 cb-block cb-w-full cb-appearance-none cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-text-lg cb-text-white cb-placeholder-white/[.6] cb-transition cb-ease-in-out focus:cb-outline-none active:cb-outline-none md:cb-text-xl lg:cb-text-2xl"
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
                  class="cb-absolute cb-left-0 cb-top-4 cb-z-[2] cb-mb-5 cb-origin-[0] -cb-translate-y-4 cb-scale-75 cb-transform cb-text-base cb-leading-[1.1875rem] cb-text-white/[.6] cb-duration-300 peer-placeholder-shown:cb-translate-y-0 peer-placeholder-shown:cb-scale-100 peer-focus:-cb-translate-y-4 peer-focus:cb-scale-75 peer-focus:cb-text-white md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem]"
                >
                  Your name
                </label>

                <span
                  v-if="showNameValidationError"
                  class="cb-error cb-gradient-text"
                >
                  Name is required
                </span>
              </div>

              <div
                class="cb-relative cb-pt-3 cb-text-left md:cb-mb-5 lg:cb-pt-9"
              >
                <input
                  id="email"
                  v-model="email"
                  class="cb-floating-input cb-peer cb-mx-0 cb-my-2 cb-block cb-w-full cb-appearance-none cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-text-lg cb-text-white cb-placeholder-white/[.6] cb-transition cb-ease-in-out focus:cb-outline-none active:cb-outline-none md:cb-text-xl lg:cb-text-2xl"
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
                  class="cb-absolute cb-left-0 cb-top-4 cb-z-[2] cb-mb-5 cb-origin-[0] -cb-translate-y-4 cb-scale-75 cb-transform cb-text-base cb-leading-[1.1875rem] cb-text-white/[.6] cb-duration-300 peer-placeholder-shown:cb-translate-y-0 peer-placeholder-shown:cb-scale-100 peer-focus:-cb-translate-y-4 peer-focus:cb-scale-75 peer-focus:cb-text-white md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem]"
                >
                  Your email
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
                class="cb-relative cb-pt-3 cb-text-left md:cb-mb-5 lg:cb-pt-9"
              >
                <input
                  id="phonenumber"
                  v-model="phoneNumber"
                  type="text"
                  class="cb-floating-input cb-peer cb-mx-0 cb-my-2 cb-block cb-w-full cb-appearance-none cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-text-lg cb-text-white cb-placeholder-white/[.6] cb-transition cb-ease-in-out focus:cb-outline-none active:cb-outline-none md:cb-text-xl lg:cb-text-2xl"
                  name="phonenumber"
                  required
                  autoComplete="given-phonenumber"
                  placeholder=" "
                  @input="
                    showPhoneNumberValidationError =
                      $event.target.value.trim().length === 0
                  "
                  @blur="showValidPhoneNumberError = isValidPhone(phoneNumber)"
                />
                <label
                  htmlFor="phonenumber"
                  class="cb-absolute cb-left-0 cb-top-4 cb-z-[2] cb-mb-5 cb-origin-[0] -cb-translate-y-4 cb-scale-75 cb-transform cb-text-base cb-leading-[1.1875rem] cb-text-white/[.6] cb-duration-300 peer-placeholder-shown:cb-translate-y-0 peer-placeholder-shown:cb-scale-100 peer-focus:-cb-translate-y-4 peer-focus:cb-scale-75 peer-focus:cb-text-white md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem]"
                >
                  Phone number
                </label>

                <span
                  v-if="showPhoneNumberValidationError"
                  class="cb-error cb-gradient-text"
                >
                  Phone number is required
                </span>

                <span
                  v-if="
                    phoneNumber.trim().length != 0 && showValidPhoneNumberError
                  "
                  class="cb-error cb-gradient-text"
                >
                  Please enter valid Phone number
                </span>
              </div>
              <div
                class="cb-relative cb-pt-3 cb-text-left md:cb-col-span-2 md:cb-mb-5 lg:cb-pt-10"
              >
                <textarea
                  id="project"
                  v-model="projectInfo"
                  class="cb-floating-input cb-peer cb-mx-0 cb-my-2 cb-block cb-w-full cb-appearance-none cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-text-lg cb-text-white cb-placeholder-white/[.6] cb-transition cb-ease-in-out focus:cb-outline-none active:cb-outline-none md:cb-text-xl lg:cb-text-2xl"
                  name="project"
                  rows="3"
                  required
                  autoComplete="given-project-info"
                  placeholder=" "
                />
                <label
                  htmlFor="project"
                  class="cb-absolute cb-left-0 cb-top-4 cb-z-[2] cb-mb-5 cb-origin-[0] -cb-translate-y-4 cb-scale-75 cb-transform cb-text-base cb-leading-[1.1875rem] cb-text-white/[.6] cb-duration-300 peer-placeholder-shown:cb-translate-y-0 peer-placeholder-shown:cb-scale-100 peer-focus:-cb-translate-y-4 peer-focus:cb-scale-75 peer-focus:cb-text-white md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem]"
                >
                  Project detail
                </label>

                <span
                  v-if="showProjectInfoValidationError"
                  class="cb-error cb-gradient-text"
                >
                  This field is required
                </span>
              </div>
            </div>

            <div class="cb-mt-10 cb-flex cb-justify-center md:cb-mt-12">
              <img
                v-if="showLoader"
                :src="loaderImage"
                class="cb-h-16 cb-w-16"
                alt="loader-image"
              />

              <div v-else class="relative">
                <div
                  v-if="showErrorMessage"
                  class="cb-absolute -cb-right-16 -cb-top-8 cb-w-[190%] cb-text-center sm:-cb-right-44 sm:-cb-top-[1.875rem] sm:cb-w-max md:-cb-right-60 md:-cb-top-[2.875rem] lg:-cb-right-72 xl:-cb-right-72 2xl:-cb-right-[20.5rem]"
                >
                  <span
                    class="cb-gradient-text cb-flex cb-text-center"
                    :class="
                      errorMessage === 'Invalid Recaptcha score'
                        ? '!cb-text-[1.5rem] sm:!cb-mr-[7rem] md:!cb-mr-[12rem] lg:!cb-mr-[15rem] xl:!cb-mr-[16rem] 2xl:!cb-mr-[17rem]'
                        : ''
                    "
                  >
                    {{ errorMessage }}
                  </span>
                </div>

                <button
                  v-else
                  id="submit"
                  class="cb-relative cb-justify-self-center cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-font-inter-bold cb-text-white hover:cb-shadow-[inset_2px_1000px_1px_#fff]"
                >
                  <span
                    class="cb-text-md cb-hoverable-text cb-inline-block cb-px-[1.8rem] cb-py-[0.6rem] md:cb-py-[0.8rem] lg:cb-text-xl"
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
  </div>
</template>

<script setup>
import { onMounted, ref, toRefs } from "vue";
import axios from "axios";
import { isValidEmail, isValidPhone } from "./../../utils";
import bg400 from "../../assets/images/cta/second-cta-400.svg";
import bg2400 from "../../assets/images/cta/second-cta-2400.svg";
import loaderImage from "../../assets/images/small-loader.svg";

const width = 680;
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
  "contact-api-url": {
    type: String,
    required: true,
  },
});

const { recaptchaKey, contactApiUrl } = toRefs(props);

onMounted(() => {
  const recaptchaScript = document.createElement("script");
  recaptchaScript.setAttribute(
    "src",
    "https://www.google.com/recaptcha/enterprise.js?render=" +
      recaptchaKey.value,
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
            .post(contactApiUrl + "/api/send-contact-mail", formData)
            .then(() => {
              localStorage.setItem(
                "client-name",
                JSON.stringify(formData.name),
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
