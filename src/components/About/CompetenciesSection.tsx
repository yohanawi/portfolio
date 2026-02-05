"use client";

import { Sparkles, Rocket, Lightbulb, Target } from "lucide-react";

const CompetenciesSection = () => {

    const expertise = [
        {
            icon: <Sparkles size={24} />,
            title: "SEO-Optimized Websites",
            description: "Building fast, search-engine friendly websites with perfect Core Web Vitals scores.",
        },
        {
            icon: <Rocket size={24} />,
            title: "Scalable Applications",
            description: "Developing full-stack applications that grow with your business needs.",
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Clean UI/UX Design",
            description: "Creating intuitive, user-friendly interfaces that enhance user experience.",
        },
        {
            icon: <Target size={24} />,
            title: "Secure Authentication",
            description: "Implementing robust security measures and modern authentication systems.",
        },
    ];

    return (
        <section className="relative px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h3 className="mb-4 text-3xl font-bold md:text-4xl text-brand-white font-poppins">
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

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className="relative p-8 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center justify-center w-16 h-16 mb-6 transition-colors rounded-xl bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red group-hover:text-brand-white">
                                {item.icon}
                            </div>
                            <h4 className="mb-3 text-xl font-bold transition-colors text-brand-white font-poppins group-hover:text-brand-crimson-red">
                                {item.title}
                            </h4>
                            <p className="text-brand-light-gray">
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