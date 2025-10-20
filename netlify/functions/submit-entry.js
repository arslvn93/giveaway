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
        
        // Validate Turnstile token if present
        if (submissionData.turnstileToken && submissionData.turnsiteSiteKey) {
            const turnstileValidationUrl = 'https://sgturnstile.replit.app/api/validate';
            
            // Get the visitor's IP address
            const remoteIp = event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown';
            
            try {
                const turnstileResponse = await fetch(turnstileValidationUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        siteId: submissionData.turnsiteSiteKey,
                        token: submissionData.turnstileToken,
                        remoteIp: remoteIp
                    })
                });
                
                const turnstileResult = await turnstileResponse.json();
                
                // Check if validation was successful
                if (!turnstileResponse.ok || !turnstileResult.success) {
                    console.error('Turnstile validation failed:', turnstileResult);
                    return {
                        statusCode: 403,
                        body: JSON.stringify({ 
                            error: 'Bot verification failed',
                            details: 'Please refresh the page and try again.'
                        })
                    };
                }
                
                console.log('Turnstile validation successful');
            } catch (turnstileError) {
                console.error('Turnstile validation error:', turnstileError);
                // Fail closed - reject the submission if verification service is unavailable
                return {
                    statusCode: 503,
                    body: JSON.stringify({ 
                        error: 'Verification service unavailable',
                        details: 'Please try again in a moment.'
                    })
                };
            }
        }

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

