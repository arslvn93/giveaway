# Cloudflare Turnstile Integration (Optimized)

## What Was Done

Cloudflare Turnstile has been successfully integrated into your giveaway site to protect form submissions from bots and spam, with **performance optimizations** for fast page load times.

### Files Modified

1. **v2.html** - Main giveaway page
   - ✅ **Lazy loading**: Turnstile script loads only when user scrolls near the form (no impact on initial page load)
   - ✅ **Optimized flow**: Turnstile validation happens on first form submit (before modal opens)
   - ✅ **Faster final submit**: Token is reused from first validation, no double-checking
   - ✅ **Better UX**: Shows "✨ Submitting your entry..." during final API call

2. **index.html** - Alternative giveaway page
   - ✅ **Lazy loading**: Turnstile script loads only when user scrolls near the form
   - ✅ **Optimized flow**: Turnstile validation happens on first form submit (before modal opens)
   - ✅ **Faster final submit**: Token is reused from first validation
   - ✅ **Better UX**: Shows "✨ Submitting your entry..." during final API call

3. **netlify/functions/submit-entry.js** - Backend verification
   - Added server-side Turnstile token verification
   - Validates tokens with Cloudflare before processing submissions
   - Returns appropriate error messages if verification fails

## Performance Improvements

### Before Optimization:
- ❌ Turnstile script loaded immediately on page load (~300-500ms delay)
- ❌ Turnstile validated twice (on first submit, then again on final submit)
- ❌ Slow final submission due to double validation + API call

### After Optimization:
- ✅ **No impact on initial page load** - Turnstile loads when form is visible
- ✅ **Validate once, use twice** - Token captured on first submit and reused
- ✅ **Instant final submission** - Only API call, no re-validation

## Configuration Required

### Environment Variables

You need to add the following environment variables to your Netlify dashboard:

**Required Variables:**
- **Variable Name:** `TURNSTILE_SITE_ID`  
  **Value:** Your site ID from the custom validation server

**Optional Variables:**
- **Variable Name:** `TURNSTILE_VALIDATION_URL`  
  **Value:** `https://sgturnstile.replit.app/api/validate` (default if not set)

#### How to Add Environment Variables in Netlify:

1. Go to your Netlify dashboard
2. Select your site (giveaway)
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add each variable:
   - **Key:** `TURNSTILE_SITE_ID`
   - **Value:** Your site ID from the validation server
6. (Optional) Add custom validation URL if different from default
7. Click **Save**

### Getting Your Site ID

1. Access your custom validation server dashboard
2. Navigate to the **Sites** page
3. Copy your **Site ID** for this giveaway
4. Add it to Netlify as described above

## Site Key Used

**Site Key:** `0x4AAAAAAB5SpbWeBo7JnEIs`

This is already configured in both HTML files.

## How It Works

### Lazy Loading (Performance)

1. **Page loads** → Turnstile script NOT loaded yet (fast initial load)
2. **User scrolls to form** → Intersection Observer triggers Turnstile script load (200px before visible)
3. **Script loads** → Turnstile widget renders automatically in the form
4. **Backup trigger** → If user focuses on form field before scrolling, script loads immediately

### Frontend (User Experience)

1. User fills out the giveaway entry form
2. User sees a Cloudflare Turnstile challenge widget (usually just a checkbox)
3. User completes the Turnstile challenge
4. User clicks "Next" → **Form validates Turnstile immediately** (fails fast if issue)
5. If valid → Token is stored and question modal opens
6. User answers questions → **Final submit uses stored token** (instant, no re-check)
7. Redirect to thank you page

### Backend (Security)

1. Netlify function receives the form submission with Turnstile token
2. Function extracts visitor's IP address from request headers
3. Function validates the token with custom validation server (`https://sgturnstile.replit.app/api/validate`)
4. Validation server checks token with Cloudflare and applies custom rules
5. If valid: proceeds with form submission
6. If invalid: returns error and prevents submission

## Testing

After deploying these changes:

1. Visit your giveaway page
2. Fill out the entry form
3. You should see the Turnstile widget appear above the submit button
4. Complete the form and submit
5. The submission should work normally if Turnstile is completed

## Troubleshooting

### "Security verification required" error
- The Turnstile widget didn't load or wasn't completed
- Check browser console for errors
- Ensure the Turnstile script loaded correctly

### "Security verification failed" error
- The token verification failed on the backend
- Ensure `TURNSTILE_SITE_ID` is set correctly in Netlify
- Verify the custom validation server is accessible: `https://sgturnstile.replit.app/api/validate`
- Check Netlify function logs for detailed error messages
- Ensure your site ID is registered in the validation server

### Widget not appearing
- Check if the Turnstile script is loading (check browser network tab)
- Verify the site key is correct: `0x4AAAAAAB5SpbWeBo7JnEIs`
- Ensure no ad blockers or privacy extensions are blocking it

## Additional Notes

- ✅ **Lazy loading**: Turnstile script loads when form section becomes visible (200px margin)
- ✅ **Smart validation**: Token validated once on first submit, stored and reused for final submit
- ✅ **Fail-fast UX**: Turnstile issues caught immediately, before user sees question modal
- ✅ **Better loading state**: "✨ Submitting your entry..." message during final API call
- ✅ The Turnstile widget is configured with `theme="light"` via JavaScript render
- ✅ The widget appears above the submit button in both forms
- ⚠️ If the site ID is not configured, the backend will log a warning but still process submissions (for backwards compatibility during setup)
- ⚠️ Once you add the site ID, all submissions will require valid Turnstile verification
- 🔐 **Custom validation server**: Uses `https://sgturnstile.replit.app/api/validate` instead of direct Cloudflare validation
- 📍 **IP tracking**: Automatically captures visitor's IP address for validation (helps prevent abuse)

## Next Steps

1. ✅ Code changes are complete
2. ⏳ Get your site ID from the custom validation server
3. ⏳ Add `TURNSTILE_SITE_ID` to Netlify environment variables
4. ⏳ (Optional) Add `TURNSTILE_VALIDATION_URL` if using custom endpoint
5. ⏳ Deploy the changes to Netlify (git push or manual deploy)
6. ⏳ Test the forms to ensure Turnstile is working
7. ⏳ Monitor Netlify function logs for any issues

## Resources

- [Cloudflare Turnstile Documentation](https://developers.cloudflare.com/turnstile/)
- [Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
- [Netlify Environment Variables Guide](https://docs.netlify.com/environment-variables/overview/)
- [Custom Validation Server](https://sgturnstile.replit.app/api/validate) - Your custom Turnstile validation endpoint

