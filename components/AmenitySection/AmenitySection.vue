<script setup>
import amenityData from "@/assets/amenityData.json"
</script>

<template>
  <div class="hero bg-base-200">
    <div class="container py-10 md:py-20 px-5">
      <div class="text-center">
        <h2 class="text-2xl sm:text-4xl font-bold pb-2.5">
          120-150€ ööpäev
        </h2>
        <p class="text-sm sm:text-base pb-2.5">
          Lõplik hind sõltub antud hooajast ja ööde arvust.
        </p>
        <p class="text-sm sm:text-base pb-12">
          Erihinnad kehtivad pühade ja rahvarohkete ürituste ajal Elvas ning selle ümbruses.
        </p>
      </div>
      <div class="flex flex-wrap justify-center gap-12">
        <AmenityCard
          v-for="(amenity, index) in amenityData"
          :key="index" class="basis-64 lg:basis-1/3 xl:basis-64"
          :amenity-category="amenity.category"
          :amenity-list="amenity.list"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
