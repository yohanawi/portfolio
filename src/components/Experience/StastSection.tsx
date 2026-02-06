"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedStatCard from "../Common/AnimatedStatCard";
import { Briefcase, Code, Users, Award } from "lucide-react";

const IconStatsSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

    const stats = [
        { icon: <Briefcase size={24} />, value: 3, suffix: "+", label: "Years Experience" },
        { icon: <Code size={24} />, value: 50, suffix: "+", label: "Projects Completed" },
        { icon: <Users size={24} />, value: 30, suffix: "+", label: "Happy Clients" },
        { icon: <Award size={24} />, value: 100, suffix: "%", label: "Success Rate" },
    ];

    return (
        <section ref={sectionRef} className="relative px-6 py-12">
            <div className="grid max-w-5xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
                {stats.map((stat, index) => (
                    <div key={index} className="p-6 text-center transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red">
                            {stat.icon}
                        </div>

                        <AnimatedStatCard
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={index * 0.15}
                            start={isInView}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IconStatsSection;
