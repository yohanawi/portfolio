"use client";

import { Briefcase, Code, Users, Award } from "lucide-react";

const StatsSection = () => {

    const stats = [
        { icon: <Briefcase size={24} />, value: "3+", label: "Years Experience" },
        { icon: <Code size={24} />, value: "50+", label: "Projects Completed" },
        { icon: <Users size={24} />, value: "30+", label: "Happy Clients" },
        { icon: <Award size={24} />, value: "100%", label: "Success Rate" },
    ];

    return (

        <section className="relative px-6 py-12">
            <div className="grid max-w-5xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="p-6 text-center transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2 animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red">
                            {stat.icon}
                        </div>
                        <div className="mb-2 text-3xl font-black md:text-4xl text-brand-crimson-red font-poppins">
                            {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-brand-muted-gray">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default StatsSection;