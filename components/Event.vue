<template>
  <section ref="eventRef" id="event-detail" class="relative overflow-hidden bg-[#f5f0e7] px-6 py-20 text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="animate-soft-float pointer-events-none absolute left-0 top-16 h-72 w-72 -translate-x-1/3 rounded-full bg-[#e8decb]/25 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-5xl">
      <!-- Header -->
      <div class="mb-12 text-center reveal-up">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172] sm:text-sm">
          Our Special Day
        </p>

        <h2 class="mt-3 font-heading text-4xl font-normal italic tracking-wide text-[#514d44] sm:text-5xl">
          Wedding Event
        </h2>

        <!-- Ornament -->
        <div class="mt-5 flex items-center justify-center gap-3 text-[#b8aa92]">
          <span class="h-px w-12 bg-[#cfc4b1]"></span>

          <span class="animate-sparkle text-xs">✦</span>

          <span class="h-px w-12 bg-[#cfc4b1]"></span>
        </div>

        <p class="mx-auto mt-5 max-w-xl font-second text-sm leading-7 text-[#746d62] sm:text-base">
          Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i
          untuk hadir dan menjadi bagian dari hari istimewa kami.
        </p>
      </div>

      <!-- Event Card -->
      <div
        class="overflow-hidden rounded-[2rem] border border-[#d8cdbb] bg-[#eee9df]/80 shadow-[0_20px_60px_rgba(75,72,63,0.08)] backdrop-blur-sm reveal-up"
        style="animation-delay: 180ms">
        <div class="grid md:grid-cols-2">
          <!-- Event Info -->
          <div class="p-7 sm:p-10 lg:p-12">
            <div class="mb-8 text-center reveal-up" style="animation-delay: 260ms">
              <p class="font-second text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9b907f]">
                Wedding Ceremony
              </p>

              <h3 class="mt-2 font-heading text-3xl font-normal italic text-[#514d44] sm:text-4xl">
                Resepsi
              </h3>
            </div>

            <!-- Date -->
            <div class="flex gap-4 reveal-up" style="animation-delay: 340ms">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#e8decb]/70">
                <img src="/icons/calendar-heart-light.svg" alt="" class="size-5 opacity-75" />
              </div>

              <div>
                <p class="font-second text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b907f]">
                  Tanggal
                </p>

                <p class="mt-1 font-second text-sm font-medium leading-6 text-[#5f594f] sm:text-base">
                  Jumat, 02 Oktober 2026
                </p>
              </div>
            </div>

            <!-- Time -->
            <div class="mt-6 flex gap-4 reveal-up" style="animation-delay: 420ms">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#e8decb]/70">
                <img src="/icons/clock-light.svg" alt="" class="size-5 opacity-75" />
              </div>

              <div>
                <p class="font-second text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b907f]">
                  Waktu
                </p>

                <p class="mt-1 font-second text-sm font-medium leading-6 text-[#5f594f] sm:text-base">
                  Pukul 08:00 WIB — Selesai
                </p>
              </div>
            </div>

            <!-- Location -->
            <div class="mt-6 flex gap-4 reveal-up" style="animation-delay: 500ms">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#e8decb]/70">
                <img src="/icons/map-pin-area-light.svg" alt="" class="size-5 opacity-75" />
              </div>

              <div>
                <p class="font-second text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b907f]">
                  Lokasi
                </p>

                <p class="mt-1 font-second text-sm leading-6 text-[#5f594f] sm:text-base">
                  Singkut 1 patok 16 RT 9 dusun 6 desa pasar singkut
                </p>
              </div>
            </div>

            <!-- Button Buka Google Maps -->
            <div class="mt-7 reveal-up" style="animation-delay: 550ms">
              <a :href="mapsUrl" target="_blank" rel="noopener noreferrer"
                class="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b8aa92] bg-[#e8decb]/50 px-5 py-2.5 font-second text-xs font-semibold uppercase tracking-[0.14em] text-[#514d44] shadow-sm transition-all duration-300 hover:bg-[#e8decb] hover:shadow active:scale-[0.98] sm:text-sm">
                <img src="/icons/map-pin-area-light.svg" alt=""
                  class="size-4 opacity-75 transition-transform duration-300 group-hover:scale-110" />
                <span>Buka di Google Maps</span>
              </a>
            </div>

            <!-- Small ornament -->
            <div class="mt-9 flex items-center justify-center gap-3 text-[#b8aa92] reveal-up"
              style="animation-delay: 580ms">
              <span class="h-px w-10 bg-[#cfc4b1]"></span>

              <span class="animate-sparkle text-[10px]">❧</span>

              <span class="h-px w-10 bg-[#cfc4b1]"></span>
            </div>
          </div>

          <!-- Map -->
          <div class="min-h-[280px] bg-[#e8decb]/30 md:min-h-full reveal-right" style="animation-delay: 320ms">
            <div class="h-full w-full p-3 sm:p-4">
              <div
                class="relative h-full min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[#d8cdbb] bg-[#eee9df] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3986.0358782025573!2d102.69776217496866!3d-2.49506309748356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMjknNDIuMiJTIDEwMsKwNDInMDEuMiJF!5e0!3m2!1sen!2sid!4v1790515834108!5m2!1sen!2sid"
                  title="Lokasi acara pernikahan" class="h-full min-h-[280px] w-full" style="border: 0" loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"></iframe>

                <!-- Floating button on map -->
                <a :href="mapsUrl" target="_blank" rel="noopener noreferrer"
                  class="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#d8cdbb] bg-[#f8f5ee]/95 px-3.5 py-1.5 font-second text-xs font-semibold text-[#514d44] shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg active:scale-95">
                  <span>Petunjuk Arah</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3.5">
                    <path fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const eventRef = ref(null)

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=-2.495063,102.697762'

useRevealOnScroll(eventRef, {
  threshold: 0.1,
  once: true,
})
</script>