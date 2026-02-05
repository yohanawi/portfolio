"use client";

import { Code, Filter } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const HeroSection: React.FC = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <section className="relative px-6 pt-32 pb-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium border rounded-full text-brand-crimson-red border-brand-crimson-red/30 bg-brand-crimson-red/10 animate-fade-in-down">
                    <Code size={16} />
                    My Work
                </div>

                <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-brand-white font-poppins animate-fade-in-up">
                    Featured <span className="text-brand-crimson-red">Projects</span>
                </h1>

                <div className="relative w-24 mx-auto mb-6 overflow-hidden rounded-full h-1.5 bg-gradient-to-r from-brand-crimson-red to-brand-soft-red animate-fade-in">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                </div>

                <p className="max-w-3xl mx-auto mb-8 text-base leading-relaxed md:text-lg text-brand-light-gray animate-fade-in-up animation-delay-200">
                    Explore a selection of my best work. Each project demonstrates my ability to build robust,
                    scalable, and user-focused applications using modern technologies.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-300">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                ? 'bg-brand-crimson-red text-brand-white shadow-lg shadow-brand-crimson-red/30'
                                : 'border-2 border-brand-muted-gray/30 text-brand-light-gray hover:border-brand-crimson-red hover:text-brand-crimson-red'
                                }`}
                        >
                            {category === "All" && <Filter size={16} className="inline mr-2" />}
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;