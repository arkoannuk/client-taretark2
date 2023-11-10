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
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo odit
      dolorem debitis officia id harum temporibus sed, ex ut expedita.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo oditasdd ddddd dddddddd
      dolorem debitis officia id harum temporibus sed, ex ut expedita.
    </p>
  </div>

  <button class="btn btn-primary">
    Hello daisyUI
  </button>
</template>

<style scoped></style>
