"use client";

import { Award, ChevronRight, Code, Rocket, Target, Users } from "lucide-react";

const SummarySection = () => {

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
                "Docker",
                "Figma, Postman",
                "VS Code",
            ],
        },
    ];

    return (
        <>
            <section className="relative px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 transition-all duration-300 border md:p-12 rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/40 animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold md:text-3xl text-brand-white font-poppins">
                                Profile Summary
                            </h3>
                        </div>

                        <div className="space-y-4 text-base leading-relaxed md:text-lg text-brand-light-gray">
                            <p className="flex items-start gap-3">
                                <ChevronRight className="flex-shrink-0 mt-1 text-brand-crimson-red" size={20} />
                                <span>I build production-ready web applications with Next.js, Laravel, and modern UI frameworks.</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <ChevronRight className="flex-shrink-0 mt-1 text-brand-crimson-red" size={20} />
                                <span>I focus on performance, clean architecture, and user-centric design.</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <ChevronRight className="flex-shrink-0 mt-1 text-brand-crimson-red" size={20} />
                                <span>Hands-on experience with frontend and backend technologies.</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <ChevronRight className="flex-shrink-0 mt-1 text-brand-crimson-red" size={20} />
                                <span>Enjoy turning complex requirements into simple, elegant solutions.</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <ChevronRight className="flex-shrink-0 mt-1 text-brand-crimson-red" size={20} />
                                <span>Passionate about learning and adapting to new tech.</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <ChevronRight className="flex-shrink-0 mt-1 text-brand-crimson-red" size={20} />
                                <span>Collaborative team player and proactive problem solver.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 text-center">
                        <h3 className="mb-4 text-3xl font-bold md:text-4xl text-brand-white font-poppins">
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
                            <div
                                key={index}
                                className="relative p-6 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red group-hover:text-brand-white">
                                    {skill.icon}
                                </div>
                                <h4 className="mb-4 text-xl font-bold transition-colors text-brand-white font-poppins group-hover:text-brand-crimson-red">
                                    {skill.category}
                                </h4>
                                <ul className="space-y-2">
                                    {skill.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-brand-light-gray"
                                        >
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
}

export default SummarySection;