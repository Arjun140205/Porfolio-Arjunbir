#!/bin/bash

# Image Optimization Script
# Converts images to WebP and creates responsive versions

echo "🖼️  Starting image optimization..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing..."
    echo "Please install webp tools:"
    echo "  macOS: brew install webp"
    echo "  Ubuntu: sudo apt-get install webp"
    exit 1
fi

# Create optimized directory
mkdir -p public/optimized

# Optimize large images
echo "📦 Optimizing camera.png (2.9MB)..."
cwebp -q 85 -resize 1920 0 public/camera.png -o public/optimized/camera.webp
cwebp -q 80 -resize 1280 0 public/camera.png -o public/optimized/camera-medium.webp
cwebp -q 75 -resize 640 0 public/camera.png -o public/optimized/camera-small.webp

echo "📦 Optimizing arjun1.png (1.0MB)..."
cwebp -q 85 -resize 1920 0 public/arjun1.png -o public/optimized/arjun1.webp
cwebp -q 80 -resize 1280 0 public/arjun1.png -o public/optimized/arjun1-medium.webp

echo "📦 Optimizing arjunbir-profile.jpg (368KB)..."
cwebp -q 85 public/arjunbir-profile.jpg -o public/optimized/arjunbir-profile.webp

echo "📦 Optimizing other images..."
cwebp -q 85 public/arjun2.png -o public/optimized/arjun2.webp
cwebp -q 85 public/code.png -o public/optimized/code.webp
cwebp -q 85 public/tech.png -o public/optimized/tech.webp

echo "✅ Image optimization complete!"
echo "📊 Check public/optimized/ for WebP images"
