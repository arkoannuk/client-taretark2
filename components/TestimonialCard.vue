<script setup lang="ts">
import { defineProps } from "vue"

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps({
  reviewTitle: {
    type: String,
    required: true,
  },
  reviewMessage1: {
    type: String,
    required: true,
  },
  reviewMessage2: {
    type: String,
    required: true,
  },
  reviewAuthor: {
    type: String,
    required: true,
  },
  reviewTime: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="card card-compact max-w-sm xl:max-w-sm lg:max-w-xs shadow-xl bg-base-200 text-primary-content ">
    <div class="card-body min-h-[14rem]">
      <h3 class="card-title">
        {{ reviewTitle }}
      </h3>
      <p>"{{ reviewMessage1 }}</p>
      <p>{{ reviewMessage2 }}"</p>
    </div>
    <div class="bg-base-300 rounded-b-md px-4 py-2">
      <div class="text-end flex flex-row justify-end gap-2">
        <p class="chat-header">
          {{ reviewAuthor }}
          <span class="chat-footer opacity-50"><br>{{ reviewTime }}</span>
        </p>
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img :src="imageUrl" alt="Tailwind CSS chat bubble component">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
