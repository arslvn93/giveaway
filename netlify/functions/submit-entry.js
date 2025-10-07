"use strict";

// Netlify Function: Proxy giveaway entry to n8n with server-side secret

const corsHeaders = (origin) => ({
  "Access-Control-Allow-Origin": origin || "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
});

exports.handler = async (event) => {
  const origin = event.headers && (event.headers.origin || event.headers.Origin || "");
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(origin), body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: corsHeaders(origin), body: "Method Not Allowed" };
  }

  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
  const sharedSecret = process.env.N8N_SHARED_SECRET;
  const basicUser = process.env.N8N_BASIC_USER;
  const basicPass = process.env.N8N_BASIC_PASS;
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);

  if (!n8nWebhookUrl || !sharedSecret) {
    return { statusCode: 500, headers: corsHeaders(origin), body: "Server not configured" };
  }

  if (allowedOrigins.length > 0 && origin && !allowedOrigins.includes(origin)) {
    return { statusCode: 403, headers: corsHeaders(origin), body: "Forbidden" };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (_) {
    return { statusCode: 400, headers: corsHeaders(origin), body: "Invalid JSON" };
  }

  // Basic bot checks
  const honeypotValue = (payload.hp || payload.honeypot || "").toString().trim();
  if (honeypotValue) {
    return { statusCode: 400, headers: corsHeaders(origin), body: "Rejected" };
  }

  const formStartedAt = Number(payload.formStartedAtMs || payload.formStartedAt || 0);
  const nowMs = Date.now();
  if (formStartedAt && nowMs - formStartedAt < 1500) {
    return { statusCode: 400, headers: corsHeaders(origin), body: "Too fast" };
  }
  if (formStartedAt && formStartedAt > nowMs + 5000) {
    return { statusCode: 400, headers: corsHeaders(origin), body: "Invalid time" };
  }

  // Forward to n8n with secret header
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-shared-secret": sharedSecret,
      "x-source": "giveaway-site",
    };
    if (basicUser && basicPass) {
      const token = Buffer.from(`${basicUser}:${basicPass}`).toString("base64");
      headers["Authorization"] = `Basic ${token}`;
    }
    const forwardRes = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...payload,
        meta: {
          ip: (event.headers && (event.headers["x-forwarded-for"] || event.headers["client-ip"])) || "",
          userAgent: (event.headers && (event.headers["user-agent"] || "")) || "",
          referer: (event.headers && (event.headers.referer || event.headers.Referer)) || "",
          origin,
        },
      }),
    });

    const text = await forwardRes.text();
    if (!forwardRes.ok) {
      return { statusCode: forwardRes.status, headers: corsHeaders(origin), body: text || "Upstream error" };
    }
    return { statusCode: 200, headers: corsHeaders(origin), body: text || "OK" };
  } catch (err) {
    return { statusCode: 502, headers: corsHeaders(origin), body: "Upstream failure" };
  }
};


