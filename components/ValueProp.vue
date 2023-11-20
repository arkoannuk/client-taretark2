<script setup lang="ts">
import { defineProps } from "vue"

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps({
  compLayout: {
    type: [String, Array],
    required: true,
  },
  compBg: {
    type: [String, Array],
    required: true,
  },
})
</script>

<template>
  <div :class="compBg" class="hero">
    <div :class="compLayout" class="container py-20 lg:py-40 px-5 flex justify-between items-center gap-5 lg:gap-20">
      <div class="w-full lg:w-2/4 ">
        <slot />
      </div>
      <img class="w-full lg:w-2/4 h-96 rounded-lg shadow-2xl" src="../assets/images/sea.jpg" style="object-fit: cover;">
    </div>
  </div>
</template>

<style scoped>

</style>
