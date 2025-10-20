# Cloudflare Turnstile Integration

This giveaway site now includes Cloudflare Turnstile bot protection with server-side validation.

## Features

- ✅ Form inputs are hidden until user completes Turnstile verification
- ✅ Server-side validation using your custom endpoint at `https://sgturnstile.replit.app/api/validate`
- ✅ Automatic token expiration handling with widget reset
- ✅ Graceful fallback if Turnstile is not configured
- ✅ Works on both `index.html` and `v2.html`

## Setup Instructions

### 1. Get Your Turnstile Site Key

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile**
3. Create a new site or use an existing one
4. Copy your **Site Key**

### 2. Configure the Site

1. Open `config.js`
2. Find the `settings` section
3. Replace `YOUR_TURNSTILE_SITE_KEY` with your actual site key:

```javascript
"settings": {
  // ... other settings ...
  "turnsiteSiteKey": "0x4AAAAAAAA..." // Your actual Turnstile site key
}
```

### 3. Deploy

That's it! When you deploy your site, Turnstile will automatically:
- Show the verification widget before form inputs
- Validate tokens on the server using your custom endpoint
- Prevent bot submissions

## How It Works

### Client-Side Flow

1. User navigates to the entry form section
2. Turnstile widget is displayed, form inputs are hidden
3. User completes the Turnstile challenge
4. On successful verification:
   - Token is stored in memory
   - Form inputs become visible
   - Success message is displayed
5. When user submits the form, the token is sent with the form data

### Server-Side Validation

1. The Netlify function receives the form submission with the Turnstile token
2. It makes a POST request to your validation endpoint:
   ```
   POST https://sgturnstile.replit.app/api/validate
   ```
3. Validation payload includes:
   - `siteId`: Your Turnstile site key
   - `token`: The user's verification token
   - `remoteIp`: User's IP address (for additional security)
4. If validation fails, the submission is rejected with a 403 error
5. If validation succeeds, the submission proceeds normally

## Testing

### Test with Turnstile Disabled

If you want to test without Turnstile (e.g., in development):
- Simply leave `turnsiteSiteKey` as `"YOUR_TURNSTILE_SITE_KEY"` or an empty string
- The form will automatically show without verification

### Test with Turnstile Enabled

1. Set a valid site key in `config.js`
2. Load the page and scroll to the entry form
3. You should see the Turnstile widget
4. Complete the challenge
5. Form inputs should appear
6. Fill out and submit the form
7. Check server logs to verify validation

## Validation Endpoint Details

Your custom validation endpoint is configured at:
```
https://sgturnstile.replit.app/api/validate
```

### Request Format
```json
{
  "siteId": "your-site-id",
  "token": "turnstile-token",
  "remoteIp": "visitor-ip-address"
}
```

### Success Response
```json
{
  "success": true,
  "challenge_ts": "timestamp",
  "hostname": "your-domain.com"
}
```

### Error Response
```json
{
  "success": false,
  "error-codes": ["invalid-input-response"]
}
```

## Customization

### Change Verification Message

In both `index.html` and `v2.html`, find:
```html
<div class="verification-message" id="verificationMessage">
    <i class="fas fa-shield-check"></i>
    Please verify you're human to continue
</div>
```

Modify the text as needed.

### Change Widget Theme

The widget automatically uses the site's theme (light/dark) based on `config.settings.theme`.

To force a specific theme, edit the Turnstile initialization:
```javascript
turnstile.render(turnstileContainer, {
    sitekey: config.settings.turnsiteSiteKey,
    theme: 'light', // or 'dark'
    // ... other options
});
```

### Adjust Widget Styling

Edit the CSS in the `<style>` section:
```css
/* Turnstile Widget Styling */
#turnstile-container { 
    margin: 16px 0; 
    display: flex; 
    justify-content: center; 
}
```

## Troubleshooting

### Form doesn't show after verification
- Check browser console for errors
- Verify your site key is correct
- Ensure Turnstile script is loading (check Network tab)

### Server validation fails
- Check that your validation endpoint is accessible
- Verify the site key matches between config and Cloudflare
- Check Netlify function logs for error details

### Widget doesn't appear
- Verify Turnstile script is loaded: `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`
- Check that `config.settings.turnsiteSiteKey` is set
- Look for console warnings

## Security Notes

- ✅ Tokens are validated on the server, not just client-side
- ✅ User IP addresses are sent for additional validation
- ✅ Failed validations reject the submission (fail closed)
- ✅ Tokens expire and require re-verification
- ✅ Site key is public (safe to include in client code)
- ❌ Never expose your Cloudflare API secret key in client code

## Files Modified

- `config.js` - Added `turnsiteSiteKey` setting
- `index.html` - Added Turnstile widget and validation logic
- `v2.html` - Added Turnstile widget and validation logic
- `netlify/functions/submit-entry.js` - Added server-side token validation

## Support

For Cloudflare Turnstile documentation, visit:
https://developers.cloudflare.com/turnstile/

For issues with the validation endpoint, check:
https://sgturnstile.replit.app/api/validate

