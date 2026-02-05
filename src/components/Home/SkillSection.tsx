"use client";

import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiPostgresql, SiVercel } from "react-icons/si";

const skills = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js", icon: <SiNextdotjs />, level: 90 },
            { name: "React", icon: <FaReact />, level: 95 },
            { name: "Tailwind", icon: <SiTailwindcss />, level: 90 },
            { name: "HTML", icon: <FaHtml5 />, level: 95 },
            { name: "CSS", icon: <FaCss3Alt />, level: 90 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Laravel", icon: <FaLaravel />, level: 85 },
            { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        ],
    },
    {
        category: "Database",
        items: [
            { name: "MySQL", icon: <SiMysql />, level: 85 },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
        ],
    },
    {
        category: "DevOps / Tools",
        items: [
            { name: "Git", icon: <FaGitAlt />, level: 90 },
            { name: "Docker", icon: <FaDocker />, level: 75 },
            { name: "AWS", icon: <FaAws />, level: 70 },
            { name: "Vercel", icon: <SiVercel />, level: 85 },
        ],
    },
];

const SkillSection: React.FC = () => (
    <section className="relative py-20 overflow-hidden bg-brand-gray">
        {/* Decorative background elements */}
        <div className="absolute rounded-full top-10 left-10 w-72 h-72 bg-brand-crimson-red/5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-10 right-10 w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl px-6 mx-auto">
            {/* Section Title - Centered */}
            <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brand-white">
                    Skills & <span className="text-brand-crimson-red">Tech Stack</span>
                </h2>
                <div className="flex items-center justify-center gap-3">
                    <span className="w-12 h-px bg-brand-muted-gray"></span>
                    <span className="text-sm font-semibold tracking-wider text-brand-crimson-red">
                        WHAT I USE
                    </span>
                    <span className="w-12 h-px bg-brand-muted-gray"></span>
                </div>
                <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                    A comprehensive toolkit of modern technologies I use to build robust, scalable applications
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {skills.map((group, groupIndex) => (
                    <div
                        key={group.category}
                        className="relative p-6 transition-all duration-300 border rounded-2xl bg-brand-gray/50 border-brand-muted-gray/20 hover:border-brand-crimson-red/40 hover:shadow-xl hover:shadow-brand-crimson-red/10 group"
                        style={{
                            animationDelay: `${groupIndex * 100}ms`
                        }}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 rounded-full bg-brand-crimson-red"></div>
                            <h3 className="text-2xl font-bold transition-colors text-brand-white group-hover:text-brand-crimson-red">
                                {group.category}
                            </h3>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-4">
                            {group.items.map((item, itemIndex) => (
                                <div
                                    key={item.name}
                                    className="relative"
                                    style={{
                                        animationDelay: `${(groupIndex * 100) + (itemIndex * 50)}ms`
                                    }}
                                >
                                    {/* Skill Info */}
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red/20">
                                                <span className="text-xl">{item.icon}</span>
                                            </div>
                                            <span className="font-medium text-brand-light-gray">
                                                {item.name}
                                            </span>
                                        </div>
                                        <span className="text-sm font-semibold text-brand-muted-gray">
                                            {item.level}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="relative h-2 overflow-hidden rounded-full bg-brand-muted-gray/20">
                                        <div
                                            className="h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-brand-crimson-red to-brand-soft-red"
                                            style={{
                                                width: `${item.level}%`,
                                                animationDelay: `${(groupIndex * 100) + (itemIndex * 50)}ms`
                                            }}
                                        >
                                            {/* Shimmer effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 border-t-2 border-r-2 opacity-0 rounded-tr-2xl border-brand-crimson-red group-hover:opacity-100"></div>
                    </div>
                ))}
            </div>

            {/* Additional Tech Icons Showcase (Optional) */}
            <div className="mt-16 text-center">
                <h3 className="mb-8 text-xl font-semibold text-brand-white">
                    Technologies I Work With
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {skills.flatMap(group => group.items).map((item, index) => (
                        <div
                            key={`tech-${index}`}
                            className="flex items-center justify-center w-16 h-16 transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 text-brand-muted-gray hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                            title={item.name}
                        >
                            <span className="text-3xl">{item.icon}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <style jsx>{`
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
            
            .animate-shimmer {
                animation: shimmer 2s infinite;
            }
        `}</style>
    </section>
);

export default SkillSection;