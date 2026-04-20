import React from 'react';
import { PlayCircle, ShieldCheck, Headphones, Star, PhoneOff, Loader2 } from 'lucide-react';
import { useRetell } from '../RetellContext';

export default function Hero() {
    const { isCalling, isConnecting, toggleCall } = useRetell();

    return (
        <section className="relative bg-background pt-8 pb-8 lg:pt-16 lg:pb-12 overflow-hidden">
            {/* Background abstract gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/10 blur-[120px] rounded-full point-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Headline */}
                <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-6">
                    <p className="text-accent font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
                        Premium Automotive Experience
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-3">
                        Find Your Dream Vehicle <br className="hidden md:block" />
                        <span className="text-gradient">Without The Hassle.</span>
                    </h1>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        Experience transparency, luxury, and unmatched service at the region's premier Chrysler, Dodge, Jeep, and Ram dealership.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Video & Social Proof */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {/* Video Container */}
                        <div className="relative aspect-video rounded-2xl bg-surface border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
                            <iframe 
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/kxXojUYUnnM" 
                                title="Glenbrook Dodge Chrysler Jeep Ram" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Rating Snippet & Testimonial */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch h-full">
                            <div className="bg-surface rounded-xl p-4 border border-white/5 flex-1 flex flex-col items-center justify-center text-center">
                                <div className="flex gap-1 text-yellow-500 mb-2">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                                </div>
                                <p className="text-primary font-medium">4.9/5 Average Rating</p>
                                <p className="text-sm text-secondary">from 1,200+ Google Reviews</p>
                            </div>

                            <div className="bg-surface rounded-xl p-5 border border-white/5 flex-[2] flex flex-col justify-center">
                                <p className="text-secondary italic mb-3">
                                    "Hands down the easiest car buying experience in Fort Wayne. No pressure from the salespeople, completely transparent pricing, and excellent communication throughout the process."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-accentHover flex items-center justify-center text-white font-bold text-xs">
                                        MT
                                    </div>
                                    <span className="text-primary font-medium text-sm">— Mark T., Recent Buyer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Assistant CTA Box (CDJR Sales Concierge) */}
                    <div className="lg:col-span-5 relative">
                        {/* Glow effect behind the card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-3xl blur opacity-20" />

                        <div className="relative bg-[#0d0d16] rounded-3xl border border-white/10 p-6 shadow-2xl h-full flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-primary mb-3">
                                    Skip the showroom wait.
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Get your questions answered as an instant quote",
                                        "Schedule a VIP test drive",
                                        "Value your trade-in remotely"
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 flex-shrink-0 text-accent">
                                                <ShieldCheck size={20} />
                                            </div>
                                            <span className="text-secondary">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Concierge Action Box */}
                            <div className="mt-auto bg-surface rounded-2xl p-5 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                                <div className="flex items-center gap-4 mb-4 relative z-10">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                                            alt="Concierge"
                                            className="w-16 h-16 rounded-full border-2 border-accent object-cover"
                                        />
                                        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-surface" />
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-semibold text-lg">CDJR Sales Concierge</h4>
                                        <p className="text-accent text-sm font-medium">Online Now • Typically replies instantly</p>
                                    </div>
                                </div>

                                <div className="relative p-1 rounded-full overflow-hidden group w-full cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300">
                                    {/* Rotating Conic Gradient Glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0_180deg,#60a5fa_360deg)] animate-[spin_1.5s_linear_infinite]" />

                                    <button 
                                        onClick={toggleCall}
                                        className={`w-full relative ${isCalling ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-primary text-background hover:bg-white'} transition-colors duration-300 rounded-full py-4 px-6 font-bold text-lg flex items-center justify-center gap-2 z-10 shadow-lg`}
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

                                <p className="text-center text-secondary text-xs mt-4 relative z-10">
                                    By clicking, you agree to our privacy policy. No obligation to purchase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
