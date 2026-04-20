import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Layout */}
                <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">

                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 cursor-pointer mb-6 group">
                            <div className="flex flex-col text-left">
                                <span className="font-extrabold text-2xl tracking-tighter text-primary italic leading-none group-hover:text-accent transition-colors">
                                    GLENBROOK
                                </span>
                                <span className="text-[10px] font-semibold tracking-widest text-secondary mt-1">
                                    DODGE CHRYSLER JEEP RAM
                                </span>
                            </div>
                        </div>
                        <p className="text-secondary max-w-sm leading-relaxed mb-6">
                            The premier destination for new Chrysler, Dodge, Jeep, and Ram vehicles and certified pre-owned autos, redefining the modern dealership experience.
                        </p>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-wider mb-6 text-sm">Inventory & Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-secondary hover:text-accent transition-colors">New Vehicles</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-colors">Pre-Owned Vehicles</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-colors">Value Trade-In</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-colors">Finance Application</a></li>
                            <li><a href="#" className="text-secondary hover:text-accent transition-colors">Service Center</a></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-wider mb-6 text-sm">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="text-secondary">
                                <span className="block text-primary font-medium mb-1">Sales & Concierge</span>
                                <a href="tel:1-260-368-8110" className="hover:text-accent transition-colors tracking-wide">1 (260) 368-8110</a>
                            </li>
                            <li className="text-secondary mt-4">
                                <span className="block text-primary font-medium mb-1">Address</span>
                                100 W Coliseum Blvd<br />
                                Fort Wayne, IN 46805
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Legal / Copyright Map */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
                    <p>
                        © {new Date().getFullYear()} Glenbrook Dodge Chrysler Jeep Ram. All rights reserved. Designed by: <a href="https://revenantagency.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">Revenant</a>.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
