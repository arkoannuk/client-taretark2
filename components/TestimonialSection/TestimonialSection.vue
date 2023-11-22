<script setup>
import reviewData from "../assets/reviewData.json"
</script>

<template>
  <div class="leaves-background">
    <div class="container mx-auto px-5 py-10 md:py-20">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl sm:text-4xl font-bold text-center pb-5">
          Mida arvavad kliendid?
        </h2>
        <p class="pb-12 text-md sm:text-lg text-center max-w-2xl">
          Meie klientideks on inimesed väga erinevatelt ja huvitavatelt elualadelt. Meid on külastatud riikidest nagu USA, Iisrael, Austraalia, Aserbaidžaan jpt.
        </p>
      </div>
      <div class="flex justify-center">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
          <TestimonialCard
            v-for="(testimonial, index) in reviewData" :key="index"
            :review-title="testimonial.reviewTitle"
            :review-message1="testimonial.reviewMessage1"
            :review-message2="testimonial.reviewMessage2"
            :review-author="testimonial.reviewAuthor"
            :review-time="testimonial.reviewTime"
            :image-url="testimonial.imageUrl"
          />
        </div>
      </div>
      <div class="flex justify-center pt-12">
        <div class="flex text-center gap-12">
          <div>
            <img class="w-64" src="@/assets/images/booking.png">
            <p class="text-md sm:text-lg  font-semibold">
              40+ arvustust <br> ⭐ 9/10 ⭐
            </p>
          </div>
          <div>
            <img class="w-64" src="@/assets/images/airbnb.png">
            <p class="text-md sm:text-lg font-semibold">
              35+ arvustust <br>⭐ 4.5/5 ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.leaves-background {
  background-color: #EDEDED;
  background-image:
    linear-gradient(to bottom, #EDEDED 0%, rgba(255,255,255,0) 50%, #EDEDED),
    /* radial-gradient(circle, rgba(255,255,255,0), #EDEDED 50%), */
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23529B03' fill-opacity='0.2' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
  background-blend-mode: normal;
}
</style>
