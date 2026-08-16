<template>
  <div class="min-h-screen bg-[#eee9df] text-[#4b483f] antialiased selection:bg-[#e8decb] selection:text-[#403c32]">
    <Landing v-if="!showInvitation" @open="showInvitation = true" />

    <template v-else>
      <Countdown />
      <AyatArRum />
      <BridgeGroum />
      <LoveStory />
      <Event />
      <Gallery />
      <Gift />
      <BlessingForm />
      <ThankYou />
      <AudioPlayer />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Landing from '~/components/Landing.vue'
import Countdown from '~/components/Countdown.vue'
import AyatArRum from '@/components/AyatArRum.vue'
import BridgeGroum from '~/components/BridgeGroum.vue'
import LoveStory from '@/components/LoveStory.vue'
import Event from '@/components/Event.vue'
import Gallery from '@/components/Gallery.vue'
import Gift from '@/components/Gift.vue'
import BlessingForm from '@/components/BlessingForm.vue'
import ThankYou from '~/components/ThankYou.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'

const showInvitation = ref(false)

useSeoMeta({
  title: 'Okta & Anto — Undangan Pernikahan',
  description:
    'Undangan pernikahan Okta & Anto. Temukan informasi acara, lokasi, jadwal, dan detail hari bahagia kami.',
  ogTitle: 'Okta & Anto — Undangan Pernikahan',
  ogDescription:
    'Kami mengundang Anda untuk hadir di hari bahagia Okta & Anto.',
  ogImage: 'https://undangy-okta-anto.vercel.app/images/1.webp',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogUrl: 'https://undangy-okta-anto.vercel.app',
  twitterCard: 'summary_large_image'
})
</script>