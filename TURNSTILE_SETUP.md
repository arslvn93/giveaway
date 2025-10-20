# Cloudflare Turnstile Integration

## What Was Done

Cloudflare Turnstile has been successfully integrated into your giveaway site to protect form submissions from bots and spam.

### Files Modified

1. **v2.html** - Main giveaway page
   - Added Turnstile script in the `<head>` section
   - Added Turnstile widget to the entry form
   - Updated form submission JavaScript to include Turnstile token

2. **index.html** - Alternative giveaway page
   - Added Turnstile script in the `<head>` section
   - Added Turnstile widget to the entry form
   - Updated form submission JavaScript to include Turnstile token

3. **netlify/functions/submit-entry.js** - Backend verification
   - Added server-side Turnstile token verification
   - Validates tokens with Cloudflare before processing submissions
   - Returns appropriate error messages if verification fails

## Configuration Required

### Environment Variables

You need to add the following environment variable to your Netlify dashboard:

**Variable Name:** `TURNSTILE_SECRET_KEY`  
**Value:** Your Turnstile Secret Key (from Cloudflare dashboard)

#### How to Add Environment Variable in Netlify:

1. Go to your Netlify dashboard
2. Select your site (giveaway)
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add:
   - **Key:** `TURNSTILE_SECRET_KEY`
   - **Value:** Your secret key from Cloudflare
6. Click **Save**

### Getting Your Secret Key

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile** section
3. Find your site or create a new one
4. Copy the **Secret Key** (NOT the Site Key - you already have that)
5. Add it to Netlify as described above

## Site Key Used

**Site Key:** `0x4AAAAAAB5SpbWeBo7JnEIs`

This is already configured in both HTML files.

## How It Works

### Frontend (User Experience)

1. User fills out the giveaway entry form
2. User sees a Cloudflare Turnstile challenge widget (usually just a checkbox)
3. User completes the challenge if prompted
4. When submitting, the form includes the Turnstile token

### Backend (Security)

1. Netlify function receives the form submission with Turnstile token
2. Function validates the token with Cloudflare's verification API
3. If valid: proceeds with form submission
4. If invalid: returns error and prevents submission

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
- Ensure `TURNSTILE_SECRET_KEY` is set correctly in Netlify
- Check Netlify function logs for detailed error messages

### Widget not appearing
- Check if the Turnstile script is loading (check browser network tab)
- Verify the site key is correct: `0x4AAAAAAB5SpbWeBo7JnEIs`
- Ensure no ad blockers or privacy extensions are blocking it

## Additional Notes

- The Turnstile widget is configured with `data-theme="light"` to match your form design
- The widget appears above the submit button in both forms
- If the secret key is not configured, the backend will log a warning but still process submissions (for backwards compatibility during setup)
- Once you add the secret key, all submissions will require valid Turnstile verification

## Next Steps

1. ✅ Code changes are complete
2. ⏳ Add `TURNSTILE_SECRET_KEY` to Netlify environment variables
3. ⏳ Deploy the changes to Netlify (git push or manual deploy)
4. ⏳ Test the forms to ensure Turnstile is working
5. ⏳ Monitor Netlify function logs for any issues

## Resources

- [Cloudflare Turnstile Documentation](https://developers.cloudflare.com/turnstile/)
- [Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
- [Netlify Environment Variables Guide](https://docs.netlify.com/environment-variables/overview/)

