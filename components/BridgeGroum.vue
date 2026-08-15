<template>
  <section class="relative overflow-hidden bg-[#f5f0e7] px-6 py-20 text-center text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e8decb]/30 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-5xl">
      <!-- Header -->
      <div class="mx-auto mb-12 max-w-2xl">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172] sm:text-sm">
          Bride & Groom
        </p>

        <h2 class="mt-3 font-heading text-3xl font-normal italic text-[#514d44] sm:text-4xl">
          Assalamu'alaikum Wr. Wb.
        </h2>

        <!-- Ornament -->
        <div class="my-5 flex items-center justify-center gap-3 text-[#b8aa92]">
          <span class="h-px w-10 bg-[#cfc4b1]"></span>
          <span class="text-xs">✦</span>
          <span class="h-px w-10 bg-[#cfc4b1]"></span>
        </div>

        <p class="font-second text-sm leading-7 text-[#6f685d] sm:text-base sm:leading-8">
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
        </p>
      </div>

      <!-- Couple Card -->
      <div
        class="rounded-[2rem] border border-[#d8cfbf] bg-[#eee9df]/80 px-5 py-10 shadow-[0_20px_60px_rgba(75,72,63,0.08)] backdrop-blur-sm md:px-10 md:py-12">
        <div class="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-6">
          <!-- Bride -->
          <div class="flex-1">
            <div class="group mx-auto w-fit">
              <div class="rounded-full border border-[#d8cdbb] bg-[#f8f5ee] p-2 shadow-sm">
                <img src="/images/wanita.webp" alt="Sintia Oktarina"
                  class="h-52 w-52 rounded-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-60 sm:w-60 md:h-64 md:w-64" />
              </div>
            </div>

            <h3 class="mt-6 font-heading text-3xl font-normal italic text-[#514d44]">
              Sintia Oktarina
            </h3>

            <div class="mx-auto my-3 flex items-center justify-center gap-2">
              <span class="h-px w-8 bg-[#cfc4b1]"></span>
              <span class="text-[10px] text-[#b8aa92]">✦</span>
              <span class="h-px w-8 bg-[#cfc4b1]"></span>
            </div>

            <p class="mx-auto max-w-xs font-second text-xs leading-6 text-[#746d62] sm:text-sm sm:leading-7">
              Putri Kedua dari Bapak Hartono dan Ibu Ida rusmiana
            </p>

            <a href="https://instagram.com/sintia_oktarina2" target="_blank" rel="noopener noreferrer"
              class="mt-3 inline-block font-second text-xs tracking-wide text-[#817769] underline underline-offset-4 transition hover:text-[#4b483f]">
              @sintia_oktarina2
            </a>
          </div>

          <!-- Ring / Connection -->
          <div class="flex shrink-0 items-center justify-center text-[#b8aa92]">
            <div class="hidden items-center gap-3 md:flex">
              <span class="h-px w-12 bg-[#cfc4b1]"></span>

              <img src="/icons/ring.png" alt="Cincin pernikahan" class="h-9 w-9 opacity-75" />

              <span class="h-px w-12 bg-[#cfc4b1]"></span>
            </div>

            <!-- Mobile -->
            <div class="flex flex-col items-center gap-2 md:hidden">
              <span class="h-8 w-px bg-[#cfc4b1]"></span>

              <img src="/icons/ring.png" alt="Cincin pernikahan" class="h-8 w-8 opacity-75" />

              <span class="h-8 w-px bg-[#cfc4b1]"></span>
            </div>
          </div>

          <!-- Groom -->
          <div class="flex-1">
            <div class="group mx-auto w-fit">
              <div class="rounded-full border border-[#d8cdbb] bg-[#f8f5ee] p-2 shadow-sm">
                <img src="/images/pria.webp" alt="Slamet gianto"
                  class="h-52 w-52 rounded-full object-cover object-[center_35%] transition duration-500 group-hover:scale-[1.02] sm:h-60 sm:w-60 md:h-64 md:w-64" />
              </div>
            </div>

            <h3 class="mt-6 font-heading text-3xl font-normal italic text-[#514d44]">
              Slamet gianto
            </h3>

            <div class="mx-auto my-3 flex items-center justify-center gap-2">
              <span class="h-px w-8 bg-[#cfc4b1]"></span>
              <span class="text-[10px] text-[#b8aa92]">✦</span>
              <span class="h-px w-8 bg-[#cfc4b1]"></span>
            </div>

            <p class="mx-auto max-w-xs font-second text-xs leading-6 text-[#746d62] sm:text-sm sm:leading-7">
              Putra Pertama dari Bapak Irwan Santoso & Ibu Musripah
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>