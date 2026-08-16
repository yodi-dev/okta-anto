<template>
  <section id="gift" class="relative overflow-hidden bg-[#f5f0e7] px-6 py-20 text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e8decb]/25 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-2xl">
      <!-- Header -->
      <div class="text-center">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172] sm:text-sm">
          A Little Gift
        </p>

        <h2 class="mt-3 font-heading text-4xl font-normal italic tracking-wide text-[#514d44] sm:text-5xl">
          Wedding Gift
        </h2>

        <!-- Ornament -->
        <div class="mt-5 flex items-center justify-center gap-3 text-[#b8aa92]">
          <span class="h-px w-12 bg-[#cfc4b1]"></span>
          <span class="text-xs">✦</span>
          <span class="h-px w-12 bg-[#cfc4b1]"></span>
        </div>

        <p class="mx-auto mt-5 max-w-xl font-second text-sm leading-7 text-[#746d62] sm:text-base">
          Doa dan restu Anda adalah hadiah terbaik bagi kami. Namun, jika
          berkenan berbagi kasih, berikut informasi untuk mengirimkan tanda
          kasih.
        </p>
      </div>

      <!-- Bank Cards -->
      <div class="mt-10 space-y-5">
        <article v-for="(bank, idx) in banks" :key="idx"
          class="relative overflow-hidden rounded-[1.75rem] border border-[#d8cdbb] bg-[#eee9df]/80 p-6 shadow-[0_14px_40px_rgba(75,72,63,0.07)] backdrop-blur-sm sm:p-7">
          <!-- Decorative circle -->
          <div class="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-[#e8decb]/60"></div>

          <div class="relative z-10">
            <!-- Bank -->
            <div class="flex items-center gap-3">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#f5f0e7]">
                <img src="/icons/buildings-light.svg" alt="" class="size-5 opacity-75" />
              </div>

              <div>
                <p class="font-second text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b907f]">
                  Bank
                </p>

                <p class="font-heading text-2xl font-normal italic text-[#514d44]">
                  {{ bank.name }}
                </p>
              </div>
            </div>

            <!-- Account -->
            <div class="mt-6 rounded-2xl border border-[#d8cdbb] bg-[#f8f5ee]/70 p-4">
              <p class="font-second text-[10px] uppercase tracking-[0.18em] text-[#9b907f]">
                Nomor Rekening
              </p>

              <p class="mt-1 break-all font-mono text-lg tracking-[0.12em] text-[#4b483f] sm:text-xl">
                {{ bank.account }}
              </p>

              <p class="mt-2 font-second text-sm italic text-[#746d62]">
                a.n. {{ bank.owner }}
              </p>
            </div>

            <!-- Copy Button -->
            <button @click="copyToClipboard(bank.account)"
              class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b8aa92] bg-[#e8decb]/50 px-5 py-2.5 font-second text-sm font-semibold text-[#514d44] shadow-sm transition duration-300 hover:bg-[#e8decb] active:scale-[0.98]">
              <img src="/icons/copy-light.svg" alt="" class="size-4 opacity-75" />

              <span>Salin Nomor Rekening</span>
            </button>
          </div>
        </article>
      </div>

      <!-- Bottom ornament -->
      <div class="mt-10 flex items-center justify-center gap-3 text-[#b8aa92]">
        <span class="h-px w-10 bg-[#cfc4b1]"></span>
        <span class="text-[10px]">❧</span>
        <span class="h-px w-10 bg-[#cfc4b1]"></span>
      </div>
    </div>

    <!-- Toast -->
    <transition name="fade">
      <div v-if="toast.visible"
        class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[#d8cdbb] bg-[#4b483f]/95 px-5 py-2.5 font-second text-sm text-[#f8f5ee] shadow-lg backdrop-blur-sm">
        {{ toast.message }}
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const banks = ref([
  {
    name: 'Bank BNI',
    account: '904054278',
    owner: 'Sintia Oktarina',
  },
  {
    name: 'Dana',
    account: '0821 8243 4538',
    owner: 'Sintia Oktarina',
  },
])

const toast = ref({
  visible: false,
  message: '',
})

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)

    toast.value.message = 'Nomor rekening disalin!'
    toast.value.visible = true

    setTimeout(() => {
      toast.value.visible = false
    }, 2000)
  } catch {
    toast.value.message = 'Gagal menyalin nomor rekening'
    toast.value.visible = true

    setTimeout(() => {
      toast.value.visible = false
    }, 2000)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>