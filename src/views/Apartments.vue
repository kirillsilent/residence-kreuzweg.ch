<template>
  <main id="appartements" class="page page-apartments">
    <section class="main-section">
      <div class="slider-container">
        <img v-for="img in heroSlides" :key="img" class="mySlides" :src="img" alt="Residence Kreuzweg" />
      </div>
      <div class="slider-controlers">
        <div class="slider-arrows">
          <span @click="changeImg(-1)" class="nav-btn">&#10094;</span>
          <span @click="changeImg(1)" class="nav-btn">&#10095;</span>
        </div>
      </div>
      <div class="txt">
        <div>
          <h1 class="page-title">{{ t('apartments.title') }}</h1>
        </div>
      </div>
    </section>

    <section class="two-columns width">
      <div class="txt">
        <h2 class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">{{ t('apartments.heading') }}</h2>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .14s forwards">{{ t('apartments.intro1') }}</p>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .24s forwards">{{ t('apartments.intro2') }}</p>
      </div>
      <div class="img animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .18s forwards">
        <img :src="baseUrl + 'imgs/vis/13.webp'" alt="Residence Kreuzweg" />
      </div>
    </section>

    <section class="two-columns width">
      <div class="img animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">
        <img :src="baseUrl + 'imgs/vis/12.webp'" alt="Residence Kreuzweg" />
      </div>
      <div class="txt">
        <h2 class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">{{ t('apartments.buildTitle') }}</h2>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .14s forwards">{{ t('apartments.buildIntro') }}</p>
        <p class="animate apartments-lead" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .22s forwards">{{ t('apartments.buildLead') }}</p>
        <ul class="apartments-feature-list animate" data-animate="animFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) .30s forwards">
          <li v-for="(item, index) in t('apartments.buildFeatures')" :key="index">{{ item }}</li>
        </ul>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .38s forwards">{{ t('apartments.buildOutro1') }}</p>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .46s forwards">{{ t('apartments.buildOutro2') }}</p>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .54s forwards">{{ t('apartments.buildOutro3') }}</p>
      </div>
    </section>

    <section class="extra-txt">
      <div class="width">
        <img class="small-logo animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards" :src="baseUrl + 'imgs/logos/logo-rewus.svg'" alt="" />
        <h3 class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .14s forwards">{{ t('apartments.technologyTitle') }}</h3>
        <p class="animate apartments-tech-text" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .24s forwards">{{ t('apartments.technologyText') }}</p>
      </div>
    </section>

    <section class="two-columns padding-bottom width">
      <div class="txt">
        <h2 class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .05s forwards">{{ t('apartments.customizationTitle') }}</h2>
        <p class="animate" data-animate="animFloatUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) .14s forwards">{{ t('apartments.customizationText') }}</p>
      </div>
      <div class="img animate" data-animate="animFloatUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) .18s forwards">
        <img class="imgShow" :src="baseUrl + 'imgs/vis/masterplan.webp'" :data-src="baseUrl + 'imgs/vis/masterplan.webp'" alt="Residence Kreuzweg" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, inject } from 'vue'
import { useI18n } from '../composables/useI18n'
import { resolveHeroExtras } from '../composables/useHeroImages'

const baseUrl = inject('baseUrl', '/')
const { t } = useI18n()

const heroSlides = computed(() => [
  // The previous first slide referenced a missing file (`imgs/vis/3.webp`).
  baseUrl + 'imgs/vis/10.webp',
  ...resolveHeroExtras('/appartements', baseUrl),
])

function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}
</script>
