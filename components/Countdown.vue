<template>
  <section ref="countdownRef" class="relative h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-[60%_40%]"
    style="background-image: url('/images/2.webp')">
    <!-- Soft dark overlay -->
    <div class="absolute inset-0 z-0 bg-gradient-to-b from-black/5 via-black/15 to-[#403c32]/85"></div>

    <!-- Warm glow -->
    <div
      class="animate-soft-float pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,252,243,0.22),transparent_55%)]">
    </div>

    <!-- Content -->
    <div
      class="relative z-10 mx-auto flex h-full w-full max-w-lg flex-col items-center justify-between px-5 py-16 text-center text-[#f8f5ee] md:py-20">
      <!-- Wedding info -->
      <div class="flex w-full flex-col items-center reveal-up">
        <p class="font-second text-xs uppercase tracking-[0.35em] text-[#f1eadf] sm:text-sm md:text-base">
          The Wedding Of
        </p>

        <h1
          class="mt-4 font-heading text-5xl font-normal italic leading-none tracking-wide text-[#fffdf8] drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] sm:text-6xl md:text-7xl">
          Okta
          <span class="mx-1 text-[#e8decb]">&</span>
          Anto
        </h1>

        <!-- Ornament -->
        <div class="mt-4 flex items-center gap-3 text-[#eee5d5]">
          <span class="h-px w-12 bg-[#eee5d5]/70 sm:w-16"></span>

          <span class="animate-sparkle text-xs">✦</span>

          <span class="h-px w-12 bg-[#eee5d5]/70 sm:w-16"></span>
        </div>

        <p class="mt-4 font-second text-sm tracking-wide text-[#f1eadf] sm:text-base md:text-lg">
          Jumat, 02 Oktober 2026
        </p>
      </div>

      <!-- Countdown -->
      <div
        class="flex w-full max-w-sm flex-col items-center rounded-[2rem] border border-white/20 bg-black/10 px-4 py-6 backdrop-blur-[5px] reveal-up sm:px-6 sm:py-7"
        style="animation-delay: 220ms">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#f1eadf]/90 sm:text-sm">
          Counting Down
        </p>

        <!-- Decorative ornament -->
        <div class="my-3 flex items-center gap-3 opacity-70">
          <span class="h-px w-8 bg-[#eee5d5]"></span>

          <span class="animate-sparkle text-[10px] text-[#eee5d5]">
            ✦
          </span>

          <span class="h-px w-8 bg-[#eee5d5]"></span>
        </div>

        <!-- Countdown -->
        <div class="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <div v-for="(item, i) in countdownItems" :key="i"
            class="flex min-w-[58px] flex-col items-center sm:min-w-[68px]">
            <div
              class="flex size-12 items-center justify-center rounded-full border border-[#eee5d5]/60 bg-[#f5f0e7]/90 font-heading text-lg font-semibold text-[#4b483f] shadow-lg shadow-black/10 sm:size-14 sm:text-xl">
              {{ String(item.value).padStart(2, '0') }}
            </div>

            <span class="mt-2 font-second text-[10px] uppercase tracking-[0.18em] text-[#f1eadf]/90 sm:text-xs">
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const countdownRef = ref(null)

useRevealOnScroll(countdownRef, {
  threshold: 0.1,
  once: true,
})

const target = new Date('2026-10-02T08:00:00+07:00').getTime()

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer

function update() {
  const diff = target - Date.now()

  if (diff <= 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

const countdownItems = computed(() => [
  { label: 'Hari', value: days.value },
  { label: 'Jam', value: hours.value },
  { label: 'Menit', value: minutes.value },
  { label: 'Detik', value: seconds.value },
])

onMounted(() => {
  update()
  timer = setInterval(update, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>