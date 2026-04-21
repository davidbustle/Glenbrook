import React, { useEffect } from 'react';

export default function Booking() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;

        const wrapper = document.getElementById("booking-widget-wrapper");
        if (wrapper) {
            wrapper.appendChild(script);
        }
        
        return () => {
            if (wrapper && wrapper.contains(script)) {
                wrapper.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="relative bg-background py-16 lg:py-24 overflow-hidden" id="booking">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Headline */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Book Your <span className="text-gradient">Test Drive & Appraisal</span>
                    </h2>
                    <p className="text-lg text-secondary">
                        Ready to take the next step? Choose a date and time that works best for you to test drive your dream vehicle or get your current vehicle appraised.
                    </p>
                </div>

                {/* Calendar Widget Container with Glow Effect */}
                <div className="relative flex justify-center w-full max-w-5xl mx-auto">
                    {/* Cool Glow Effect Background - Same as Chat Widget */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[1000px] bg-gradient-to-tr from-accent/30 to-blue-600/30 blur-[100px] rounded-[3rem] pointer-events-none" />
                    
                    {/* The Widget Wrapper */}
                    <div id="booking-widget-wrapper" className="relative z-10 w-full flex flex-col items-center bg-surface border border-white/5 shadow-2xl rounded-3xl p-4 sm:p-6">
                        <iframe 
                            src="https://api.leadconnectorhq.com/widget/booking/OjiMe1ieHw9hNpQdlLZI" 
                            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }} 
                            scrolling="no" 
                            id="OjiMe1ieHw9hNpQdlLZI_1776773388939">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
