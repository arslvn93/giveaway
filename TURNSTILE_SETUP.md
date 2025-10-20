# Cloudflare Turnstile Setup

## Overview
Both `index.html` and `v2.html` now include Cloudflare Turnstile bot protection. Users must verify they're human before they can see and access the entry form.

## How It Works
1. When users navigate to the entry form section, they see a Turnstile verification widget
2. The actual form inputs are hidden until verification is complete
3. After successful verification, the Turnstile widget disappears and the form becomes visible
4. The verification is tracked via Facebook Pixel (if configured)

## Current Site Key
The current site key being used is: `0x4AAAAAAAzNuRW8DlxyZgJ2`

⚠️ **IMPORTANT**: This is a placeholder/testing site key. You should replace it with your own Cloudflare Turnstile site key.

## How to Get Your Own Site Key

1. **Sign up for Cloudflare** (if you haven't already)
   - Go to: https://dash.cloudflare.com/sign-up

2. **Access Turnstile**
   - Log in to your Cloudflare Dashboard
   - Navigate to: **Turnstile** section
   - Or go directly to: https://dash.cloudflare.com/?to=/:account/turnstile

3. **Create a New Site**
   - Click "Add Site"
   - Enter your domain name (e.g., `yourdomain.com`)
   - Choose "Managed" mode (recommended for most use cases)
   - Click "Create"

4. **Get Your Site Key**
   - After creating the site, you'll see two keys:
     - **Site Key** (public) - This is what you need
     - **Secret Key** (private) - Keep this secure, not used in client-side code

5. **Replace the Site Key**
   - In both `index.html` and `v2.html`, find this line:
     ```html
     data-sitekey="0x4AAAAAAAzNuRW8DlxyZgJ2"
     ```
   - Replace `0x4AAAAAAAzNuRW8DlxyZgJ2` with your actual site key

## Turnstile Modes

### Managed (Recommended)
- Cloudflare automatically determines the difficulty level
- Most users will see a simple checkbox
- Suspicious traffic may see more challenges

### Non-Interactive
- No user interaction required
- Runs in the background
- Best user experience but may allow more bots

### Invisible
- No visible widget
- Challenge only appears when needed
- Requires more integration work

## Configuration Options

In the HTML, you can customize the Turnstile widget:

```html
<div class="cf-turnstile" 
     data-sitekey="YOUR_SITE_KEY_HERE"
     data-callback="onTurnstileSuccess"
     data-theme="auto"
     data-size="normal"
     data-language="auto"></div>
```

### Available Options:
- `data-theme`: `light`, `dark`, or `auto` (matches system theme)
- `data-size`: `normal` or `compact`
- `data-language`: Language code (e.g., `en`, `es`, `fr`) or `auto`
- `data-callback`: JavaScript function to call on success

## Testing

### Test Site Keys (Always Pass)
Cloudflare provides test site keys that always pass:
- **Always Passes**: `1x00000000000000000000AA`
- **Always Fails**: `2x00000000000000000000AB`
- **Forces Interactive**: `3x00000000000000000000FF`

### Testing in Development
The current placeholder key should work in development, but you should replace it before going live.

## Client-Side Only Implementation

**Note**: This implementation is client-side only and does not include server-side verification. This means:
- ✅ Protects against casual bots and automated scrapers
- ✅ Reduces spam form submissions significantly
- ⚠️ Determined attackers could potentially bypass it
- ⚠️ Not as secure as server-side verification

### Adding Server-Side Verification (Optional)

If you want maximum security, you should:
1. Store the Turnstile response token when the form is submitted
2. Send it to your server with the form data
3. Verify the token server-side using Cloudflare's API
4. See: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

## Troubleshooting

### Widget Not Appearing
- Check browser console for errors
- Ensure the Turnstile script is loaded: `https://challenges.cloudflare.com/turnstile/v0/api.js`
- Verify your site key is correct

### Form Not Showing After Verification
- Check that the `onTurnstileSuccess` callback function is defined
- Ensure the form has the class `hidden` initially
- Check browser console for JavaScript errors

### Domain Errors
- Make sure your domain is added to the allowed domains in Cloudflare Turnstile settings
- For local testing, add `localhost` to the allowed domains

## Additional Resources

- **Official Documentation**: https://developers.cloudflare.com/turnstile/
- **API Reference**: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
- **Best Practices**: https://developers.cloudflare.com/turnstile/troubleshooting/

## Support

For issues with:
- **Turnstile Service**: Contact Cloudflare Support
- **Implementation**: Check the official Cloudflare Turnstile documentation
- **This Codebase**: Contact your development team

---

Last Updated: October 20, 2025

