// Note: Replace these with your actual IconScout API credentials
export const ICONSCOUT_CONFIG = {
    clientId: 'your_client_id_here',
    secretKey: 'your_secret_key_here',
};

export const getLottieAnimation = async (query: string) => {
    try {
        const response = await fetch(
            `https://api.iconscout.com/v3/search?query=${encodeURIComponent(query)}&asset_family=animation&product_family=lottie`,
            {
                headers: {
                    'Client-ID': ICONSCOUT_CONFIG.clientId,
                    'Secret-Key': ICONSCOUT_CONFIG.secretKey,
                },
            }
        );
        
        if (!response.ok) {
            throw new Error(`IconScout API error: ${response.status}`);
        }
        
        return response.json();
    } catch (error) {
        console.error('Error fetching from IconScout:', error);
        return { response: { items: [] } };
    }
};
