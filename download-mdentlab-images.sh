#!/usr/bin/env bash
# download-mdentlab-images.sh
# Downloads all images used on https://mdentlab.com/dental-lab-uae/
# Usage: bash download-mdentlab-images.sh

set -euo pipefail

OUTPUT_DIR="mdentlab-images/dental-lab-uae"
mkdir -p "$OUTPUT_DIR"

declare -A IMAGES=(
  ["header-logo.png"]="https://mdentlab.com/wp-content/uploads/2024/06/logo.png"
  ["header-white-logo.png"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/09/White-logo-1536x578-1.png?fit=1024%2C385&ssl=1"
  ["hero-slider-bg.png"]="https://i0.wp.com/mdentlab.com/wp-content/plugins/revslider/public/assets/assets/dummy.png?resize=1200%2C675"
  ["hero-slider-secondary.png"]="https://i0.wp.com/mdentlab.com/wp-content/plugins/revslider/public/assets/assets/dummy.png?resize=566%2C566"
  ["hero-technicians.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/06/Mdent-Services-Dubai-1-1024x684-1.jpg?fit=1024%2C684&ssl=1"
  ["product-veneers.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/veneers.jpg?w=1200&ssl=1"
  ["product-crowns.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/crowns.jpg?w=1200&ssl=1"
  ["product-implant.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/implant.jpg?w=1200&ssl=1"
  ["product-dentures.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/dentures.jpg?w=1200&ssl=1"
  ["news-east-africa-clinic.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2025/03/close-up-dentist-explaining-image-scaled.jpg?fit=2560%2C1707&ssl=1"
  ["news-digital-dental-services.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/DSC_6642-scaled.jpg?fit=2560%2C1701&ssl=1"
  ["news-uganda.png"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2025/01/Uganda111.png?fit=1536%2C1024&ssl=1"
  ["since-1995-section.jpg"]="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/DSC04467-1-scaled.jpg?fit=1024%2C683&ssl=1"
  ["footer-watermark-logo.png"]="https://mdentlab.com/wp-content/uploads/2024/08/mdent-trans.png"
)

for filename in "${!IMAGES[@]}"; do
  url="${IMAGES[$filename]}"
  echo "Downloading $filename ..."
  curl -sL -A "Mozilla/5.0" "$url" -o "$OUTPUT_DIR/$filename"
done

echo "Done. Images saved to $OUTPUT_DIR/"
