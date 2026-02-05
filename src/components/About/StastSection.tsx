"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

const StatsSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.5, // Trigger when 50% visible
    });

    const stats = [
        { value: 50, suffix: "+", label: "Projects Completed" },
        { value: 3, suffix: "+", label: "Years Experience" },
        { value: 100, suffix: "%", label: "Client Satisfaction" },
        { value: 24, suffix: "/7", label: "Support Available" },
    ];

    return (
        <section ref={sectionRef} className="relative px-6 py-12">
            <div className="grid max-w-6xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard
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

const StatCard = ({
    value,
    suffix,
    label,
    delay,
    start,
}: {
    value: number;
    suffix: string;
    label: string;
    delay: number;
    start: boolean;
}) => {
    const count = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        const controls = animate(count, value, {
            duration: 1.6,
            delay,
            ease: "easeOut",
            onUpdate(latest) {
                setDisplayValue(Math.round(latest));
            },
        });

        return controls.stop;
    }, [start, value, delay, count]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={start ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className="p-6 text-center transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2"
        >
            <div className="mb-2 text-3xl font-black md:text-4xl text-brand-crimson-red font-poppins">
                {displayValue}
                {suffix}
            </div>

            <div className="text-xs md:text-sm text-brand-muted-gray">
                {label}
            </div>
        </motion.div>
    );
};

export default StatsSection;
