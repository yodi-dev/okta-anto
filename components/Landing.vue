<template>
  <section ref="landingRef"
    class="relative flex h-screen justify-center overflow-hidden bg-[#eee9df] bg-cover bg-no-repeat bg-[center_50%] transition-opacity duration-700 ease-out md:bg-[center_30%]"
    style="background-image: url('/images/cover.webp')">
    <!-- Soft overlay -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-black/5 via-black/10 to-[#403c32]/80"></div>

    <!-- Soft warm glow -->
    <div
      class="animate-soft-float pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,252,243,0.28),transparent_55%)]">
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto grid max-w-lg place-content-between py-12 text-center text-[#f8f5ee] md:py-20">
      <!-- Top -->
      <div class="flex flex-col items-center reveal-up">
        <p class="font-second text-sm uppercase tracking-[0.35em] text-[#f1eadf] md:text-base">
          The Wedding Of
        </p>

        <!-- Couple names -->
        <h1
          class="mt-3 font-heading text-5xl font-normal italic leading-none tracking-wide text-[#fffdf8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] md:text-7xl">
          Anto
          <span class="mx-1 font-normal text-[#e8decb]">&</span>
          Okta
        </h1>

        <!-- Ornament -->
        <div class="mt-3 flex items-center gap-3 text-[#eee5d5]">
          <span class="animate-sparkle text-xs">❧</span>

          <span class="h-px w-16 bg-[#eee5d5]/70"></span>

          <span class="animate-sparkle rotate-180 text-xs" style="animation-delay: 500ms">
            ❧
          </span>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mx-auto flex w-full max-w-xs flex-col items-center rounded-[2rem] border border-white/20 bg-black/10 px-6 py-7 backdrop-blur-[3px] reveal-up"
        style="animation-delay: 220ms">
        <p class="font-second text-xs uppercase tracking-[0.25em] text-[#f1eadf]/90 md:text-sm">
          Kepada Yth.
        </p>

        <p class="mt-2 font-second text-lg font-semibold text-white md:text-xl">
          {{ guestName }}
        </p>

        <div class="my-5 h-px w-12 bg-[#eee5d5]/60"></div>

        <button @click="openInvitation"
          class="group inline-flex items-center gap-2 rounded-full border border-[#eee5d5]/80 bg-[#f5f0e7]/95 px-6 py-2.5 font-second text-sm font-semibold text-[#4b483f] shadow-lg shadow-black/10 transition-all duration-300 hover:scale-[1.03] hover:bg-white active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            class="size-5 transition-transform duration-300 group-hover:-translate-y-0.5">
            <path fill-rule="evenodd"
              d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7-3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
              clip-rule="evenodd" />
          </svg>

          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const guestName = ref('Tamu Undangan')
const emit = defineEmits(['open'])
const landingRef = ref(null)

useRevealOnScroll(landingRef, {
  threshold: 0.1,
  once: true,
})

onMounted(() => {
  if (typeof window !== 'undefined' && window.location.hash) {
    const hash = decodeURIComponent(window.location.hash.substring(1))

    if (hash) {
      guestName.value = hash
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
    }
  }
})

const openInvitation = () => {
  landingRef.value.classList.add('opacity-0')

  setTimeout(() => {
    emit('open')
    window.dispatchEvent(new Event('play-music'))
  }, 700)
}
</script>