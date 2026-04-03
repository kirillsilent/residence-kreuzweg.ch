# Download all assets for localization
$base = "https://residence-des-muses.ch/wp-content/themes/avp"
$plugin = "https://residence-des-muses.ch/wp-content/plugins/avp-control"
$public = "public"

$dirs = @(
    "$public/imgs/vis",
    "$public/imgs/logos",
    "$public/imgs/icons",
    "$public/imgs/maps",
    "$public/files",
    "$public/css",
    "$public/js",
    "$public/fonts"
)
foreach ($d in $dirs) { New-Item -ItemType Directory -Force -Path $d | Out-Null }

$images = @(
    "$base/imgs/vis/1.jpg", "$base/imgs/vis/2.jpg", "$base/imgs/vis/3.jpg", "$base/imgs/vis/4.jpg",
    "$base/imgs/vis/5.jpg", "$base/imgs/vis/6.jpg", "$base/imgs/vis/7.jpg", "$base/imgs/vis/8.jpg",
    "$base/imgs/vis/9.jpg", "$base/imgs/vis/10.jpg", "$base/imgs/vis/11.jpg", "$base/imgs/vis/12.jpg",
    "$base/imgs/vis/13.jpg", "$base/imgs/vis/1-night.jpg", "$base/imgs/vis/masterplan.jpg",
    "$base/imgs/photomontage-small.jpg", "$base/imgs/Coffrane.jpg",
    "$base/imgs/logos/logo.png", "$base/imgs/logos/logo-accent.svg",
    "$base/imgs/logos/LRM-logo.svg", "$base/imgs/logos/LRM-logo-contact.svg",
    "$base/imgs/logos/adt-logo.png", "$base/imgs/logos/logo-AXA.svg", "$base/imgs/logos/padea-logo.png",
    "$base/imgs/icons/telephone.png", "$base/imgs/icons/email.png", "$base/imgs/icons/brochure.png",
    "$base/imgs/icons/telephone.svg", "$base/imgs/icons/mail.svg", "$base/imgs/icons/pin.svg",
    "$base/imgs/maps/residence-de-muses-map.png", "$base/imgs/maps/residence-de-muses-map2.png",
    "$base/imgs/LRM_Marco_Romano.jpg"
)

foreach ($url in $images) {
    $name = Split-Path $url -Leaf
    $sub = if ($url -match "/vis/") { "imgs/vis" } elseif ($url -match "/logos/") { "imgs/logos" } elseif ($url -match "/icons/") { "imgs/icons" } elseif ($url -match "/maps/") { "imgs/maps" } else { "imgs" }
    $out = "$public/$sub/$name"
    Write-Host "Downloading $name..."
    try { Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing } catch { Write-Host "  FAILED: $_" }
}

# PDFs
$pdfs = @(
    "$base/files/Residence_Des_Muses_Plans.pdf",
    "$base/files/R%C3%A9sidence_Des_Muses-brochure.pdf"
)
foreach ($url in $pdfs) {
    $name = if ($url -match "Plans") { "Residence_Des_Muses_Plans.pdf" } else { "Residence_Des_Muses-brochure.pdf" }
    Write-Host "Downloading $name..."
    try { Invoke-WebRequest -Uri $url -OutFile "$public/files/$name" -UseBasicParsing } catch { Write-Host "  FAILED: $_" }
}

# CSS
Write-Host "Downloading style.css..."
Invoke-WebRequest -Uri "$base/style.css" -OutFile "$public/css/style.css" -UseBasicParsing
Write-Host "Downloading avp-control.css..."
Invoke-WebRequest -Uri "$plugin/style.css" -OutFile "$public/css/avp-control.css" -UseBasicParsing

# Scripts
Write-Host "Downloading animations.js..."
Invoke-WebRequest -Uri "$base/js/animations.js" -OutFile "$public/js/animations.js" -UseBasicParsing
Write-Host "Downloading jQuery..."
Invoke-WebRequest -Uri "https://code.jquery.com/jquery-3.3.1.min.js" -OutFile "$public/js/jquery.min.js" -UseBasicParsing
Write-Host "Downloading GSAP..."
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js" -OutFile "$public/js/gsap.min.js" -UseBasicParsing
Write-Host "Downloading ScrollTrigger..."
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js" -OutFile "$public/js/ScrollTrigger.min.js" -UseBasicParsing

# Fonts (Oswald + Playfair Display)
$gstatic = "https://fonts.gstatic.com/s"
$fonts = @(
    "$gstatic/oswald/v57/TK3iWkUHHAIjg752FD8Ghe4.woff2",
    "$gstatic/oswald/v57/TK3iWkUHHAIjg752HT8Ghe4.woff2",
    "$gstatic/oswald/v57/TK3iWkUHHAIjg752Fj8Ghe4.woff2",
    "$gstatic/oswald/v57/TK3iWkUHHAIjg752Fz8Ghe4.woff2",
    "$gstatic/oswald/v57/TK3iWkUHHAIjg752GT8G.woff2",
    "$gstatic/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2",
    "$gstatic/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2",
    "$gstatic/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2",
    "$gstatic/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2"
)
foreach ($url in $fonts) {
    $name = Split-Path $url -Leaf
    Write-Host "Downloading font $name..."
    try { Invoke-WebRequest -Uri $url -OutFile "$public/fonts/$name" -UseBasicParsing } catch { Write-Host "  FAILED: $_" }
}

Write-Host "Done!"
