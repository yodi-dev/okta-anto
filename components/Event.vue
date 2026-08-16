<template>
  <section id="event-detail" class="relative overflow-hidden bg-[#f5f0e7] px-6 py-20 text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="pointer-events-none absolute left-0 top-16 h-72 w-72 -translate-x-1/3 rounded-full bg-[#e8decb]/25 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-5xl">
      <!-- Header -->
      <div class="mb-12 text-center">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172] sm:text-sm">
          Our Special Day
        </p>

        <h2 class="mt-3 font-heading text-4xl font-normal italic tracking-wide text-[#514d44] sm:text-5xl">
          Wedding Event
        </h2>

        <!-- Ornament -->
        <div class="mt-5 flex items-center justify-center gap-3 text-[#b8aa92]">
          <span class="h-px w-12 bg-[#cfc4b1]"></span>
          <span class="text-xs">✦</span>
          <span class="h-px w-12 bg-[#cfc4b1]"></span>
        </div>

        <p class="mx-auto mt-5 max-w-xl font-second text-sm leading-7 text-[#746d62] sm:text-base">
          Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i
          untuk hadir dan menjadi bagian dari hari istimewa kami.
        </p>
      </div>

      <!-- Event Card -->
      <div
        class="overflow-hidden rounded-[2rem] border border-[#d8cdbb] bg-[#eee9df]/80 shadow-[0_20px_60px_rgba(75,72,63,0.08)] backdrop-blur-sm"
        data-aos="fade-up">
        <div class="grid md:grid-cols-2">
          <!-- Event Info -->
          <div class="p-7 sm:p-10 lg:p-12">
            <div class="mb-8 text-center">
              <p class="font-second text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9b907f]">
                Wedding Ceremony
              </p>

              <h3 class="mt-2 font-heading text-3xl font-normal italic text-[#514d44] sm:text-4xl">
                Akad & Resepsi
              </h3>
            </div>

            <!-- Date -->
            <div class="flex gap-4">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#e8decb]/70">
                <img src="/icons/calendar-heart-light.svg" alt="" class="size-5 opacity-75" />
              </div>

              <div>
                <p class="font-second text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b907f]">
                  Tanggal
                </p>

                <p class="mt-1 font-second text-sm font-medium leading-6 text-[#5f594f] sm:text-base">
                  Kamis, 17 September 2026
                </p>
              </div>
            </div>

            <!-- Time -->
            <div class="mt-6 flex gap-4">
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
            <div class="mt-6 flex gap-4">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#e8decb]/70">
                <img src="/icons/map-pin-area-light.svg" alt="" class="size-5 opacity-75" />
              </div>

              <div>
                <p class="font-second text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b907f]">
                  Lokasi
                </p>

                <p class="mt-1 font-second text-sm leading-6 text-[#5f594f] sm:text-base">
                  Di kediaman mempelai wanita
                </p>
              </div>
            </div>

            <!-- Small ornament -->
            <div class="mt-9 flex items-center justify-center gap-3 text-[#b8aa92]">
              <span class="h-px w-10 bg-[#cfc4b1]"></span>
              <span class="text-[10px]">❧</span>
              <span class="h-px w-10 bg-[#cfc4b1]"></span>
            </div>
          </div>

          <!-- Map -->
          <div class="min-h-[280px] bg-[#e8decb]/30 md:min-h-full">
            <div class="h-full w-full p-3 sm:p-4">
              <div
                class="h-full min-h-[280px] overflow-hidden rounded-[1.5rem] border border-[#d8cdbb] bg-[#eee9df] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1786888258090!6m8!1m7!1slZ35-dLq_9gjM15PsgPz_w!2m2!1d-2.559985239463272!2d102.7290296496855!3f159.62228!4f0!5f0.7820865974627469"
                  title="Lokasi acara pernikahan" class="h-full min-h-[280px] w-full" style="border: 0" loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>