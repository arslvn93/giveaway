# Netlify Environment Variables Setup

## 🔐 Secure Submission Function

The giveaway submission now uses a Netlify Function to keep authentication credentials server-side and secure.

## Required Environment Variables

You need to set these in your Netlify dashboard:

1. **Go to your Netlify site dashboard**
2. **Navigate to**: Site settings → Environment variables
3. **Add these three variables**:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `N8N_USERNAME` | `salesgenius` | Username for n8n Basic Auth |
| `N8N_PASSWORD` | `S@lG3n1u52025` | Password for n8n Basic Auth |
| `N8N_WEBHOOK_URL` | `https://n8n.salesgenius.co/webhook/giveaway` | n8n webhook endpoint |

## 📝 Step-by-Step Instructions

### 1. Set Environment Variables in Netlify

```bash
# Using Netlify CLI (if you have it installed):
netlify env:set N8N_USERNAME "salesgenius"
netlify env:set N8N_PASSWORD "S@lG3n1u52025"
netlify env:set N8N_WEBHOOK_URL "https://n8n.salesgenius.co/webhook/giveaway"
```

**OR** via Netlify Dashboard:
1. Log into Netlify
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Add each variable above

### 2. Deploy Your Site

After setting the environment variables:
```bash
git add .
git commit -m "Add secure Netlify function for submissions"
git push
```

Netlify will automatically redeploy with the new function.

### 3. Test the Submission

1. Go to your live site
2. Fill out the giveaway form
3. Submit
4. Check browser console for any errors
5. Verify submission reaches your n8n webhook

## 🔒 Security Benefits

- ✅ Credentials are **never exposed** to the browser
- ✅ Cannot be extracted from page source
- ✅ Cannot be intercepted from Network tab
- ✅ Stored securely in Netlify's environment
- ✅ Easy to rotate credentials (just update env vars)

## 🐛 Troubleshooting

### Function not found (404)
- Make sure the function is in `netlify/functions/submit-entry.js`
- Redeploy the site
- Check Netlify build logs

### 500 Internal Server Error
- Verify environment variables are set correctly in Netlify
- Check Netlify function logs: Site → Functions → submit-entry → Logs

### Authentication failed on n8n side
- Verify n8n webhook has Basic Auth enabled
- Verify username/password match what's in Netlify env vars

## 📊 Monitoring

View function logs in Netlify:
- Go to: Site → Functions → submit-entry
- Click on "View logs"
- See real-time requests and errors

