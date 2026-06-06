// netlify/functions/chat.js
// ─────────────────────────────────────────────────────────────────────────────
// Serverless proxy: browser → this function → Groq API
// The GROQ_API_KEY environment variable is set in Netlify dashboard (or .env
// for local dev). It is NEVER exposed to the browser.
// ─────────────────────────────────────────────────────────────────────────────

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

exports.handler = async function (event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Read the API key from environment (set in Netlify dashboard / .env)
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GROQ_API_KEY is not configured on the server.' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body.' }),
    };
  }

  // Forward the request to Groq
  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: body.model || 'llama-3.3-70b-versatile',
        max_tokens: body.max_tokens || 600,
        temperature: body.temperature ?? 0.72,
        messages: body.messages,
      }),
    });

    const data = await groqRes.json();

    return {
      statusCode: groqRes.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'Failed to reach Groq API.', detail: err.message }),
    };
  }
};
