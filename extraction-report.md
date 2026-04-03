# Residence des Muses - HTML & CSS Extraction Report

## 1. ALL LINKED CSS FILES (Stylesheets)

| Order | URL | Purpose |
|-------|-----|---------|
| 1 | https://use.typekit.net/lzq7dvv.css | Adobe Typekit font |
| 2 | https://use.typekit.net/pkw1pss.css | Adobe Typekit font |
| 3 | https://use.typekit.net/uha3rra.css | Adobe Typekit font |
| 4 | https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css | Cookie consent |
| 5 | **https://residence-des-muses.ch/wp-content/themes/avp/style.css** | **Main theme stylesheet** |
| 6 | https://residence-des-muses.ch/wp-content/plugins/avp-control/style.css?ver=6.3 | AVP plugin (tables, controls) |
| 7 | https://residence-des-muses.ch/wp-includes/css/dist/block-library/style.min.css?ver=6.3 | WordPress block library |

---

## 2. HTML STRUCTURE

### HEAD
- meta charset UTF-8, viewport, theme-color
- jQuery 3.3.1 from Google CDN
- Favicon links (apple-touch-icon, favicon 32x32, 16x16)
- Google Analytics (gtag)
- Cookie consent (cookieconsent-config.js)

### HEADER (fixed, 130px height)
```html
<header>
  <div class="header-contact">
    <div>
      <div><a href="tel:+41..."><img src=".../telephone.png"/></a></div>
      <div><a href="mailto:info@..."><img src=".../email.png"/></a></div>
      <div><a href="lrm-services.ch"><img src=".../LRM-logo.svg"/></a></div>
    </div>
  </div>
  <div class="width">
    <div class="logo">
      <a href="/"><img src=".../logo.png" alt="Residence de Muses logo"/></a>
    </div>
    <nav class="menu">
      <div class="menu-main-menu-container">
        <ul id="menu-main-menu" class="menu">
          <li class="menu-item ..."><a href="/projet/">Projet</a></li>
          <li class="menu-item ..."><a href="/situation/">Situation</a></li>
          <li class="menu-item ..."><a href="/appartements/">Appartements</a></li>
          <li class="menu-item ..."><a href="/galerie/">Galerie</a></li>
          <li class="menu-item ..."><a href="/plans/">Plans&Prix</a></li>
          <li class="menu-item ..."><a href="/telechargements/">Telechargements</a></li>
          <li class="menu-item ..."><a href="/contact/">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>
```

### MOBILE MENU BUTTON
```html
<button id="menu-btn"><span></span></button>
```

### LOADING OVERLAY
```html
<div id="loading">
  <div><img src=".../logo.png" alt="Residence de Muses logo"/></div>
</div>
```

### MAIN - HOME (id="accueil")
- section.main-section: slider + txt (h1) + slider-controlers
- section.tree-columns.width: 3 columns (logo, h2, text)
- section.fullImg: full-width background image + overlay CTA

### MAIN - SITUATION (id="situation")
- section.main-section: slider + txt (h1.bigger) + slider-controlers
- section.two-columns.width: txt + img (map)
- section.two-columns.width.padding-bottom: img + txt + fullscreenMap modal
- section.fullImg: background Coffrane.jpg

### FOOTER
```html
<footer>
  <div class="width">
    <div class="footer-details">
      <div><p>LRM Services Sarl...</p></div>
      <div><a><img src=".../LRM-logo.svg"/></a></div>
      <div><p>Romano Marco...</p></div>
    </div>
    <p class="avp-details">Images et plans non contractuels...</p>
  </div>
</footer>
```

---

## 3. PAGE-SPECIFIC INLINE STYLES (active menu underline)

**Home page:**
```css
#menu-item-27 a:after { opacity: 1; }
```

**Situation page:**
```css
#menu-item-25 a:after { opacity: 1; }
```

### INLINE BACKGROUND IMAGES
- .fullImg: style="background-image: url(...)"
- Home: imgs/vis/4.jpg
- Situation: imgs/Coffrane.jpg

---

## 4. KEY CLASS NAMES & STRUCTURE

### Layout
- .width (1160px container, margin auto)
- .tree-columns (3 columns, flex, 25% each)
- .two-columns (60% / 32% split)
- .main-section (100vh, relative, slider)
- .fullImg (100vh, parallax background)

### Header
- .header-contact, .headerActive
- .logo, .menu, .menu-main-menu
- .menu-item, .menu-main-menu-container

### Content
- .slider-container, .mySlides, .slider-controlers, .slider-arrows
- .txt, .nav-btn
- .small-logo, .btn
- .animate (data-animate for GSAP)
- .imgShow, #fullscreenMap, .close
- .full-img-wrap, .full-border, #full-img

### Footer
- .footer-details, .avp-details

---

## 5. KEY STYLE RULES (from style.css)

### Colors
- Text primary: #404a54
- Headings: #303030, #1c2125
- Accent: #a79a8b (italic spans)
- Background dark: #303030
- White/light: #f5f5f5
- Border/buttons: #303030

### Typography
- h1: 64px, freight-big-pro, uppercase, white + text-shadow
- h2: 52px, freight-big-pro, #404a54
- h3: 25px, #404a54
- p, li, a: 18px, oswald, #404a54

### Header
- Fixed, 130px height, z-index 999
- .headerActive: background rgba(255,255,255,.6)
- Nav links: underline on hover (:after pseudo)

### Layout
- .width: 1160px, responsive breakpoints at 1360, 1090, 850, 650, 450px
- Mobile: hamburger #menu-btn, menu slides from right

### Animations
- animContent, animImage keyframes
- GSAP for scroll animations
- Loading overlay: opacity transition

