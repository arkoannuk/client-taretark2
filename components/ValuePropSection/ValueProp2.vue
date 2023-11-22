<script setup>
import { useClipboard } from "@vueuse/core"

const source = ref("Purde 24, Elva, 61503 Tartu maakond")
const { copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
  <div class="text-start">
    <h2 class="pb-5 text-2xl sm:text-4xl font-bold">
      Hästi ühendatud asukoht
    </h2>
    <p class="pb-5 text-md sm:text-lg">
      Meie juurde pääseb lihtsalt nii auto kui ka ühistranspordiga, kõndimiskaugusele jäävad toidupoed ja restoranid.
    </p>
    <div class="pb-5 text-md sm:text-lg">
      <ul>🏪 Lähim toidupood <b>500m</b></ul>
      <ul>🚍 Lähim bussipeatus <b>1km</b></ul>
      <ul>🚆 Elva raudteejaam <b>2km</b></ul>
    </div>
    <p class="pb-5 text-md sm:text-lg opacity-50">
      Kaardil on märgistatud meie asukoht.
    </p>

    <div v-if="isSupported">
      <button class="btn btn-primary" @click="copy(source)">
        <div v-if="!copied">
          📋 Juhised
        </div>
        <span v-else>✅ Kopitud</span>
      </button>
    </div>
    <div v-else>
      <button class="btn btn-primary" @click="copyToClipboard">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        📋 Juhised
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
