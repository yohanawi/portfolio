"use client";

import { Download, Mail, Phone, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const aboutData = {
    description:
        "I am a highly motivated, hardworking, and creative graduate with various skills. I aspire to become a video editor, UI/UX designer, front-end developer, back-end developer, and designer, as these roles align with my strongest abilities.",
    highlights: [
        { icon: <Briefcase size={18} />, label: "Experience", value: "2 years" },
        { icon: <Briefcase size={18} />, label: "Freelance", value: "Available" },
        { icon: <Phone size={18} />, label: "Phone", value: "077-8638568" },
        { icon: <Mail size={18} />, label: "Email", value: "yohan.indrawansha2000@gmail.com" },
    ],
    stats: [
        { number: "50+", label: "Projects Completed" },
        { number: "2+", label: "Years Experience" },
        { number: "100%", label: "Client Satisfaction" },
    ],
    cvUrl: "/cv/yohan-indrawansha-cv.pdf",
    imageUrl: "/assets/images/Notion.png",
};

const AnimatedStat: React.FC<{ number: string; label: string }> = ({ number, label }) => {
    const end = parseInt(number.replace(/\D/g, "")) || 0;
    const { count, ref } = useCounterAnimation({ end, duration: 2000 });

    return (
        <div ref={ref} className="p-3 text-center border rounded-lg bg-brand-gray border-brand-muted-gray/20">
            <div className="text-2xl font-bold text-brand-crimson-red">
                {number.includes("+") ? `${count}+` : `${count}${number.replace(/\d+/g, "")}`}
            </div>
            <div className="mt-1 text-xs text-brand-muted-gray">{label}</div>
        </div>
    );
};

const AboutSection: React.FC = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-brand-gray">
            <div className="bg-blob-top-right" style={{ width: '16rem', height: '16rem' }} />
            <div className="bg-blob-bottom-left" />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <header className="mb-16 text-center">
                    <h2 className="section-title">
                        About <span className="text-brand-crimson-red">Me</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                        <span className="section-subtitle">WHO I AM</span>
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                    </div>
                </header>

                {/* Content Grid: Left 1/3, Right 2/3 */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="flex flex-col items-center lg:col-span-1">
                        <div className="relative w-full max-w-sm overflow-hidden group">
                            <div className="relative aspect-square">
                                <div className="absolute inset-0 transition-all duration-300 border-4 rounded-2xl border-brand-crimson-red/20 group-hover:border-brand-crimson-red/40"></div>
                                <div className="absolute overflow-hidden inset-2 rounded-xl">
                                    <Image
                                        src={aboutData.imageUrl}
                                        alt="Yohan Awishka"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 rounded-tl-2xl border-brand-crimson-red"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 rounded-br-2xl border-brand-crimson-red"></div>
                        </div>

                        {/* Stats below image */}
                        <div className="grid w-full max-w-sm grid-cols-3 gap-4 mt-8">
                            {aboutData.stats.map((stat, idx) => (
                                <AnimatedStat key={idx} number={stat.number} label={stat.label} />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <h3 className="mb-4 text-2xl font-bold text-brand-white">
                                Full Stack Developer & Designer
                            </h3>
                            <p className="leading-relaxed text-brand-light-gray">
                                {aboutData.description}
                            </p>
                        </div>

                        {/* Information Grid */}
                        <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
                            {aboutData.highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 transition-all duration-300 border rounded-lg border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/40 hover:bg-brand-gray/80">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-brand-muted-gray">{item.label}</p>
                                        <p className="font-medium text-brand-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8">
                            <h4 className="mb-4 text-lg font-semibold text-brand-white">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                                {["UI/UX Design", "Frontend Dev", "Backend Dev"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full text-brand-light-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:bg-brand-crimson-red/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link href={aboutData.cvUrl} download className="inline-flex items-center gap-2 px-8 py-3 font-semibold transition-all duration-300 rounded-lg text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:shadow-lg hover:shadow-brand-crimson-red/20 hover:scale-105">
                            <Download size={20} />
                            Download CV
                        </Link>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default AboutSection;