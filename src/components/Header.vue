<template>
  <header class="header">
    <div class="header__inner">
      <router-link to="/projet" class="header__logo">
        <span class="header__logo-text">Residence Kreuzweg</span>
      </router-link>
      <nav class="header__nav">
        <router-link to="/projet" class="header__link">{{ t('nav.project') }}</router-link>
        <router-link to="/situation" class="header__link">{{ t('nav.situation') }}</router-link>
        <router-link to="/appartements" class="header__link">{{ t('nav.apartments') }}</router-link>
        <router-link to="/galerie" class="header__link">{{ t('nav.gallery') }}</router-link>
        <router-link to="/plans" class="header__link">{{ t('nav.plans') }}</router-link>
        <router-link to="/baufortschritt" class="header__link">{{ t('nav.downloads') }}</router-link>
        <router-link to="/contact" class="header__link">{{ t('nav.contact') }}</router-link>
      </nav>
      <button
        class="header__burger"
        :aria-label="t('nav.menu')"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav v-if="mobileMenuOpen" class="header__nav-mobile">
      <router-link to="/projet" class="header__link">{{ t('nav.project') }}</router-link>
      <router-link to="/situation" class="header__link">{{ t('nav.situation') }}</router-link>
      <router-link to="/appartements" class="header__link">{{ t('nav.apartments') }}</router-link>
      <router-link to="/galerie" class="header__link">{{ t('nav.gallery') }}</router-link>
      <router-link to="/plans" class="header__link">{{ t('nav.plans') }}</router-link>
      <router-link to="/baufortschritt" class="header__link">{{ t('nav.downloads') }}</router-link>
      <router-link to="/contact" class="header__link">{{ t('nav.contact') }}</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const mobileMenuOpen = ref(false)
const route = useRoute()
const { t } = useI18n()

watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
