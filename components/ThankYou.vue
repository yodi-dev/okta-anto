<template>
  <section id="closing" class="relative overflow-hidden bg-[#e8decb] px-6 py-20 text-center text-[#4b483f]">
    <!-- Soft glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#fffdf8]/30 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-2xl">
      <!-- Closing message -->
      <div>
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#817769] sm:text-sm">
          With Love
        </p>

        <h2 class="mt-3 font-heading text-4xl font-normal italic tracking-wide text-[#514d44] sm:text-5xl">
          Terima Kasih
        </h2>

        <!-- Ornament -->
        <div class="mt-5 flex items-center justify-center gap-3 text-[#a99a82]">
          <span class="h-px w-12 bg-[#c7baa5]"></span>
          <span class="text-xs">✦</span>
          <span class="h-px w-12 bg-[#c7baa5]"></span>
        </div>

        <p class="mx-auto mt-5 max-w-xl font-second text-sm leading-7 text-[#6f685d] sm:text-base">
          Terima kasih atas doa dan restu yang telah diberikan kepada kami.
          Semoga cinta, kebahagiaan, dan kebaikan selalu menyertai setiap
          langkah kita.
        </p>
      </div>

      <!-- Couple photo -->
      <div class="mx-auto mt-10 max-w-md">
        <div class="rounded-[2rem] border border-[#cfc4b1] bg-[#f8f5ee] p-2 shadow-[0_20px_50px_rgba(75,72,63,0.12)]">
          <img src="/images/3.webp" alt="Foto Okta dan Anto" class="w-full rounded-[1.5rem] object-cover"
            loading="lazy" />
        </div>
      </div>

      <!-- Couple names -->
      <div class="mt-8">
        <p class="font-second text-[10px] uppercase tracking-[0.3em] text-[#8f806b] sm:text-xs">
          Kami yang berbahagia
        </p>

        <h3 class="mt-2 font-heading text-3xl font-normal italic text-[#514d44] sm:text-4xl">
          Okta & Anto
        </h3>
      </div>

      <!-- Footer -->
      <footer class="mt-14 border-t border-[#cfc4b1]/70 pt-7 font-second text-[11px] leading-6 text-[#817769]">
        <!-- Music attribution -->
        <p class="italic">
          Musik: "You'll Be in My Heart" - Niki.
        </p>

        <!-- Icon attribution -->
        <p class="mt-1">
          Ikon oleh
          <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer"
            class="underline underline-offset-2 transition hover:text-[#4b483f]">
            Freepik
          </a> &
          <a href="https://phosphoricons.com/" target="_blank" rel="noopener noreferrer"
            class="underline underline-offset-2 transition hover:text-[#4b483f]">
            Phosphor
          </a>
        </p>

        <!-- Developer credit -->
        <p class="mt-3 font-medium text-[#6f685d]">
          Made with
          <span class="text-[#a99a82]">♥</span>
          by
          <a href="https://awanbeo.my.id" target="_blank" rel="noopener noreferrer"
            class="underline underline-offset-2 transition hover:text-[#4b483f]">
            awanbeo.my.id
          </a>
        </p>
      </footer>
    </div>
  </section>
</template>