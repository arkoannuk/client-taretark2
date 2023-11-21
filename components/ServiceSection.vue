<script setup lang="ts">
import servicesData from "../assets/serviceData.json"
</script>

<template>
  <div class="container mx-auto px-5 pb-20">
    <h2 class="text-2xl sm:text-4xl font-bold text-center pb-12">
      Tutvu Võimalustega!
    </h2>
    <div class="flex flex-col lg:flex-row  items-center gap-5 lg:gap-0 justify-around">
      <ServiceCard
        v-for="(service, index) in servicesData" :key="index"
        :service-price="service.price"
        :service-stats="service.stats"
        :service-name="service.name"
        :service-desc="service.desc"
        :service-badges="service.badges"
        :service-image="service.image"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
