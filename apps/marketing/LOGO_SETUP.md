# YourPals Logo Setup Guide

## Adding Your Logo

To complete the logo integration, you need to:

1. **Place your logo images in the public directory:**
   - Copy your `yourpalsRobot.png` image file to: `apps/marketing/public/yourpalsRobot.png`
   - Copy your `yourPalsLogo.png` image file to: `apps/marketing/public/yourPalsLogo.png`
   - Both images should be in PNG format for best quality
   - Recommended size: at least 128x128 pixels (the components will scale them appropriately)

2. **Logo is now integrated in:**
   - ✅ Header component (top navigation) - Robot icon + "YourPals" text
   - ✅ Footer component (bottom branding) - Large logo only
   - ✅ Website icon (favicon) - Robot image used as site icon
   - Clean, modern design with consistent branding

## Logo Specifications

- **Format**: PNG (recommended) or SVG
- **Size**: Minimum 128x128px, larger is better for high-DPI displays
- **Background**: Transparent or with background that works on dark/light themes
- **File names**: 
  - `yourpalsRobot.png` (for header and favicon)
  - `yourPalsLogo.png` (for footer)

## What's Been Updated

The following components now use your logos:
- `Header.tsx` - Robot icon (48x48px, scales to 56x56px on larger screens) + "YourPals" text
- `FooterCTA.tsx` - Large logo container: 80x80px (mobile) → 96x96px (desktop), image is 160x160px for crisp display
- `layout.tsx` - Robot image set as website icon (favicon, shortcut, and Apple touch icon)
- **Bigger impact**: Both logos are now significantly larger and more prominent

## Design Benefits

- **Header**: Robot icon + text creates strong brand recognition
- **Footer**: Large logo makes a bold statement
- **Website icon**: Robot image appears in browser tabs and bookmarks
- **Professional appearance**: Follows modern design principles
- **Consistent branding**: Robot theme throughout the site

## Next Steps

1. Add your logo image files to the public directory:
   - `apps/marketing/public/yourpalsRobot.png`
   - `apps/marketing/public/yourPalsLogo.png`
2. Test the website to ensure both logos display correctly
3. Check that the robot image appears as the favicon in your browser

## Optional Enhancements

If you want to add the logos to other places, consider:
- Open Graph images for social media sharing
- Email templates or other marketing materials
- App icons for mobile applications
