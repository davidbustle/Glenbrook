import React from 'react';

// Using SVG paths for the logos to ensure they are crisp, modern, and transparent
const logos = [
    {
        name: "Chrysler",
        imgSrc: "/chrysler.png",
        className: "h-10 md:h-14"
    },
    {
        name: "Dodge",
        imgSrc: "/dodge.png",
        className: "h-10 md:h-16"
    },
    {
        name: "Jeep",
        imgSrc: "/jeep.png",
        className: "h-8 md:h-12"
    },
    {
        name: "Ram",
        imgSrc: "/ram.png",
        className: "h-10 md:h-16"
    }
];

export default function FeaturedLogos() {
    return (
        <section className="bg-surface py-12 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-secondary uppercase tracking-widest mb-8">
                    Authorized Dealer For
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                            <img
                                src={logo.imgSrc}
                                alt={`${logo.name} Logo`}
                                className={`object-contain w-auto ${logo.className}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
