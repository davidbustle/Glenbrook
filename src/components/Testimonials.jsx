import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            name: "Michael R.",
            date: "2 weeks ago",
            text: "My wife and I recently bought a new Jeep Grand Cherokee from Glenbrook Dodge. The sales process was entirely smooth and absolutely zero pressure. The staff in Fort Wayne went out of their way to answer our questions.",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            date: "1 month ago",
            text: "Highly recommend Glenbrook! I brought my Ram 1500 in for some service, and their department was fast, professional, and kept me in the loop. By far the easiest dealership experience I've had.",
            rating: 5
        },
        {
            name: "David T.",
            date: "3 months ago",
            text: "Transparent pricing from the start. They helped me get a great rate on my new Dodge Charger and walked me through all the finance options without the usual haggling or back-and-forth games.",
            rating: 5
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-accent uppercase font-semibold tracking-widest text-sm mb-4">
                        Proven Results
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        Don't just take our word for it.
                    </h2>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={28} fill="currentColor" />)}
                        </div>
                        <p className="text-white font-medium text-xl mt-2">5.00 Average Rating</p>
                        <p className="text-secondary">Based on verified customer reviews</p>
                    </div>
                </div>

                {/* Reviews Grid/Carousel Area */}
                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-background rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center font-bold text-lg text-primary">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-medium">{review.name}</h4>
                                        <p className="text-secondary text-sm">{review.date}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex text-yellow-500 mb-4">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                            </div>

                            <p className="text-secondary leading-relaxed">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
