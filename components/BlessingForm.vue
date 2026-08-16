<template>
  <section id="rsvp-blessing" class="relative overflow-hidden bg-[#eee9df] px-6 py-20 text-[#4b483f]">
    <!-- Soft decorative glow -->
    <div
      class="pointer-events-none absolute right-0 top-20 h-80 w-80 translate-x-1/3 rounded-full bg-[#e8decb]/25 blur-3xl">
    </div>

    <div class="relative mx-auto max-w-2xl">
      <!-- Header -->
      <div class="mb-12 text-center">
        <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172] sm:text-sm">
          Your Presence Means A Lot
        </p>

        <h2 class="mt-3 font-heading text-4xl font-normal italic tracking-wide text-[#514d44] sm:text-5xl">
          RSVP & Ucapan
        </h2>

        <!-- Ornament -->
        <div class="mt-5 flex items-center justify-center gap-3 text-[#b8aa92]">
          <span class="h-px w-12 bg-[#cfc4b1]"></span>
          <span class="text-xs">✦</span>
          <span class="h-px w-12 bg-[#cfc4b1]"></span>
        </div>

        <p class="mx-auto mt-5 max-w-xl font-second text-sm leading-7 text-[#746d62] sm:text-base">
          Kehadiran dan doa terbaik Anda merupakan kebahagiaan bagi kami.
          Silakan konfirmasi kehadiran dan tinggalkan ucapan untuk kami.
        </p>
      </div>

      <!-- Form -->
      <div
        class="rounded-[2rem] border border-[#d8cdbb] bg-[#f5f0e7]/80 p-6 shadow-[0_20px_60px_rgba(75,72,63,0.07)] backdrop-blur-sm sm:p-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name"
              class="mb-2 block font-second text-xs font-semibold uppercase tracking-[0.15em] text-[#817769]">
              Nama
            </label>

            <input id="name" v-model="form.name" type="text" required placeholder="Masukkan nama Anda"
              class="w-full rounded-2xl border border-[#d8cdbb] bg-[#f8f5ee] px-4 py-3 font-second text-sm text-[#4b483f] outline-none transition placeholder:text-[#aaa092] focus:border-[#b8aa92] focus:ring-2 focus:ring-[#e8decb]/60" />
          </div>

          <!-- Attendance -->
          <div>
            <label for="attending"
              class="mb-2 block font-second text-xs font-semibold uppercase tracking-[0.15em] text-[#817769]">
              Konfirmasi Kehadiran
            </label>

            <select id="attending" v-model="form.attending" required
              class="w-full rounded-2xl border border-[#d8cdbb] bg-[#f8f5ee] px-4 py-3 font-second text-sm text-[#4b483f] outline-none transition focus:border-[#b8aa92] focus:ring-2 focus:ring-[#e8decb]/60">
              <option disabled value="">
                Pilih status kehadiran
              </option>

              <option value="yes">
                Ya, saya akan hadir
              </option>

              <option value="no">
                Maaf, saya tidak bisa hadir
              </option>
            </select>
          </div>

          <!-- Message -->
          <div>
            <label for="message"
              class="mb-2 block font-second text-xs font-semibold uppercase tracking-[0.15em] text-[#817769]">
              Ucapan & Doa
            </label>

            <textarea id="message" v-model="form.message" rows="4" required
              placeholder="Tulis doa atau ucapan terbaik untuk kami..."
              class="w-full resize-none rounded-2xl border border-[#d8cdbb] bg-[#f8f5ee] px-4 py-3 font-second text-sm leading-6 text-[#4b483f] outline-none transition placeholder:text-[#aaa092] focus:border-[#b8aa92] focus:ring-2 focus:ring-[#e8decb]/60"></textarea>
          </div>

          <!-- Submit -->
          <button type="submit"
            class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b8aa92] bg-[#e8decb] px-5 py-3 font-second text-sm font-semibold text-[#514d44] shadow-sm transition duration-300 hover:bg-[#ddd0ba] active:scale-[0.98]">
            <img src="/icons/paper-plane-tilt-light.svg" alt="" class="size-4 opacity-75" />

            <span>Kirim Ucapan</span>
          </button>
        </form>
      </div>

      <!-- Guestbook -->
      <div class="mt-14">
        <div class="text-center">
          <p class="font-second text-xs uppercase tracking-[0.3em] text-[#8a8172]">
            From Our Guests
          </p>

          <h3 class="mt-2 font-heading text-3xl font-normal italic text-[#514d44] sm:text-4xl">
            Ucapan & Kehadiran
          </h3>
        </div>

        <!-- Empty state -->
        <div v-if="entries.length === 0"
          class="mt-8 rounded-[1.75rem] border border-dashed border-[#cfc4b1] bg-[#f5f0e7]/50 px-6 py-10 text-center">
          <p class="font-second text-sm italic text-[#8a8172]">
            Belum ada ucapan yang masuk.
          </p>
        </div>

        <!-- Entries -->
        <ul v-else class="mt-8 space-y-4">
          <li v-for="(entry, index) in entries" :key="entry.id ?? index"
            class="rounded-[1.5rem] border border-[#d8cdbb] bg-[#f5f0e7]/80 p-5 shadow-[0_10px_30px_rgba(75,72,63,0.05)] backdrop-blur-sm">
            <div class="flex items-start gap-4">
              <!-- Attendance icon -->
              <div
                class="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#d8cdbb] bg-[#e8decb]/60">
                <img v-if="entry.attending === 'yes'" src="/icons/check-circle-light.svg" alt="Hadir"
                  class="size-5 opacity-80" />

                <img v-else src="/icons/x-circle-light.svg" alt="Tidak hadir" class="size-5 opacity-60" />
              </div>

              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <p class="font-second text-sm font-semibold text-[#514d44]">
                    {{ entry.name }}
                  </p>

                  <span class="font-second text-[10px] uppercase tracking-[0.12em] text-[#9b907f]">
                    {{
                      entry.attending === 'yes'
                        ? 'Akan hadir'
                        : 'Berhalangan hadir'
                    }}
                  </span>
                </div>

                <p class="mt-2 font-second text-sm leading-7 text-[#6f685d]">
                  “{{ entry.message }}”
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Bottom ornament -->
      <div class="mt-12 flex items-center justify-center gap-3 text-[#b8aa92]">
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
import { ref, onMounted } from 'vue'
import { supabase } from '@/utils/supabase'

const form = ref({
  name: '',
  attending: '',
  message: '',
})

const entries = ref([])

const toast = ref({
  visible: false,
  message: '',
})

const showToast = (message) => {
  toast.value = {
    visible: true,
    message,
  }

  setTimeout(() => {
    toast.value.visible = false
  }, 2000)
}

async function submitForm() {
  const { error } = await supabase.from('guestbook').insert([
    {
      name: form.value.name,
      attending: form.value.attending,
      message: form.value.message,
      created_at: new Date().toISOString(),
    },
  ])

  if (error) {
    console.error(error)
    showToast('Gagal mengirim ucapan!')
    return
  }

  showToast('Ucapan berhasil dikirim!')

  form.value = {
    name: '',
    attending: '',
    message: '',
  }

  await fetchEntries()
}

async function fetchEntries() {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Gagal mengambil data:', error)
    return
  }

  entries.value = data ?? []
}

onMounted(() => {
  fetchEntries()
})
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