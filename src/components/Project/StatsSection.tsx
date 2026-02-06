"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { projects } from "@/data/ProjectData";
import AnimatedStatCard from "../Common/AnimatedStatCard";

const StatsSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.4,
    });

    const totalProjects = projects.length;
    const totalTech = new Set(projects.flatMap(p => p.techStack)).size;

    const stats = [
        {
            value: totalProjects,
            label: "Total Projects",
        },
        {
            value: totalTech,
            label: "Technologies",
        },
        {
            value: 97,
            suffix: "%",
            label: "Success Rate",
        },
    ];

    return (
        <section ref={sectionRef} className="relative px-6 py-8">
            <div className="grid max-w-4xl grid-cols-3 gap-4 mx-auto">
                {stats.map((stat, index) => (
                    <AnimatedStatCard
                        key={index}
                        value={stat.value}
                        suffix={stat.suffix}
                        label={stat.label}
                        delay={index * 0.15}
                        start={isInView}
                    />
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
