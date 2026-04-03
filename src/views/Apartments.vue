<template>
  <main id="appartements" class="page page-apartments">
    <section class="main-section">
      <div class="slider-container">
        <img class="mySlides" :src="baseUrl + 'imgs/vis/3.webp'" alt="Residence de Muses" />
        <img class="mySlides" :src="baseUrl + 'imgs/vis/7.webp'" alt="Residence de Muses" />
        <img class="mySlides" :src="baseUrl + 'imgs/vis/9.webp'" alt="Residence de Muses" />
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
        <h2 class="animate" data-animate="animContent 0.3s .5s forwards">{{ t('apartments.heading') }}</h2>
        <p class="animate" data-animate="animContent 0.3s .8s forwards">{{ t('apartments.p1') }}</p>
        <a :href="baseUrl + 'files/Residence_Des_Muses-brochure.pdf'" class="btn animate" data-animate="animContent 0.3s 1.2s forwards" target="_blank" rel="noopener">{{ t('apartments.brochure') }}</a>
      </div>
      <div class="img animate" data-animate="animContent 0.3s 1.2s forwards">
        <img :src="baseUrl + 'imgs/vis/11.webp'" alt="Residence de Muses" />
      </div>
    </section>

    <section class="two-columns width">
      <div class="img animate" data-animate="animContent 0.3s .5s forwards">
        <img :src="baseUrl + 'imgs/vis/12.webp'" alt="Residence de Muses" />
      </div>
      <div class="txt">
        <p class="animate" data-animate="animContent 0.3s .8s forwards">{{ t('apartments.energyIntro') }}</p>
        <ul class="animate" data-animate="animContent 0.3s 1s forwards">
          <li>{{ t('apartments.energy1') }}</li>
          <li>{{ t('apartments.energy2') }}</li>
        </ul>
        <p class="txt animate" data-animate="animContent 0.3s 1.2s forwards">{{ t('apartments.budgetsIntro') }}<br /><br />{{ t('apartments.budgetsIntro2') }}<br /><br />{{ t('apartments.budgetsTitle') }}</p>
        <ul class="ul animate" data-animate="animContent 0.3s 1.4s forwards">
          <li><span>{{ t('apartments.budgetSanitary') }}</span><span> CHF 15'000.-</span></li>
          <li><span>{{ t('apartments.budgetKitchen') }}</span><span> CHF 35'000.-</span></li>
          <li><span>{{ t('apartments.budgetTiles') }}</span><span> CHF 50.-/m2</span></li>
          <li><span>{{ t('apartments.budgetParquet') }}</span><span> CHF 90.-/m2</span></li>
        </ul>
      </div>
    </section>

    <section class="extra-txt">
      <div class="width">
        <img class="small-logo animate" data-animate="animContent 0.3s .6s forwards" :src="baseUrl + 'imgs/logos/logo-rewus.svg'" alt="" />
        <h3 class="animate" data-animate="animContent 0.3s .8s forwards">{{ t('apartments.ctaText') }}</h3>
        <router-link to="/contact" class="btn animate" data-animate="animContent 0.3s 1s forwards">{{ t('apartments.ctaButton') }}</router-link>
      </div>
    </section>

    <section class="two-columns padding-bottom width">
      <div class="txt">
        <h2 class="animate" data-animate="animContent 0.3s .5s forwards">{{ t('apartments.exteriorTitle') }}</h2>
        <p class="animate" data-animate="animContent 0.3s .8s forwards">{{ t('apartments.exteriorText') }}</p>
      </div>
      <div class="img animate" data-animate="animContent 0.3s 1.2s forwards">
        <img class="imgShow" :src="baseUrl + 'imgs/vis/masterplan.webp'" :data-src="baseUrl + 'imgs/vis/masterplan.webp'" alt="Residence de Muses" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { inject } from 'vue'
import { useI18n } from '../composables/useI18n'

const baseUrl = inject('baseUrl', '/')
const { t } = useI18n()

function changeImg(n) {
  if (typeof window !== 'undefined' && window.changeImg) window.changeImg(n)
}
</script>
