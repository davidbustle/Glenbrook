import React from 'react';
import { Headphones, PhoneOff, Loader2 } from 'lucide-react';
import { useRetell } from '../RetellContext';

export default function CTASection() {
    const { isCalling, isConnecting, toggleCall } = useRetell();

    return (
        <section className="relative py-24 bg-surface border-t border-white/5 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                    Ready to find your <span className="text-gradient">perfect match?</span>
                </h2>
                <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
                    Our CDJR Sales Concierge is standing by to answer your questions, provide instant quotes, and schedule your VIP test drive.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Glowing Button Wrapper */}
                    <div className="relative p-1 rounded-full overflow-hidden group w-full sm:w-auto cursor-pointer shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-110 hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-all duration-300">
                        {/* Rotating Conic Gradient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_180deg,#60a5fa_360deg)] animate-[spin_1.5s_linear_infinite]" />

                        <button 
                            onClick={toggleCall}
                            className={`w-full relative ${isCalling ? 'bg-red-500 text-white' : 'bg-primary text-background'} hover:bg-white transition-colors duration-300 rounded-full py-4 px-8 font-bold text-lg flex items-center justify-center gap-3 z-10 shadow-lg`}
                        >
                            {isConnecting ? (
                                <>
                                    <Loader2 size={24} className="animate-spin" />
                                    Connecting...
                                </>
                            ) : isCalling ? (
                                <>
                                    <PhoneOff size={24} className="group-hover:scale-110 transition-transform" />
                                    End Call
                                </>
                            ) : (
                                <>
                                    <Headphones size={24} className="group-hover:scale-110 transition-transform" />
                                    Connect With Concierge
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <p className="text-sm font-medium text-accent mt-6">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    Online Now • Typically replies instantly
                </p>
            </div>
        </section>
    );
}
