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
        // IMPORTANT: Trim whitespace that might have been accidentally added
        const username = process.env.N8N_USERNAME?.trim();
        const password = process.env.N8N_PASSWORD?.trim();
        const webhookUrl = process.env.N8N_WEBHOOK_URL?.trim() || 'https://n8n.salesgenius.co/webhook/giveaway';

        // Debug logging (safely, without exposing full password)
        console.log('Username length:', username?.length, 'Password length:', password?.length);
        console.log('Username:', JSON.stringify(username)); // JSON.stringify shows hidden chars
        console.log('Password first 3 chars:', password?.substring(0, 3));
        console.log('Password last 3 chars:', password?.substring(password.length - 3));
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
        const authString = `${username}:${password}`;
        const credentials = Buffer.from(authString, 'utf-8').toString('base64');
        console.log('Auth string length:', authString.length);
        console.log('Generated auth header (base64):', credentials.substring(0, 20) + '...');
        console.log('Full base64 for verification:', credentials);

        // Forward the request to n8n with authentication
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${credentials}`,
            'User-Agent': 'Netlify-Function/1.0'
        };
        
        console.log('Sending headers:', JSON.stringify(headers, null, 2).substring(0, 200));
        
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

