import React from 'react';
import { ShieldCheck, CalendarCheck, Award } from 'lucide-react';

const trustItems = [
    {
        icon: ShieldCheck,
        title: "Transparent Auto Pricing",
    },
    {
        icon: Award,
        title: "Certified Pre-Owned Guarantee",
    },
    {
        icon: CalendarCheck,
        title: "1-on-1 VIP Appointments",
    }
];

export default function TrustBar() {
    return (
        <div className="bg-surface border-b border-t border-white/5 py-4 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center overflow-x-auto no-scrollbar gap-8 md:gap-4 flex-nowrap md:flex-wrap">
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 shrink-0 mx-auto group"
                            >
                                <div className="text-accent group-hover:text-primary transition-colors duration-300">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className="text-sm md:text-base font-medium text-secondary group-hover:text-primary transition-colors duration-300 uppercase tracking-widest">
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
