<script setup>
</script>

<template>
  <ValueProp :comp-bg="['vertical-gradient-1']" :comp-layout="['flex-col', 'lg:flex-row']">
    <template #content>
      <IndexValue1 />
    </template>
    <template #media>
      <img class="w-full lg:w-2/4 h-96 rounded-lg shadow-2xl" style="object-fit: cover" src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=640">
    </template>
  </ValueProp>
  <ValueProp :comp-bg="['bg-base-300']" :comp-layout="['flex-col', 'lg:flex-row-reverse']" comp-img="https://images.unsplash.com/photo-1603612692333-7bac35e43500?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <template #content>
      <IndexValue2 />
    </template>
    <template #media>
      <LeafletMap class="w-full lg:w-2/4 h-96 rounded-lg shadow-2xl" />
    </template>
  </ValueProp>
  <ValueProp :comp-bg="['vertical-gradient-2']" :comp-layout="['flex-col', 'lg:flex-row']" comp-img="https://images.unsplash.com/photo-1603612692333-7bac35e43500?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    <template #content>
      <IndexValue3 />
    </template>
    <template #media>
      <img class="w-full lg:w-2/4 h-96 rounded-lg shadow-2xl" style="object-fit: cover" src="https://images.unsplash.com/photo-1603612692333-7bac35e43500?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    </template>
  </ValueProp>
</template>

<style scoped>
.vertical-gradient-1 {
  background-image: linear-gradient(to bottom, #EDEDED, #DBDBDB);
}
.vertical-gradient-2 {
  background-image: linear-gradient(to bottom, #DBDBDB, #EDEDED);
}
</style>
