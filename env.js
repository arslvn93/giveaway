// Public runtime configuration for frontend (safe values only)
// Do not include secrets here. Server-side secrets stay in n8n/edge.
window.env = {
	entryWebhookUrl: "/.netlify/functions/submit-entry",
	adminWebhookUrl: "/.netlify/functions/admin-update"
};


