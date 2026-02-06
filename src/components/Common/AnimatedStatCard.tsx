"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface AnimatedStatCardProps {
    value: number;
    suffix?: string;
    label: string;
    delay?: number;
    start: boolean;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({
    value,
    suffix = "",
    label,
    delay = 0,
    start,
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
            className="p-4 text-center transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2"
        >
            <div className="mb-1 text-2xl font-bold md:text-3xl text-brand-crimson-red font-poppins">
                {displayValue}
                {suffix}
            </div>
            <div className="text-sm text-brand-muted-gray">{label}</div>
        </motion.div>
    );
};

export default AnimatedStatCard;
