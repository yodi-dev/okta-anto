<template>
  <section ref="galleryRef" id="gallery" class="relative overflow-hidden bg-[#eee9df] px-6 py-20 text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="animate-soft-float pointer-events-none absolute right-0 top-10 h-80 w-80 translate-x-1/3 rounded-full bg-[#e8decb]/25 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-12 text-center reveal-up">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172] sm:text-sm">
          A Glimpse Of Us
        </p>

        <h2 class="mt-3 font-heading text-4xl font-normal italic tracking-wide text-[#514d44] sm:text-5xl">
          Galeri Kami
        </h2>

        <!-- Ornament -->
        <div class="mt-5 flex items-center justify-center gap-3 text-[#b8aa92]">
          <span class="h-px w-12 bg-[#cfc4b1]"></span>

          <span class="animate-sparkle text-xs">✦</span>

          <span class="h-px w-12 bg-[#cfc4b1]"></span>
        </div>

        <p class="mx-auto mt-5 max-w-xl font-second text-sm leading-7 text-[#746d62] sm:text-base">
          Beberapa momen yang kami simpan dalam bingkai, menjadi bagian dari
          perjalanan menuju hari bahagia kami.
        </p>
      </div>

      <!-- Portrait Carousel -->
      <div
        class="rounded-[2rem] border border-[#d8cdbb] bg-[#f5f0e7]/70 p-4 shadow-[0_20px_60px_rgba(75,72,63,0.06)] backdrop-blur-sm reveal-up"
        style="animation-delay: 180ms">
        <Splide :options="{
          type: 'loop',
          autoplay: true,
          interval: 3500,
          arrows: false,
          pagination: false,
          drag: true,
          gap: '1rem',
          pauseOnHover: true,
          pauseOnFocus: true,
        }" class="w-full">
          <SplideSlide v-for="(group, index) in portraitSlides" :key="index">
            <div class="flex gap-3 sm:gap-4">
              <div v-for="(img, i) in group" :key="i" :class="[
                'group relative cursor-pointer overflow-hidden rounded-[1.25rem] bg-[#e8decb]',
                'shadow-[0_10px_30px_rgba(75,72,63,0.08)]',
                'transition-all duration-500',
                'hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(75,72,63,0.12)]',
                'reveal-up',
                group.length === 1 ? 'w-full' : 'w-1/2',
              ]" :style="{
                animationDelay: `${320 + (index * 2 + i) * 100}ms`,
              }" @click="showLightboxFromPortrait(index * 2 + i)">
                <img loading="lazy" :src="img.src" :alt="img.alt"
                  class="h-auto w-full object-cover transition duration-700 group-hover:scale-105" />

                <!-- Image overlay -->
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#403c32]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      <!-- Landscape Gallery -->
      <div class="mt-5">
        <div class="columns-1 gap-4 space-y-4 sm:columns-2">
          <div v-for="(img, index) in landscapeImages" :key="index"
            class="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-[1.5rem] border border-[#d8cdbb] bg-[#f5f0e7] shadow-[0_10px_30px_rgba(75,72,63,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(75,72,63,0.12)] reveal-up"
            :style="{ animationDelay: `${650 + index * 140}ms` }" @click="showLightboxFromLandscape(index)">
            <img loading="lazy" :src="img.src" :alt="img.alt"
              class="h-auto w-full object-cover transition duration-700 group-hover:scale-105" />

            <!-- Image overlay -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#403c32]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom ornament -->
      <div class="mt-10 flex items-center justify-center gap-3 text-[#b8aa92] reveal-up" style="animation-delay: 900ms">
        <span class="h-px w-10 bg-[#cfc4b1]"></span>

        <span class="animate-sparkle text-[10px]">❧</span>

        <span class="h-px w-10 bg-[#cfc4b1]"></span>
      </div>
    </div>

    <!-- Lightboxes -->
    <vue-easy-lightbox :visible="lightbox.visible" :imgs="portraitImages.map((i) => i.src)" :index="lightbox.index"
      @hide="lightbox.visible = false" />

    <vue-easy-lightbox :visible="landscapeLightbox.visible" :imgs="landscapeImages.map((i) => i.src)"
      :index="landscapeLightbox.index" @hide="landscapeLightbox.visible = false" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import VueEasyLightbox from 'vue-easy-lightbox'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const galleryRef = ref(null)

useRevealOnScroll(galleryRef, {
  threshold: 0.08,
  once: true,
})

// Portrait images
const portraitImages = [
  { src: '/images/2.webp', alt: 'Potret Mempelai' },
  { src: '/images/3.webp', alt: 'Potret Mempelai' },
  { src: '/images/pria.webp', alt: 'Potret Mempelai' },
  { src: '/images/wanita.webp', alt: 'Potret Mempelai' },
  { src: '/images/5.webp', alt: 'Potret Mempelai' },
  { src: '/images/6.webp', alt: 'Potret Mempelai' },
  { src: '/images/cover.webp', alt: 'Potret Mempelai' },
  { src: '/images/7.webp', alt: 'Potret Mempelai' },
  { src: '/images/9.webp', alt: 'Potret Mempelai' },
  { src: '/images/8.webp', alt: 'Potret Mempelai' },
]

const portraitSlides = []

for (let i = 0; i < portraitImages.length; i += 2) {
  portraitSlides.push(portraitImages.slice(i, i + 2))
}

const lightbox = ref({
  visible: false,
  index: 0,
})

const showLightboxFromPortrait = (index) => {
  lightbox.value.index = index
  lightbox.value.visible = true
}

// Landscape images
const landscapeImages = [
  { src: '/images/1.webp', alt: 'Potret Mempelai' },
  { src: '/images/4.webp', alt: 'Potret Mempelai' },
]

const landscapeLightbox = ref({
  visible: false,
  index: 0,
})

const showLightboxFromLandscape = (index) => {
  landscapeLightbox.value.index = index
  landscapeLightbox.value.visible = true
}
</script>