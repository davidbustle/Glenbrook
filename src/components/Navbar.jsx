import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <div className="flex flex-col">
                            <span className="font-extrabold text-2xl tracking-tighter text-primary italic leading-none group-hover:text-accent transition-colors">
                                GLENBROOK
                            </span>
                            <span className="text-[10px] font-semibold tracking-widest text-secondary mt-1">
                                DODGE CHRYSLER JEEP RAM
                            </span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center">
                        <a
                            href="tel:1-260-368-8110"
                            className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-200"
                        >
                            <div className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <Phone size={18} />
                            </div>
                            <span className="hidden sm:block font-medium tracking-wide">
                                1 (260) 368-8110
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
