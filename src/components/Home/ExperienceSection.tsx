"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Award, ChevronRight } from 'lucide-react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    achievements: string[];
    type?: 'Full-time' | 'Freelance' | 'Contract';
}

const experiences: ExperienceItem[] = [
    {
        role: 'Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: 'Jan 2022 - Present',
        type: 'Full-time',
        achievements: [
            'Developed and launched a responsive e-commerce platform used by 10,000+ customers.',
            'Optimized website performance, reducing load times by 40%.',
            'Collaborated with designers to improve UI/UX, increasing user retention by 25%.',
        ],
    },
    {
        role: 'Freelance Web Developer',
        company: 'Various Clients',
        period: 'Jun 2020 - Dec 2021',
        type: 'Freelance',
        achievements: [
            'Delivered 15+ custom websites for small businesses and startups.',
            'Integrated payment gateways and booking systems for client projects.',
            'Received 5-star ratings from all clients for quality and communication.',
        ],
    },
    {
        role: 'Junior Developer',
        company: 'StartUp Digital',
        period: 'Mar 2019 - May 2020',
        type: 'Full-time',
        achievements: [
            'Built reusable React components for the company\'s design system.',
            'Implemented responsive designs for mobile-first web applications.',
            'Participated in code reviews and agile development processes.',
        ],
    },
];

const stats = [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
];

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
    const { count, ref } = useCounterAnimation({ end: value, duration: 2000 });

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

// Timeline item animation component
const TimelineItem: React.FC<{
    exp: ExperienceItem;
    idx: number;
    isEven: boolean;
}> = ({ exp, idx, isEven }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = itemRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: [0, 0.3, 0.5],
                rootMargin: "0px",
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${isEven ? 'md:flex-row-reverse' : ''
                } ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
            style={{
                transitionDelay: `${idx * 150}ms`,
            }}
        >
            {/* Timeline dot */}
            <div className="absolute z-10 w-4 h-4 transform border-4 rounded-full shadow-lg left-8 md:left-1/2 bg-brand-crimson-red border-brand-gray md:-translate-x-1/2 shadow-brand-crimson-red/50">
                <div
                    className={`absolute inset-0 rounded-full opacity-75 bg-brand-crimson-red transition-all duration-500 ${isVisible ? 'animate-ping' : 'scale-0'
                        }`}
                    style={{ animationDelay: `${idx * 150 + 300}ms` }}
                />
            </div>

            {/* Content Card */}
            <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                    className={`relative p-6 ml-16 transition-all duration-500 border md:ml-0 group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-1 ${isVisible ? 'scale-100' : isEven ? 'scale-95 translate-x-12' : 'scale-95 -translate-x-12'
                        }`}
                    style={{
                        transitionDelay: `${idx * 150 + 200}ms`,
                    }}
                >
                    {/* Type Badge */}
                    <div className="absolute -top-3 left-6">
                        <span className="px-3 py-1 text-xs font-bold rounded-full shadow-lg text-brand-white bg-brand-crimson-red">
                            {exp.type || 'Full-time'}
                        </span>
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                        <h3 className="mb-2 text-2xl font-bold transition-colors text-brand-white group-hover:text-brand-crimson-red">
                            {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-2 text-brand-light-gray">
                                <Briefcase size={16} className="text-brand-crimson-red" />
                                <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-brand-muted-gray">
                                <Calendar size={16} className="text-brand-crimson-red" />
                                <span>{exp.period}</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px mb-4 bg-gradient-to-r from-transparent via-brand-muted-gray/30 to-transparent"></div>

                    {/* Achievements */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-3">
                            <Award size={18} className="text-brand-crimson-red" />
                            <span className="text-sm font-semibold text-brand-light-gray">
                                Key Achievements
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-brand-light-gray group/item"
                                >
                                    <ChevronRight
                                        size={16}
                                        className="flex-shrink-0 mt-0.5 text-brand-crimson-red transition-transform group-hover/item:translate-x-1"
                                    />
                                    <span className="leading-relaxed">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300 border-b-2 border-r-2 opacity-0 rounded-br-2xl border-brand-crimson-red group-hover:opacity-100"></div>
                </div>
            </div>

            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block md:w-1/2"></div>
        </div>
    );
};

const ExperienceSection: React.FC = () => (
    <section className="relative py-20 overflow-hidden bg-brand-gray" id="experience">
        <div className="bg-blob-top-right" style={{ top: '5rem', right: '2.5rem' }} />
        <div className="bg-blob-bottom-left" style={{ bottom: '5rem', left: '2.5rem' }} />

        <div className="relative z-10 max-w-6xl px-6 mx-auto">
            <header className="mb-16 text-center">
                <h2 className="section-title">
                    Experience & <span className="text-brand-crimson-red">Timeline</span>
                </h2>
                <div className="flex items-center justify-center gap-3">
                    <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                    <span className="section-subtitle">MY JOURNEY</span>
                    <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                </div>
                <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                    A timeline of my professional growth and key achievements in the tech industry
                </p>
            </header>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line (hidden on mobile, visible on md+) */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-crimson-red via-brand-soft-red to-brand-crimson-red hidden md:block transform md:-translate-x-1/2"></div>

                {/* Experience Items */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <TimelineItem
                            key={idx}
                            exp={exp}
                            idx={idx}
                            isEven={idx % 2 === 0}
                        />
                    ))}
                </div>

                {/* Timeline end indicator */}
                <div className="relative flex justify-center mt-12">
                    <div className="w-6 h-6 border-4 rounded-full shadow-lg bg-brand-crimson-red border-brand-gray"></div>
                </div>
            </div>

            {/* Stats Section (Optional) */}


            <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
                {stats.map((stat, idx) => (
                    <div
                        key={stat.label}
                        className="p-6 text-center transition-all border rounded-xl border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/40"
                    >
                        <div className="mb-2 text-4xl font-bold text-brand-crimson-red">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-brand-light-gray">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>

        <style jsx>{`
            @keyframes ping {
                75%, 100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .animate-ping {
                animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
        `}</style>
    </section>
);

export default ExperienceSection;