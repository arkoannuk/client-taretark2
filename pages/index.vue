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
  <ValueProp :comp-bg="['vertical-gradient-1']" :comp-layout="['flex-col', 'lg:flex-row']">
    <SlotsValueProp1 />
  </ValueProp>
  <ValueProp :comp-bg="['bg-base-300']" :comp-layout="['flex-col', 'lg:flex-row-reverse']">
    <SlotsValueProp2 />
  </ValueProp>
  <ValueProp :comp-bg="['vertical-gradient-2']" :comp-layout="['flex-col', 'lg:flex-row']">
    <SlotsValueProp3 />
  </ValueProp>
  <TestimonialSection />
  <ActionSection />
</template>

<style scoped>
.vertical-gradient-1 {
  background-image: linear-gradient(to bottom, #EDEDED, #DBDBDB);
}
.vertical-gradient-2 {
  background-image: linear-gradient(to bottom, #DBDBDB, #EDEDED);
}
</style>
