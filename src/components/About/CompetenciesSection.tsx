"use client";

import { Sparkles, Rocket, Lightbulb, Target } from "lucide-react";

const CompetenciesSection = () => {

    const expertise = [
        {
            icon: <Sparkles size={24} />,
            title: "SEO-Optimized Websites",
            description: "I build lightning-fast websites optimized for search engines, ensuring better Google rankings and visibility.",
        },
        {
            icon: <Rocket size={24} />,
            title: "Scalable Applications",
            description: "I develop scalable full-stack applications designed to handle growth and high user demand efficiently.",
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Modern UI/UX Design",
            description: "I create clean, modern, and user-focused interfaces that enhance engagement and usability.",
        },
        {
            icon: <Target size={24} />,
            title: "Secure Systems",
            description: "I implement secure authentication, data protection, and best practices to ensure application safety.",
        },
    ];

    return (
        <section className="relative px-6 py-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brand-white font-poppins">
                        What I Do <span className="text-brand-crimson-red">Best</span>
                    </h3>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                        <span className="text-sm font-semibold tracking-wider text-brand-crimson-red">
                            CORE COMPETENCIES
                        </span>
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {expertise.map((item, index) => (
                        <div key={index}
                            className="relative p-8 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex items-center justify-center w-16 h-16 mb-6 transition-colors rounded-xl bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red group-hover:text-brand-white">
                                {item.icon}
                            </div>
                            <h4 className="mb-3 text-xl font-bold transition-colors font-poppins text-brand-white group-hover:text-brand-crimson-red">
                                {item.title}
                            </h4>
                            <p className="text-brand-light-gray font-inter">
                                {item.description}
                            </p>
                            <div className="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300 border-b-2 border-r-2 opacity-0 rounded-br-2xl border-brand-crimson-red group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CompetenciesSection;