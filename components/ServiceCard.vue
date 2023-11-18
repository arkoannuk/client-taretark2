<script setup lang="ts">

</script>

<template>
  <div class="card card-compact max-w-sm xl:max-w-sm lg:max-w-xs bg-base-100 shadow-xl">
    <figure class="h-64">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="../assets/images/arab.jpg" class="w-full">
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-xs btn-circle">❮</a>
            <a href="#slide2" class="btn btn-xs btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="../assets/images/sea.jpg" class="w-full">
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-xs btn-circle">❮</a>
            <a href="#slide3" class="btn btn-xs btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="../assets/images/arab.jpg" class="w-full">
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-xs btn-circle">❮</a>
            <a href="#slide4" class="btn btn-xs btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="../assets/images/sea.jpg" class="w-full">
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-xs btn-circle">❮</a>
            <a href="#slide1" class="btn btn-xs btn-circle">❯</a>
          </div>
        </div>
      </div>
    </figure>
    <div class="card-body">
      <div class="flex">
        <div class="flex-initial w-5/6">
          <h2 class="text-xl font-bold">
            Puhkemaja
          </h2>
          <p class="text-md line-clamp-3">
            Värskelt renoveeritud elumaja, kus on võimalik veeta meelt rahustav puhkus
            kogu pere või väiksema seltskonnaga.
          </p>
        </div>
        <div class="flex-initial w-2/6 flex flex-col justify-end text-end ps-2 text-md font-bold">
          <div class="pb-2">
            4 max 🧑🏻
          </div>
          <div>72 m² 🏠</div>
        </div>
      </div>
      <div class="divider m-0" />
      <div class="grid grid-cols-2 card-actions justify-center">
        <div class="badge badge-secondary w-full">
          Tünnisaun (60€)
        </div>
        <div class="badge badge-secondary w-full">
          Tavasaun (25€)
        </div>
        <div class="badge badge-ghost w-full">
          BBQ majake
        </div>
        <div class="badge badge-ghost w-full">
          Ligipääs tiigile
        </div>
        <div class="badge badge-ghost w-full">
          Saarega köök
        </div>
        <div class="badge badge-ghost w-full">
          60'' TV & Wi-Fi
        </div>
      </div>
      <div class="divider m-0" />
      <div class="card-actions justify-between">
        <button class="btn btn-sm btn-primary">
          Vaata lähemalt
        </button>
        <div class="text-lg font-bold">
          90€ 🌗
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
