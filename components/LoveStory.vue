<template>
  <section ref="loveStoryRef" id="love-story" class="relative overflow-hidden bg-[#eee9df] px-6 py-20 text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="animate-soft-float pointer-events-none absolute right-0 top-20 h-72 w-72 translate-x-1/3 rounded-full bg-[#e8decb]/20 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-3xl">
      <!-- Header -->
      <div class="mb-14 text-center reveal-up">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172] sm:text-sm">
          Our Journey
        </p>

        <h2 class="mt-3 font-heading text-4xl font-normal italic tracking-wide text-[#514d44] sm:text-5xl">
          Love Story
        </h2>

        <!-- Ornament -->
        <div class="mt-5 flex items-center justify-center gap-3 text-[#b8aa92]">
          <span class="h-px w-12 bg-[#cfc4b1]"></span>

          <span class="animate-sparkle text-xs">✦</span>

          <span class="h-px w-12 bg-[#cfc4b1]"></span>
        </div>

        <p class="mx-auto mt-5 max-w-xl font-second text-sm leading-7 text-[#746d62] sm:text-base">
          Setiap perjalanan memiliki cerita. Inilah beberapa kisah yang
          mengantarkan kami hingga sampai pada hari bahagia ini.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#d8cdbb] via-[#b8aa92] to-[#d8cdbb] sm:left-5">
        </div>

        <div class="space-y-8 sm:space-y-10">
          <div v-for="(event, idx) in timeline" :key="idx" class="group relative pl-12 sm:pl-14 reveal-up"
            :style="{ animationDelay: `${180 + idx * 140}ms` }">
            <!-- Timeline icon -->
            <div
              class="absolute left-0 top-1 z-10 flex size-8 items-center justify-center rounded-full border-2 border-[#f8f5ee] bg-[#e8decb] shadow-[0_4px_12px_rgba(75,72,63,0.12)] transition duration-300 group-hover:scale-110 sm:left-1 sm:size-9">
              <img :src="event.icon" alt="" class="size-4 object-contain opacity-75 sm:size-[18px]" />
            </div>

            <!-- Story card -->
            <article
              class="rounded-[1.5rem] border border-[#d8cdbb] bg-[#f5f0e7]/75 p-5 shadow-[0_10px_30px_rgba(75,72,63,0.06)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_35px_rgba(75,72,63,0.10)] sm:p-6">
              <!-- Year + title -->
              <div class="flex items-center gap-3">
                <span class="font-heading text-2xl font-normal italic leading-none text-[#9b907f] sm:text-3xl">
                  {{ event.year }}
                </span>

                <span class="h-px w-8 bg-[#cfc4b1]"></span>

                <p class="font-second text-xs font-semibold uppercase tracking-[0.18em] text-[#817769] sm:text-sm">
                  {{ event.title }}
                </p>
              </div>

              <!-- Description -->
              <p class="mt-4 font-second text-sm leading-7 text-[#625c52] sm:text-[15px] sm:leading-8">
                {{ event.description }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealOnScroll } from '~/composables/useRevealOnScroll'

const loveStoryRef = ref(null)

useRevealOnScroll(loveStoryRef, {
  threshold: 0.1,
  once: true,
})

const timeline = ref([
  {
    year: '2023',
    title: 'Pertemuan',
    description:
      'Percayalah, tidak ada yang kebetulan di dunia ini. Semua telah tersusun rapi oleh Sang Pencipta. Berawal dari perkenalan singkat melalui media sosial TikTok pada tahun 2023, kami memutuskan untuk bertemu secara langsung. Siapa sangka, pertemuan sederhana di Kedai Baper, Singkut, menjadi awal dari kisah cinta kami.',
    icon: '/icons/user-heart.svg',
  },
  {
    year: '2024',
    title: 'Menjalin Hubungan',
    description:
      'Perjalanan cinta kami bukanlah tanpa ujian. Bukan hanya dipenuhi kebahagiaan, tetapi juga air mata, keraguan, dan waktu yang menguji keyakinan. Bahkan, sempat terlintas keinginan untuk menyerah. Entah sudah berapa kali kami saling memaafkan, namun cinta selalu menemukan jalan untuk menguatkan dan membuat kami tetap bertahan.',
    icon: '/icons/chart-circles.svg',
  },
  {
    year: '2026',
    title: 'Lamaran',
    description:
      'Setelah menjalani hubungan yang tidak sebentar, atas kehendak-Nya serta restu dari orang tua dan keluarga, kami melangsungkan lamaran pada 18 Juni 2026. Sebuah langkah kecil yang menjadi awal menuju perjalanan yang lebih serius.',
    icon: '/icons/rings.svg',
  },
  {
    year: '2026',
    title: 'Menikah',
    description:
      'Percayalah, bukan karena bertemu lalu berjodoh, tetapi karena berjodoh-lah kami dipertemukan. Setelah melalui begitu banyak cerita, tawa, air mata, dan perjuangan, kini kami memilih untuk melangkah bersama, mengikat janji suci dalam sebuah pernikahan. Semoga perjalanan ini menjadi awal dari kisah yang akan kami tuliskan bersama, selamanya.',
    icon: '/icons/heart-light.svg',
  },
])
</script>