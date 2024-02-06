<template>
  <div
    class="cb-relative -cb-bottom-5 sm:-cb-bottom-2 cb-overflow-hidden xl:cb-mt-32 cb-px-0 cb-font-inter-medium cb-z-[1]"
  >
    <div
      class="cb-absolute cb-w-full cb-h-[8%] sm:cb-h-[6%] cb-bg-white md:cb-hidden"
    />

    <img
      v-if="width < 600"
      :src="bg400"
      class="cb-absolute cb-w-full -cb-z-[1]"
      alt="contact-footer"
    />

    <img
      v-else
      :src="bg2400"
      class="cb-absolute cb-top-0 cb-left-0 cb-w-full cb-h-full xl2:cb-h-[unset] -cb-z-[1] cb-object-cover xl2:cb-object-fill"
      alt="contact-footer"
    />

    <div
      class="cb-mt-20 sm:cb-mt-14 cb-text-center cb-gradient-text cb-text-3xl md:cb-text-5xl md:cb-leading-[3.625rem] lg:cb-text-[4.0625rem] lg:cb-leading-[4.9375rem] cb-font-inter-bold"
    >
      Say Hello!
    </div>
    <div class="cb-blog-container cb-text-center">
      <div>
        <form method="POST" @submit="submitForm">
          <div class="cb-py-5 vpx-8 lg:cb-px-20 xl:cb-px-44">
            <div class="cb-grid cb-grid-cols-1 md:cb-grid-cols-2 cb-gap-4">
              <div
                class="cb-relative md:cb-col-span-2 md:cb-mb-5 cb-pt-3 lg:cb-pt-10 cb-text-left"
              >
                <input
                  id="username"
                  v-model="name"
                  type="text"
                  class="cb-block cb-peer cb-my-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-lg md:cb-text-xl lg:cb-text-2xl cb-text-white cb-placeholder-white/[.6] cb-floating-input focus:cb-outline-none active:cb-outline-none"
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
                  class="cb-absolute cb-top-4 cb-left-0 cb-mb-5 cb-z-[2] cb-text-white/[.6] cb-text-base cb-leading-[1.1875rem] md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-white peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
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
                class="cb-relative md:cb-mb-5 cb-pt-3 lg:cb-pt-9 cb-text-left"
              >
                <input
                  id="email"
                  v-model="email"
                  class="cb-block cb-peer cb-my-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-lg md:cb-text-xl lg:cb-text-2xl cb-text-white cb-placeholder-white/[.6] cb-floating-input focus:cb-outline-none active:cb-outline-none"
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
                  class="cb-absolute cb-top-4 cb-left-0 cb-mb-5 cb-z-[2] cb-text-white/[.6] cb-text-base cb-leading-[1.1875rem] md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-white peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
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
                class="cb-relative md:cb-mb-5 cb-pt-3 lg:cb-pt-9 cb-text-left"
              >
                <input
                  id="phonenumber"
                  v-model="phoneNumber"
                  type="text"
                  class="cb-block cb-peer cb-my-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-lg md:cb-text-xl lg:cb-text-2xl cb-text-white cb-placeholder-white/[.6] cb-floating-input focus:cb-outline-none active:cb-outline-none"
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
                  class="cb-absolute cb-top-4 cb-left-0 cb-mb-5 cb-z-[2] cb-text-white/[.6] cb-text-base cb-leading-[1.1875rem] md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-white peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
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
                class="cb-relative md:cb-col-span-2 md:cb-mb-5 cb-pt-3 lg:cb-pt-10 cb-text-left"
              >
                <textarea
                  id="project"
                  v-model="projectInfo"
                  class="cb-block cb-peer cb-my-2 cb-mx-0 cb-w-full cb-rounded-none cb-border-b cb-border-white/[.6] cb-bg-transparent cb-px-0 cb-transition cb-ease-in-out cb-appearance-none cb-text-lg md:cb-text-xl lg:cb-text-2xl cb-text-white cb-placeholder-white/[.6] cb-floating-input focus:cb-outline-none active:cb-outline-none"
                  name="project"
                  rows="3"
                  required
                  autoComplete="given-project-info"
                  placeholder=" "
                />
                <label
                  htmlFor="project"
                  class="cb-absolute cb-top-4 cb-left-0 cb-mb-5 cb-z-[2] cb-text-white/[.6] cb-text-base cb-leading-[1.1875rem] md:cb-text-[1.375rem] md:cb-leading-[1.6875rem] lg:cb-text-[1.75rem] lg:cb-leading-[2.125rem] cb-transform -cb-translate-y-4 cb-origin-[0] cb-scale-75 cb-duration-300 peer-focus:cb-text-white peer-placeholder-shown:cb-scale-100 peer-placeholder-shown:cb-translate-y-0 peer-focus:cb-scale-75 peer-focus:-cb-translate-y-4"
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

            <div class="cb-flex cb-justify-center cb-mt-10 md:cb-mt-12">
              <img
                v-if="showLoader"
                :src="loaderImage"
                class="cb-w-16 cb-h-16"
                alt="loader-image"
              />

              <div v-else class="relative">
                <div
                  v-if="showErrorMessage"
                  class="cb-absolute -cb-top-8 sm:-cb-top-[1.875rem] md:-cb-top-[2.875rem] cb-text-center -cb-right-16 sm:-cb-right-44 md:-cb-right-60 lg:-cb-right-72 xl:-cb-right-72 2xl:-cb-right-[20.5rem] cb-w-[190%] sm:cb-w-max"
                >
                  <span
                    class="cb-flex cb-text-center cb-gradient-text"
                    :class="
                      errorMessage === 'Invalid Recaptcha score'
                        ? 'sm:!cb-mr-[7rem] md:!cb-mr-[12rem] lg:!cb-mr-[15rem] xl:!cb-mr-[16rem] 2xl:!cb-mr-[17rem] !cb-text-[1.5rem]'
                        : ''
                    "
                  >
                    {{ errorMessage }}
                  </span>
                </div>

                <button
                  v-else
                  id="submit"
                  class="cb-relative cb-justify-self-center cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] hover:cb-shadow-[inset_2px_1000px_1px_#fff] cb-text-white cb-font-inter-bold"
                >
                  <span
                    class="cb-py-[0.6rem] cb-px-[1.8rem] md:cb-py-[0.8rem] cb-text-md lg:cb-text-xl cb-hoverable-text cb-inline-block"
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
  recaptchaKey: {
    type: String,
    required: true,
  },
  contactApiUrl: {
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
