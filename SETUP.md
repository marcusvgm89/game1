# Setup Instructions

## Pixel Configuration

Replace the following placeholder IDs in `index.html`:

1. **Facebook Pixel**: Replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID (appears in 3 places)
2. **TikTok Pixel**: Replace `YOUR_TIKTOK_PIXEL_ID` with your actual TikTok Pixel ID

## Checkout Integration

In `src/App.tsx`, replace the checkout URL:
- Change `https://pay.hotmart.com/YOUR_PRODUCT_ID` to your actual Hotmart Sparkle checkout link

## Video Integration

In `src/components/VideoFlash.tsx`:
- Replace the YouTube video ID with your actual gameplay video
- Current placeholder: `dQw4w9WgXcQ`

## Tracking Events

The following pixel events are already configured:
- **PageView**: Fires on page load
- **ViewContent**: Fires when hero section is viewed
- **AddToCart**: Fires when CTA button is clicked
- **InitiateCheckout**: Fires when user reaches checkout
- **Purchase**: Fires when checkout is completed

## Deployment

Deploy to Vercel or Netlify:
```bash
npm run build
```

The build output will be in the `dist/` folder.

## Performance

Current build metrics:
- Build time: ~1.8s
- Gzip size: ~53.8 kB total
- Mobile-first responsive design
- Lazy loading enabled for images
