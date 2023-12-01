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
    <div :class="compLayout" class="container py-10 md:py-20 px-5 flex justify-between items-center gap-10 md:gap-20">
      <div class="w-full lg:w-2/4 xl:pe-20">
        <slot name="content" />
      </div>
      <slot name="media" />
    </div>
  </div>
</template>

<style scoped>

</style>
