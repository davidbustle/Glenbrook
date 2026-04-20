import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Features() {
    const benefits = [
        "No-Haggle, True Market Pricing on all inventory.",
        "Largest selection of 2500/3500 HD Rams in the state.",
        "Exclusive 10-Year/100,000 Mile Powertrain Warranty.",
        "Complimentary loaner vehicles for life.",
        "VIP Access to incoming inventory before it hits the lot."
    ];

    return (
        <section className="py-20 lg:py-32 bg-background relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div>
                        <p className="text-secondary tracking-widest uppercase font-semibold text-sm mb-4">
                            The Glenbrook Difference
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                            An Unmatched Dealership <br />
                            <span className="text-gradient">Experience.</span>
                        </h2>
                        <p className="text-secondary text-lg mb-8 leading-relaxed max-w-lg">
                            We've completely redesigned the way you buy and service your vehicle. Stop settling for the traditional dealership games and experience true automotive luxury.
                        </p>

                        <ul className="space-y-5">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 text-accent">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <span className="text-primary font-medium text-lg leading-snug">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl blur-2xl" />
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/2022_Jeep_Grand_Cherokee_Summit_4xe%2C_Front_Left%2C_08-25-2022.jpg"
                                alt="New 2026 Jeep Concept"
                                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Floating metric card */}
                        <div className="absolute -bottom-8 -left-8 bg-surface border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md pb-8">
                            <p className="text-4xl font-black text-white mb-1">15,000+</p>
                            <p className="text-secondary text-sm font-medium uppercase tracking-wider">Vehicles Delivered</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
