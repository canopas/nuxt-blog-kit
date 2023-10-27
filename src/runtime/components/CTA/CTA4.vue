<template>
  <section>
    <div
      class="cb-mt-5 lg:cb-mt-[150px] xl:cb-mt-[170px] 2xl:cb-mt-[250px] 3xl:cb-mt-[280px] cb-bg-[#F8F8F8] cb-font-inter-regular"
    >
      <div class="cb-blog-container cb-flex cb-flex-col md:cb-flex-row 3xl:cb-w-[82.5rem]">
        <div class="md:cb-relative cb-order-2 md:cb-order-first md:cb-w-1/2">
          <img
            :src="cta2400"
            alt="fourth-cta-image"
            class="cb-w-[85%] cb-h-[85%] sm:cb-w-4/5 sm:cb-h-4/5 md:cb-w-fit md:cb-h-fit cb-object-contain cb-mx-[7.5%] sm:cb-mx-[10%] md:cb-mx-0 -cb-mb-6 sm:-cb-mb-[0.9rem] md:cb-absolute md:cb-right-10 md:-cb-top-[2.6rem] lg:-cb-top-[2.9rem] xl:cb-right-6 xl:-cb-top-[7.6rem] 2xl:cb-right-10 2xl:-cb-top-[11.5rem] 3xl:cb-right-14"
            loading="lazy"
          />
        </div>

        <div
          class="cb-flex md:cb-w-1/2 cb-py-2.5 lg:cb-py-10 2xl:cb-py-[50px] 2xl:cb-pl-[8.5rem]"
        >
          <div
            class="cb-m-auto md:cb-m-5 md:cb-ml-auto xl:cb-m-auto cb-w-4/5 sm:cb-w-3/5 md:cb-w-full cb-py-10 md:cb-py-0"
          >
            <p
              class="cb-text-black-core/[0.87] cb-text-[1.5rem] cb-leading-[1.813rem] md:cb-text-[1.7rem] md:cb-leading-[1.9rem] lg:cb-text-[2.188rem] lg:cb-leading-[2.625rem] xl:cb-text-[3.125rem] xl:cb-leading-[3.813rem] cb-font-inter-bold"
            >
              Whether you need...
            </p>
            <ul
              class="cb-pl-0 cb-pt-6 md:cb-pt-4 lg:cb-pt-6 cb-text-black-core/[0.6] cb-text-base cb-leading-5 md:cb-text-[1.05rem] md:cb-leading-[1.34rem] lg:cb-text-[1.188rem] lg:cb-leading-6 xl:cb-text-[1.375rem] xl:cb-leading-[1.8125rem] cb-font-inter-semibold"
            >
              <li
                v-for="(reason, index) in reasons"
                :key="index"
                class="cb-flex"
              >
                <span class="cb-pr-1">*</span>
                <div class="sm:cb-w-[90%]">
                  {{ reason }}
                </div>
              </li>
            </ul>
            <div
              class="cb-pt-6 md:cb-pt-4 lg:cb-pt-6 cb-text-black-core/[0.6] cb-font-inter-regular cb-text-sm cb-leading-[1.125rem] md:cb-text-[0.9rem] md:cb-leading-[1.15rem] lg:cb-text-lg lg:cb-leading-[1.375rem] xl:cb-text-[1.375rem] xl:cb-leading-[1.813rem]"
            >
              Bring us your toughest challenge and we&apos;ll show you the path
              to a sleek solution.
            </div>
            <nuxt-link :to="'/contact'">
              <div
                class="flex items-center mt-5 md:mt-4 lg:mt-5 mx-auto md:mx-0 w-max rounded-full border border-solid border-transparent bg-gradient-to-r from-[#f2709c] to-[#ff9472] hover:shadow-[inset_2px_1000px_1px_#fff] text-center font-normal text-base leading-[1.1875rem] md:text-[1.09375rem] md:leading-[1.3125rem] xl:text-[1.1875rem] xl:leading-[1.4375rem] font-inter-semibold font-semibold !tracking-[0] text-white active:scale-[0.98]"
              >
                <span
                  class="py-[0.7rem] px-[1.2rem] hoverable-text inline-block"
                >
                  Talk to our experts
                </span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cta2400 from "../../assets/images/cta/fourth-cta-2400w.webp";

const reasons = [
  "High-performing mobile apps",
  "Bulletproof cloud solutions",
  "Custom solutions for your business.",
];
</script>
