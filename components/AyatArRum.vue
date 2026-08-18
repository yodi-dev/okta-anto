<template>
  <section ref="ayatRef" class="relative overflow-hidden bg-[#eee9df] px-6 py-20 text-center text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="animate-soft-float pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#e8decb]/20 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-xl">
      <figure class="flex flex-col items-center">
        <!-- Dove -->
        <img src="/images/dove.png" alt="Simbol perdamaian dan kasih"
          class="reveal-up h-14 w-14 object-contain opacity-70 drop-shadow-sm sm:h-16 sm:w-16" loading="lazy" />

        <!-- Small ornament -->
        <div class="my-5 flex items-center gap-3 text-[#b8aa92]">
          <span class="h-px w-10 bg-[#cfc4b1]"></span>

          <span class="animate-sparkle text-xs">✦</span>

          <span class="h-px w-10 bg-[#cfc4b1]"></span>
        </div>

        <!-- Verse -->
        <blockquote class="reveal-up font-heading text-lg italic leading-[1.9] tracking-wide text-[#514d44] sm:text-xl"
          style="animation-delay: 180ms">
          “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.”
        </blockquote>

        <!-- Reference -->
        <figcaption
          class="reveal-up mt-6 font-second text-xs font-semibold uppercase tracking-[0.3em] text-[#7c7466] sm:text-sm"
          style="animation-delay: 350ms">
          QS. Ar-Rum: 21
        </figcaption>

        <!-- Bottom ornament -->
        <div class="reveal-up mt-7 flex items-center gap-2 text-[#b8aa92]" style="animation-delay: 500ms">
          <span class="text-[10px]">❧</span>

          <span class="h-px w-8 bg-[#cfc4b1]"></span>

          <span class="text-[10px] rotate-180">❧</span>
        </div>
      </figure>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const ayatRef = ref(null)

useRevealOnScroll(ayatRef, {
  threshold: 0.15,
  once: true,
})
</script>