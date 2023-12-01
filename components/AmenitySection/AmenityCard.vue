<script setup lang="ts">
const props = defineProps({ // Consider refactoring this into an TS amenity Interface
  amenityCategory: {
    type: String,
    required: true,
  },
  amenityList: {
    type: Array as () => string[],
    required: true,
  },
})
</script>

<template>
  <div class="bg-base-100 p-5  rounded-2xl shadow-xl w-64">
    <h3 class="text-lg font-bold text-center">
      {{ amenityCategory }}
    </h3>
    <div class="divider m-0 mb-2.5 before:bg-secondary after:bg-secondary" />
    <ul class="grid gap-3 justify-center">
      <li v-for="amenity in props.amenityList" :key="amenity" class="badge badge-ghost w-44">
        {{ amenity }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
