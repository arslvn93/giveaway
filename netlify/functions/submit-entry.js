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

        // Get credentials from environment variables (set in Netlify dashboard)
        const username = process.env.N8N_USERNAME;
        const password = process.env.N8N_PASSWORD;
        const webhookUrl = process.env.N8N_WEBHOOK_URL || 'https://n8n.salesgenius.co/webhook/giveaway';

        // Debug logging (safely, without exposing full password)
        console.log('Username length:', username?.length, 'Password length:', password?.length);
        console.log('Username:', username);
        console.log('Password first 3 chars:', password?.substring(0, 3));
        console.log('Webhook URL:', webhookUrl);

        // Validate that credentials are configured
        if (!username || !password) {
            console.error('Missing authentication credentials in environment variables');
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Server configuration error' })
            };
        }

        // Create Basic Auth header
        const credentials = Buffer.from(`${username}:${password}`).toString('base64');
        console.log('Generated auth header (base64):', credentials.substring(0, 10) + '...');

        // Forward the request to n8n with authentication
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`
            },
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

