"use client";

import { projects } from "@/data/ProjectData";

const StatsSection = () => {
    return (
        <section className="relative px-6 py-8">
            <div className="grid max-w-4xl grid-cols-3 gap-4 mx-auto">
                <div className="p-4 text-center border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20">
                    <div className="mb-1 text-2xl font-bold md:text-3xl text-brand-crimson-red font-poppins">
                        {projects.length}
                    </div>
                    <div className="text-xs text-brand-muted-gray">Total Projects</div>
                </div>
                <div className="p-4 text-center border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20">
                    <div className="mb-1 text-2xl font-bold md:text-3xl text-brand-crimson-red font-poppins">
                        {new Set(projects.flatMap(p => p.techStack)).size}
                    </div>
                    <div className="text-xs text-brand-muted-gray">Technologies</div>
                </div>
                <div className="p-4 text-center border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20">
                    <div className="mb-1 text-2xl font-bold md:text-3xl text-brand-crimson-red font-poppins">
                        100%
                    </div>
                    <div className="text-xs text-brand-muted-gray">Success Rate</div>
                </div>
            </div>
        </section>
    );
}

export default StatsSection;