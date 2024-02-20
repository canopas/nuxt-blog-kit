<template>
  <div
    class="cb-sticky cb-inset-x-[7%] cb-bottom-8 cb-z-10 cb-flex cb-w-[90%] cb-items-center cb-justify-between cb-rounded-[10px] cb-bg-gradient-to-r cb-from-[#f2709c] cb-to-[#ff9472] cb-py-5 cb-text-white sm:cb-inset-x-1/4 sm:cb-w-7/12 xl:cb-inset-x-1/3 xl:cb-w-5/12"
  >
    <p class="cb-mx-7 cb-font-medium cb-tracking-wider md:cb-text-xl">
      {{ message }}
    </p>

    <Icon
      class="cb-mr-5 cb-h-5 cb-w-5 hover:cb-cursor-pointer"
      name="fa6-solid:link"
      @click="setAlerts(false)"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const { message } = toRefs(props);
</script>
