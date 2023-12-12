<script setup>
</script>

<template>
  <ValueProp :comp-bg="['bg-base-200']" :comp-layout="['flex-col', 'lg:flex-row-reverse']" comp-img="https://images.unsplash.com/photo-1603612692333-7bac35e43500?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <template #content>
      <CabinValue1 />
    </template>
    <template #media>
      <div class="flex-row w-full lg:w-2/4">
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-green-400 h-48 shadow-xl rounded-tl-lg" />
          <div class="bg-green-300 h-48 shadow-xl rounded-tr-lg" />
          <div class="bg-green-200 h-48 shadow-xl rounded-bl-lg" />
          <div class="bg-green-100 h-48 shadow-xl rounded-br-lg" />
        </div>
      </div>
    </template>
  </ValueProp>
  <ValueProp :comp-bg="['bg-base-200']" :comp-layout="['flex-col', 'lg:flex-row']">
    <template #content>
      <CabinValue2 />
    </template>
    <template #media>
      <div class="flex-row w-full lg:w-2/4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div class="bg-green-300 h-48 sm:h-96 shadow-xl rounded-t-lg sm:rounded-none sm:rounded-l-lg" />
          <div class="bg-green-200 h-48 sm:h-96 shadow-xl rounded-b-lg sm:rounded-none sm:rounded-r-lg" />
        </div>
      </div>
    </template>
  </ValueProp>
</template>

<style scoped>
</style>
