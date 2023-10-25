<template>
  <div
    class="cb-sticky cb-bottom-8 cb-inset-x-[7%] sm:cb-inset-x-1/4 xl:cb-inset-x-1/3 cb-flex cb-flex-rows cb-justify-between cb-items-center cb-w-[90%] sm:cb-w-7/12 xl:cb-w-5/12 cb-z-10 cb-rounded-[10px] cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-py-5 cb-text-white"
  >
    <p class="cb-mx-7 cb-tracking-wider md:cb-text-xl cb-font-medium">
      {{ message }}
    </p>

    <Icon
      class="cb-w-5 cb-h-5 cb-mr-5 hover:cb-cursor-pointer"
      name="fa6-solid:link"
      @click="setAlerts(false)"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps({
  message: String,
});

const { message } = toRefs(props);
</script>