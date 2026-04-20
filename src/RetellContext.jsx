import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';

const RetellContext = createContext(null);

const agentId = import.meta.env.VITE_RETELL_AGENT_ID;
const apiKey = import.meta.env.VITE_RETELL_API_KEY;

export function RetellProvider({ children }) {
    const [retellClient, setRetellClient] = useState(null);
    const [isCalling, setIsCalling] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);

    useEffect(() => {
        const client = new RetellWebClient();
        
        client.on("call_started", () => {
            setIsCalling(true);
            setIsConnecting(false);
        });

        client.on("call_ended", () => {
            setIsCalling(false);
            setIsConnecting(false);
        });

        client.on("error", (error) => {
            console.error("Retell error:", error);
            setIsCalling(false);
            setIsConnecting(false);
        });

        setRetellClient(client);

        return () => {
             // Client cleanup if needed
        };
    }, []);

    const toggleCall = useCallback(async () => {
        if (!retellClient) return;

        if (isCalling || isConnecting) {
            retellClient.stopCall();
            return;
        }

        setIsConnecting(true);
        try {
            const response = await fetch("https://api.retellai.com/v2/create-web-call", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ agent_id: agentId })
            });

            if (!response.ok) {
                throw new Error("Failed to create web call token");
            }

            const data = await response.json();
            
            await retellClient.startCall({
                accessToken: data.access_token,
            });
        } catch (err) {
            console.error("Error starting call:", err);
            setIsConnecting(false);
            setIsCalling(false);
        }
    }, [retellClient, isCalling, isConnecting]);

    return (
        <RetellContext.Provider value={{ isCalling, isConnecting, toggleCall }}>
            {children}
        </RetellContext.Provider>
    );
}

export function useRetell() {
    return useContext(RetellContext);
}
