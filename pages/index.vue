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
  <ServiceSection />
</template>

<style scoped>
</style>
