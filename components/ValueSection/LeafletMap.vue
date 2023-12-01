<script setup>
import { onMounted, ref } from "vue"

const mapContainer = ref(null)

onMounted(() => {
  if (mapContainer.value) {
    const map = L.map(mapContainer.value).setView([58.2230, 26.40100], 14)
    const isMobile = L.Browser.mobile

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      touchZoom: true,
      detectRetina: true,
    }).addTo(map)

    const marker = L.marker([58.21773, 26.39628]).addTo(map)
    // .bindPopup("<p><b>Purde Puhkemajad</b></p>")
    // .openPopup()
    marker._icon.style.filter = "hue-rotate(275deg)"
    map.scrollWheelZoom.disable()
    if (isMobile)
      map.dragging.disable()
  }
})
</script>

<template>
  <div ref="mapContainer" />
</template>

  <style>
  #map {
    height: 100%; /* Use the full height of the container */
  }
  </style>
