<script setup lang="ts">
const props = defineProps({ // Consider refactoring this into an TS service Interface
  serviceName: {
    type: String,
    required: true,
  },
  serviceDesc: {
    type: String,
    required: true,
  },
  serviceBadges: {
    type: Array as () => string[],
    validator: (value: string[]) => value.length === 6,
    required: true,
  },
  servicePrice: {
    type: Number,
    required: true,
  },
  serviceStats: {
    type: Array as () => string[],
    validator: (stats: string[]) => stats.length <= 3,
    required: true,
  },
  serviceImage: {
    type: String,
    required: true,
  },
})

function setBadgeColor(badge: string) {
  return badge.includes("€") ? "badge badge-secondary w-full" : "badge badge-ghost w-full"
}
</script>

<template>
  <div class="card card-compact max-w-sm xl:max-w-sm lg:max-w-xs bg-base-100 shadow-xl">
    <figure class="h-64">
      <img :src="serviceImage" class="w-full h-full" style="object-fit: cover;">
    </figure>
    <div class="card-body">
      <div class="flex">
        <div class="flex-initial w-5/6">
          <h3 class="card-title">
            {{ serviceName }}
          </h3>
          <p class="line-clamp-3">
            {{ serviceDesc }}
          </p>
        </div>
        <div class="flex-initial w-2/6 flex flex-col justify-end text-end ps-2 text-md font-bold">
          <div v-for="stat in serviceStats" :key="stat">
            {{ stat }}
          </div>
        </div>
      </div>
      <div class="divider m-0" />
      <div class="grid grid-cols-2 card-actions justify-center">
        <div v-for="badge in props.serviceBadges" :key="badge" :class="setBadgeColor(badge)">
          {{ badge }}
        </div>
      </div>
      <div class="divider m-0" />
      <div class="card-actions justify-between">
        <button class="btn btn-sm btn-primary">
          <NuxtLink to="/rooms">
            Vaata lähemalt
          </NuxtLink>
        </button>
        <div class="text-lg font-bold">
          {{ servicePrice }}€ 🌗
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
