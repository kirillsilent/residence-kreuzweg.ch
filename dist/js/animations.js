// ============================
// logo animation
// ============================

// const logo = gsap.utils.toArray('#leaves');

// const tl = gsap.timeline();

// gsap.from('#circle', {
//   opacity: 0,
//   delay: 0.2,
//   duration: 4,
//   scale: 0.1,
//   transformOrigin: '50% 100%',
// });

// logo.forEach((b) => {
//   tl.staggerFromTo(
//     b.children,
//     0.2,
//     {
//       scale: 0.1,
//       opacity: 0,
//       transformOrigin: '50% 100%',
//     },
//     {
//       delay: 0.6,
//       scale: 1,
//       opacity: 1,
//     },
//     0.07,
//     '0'
//   );
// });

// ============================
// H1 Animation
// ============================
// const headerAnim = document.querySelectorAll('.headerAnim');
// gsap.from(headerAnim, {
//   opacity: 0,
//   delay: 1.5,
//   duration: 2.5,
//   y: 50,
//   ease: 'slow(0.7, 0.7, false)',
// });

// ============================
// Text Animation
// ============================
const callback = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (entry.target.dataset.animateDone === '1') return;
    entry.target.dataset.animateDone = '1';
    entry.target.style.animation = slowAnimationDuration(entry.target.dataset.animate);
    if (observer) observer.unobserve(entry.target);
  });
};

let observer;
const SCROLL_ANIMATION_SLOW_FACTOR = 1.85;

function slowAnimationDuration(animationValue) {
  if (!animationValue || typeof animationValue !== 'string') return animationValue;
  let replaced = false;
  return animationValue.replace(/(\d*\.?\d+)s/g, (match, rawValue) => {
    if (replaced) return match;
    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed)) return match;
    replaced = true;
    const slowed = Math.max(0, parsed * SCROLL_ANIMATION_SLOW_FACTOR);
    return `${Number(slowed.toFixed(3))}s`;
  });
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
    });
  }
  return observer;
}

function observeAnimations() {
  const obs = getObserver();
  const items = document.querySelectorAll('.animate');
  items.forEach((item) => {
    if (item.dataset.animateBound === '1') return;
    item.dataset.animateBound = '1';
    obs.observe(item);
  });
}

// ============================
// box animation
// ============================
function initGsapAnimations() {
  if (typeof window === 'undefined' || !window.gsap || !window.ScrollTrigger) return;
  if (window._boxAnimInit) return;
  const $ = window.jQuery || window.$;
  if (!$ || typeof $(window).width !== 'function') return;
  if ($(window).width() <= 1022) return;

  const box = document.querySelectorAll('.box-animation');
  const box2 = document.querySelectorAll('.box-animation2');
  if (!box.length && !box2.length) return;

  window._boxAnimInit = true;
  window.gsap.registerPlugin(window.ScrollTrigger);

  if (box.length) {
    window.gsap.to(box, {
      duration: 1.5,
      y: 60,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: box,
        start: '10% 20%',
        // markers: true,
        toggleActions: 'restart pause restart reset',
      },
    });
  }

  if (box2.length) {
    window.gsap.to(box2, {
      duration: 1.5,
      y: -60,
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: box2,
        start: '-10% 20%',
        // markers: true,
        toggleActions: 'restart pause restart reset',
      },
    });
  }
}

function initAnimations() {
  if (typeof document === 'undefined') return;
  observeAnimations();
  initGsapAnimations();
  if (
    window.gsap &&
    window.ScrollTrigger &&
    window.gsap.core &&
    window.gsap.core.globals &&
    window.gsap.core.globals('ScrollTrigger')
  ) {
    try {
      window.ScrollTrigger.refresh();
    } catch (err) {
      // Avoid breaking app init if ScrollTrigger isn't fully ready.
    }
  }
}

window.initAnimations = initAnimations;

function scheduleInit() {
  if (scheduleInit._pending) return;
  scheduleInit._pending = true;
  requestAnimationFrame(() => {
    scheduleInit._pending = false;
    initAnimations();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations, { once: true });
} else {
  initAnimations();
}

if (window.MutationObserver) {
  const observer = new MutationObserver(scheduleInit);
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      () => observer.observe(document.body, { childList: true, subtree: true }),
      { once: true }
    );
  }
}
