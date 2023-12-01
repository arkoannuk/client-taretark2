<script setup>
import VueEasyLightbox from "vue-easy-lightbox"
import { ref } from "vue"

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps({
  btnClasses: {
    type: String,
    default: "",
  },
  imgsRef: {
    type: Array,
    default: () => [],
  },
})

const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef = ref([])

function onShow() {
  visibleRef.value = true
}

function showMultiple() {
  imgsRef.value = [
    { title: "entrance to the house (1/10)", src: "https://res.cloudinary.com/dgjfea9cb/image/upload/v1692889072/photo-1543269664-56d93c1b41a6_1_kfsvvu.jpg" },
    { title: "view from main entrance (2/10)", src: "https://res.cloudinary.com/dgjfea9cb/image/upload/v1692889068/Group_5_xxervd.jpg" },
  ]
  indexRef.value = 0 // index of imgList
  onShow()
}

const onHide = () => (visibleRef.value = false)
</script>

<template>
  <div>
    <button :class="btnClasses" @click="showMultiple">
      Galerii
    </button>

    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      :move-disabled="true"
      @hide="onHide"
    />
  </div>
</template>

<style>
.vel-img-title {
    font-size: 1rem !important;
    line-height: 1.25rem !important;
    color: white !important;
    background-color: #2d2d2d;
    padding: 0.25rem;
}

.vel-toolbar {
    display: none !important;
}
</style>
