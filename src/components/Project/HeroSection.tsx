"use client";

import { Code, Rocket, Sparkles } from "lucide-react";
import { SiNextdotjs, SiReact, SiLaravel, SiNodedotjs, SiTailwindcss, SiMysql } from "react-icons/si";

const HeroSection: React.FC = () => {

    const techStack = [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "MySQL", icon: <SiMysql /> },
    ];

    return (
        <section className="relative px-6 pb-16 overflow-hidden pt-36" >
            <div className="absolute w-32 h-32 rounded-full top-20 left-10 bg-brand-crimson-red/10 blur-2xl animate-pulse-slow"></div>
            <div className="absolute w-40 h-40 rounded-full top-40 right-10 bg-brand-soft-red/10 blur-2xl animate-pulse-slow animation-delay-1000"></div>

            <div className="absolute top-32 left-1/4 animate-float">
                <div className="p-3 border rounded-lg bg-brand-gray/80 border-brand-crimson-red/30 backdrop-blur-sm">
                    <Code className="text-brand-crimson-red" size={24} />
                </div>
            </div>
            <div className="absolute top-48 right-1/4 animate-float-delayed">
                <div className="p-3 border rounded-lg bg-brand-gray/80 border-brand-crimson-red/30 backdrop-blur-sm">
                    <Rocket className="text-brand-soft-red" size={24} />
                </div>
            </div>

            <div className="relative z-10 mx-auto text-center max-w-7xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full border-brand-crimson-red/30 bg-brand-crimson-red/10 animate-fade-in-down">
                    <Sparkles size={16} />
                    Portfolio Showcase
                </div>

                <h1 className="mb-2 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-brand-white font-poppins animate-fade-in-up">
                    Featured <span className="text-brand-crimson-red">Projects</span>
                </h1>

                <div className="relative w-24 mx-auto mb-6 overflow-hidden rounded-full h-1.5 bg-gradient-to-r from-brand-crimson-red to-brand-soft-red animate-fade-in">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                </div>

                <p className="max-w-3xl mx-auto mb-8 text-base leading-relaxed text-brand-light-gray animate-fade-in-up animation-delay-300">
                    Explore a selection of my best work. Each project demonstrates my ability to build robust,
                    scalable, and user-focused applications using modern technologies.
                </p>

                {/* Tech Stack Showcase */}
                <div className="animate-fade-in-up animation-delay-500">
                    <p className="mb-6 text-sm font-semibold tracking-wider text-brand-muted-gray">
                        BUILT WITH
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <div key={tech.name}
                                className="relative px-6 py-3 transition-all duration-300 border group rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-lg hover:shadow-brand-crimson-red/20 hover:-translate-y-1"
                                style={{ animationDelay: `${500 + index * 100}ms` }}>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">{tech.icon}</span>
                                    <span className="font-semibold transition-colors text-brand-light-gray group-hover:text-brand-crimson-red">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;