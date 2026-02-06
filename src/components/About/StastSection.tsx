"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedStatCard from "../Common/AnimatedStatCard";

const StatsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.5,
    });

    const stats = [
        { value: 50, suffix: "+", label: "Projects Completed" },
        { value: 2, suffix: "+", label: "Years Experience" },
        { value: 97, suffix: "%", label: "Client Satisfaction" },
        { value: 24, suffix: "/7", label: "Support Available" },
    ];

    return (
        <section ref={sectionRef} className="relative px-6 py-12">
            <div className="grid grid-cols-2 gap-6 mx-auto max-w-7xl md:grid-cols-4">
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
