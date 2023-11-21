<script setup>
import reviewData from "../assets/reviewData.json"
</script>

<template>
  <div class="hero bg-base-100">
    <div class="container px-5 py-20 lg:py-40">
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
        <div class="flex bg-base-100 text-center gap-12">
          <div>
            <img class="w-64" src="../assets/images/booking.png">
            <p class="text-md sm:text-lg  font-semibold">
              40+ arvustust <br> ⭐ 9/10 ⭐
            </p>
          </div>
          <div>
            <img class="w-64" src="../assets/images/airbnb.png">
            <p class="text-md sm:text-lg font-semibold">
              35+ arvustust <br>⭐ 4.5/5 ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
