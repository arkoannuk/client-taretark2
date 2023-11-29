<script setup lang="ts">

</script>

<template>
  <div role="tablist" class="tabs tabs-sized tabs-boxed">
    <NuxtLink to="/rooms/holiday-home" role="tab" class="tab w-1/3" :class="{ 'tab-active': $route.path === '/rooms/holiday-home' }">
      Puhkemaja
    </NuxtLink>
    <NuxtLink to="/rooms/camp-cabin" role="tab" class="tab w-1/3" :class="{ 'tab-active': $route.path === '/rooms/camp-cabin' }">
      Kämping
    </NuxtLink>
    <NuxtLink to="/rooms/studio-flat" role="tab" class="tab w-1/3" :class="{ 'tab-active': $route.path === '/rooms/studio-flat' }">
      Külaliskorter
    </NuxtLink>
  </div>
</template>

<style scoped>
</style>
