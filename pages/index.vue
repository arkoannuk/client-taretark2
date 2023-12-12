<script setup lang="ts">
onMounted(() => {
  const welcomeMessage = "Hey"
  const additionalMessage = "Welcome to our component!"

  if (welcomeMessage)
    console.log(`${welcomeMessage} ${additionalMessage}`)
  else
    console.log("No welcome message available.")
})
</script>

<template>
  <IndexHeroSection />
  <ServiceSection />
  <IndexValueSection />
  <TestimonialSection />
  <IndexActionSection />
</template>

<style scoped>
</style>
