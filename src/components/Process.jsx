import React from 'react';
import { Search, CalendarDays, Key } from 'lucide-react';

export default function Process() {
    const steps = [
        {
            icon: Search,
            title: "Find Your Match",
            description: "Browse our extensive inventory online or work with our concierge to locate the exact vehicle you're looking for with no obligation."
        },
        {
            icon: CalendarDays,
            title: "Schedule VIP Drive",
            description: "Book an appointment and we'll have your vehicle pulled up to the front, gassed, and ready for your dedicated 1-on-1 test drive."
        },
        {
            icon: Key,
            title: "Sign & Drive",
            description: "Review our transparent pricing, complete paperwork in under 30 minutes, and drive away in your new Chrysler, Dodge, Jeep, or Ram."
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-background relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-secondary tracking-widest uppercase font-semibold text-sm mb-4">
                        Super Simple To Get Started
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        The Easiest Car Buying <br />
                        <span className="text-gradient">Process Ever.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative lg:px-12">
                    {/* Connector Line for Desktop */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative group">
                                {/* Step Number Badge */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-xl z-20">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="bg-surface rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 h-full shadow-2xl group-hover:-translate-y-2 group-hover:shadow-accent/5">
                                    <div className="w-20 h-20 rounded-2xl bg-background border border-white/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
                                        <Icon size={36} className="text-accent group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-primary mb-4 text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-secondary text-center leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Final CTA Button embedded below the steps */}
                <div className="mt-16 text-center">
                    <button className="bg-gradient-to-r from-accent to-accentHover hover:to-blue-600 text-white transition-all duration-300 rounded-full py-4 px-10 font-bold text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 scale-100 hover:scale-105 active:scale-95">
                        Start Your Journey
                    </button>
                </div>

            </div>
        </section>
    );
}
