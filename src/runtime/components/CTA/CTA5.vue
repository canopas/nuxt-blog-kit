<template>
  <section>
    <div
      class="cb-relative -cb-bottom-4 md:-cb-bottom-1 cb-bg-black-core/[0.85] cb-py-[50px]"
    >
      <div
        class="cb-absolute cb-right-0 cb-top-1 cb-hidden cb-h-[140px] cb-border-l-[20px] cb-border-[#F2709C] md:cb-block lg:cb-top-9 xl:cb-h-[185px] 2xl:cb-top-[4.25rem]"
      />
      <div
        class="cb-absolute cb-bottom-[6.25rem] cb-left-0 cb-hidden cb-h-[115px] cb-border-l-[20px] cb-border-[#FF9472] md:cb-block"
      />

      <div
        class="cb-blog-container cb-flex cb-flex-col cb-items-center md:cb-flex-row md:cb-flex-row-reverse 3xl:cb-px-20"
      >
        <div
          class="cb-flex cb-flex-col md:cb-relative md:cb-items-end lg:cb-basis-[55.49%]"
        >
          <p
            class="cb-text-center cb-font-inter-bold text-[2.625rem] cb-leading-[3.125rem] cb-text-white md:cb-text-right md:cb-text-[3.275rem] md:cb-leading-[3.875rem] xl:cb-text-[5.625rem] xl:cb-leading-[6.125rem]"
          >
            <span class="cb-bg-gradient-L cb-bg-clip-text cb-text-transparent"
              >L</span
            >et&apos;s
            <span
              class="cb-ml-3 md:cb-ml-5 cb-mr-[-0.2rem] cb-bg-gradient-U cb-bg-clip-text cb-text-transparent"
              >W</span
            >ork
            <br class="sm:cb-hidden md:cb-inline-block" />
            <span
              class="cb-ml-3 md:cb-ml-0 cb-mr-[-0.2rem] cb-bg-gradient-T cb-bg-clip-text cb-text-transparent"
              >T</span
            >ogether
          </p>
          <p
            class="sm:cb-w-[385px] cb-mt-6 cb-text-center cb-font-inter-regular cb-text-base cb-text-white md:cb-text-right md:cb-text-[1.4rem] md:cb-leading-8 md:cb-text-white/[0.75] xl:cb-w-[82%] xl:cb-text-[1.75rem] xl:cb-leading-[2.625rem] 2xl:cb-w-[68%]"
          >
            Not sure where to start? We also offer code and architecture
            reviews, strategic planning, and more.
          </p>
          <nuxt-link :to="'/contact'" class="mt-10">
            <div
              class="cb-flex cb-items-center cb-mx-auto md:cb-mx-0 cb-w-max cb-rounded-full cb-border cb-border-solid cb-border-transparent cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] hover:cb-shadow-[inset_2px_1000px_1px_#fff] cb-text-center cb-font-normal cb-text-[1.09375rem] cb-leading-[1.3125rem] xl:cb-text-[1.188rem] xl:cb-leading-[1.188rem] cb-font-inter-semibold !cb-tracking-[0] cb-text-white active:cb-scale-[0.98]"
            >
              <span
                class="cb-py-[0.9rem] md:cb-py-4 cb-px-[1.2rem] md:cb-px-[1.3rem] cb-hoverable-text cb-inline-block"
              >
                Get Free Consultation
              </span>
            </div>
          </nuxt-link>
        </div>
        <div class="cb-relative lg:cb-basis-[44.51%] cb-mt-8 md:cb-mt-0">
          <img
            :src="cta800"
            alt="cta-image"
            class="cb-mt-4 cb-w-[85%] cb-h-[85%] sm:cb-w-4/5 sm:cb-h-4/5 md:cb-w-full md:cb-h-full md:cb-mt-0 cb-mx-[7.5%] sm:cb-mx-[10%] md:cb-mx-0"
          />

          <div
            class="cb-gradient-border cb-absolute cb-bottom-4 cb-left-2 cb-h-[55px] cb-border-l-[13px] md:cb-hidden"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import cta800 from "../../assets/images/cta/fifth-cta-800w.webp";
</script>
