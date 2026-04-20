export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Use regular environment variables (not VITE_ prefixed to prevent browser exposure).
    // Locally, Vercel CLI or Vite proxy can load these from .env
    const apiKey = process.env.RETELL_API_KEY || process.env.VITE_RETELL_API_KEY;
    const agentId = process.env.RETELL_AGENT_ID || process.env.VITE_RETELL_AGENT_ID;

    if (!apiKey || !agentId) {
        return res.status(500).json({ error: 'Server configuration missing Retell API Key or Agent ID' });
    }

    try {
        const fetch = (await import('node-fetch')).default || globalThis.fetch;
        
        const response = await fetch("https://api.retellai.com/v2/create-web-call", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ agent_id: agentId })
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Failed to create web call token: ${errText}`);
        }

        const data = await response.json();
        
        // Return only the non-sensitive access_token to the frontend
        return res.status(200).json({ access_token: data.access_token });
    } catch (error) {
        console.error('Error in create-web-call:', error);
        return res.status(500).json({ error: 'Internal server error while creating call' });
    }
}
