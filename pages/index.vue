<script setup lang="ts">
onMounted(() => {
  const welcomeMessage = "Hey"
  const additionalMessage = "Welcome to our component!"

  if (welcomeMessage)
    console.log(`${welcomeMessage} ${additionalMessage}`)
  else
    console.log("No welcome message available.")

  // Additional logic can be added here
})
</script>

<template>
  <HeroHeader />

  <div class="h-[38rem]">
    <div class="container mx-auto px-5 flex justify-center">
      <div class="max-w-xl text-center text-base-content">
        <h1 class="mb-5 text-2xl sm:text-4xl font-bold">
          Tutvu Võimalustega!
        </h1>
        <h1>Testasdasdasdaaaaaaaaaaaaa as aaaaaasd</h1>
        <h1>Testasssssssssssssssssssss ssssssssssssssssssssssssssssssssdasdasd</h1>
        <h1>Testasdasdasdasd zxczxczxcz aweqweqweqweqwe asdascasdasd aseqweqwe asdase</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
