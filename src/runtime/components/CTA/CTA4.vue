<template>
  <section>
    <div
      class="cb-mt-5 cb-bg-[#F8F8F8] cb-font-inter-regular lg:cb-mt-[150px] xl:cb-mt-[170px] 2xl:cb-mt-[250px] 3xl:cb-mt-[280px]"
    >
      <div
        class="cb-blog-container cb-flex cb-flex-col md:cb-flex-row 3xl:cb-w-[82.5rem]"
      >
        <div class="cb-order-2 md:cb-relative md:cb-order-first md:cb-w-1/2">
          <img
            :src="cta2400"
            alt="fourth-cta-image"
            class="cb-mx-[7.5%] -cb-mb-6 cb-h-[85%] cb-w-[85%] cb-object-contain sm:cb-mx-[10%] sm:-cb-mb-[0.9rem] sm:cb-h-4/5 sm:cb-w-4/5 md:cb-absolute md:-cb-top-[2.6rem] md:cb-right-10 md:cb-mx-0 md:cb-h-fit md:cb-w-fit lg:-cb-top-[2.9rem] xl:-cb-top-[7.6rem] xl:cb-right-6 2xl:-cb-top-[11.5rem] 2xl:cb-right-10 3xl:cb-right-14"
            loading="lazy"
          />
        </div>

        <div
          class="cb-flex cb-py-2.5 md:cb-w-1/2 lg:cb-py-10 2xl:cb-py-[50px] 2xl:cb-pl-[8.5rem]"
        >
          <div
            class="cb-m-auto cb-w-4/5 cb-py-10 sm:cb-w-3/5 md:cb-m-5 md:cb-ml-auto md:cb-w-full md:cb-py-0 xl:cb-m-auto"
          >
            <p
              class="cb-font-inter-bold cb-text-[1.5rem] cb-leading-[1.813rem] cb-text-black-core/[0.87] md:cb-text-[1.7rem] md:cb-leading-[1.9rem] lg:cb-text-[2.188rem] lg:cb-leading-[2.625rem] xl:cb-text-[3.125rem] xl:cb-leading-[3.813rem]"
            >
              Whether you need...
            </p>
            <ul
              class="cb-pl-0 cb-pt-6 cb-font-inter-semibold cb-text-base cb-leading-5 cb-text-black-core/[0.6] md:cb-pt-4 md:cb-text-[1.05rem] md:cb-leading-[1.34rem] lg:cb-pt-6 lg:cb-text-[1.188rem] lg:cb-leading-6 xl:cb-text-[1.375rem] xl:cb-leading-[1.8125rem]"
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
              class="cb-pt-6 cb-font-inter-regular cb-text-sm cb-leading-[1.125rem] cb-text-black-core/[0.6] md:cb-pt-4 md:cb-text-[0.9rem] md:cb-leading-[1.15rem] lg:cb-pt-6 lg:cb-text-lg lg:cb-leading-[1.375rem] xl:cb-text-[1.375rem] xl:cb-leading-[1.813rem]"
            >
              Bring us your toughest challenge and we&apos;ll show you the path
              to a sleek solution.
            </div>
            <nuxt-link :to="'/contact'">
              <div
                class="cb-mx-auto cb-mt-5 cb-flex cb-w-max cb-items-center cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-text-center cb-font-inter-semibold cb-text-base cb-font-normal cb-font-semibold cb-leading-[1.1875rem] !cb-tracking-[0] cb-text-white hover:cb-shadow-[inset_2px_1000px_1px_#fff] active:cb-scale-[0.98] md:cb-mx-0 md:cb-mt-4 md:cb-text-[1.09375rem] md:cb-leading-[1.3125rem] lg:cb-mt-5 xl:cb-text-[1.1875rem] xl:cb-leading-[1.4375rem]"
              >
                <span
                  class="cb-hoverable-text cb-inline-block cb-px-[1.2rem] cb-py-[0.7rem]"
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
