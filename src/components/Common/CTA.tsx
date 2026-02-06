"use client";

import { ChevronRight, Mail, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CTA = () => {

    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [startCount, setStartCount] = useState(false);

    // Counter states
    const [responseTime, setResponseTime] = useState(0);
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);

    // Intersection Observer (50% visible)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    // Counter animation
    useEffect(() => {
        if (!startCount) return;

        const animate = (
            setValue: React.Dispatch<React.SetStateAction<number>>,
            target: number,
            duration = 1200
        ) => {
            let start = 0;
            const startTime = performance.now();

            const step = (currentTime: number) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3); // ease-out
                setValue(Math.floor(eased * target));

                if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
        };

        animate(setResponseTime, 24);
        animate(setExperience, 2);
        animate(setProjects, 50);
    }, [startCount]);

    return (
        <section ref={sectionRef} className="relative px-6 py-16 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="relative p-12 overflow-hidden text-center md:p-16 rounded-3xl bg-gradient-to-br from-brand-crimson-red/10 via-brand-gray/50 to-brand-soft-red/10">

                    {/* Animated gradient orbs */}
                    <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-brand-crimson-red/20 blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-brand-soft-red/20 blur-3xl animate-pulse-slow animation-delay-1000"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold border rounded-full text-brand-crimson-red border-brand-crimson-red/30 bg-brand-gray/80 backdrop-blur-sm">
                            <Sparkles size={16} className="animate-spin-slow" />
                            Available for New Projects
                        </div>

                        <h3 className="mb-6 text-2xl font-black md:text-4xl text-brand-white font-poppins">
                            Let's Build Something{" "}
                            <span className="relative text-brand-crimson-red">
                                Amazing
                                <svg className="absolute bottom-0 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                                    <path d="M0 4C50 4 50 4 100 4C150 4 150 4 200 4" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="animate-draw" />
                                </svg>
                            </span>{" "}
                            Together
                        </h3>

                        <p className="max-w-2xl mx-auto mb-10 leading-relaxed text-brand-light-gray">
                            Transform your vision into reality. I'm here to help you create stunning,
                            high-performance web solutions that make an impact.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact"
                                className="relative inline-flex items-center gap-2 px-8 py-2 font-bold transition-all duration-300 rounded-full group text-brand-white bg-brand-crimson-red hover:shadow-2xl hover:shadow-brand-crimson-red/40">
                                Start a Project
                                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                                <span className="absolute inset-0 transition-transform duration-300 origin-left scale-x-0 bg-gradient-to-r from-brand-soft-red to-brand-crimson-red group-hover:scale-x-100"></span>
                            </Link>

                            <Link href="mailto:yohan.indrawansha2000@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-2 font-bold transition-all duration-300 border-2 rounded-full text-brand-light-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-white hover:scale-105">
                                <Mail size={20} />
                                Email Me
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                            <Trust value={responseTime} suffix="h" label="Response Time" />
                            <Divider />
                            <Trust value={experience} suffix="+" label="Years Experience" />
                            <Divider />
                            <Trust value={projects} suffix="+" label="Projects Done" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Trust = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => (
    <div className="text-center">
        <div className="text-3xl font-black text-brand-white">
            {value}{suffix}
        </div>
        <div className="mt-1 text-sm text-brand-muted-gray">{label}</div>
    </div>
);

const Divider = () => <div className="hidden w-px h-8 md:block bg-brand-muted-gray/30" />;

export default CTA;
