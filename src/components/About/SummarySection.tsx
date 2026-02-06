"use client";

import { Users, ChevronRight, Code, Target, Award, Rocket, } from "lucide-react";

const SummarySection = () => {

    const highlights = [
        "I build production-ready web applications with Next.js, Laravel, and modern UI frameworks.",
        "I focus on performance, clean architecture, and user-centric design.",
        "Hands-on experience with frontend and backend technologies.",
        "Enjoy turning complex requirements into simple, elegant solutions.",
        "Passionate about learning and adapting to new tech.",
    ];

    const skills = [
        {
            category: "Frontend",
            icon: <Code size={24} />,
            items: [
                "Next.js, React",
                "Tailwind CSS, Bootstrap",
                "HTML, CSS, JavaScript",
                "TypeScript",
            ],
        },
        {
            category: "Backend",
            icon: <Rocket size={24} />,
            items: [
                "Node.js, Express",
                "Laravel, PHP",
                "REST APIs",
                "JWT Authentication",
            ],
        },
        {
            category: "Database",
            icon: <Target size={24} />,
            items: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Firebase",
            ],
        },
        {
            category: "Tools & DevOps",
            icon: <Award size={24} />,
            items: [
                "Git, GitHub",
                "Postman",
                "Figma",
                "VS Code",
            ],
        },
    ];

    return (
        <>
            <section className="relative px-6 py-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-crimson-red/5 blur-3xl"></div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-3 text-3xl font-bold md:text-4xl text-brand-white font-poppins">
                                My Professional <span className="text-brand-crimson-red">Philosophy</span>
                            </h3>
                            <div className="w-24 h-1 mb-8 rounded-full bg-gradient-to-r from-brand-crimson-red to-brand-soft-red"></div>
                            <div className="space-y-4">
                                {highlights.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 transition-all duration-300 border rounded-xl bg-brand-gray/50 border-brand-muted-gray/20 hover:border-brand-crimson-red/40 hover:bg-brand-gray/80 group">
                                        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 text-white transition-colors rounded-full bg-brand-crimson-red/10 group-hover:bg-brand-crimson-red group-hover:text-brand-white">
                                            <ChevronRight size={16} />
                                        </div>
                                        <p className="text-sm leading-relaxed text-brand-light-gray font-inter">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:mt-20">
                            <div className="relative">
                                <div className="relative flex items-center justify-center rounded-full w-96 h-96 bg-gradient-to-br from-brand-crimson-red/20 to-brand-soft-red/10">
                                    <div className="flex items-center justify-center border-4 rounded-full w-80 h-80 bg-brand-gray border-brand-crimson-red/30">
                                        <img
                                            src="/assets/images/Notion.png"
                                            alt="Profile"
                                            className="object-cover border-4 rounded-full shadow-lg w-72 h-72 border-brand-crimson-red"
                                        />
                                    </div>
                                </div>
                                <div className="absolute p-4 border rounded-lg -top-4 -right-4 bg-brand-gray/90 border-brand-crimson-red/30 backdrop-blur-sm animate-float">
                                    <div className="text-2xl font-bold text-brand-crimson-red">10+</div>
                                    <div className="text-xs text-brand-muted-gray">Technologies</div>
                                </div>

                                <div className="absolute p-4 border rounded-lg -bottom-4 -left-4 bg-brand-gray/90 border-brand-crimson-red/30 backdrop-blur-sm animate-float-delayed">
                                    <div className="text-2xl font-bold text-brand-crimson-red">97%</div>
                                    <div className="text-xs text-brand-muted-gray">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative px-6 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brand-white font-poppins">
                            Skills <span className="text-brand-crimson-red">Snapshot</span>
                        </h3>
                        <div className="flex items-center justify-center gap-3">
                            <span className="w-12 h-px bg-brand-muted-gray"></span>
                            <span className="text-sm font-semibold tracking-wider text-brand-crimson-red">
                                TECHNICAL EXPERTISE
                            </span>
                            <span className="w-12 h-px bg-brand-muted-gray"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {skills.map((skill, index) => (
                            <div key={index}
                                className="relative p-6 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red group-hover:text-brand-white">
                                    {skill.icon}
                                </div>
                                <h4 className="mb-4 text-xl font-bold transition-colors text-brand-white font-poppins group-hover:text-brand-crimson-red">
                                    {skill.category}
                                </h4>
                                <ul className="space-y-2">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-brand-light-gray">
                                            <ChevronRight className="flex-shrink-0 mt-0.5 text-brand-crimson-red" size={16} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SummarySection; 