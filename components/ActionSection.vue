<script setup lang="ts">
</script>

<template>
  <div class="hero h-[26rem] md:h-[32rem] relative" style="background-image: url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
    <div class="custom-shape-divider-bottom-1699725066">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill" />
      </svg>
    </div>
    <div class="hero-overlay bg-opacity-60 bg-slate-950" />
    <div class="container px-5">
      <div class="flex flex-col text-center pt-6 md:pt-20">
        <h2 class="pb-5 text-3xl sm:text-5xl font-bold text-base-100">
          Parim majutus Elvas teie käsutusse!
        </h2>
        <button class="btn sm:btn-lg btn-primary mx-auto">
          <NuxtLink to="/booking">
            Broneeri
          </NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-shape-divider-bottom-1699725066 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    /* transform: rotate(180deg); */
}

.custom-shape-divider-bottom-1699725066 svg {
    display: block;
    width: 100%;
    height: 4rem;
}

.custom-shape-divider-bottom-1699725066 .shape-fill {
    fill: #ededed
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
    .custom-shape-divider-bottom-1699725066 svg {
        width: calc(100% + 1.3px);
        height: 35px;
    }
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom-1699725066 svg {
        width: calc(100% + 1.3px);
        height: 25px;
    }
}
</style>
