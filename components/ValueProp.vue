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
      <img class="w-full lg:w-2/4 h-96 rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1603612692333-7bac35e43500?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style="object-fit: cover;">
    </div>
  </div>
</template>

<style scoped>

</style>
