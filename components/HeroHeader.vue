<script setup lang="ts">
</script>

<template>
  <div class="hero h-[36rem]" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
    <div class="hero-overlay bg-opacity-60" />
    <div class="container px-5">
      <div class="max-w-xl text-neutral-content">
        <h1 class="mb-5 text-3xl sm:text-5xl font-bold">
          Looduskeskne Majutus Elva Linnas
        </h1>
        <p class="mb-5 text-md sm:text-lg">
          Meeldejääva puhkuse või öömajana on saadaval erinevate võimalustega ruumid ja saunad,
          mis on ümbritsetud meelerahu pakkuva loodusega.
        </p>
        <button class="mb-3 btn sm:btn-lg btn-primary">
          Broneeri Kohe
        </button>
      </div>
    </div>
    <div class="custom-shape-divider-bottom-1699725066 mt-auto">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.custom-shape-divider-bottom-1699725066 {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1699725066 svg {
    display: block;
    width: 100%;
    height: 5rem;
}

.custom-shape-divider-bottom-1699725066 .shape-fill {
    fill: #E4D8B4;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
    .custom-shape-divider-bottom-1699725066 svg {
        width: calc(100% + 1.3px);
        height: 75px;
    }
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom-1699725066 svg {
        width: calc(100% + 1.3px);
        height: 55px;
    }
}
</style>
