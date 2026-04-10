<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__content">
        <div class="footer__logo">Residence Kreuzweg</div>
        <div class="footer__info">
          <p class="footer__company">LRM Services Sàrl</p>
          <p class="footer__address">Route de La Neuveville 37</p>
          <p class="footer__address">2525 Le Landeron</p>
        </div>
        <div class="footer__contact">
          <p class="footer__name">Romano Marco</p>
          <a href="mailto:info@lrmservices.ch" class="footer__link">info@lrmservices.ch</a>
          <a href="tel:+41798942252" class="footer__link">+41 79 894 22 52</a>
        </div>
      </div>
      <p class="footer__legal">{{ t('footer.legal') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>
