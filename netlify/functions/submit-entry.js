// Netlify Function to securely proxy giveaway submissions to n8n
// This keeps authentication credentials server-side and hidden from clients

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        // Parse the incoming submission data
        const submissionData = JSON.parse(event.body);

        // Verify Turnstile token using custom validation server
        const turnstileToken = submissionData.turnstileToken;
        const turnstilesiteId = process.env.TURNSTILE_SITE_ID;
        const turnstileValidationUrl = process.env.TURNSTILE_VALIDATION_URL || 'https://sgturnstile.replit.app/api/validate';

        if (!turnstileToken) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Security verification required' })
            };
        }

        if (turnstilesiteId) {
            // Get visitor's IP address from Netlify headers
            const visitorIp = event.headers['x-forwarded-for'] || event.headers['x-nf-client-connection-ip'] || '';
            
            // Verify the Turnstile token with custom validation server
            const verifyResponse = await fetch(turnstileValidationUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    siteId: turnstilesiteId,
                    token: turnstileToken,
                    remoteIp: visitorIp
                })
            });

            const verifyResult = await verifyResponse.json();
            
            if (!verifyResult.success) {
                console.error('Turnstile verification failed:', verifyResult);
                return {
                    statusCode: 403,
                    body: JSON.stringify({ 
                        error: 'Security verification failed. Please try again.',
                        details: verifyResult.message || verifyResult['error-codes'] || 'Verification failed'
                    })
                };
            }
        } else {
            console.warn('TURNSTILE_SITE_ID not configured in environment variables');
        }

        // Remove the Turnstile token from the submission data before forwarding
        delete submissionData.turnstileToken;

        // Get credentials from environment variables (set in Netlify dashboard)
        const username = process.env.N8N_USERNAME?.trim();
        const password = process.env.N8N_PASSWORD?.trim();
        const webhookUrl = process.env.N8N_WEBHOOK_URL?.trim() || 'https://n8n.salesgenius.co/webhook/giveaway';

        // Validate that credentials are configured
        if (!username || !password) {
            console.error('Missing authentication credentials in environment variables');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Server configuration error' })
            };
        }

        // Create Basic Auth header
        const credentials = Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');

        // Forward the request to n8n with authentication
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`
        };
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(submissionData)
        });

        // Get the response from n8n
        const responseText = await response.text();
        let responseData;
        
        try {
            responseData = JSON.parse(responseText);
        } catch (e) {
            responseData = { message: responseText };
        }

        // Return the response to the client
        if (!response.ok) {
            console.error('n8n webhook failed:', response.status, responseText);
            return {
                statusCode: response.status,
                body: JSON.stringify({ 
                    error: 'Submission failed',
                    details: responseData 
                })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true,
                data: responseData 
            })
        };

    } catch (error) {
        console.error('Submission error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Internal server error',
                message: error.message 
            })
        };
    }
};

