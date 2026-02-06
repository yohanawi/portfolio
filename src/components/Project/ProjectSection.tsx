"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/ProjectData";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutGrid, List, Layers, CheckCircle, ExternalLink, Github, Code, FolderX, } from "lucide-react";

/* ===================== TYPES ===================== */

type Project = {
    title: string;
    description: string;
    techStack: string[];
    features: string[];
    role: string;
    category: string;
    image?: string;
    links: {
        demo: string;
        githubFrontend: string;
        githubBackend: string;
    };
};

/* ===================== CARD ===================== */

const ProjectCard = ({
    project,
    view,
}: {
    project: Project;
    view: "grid" | "list";
}) => {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            className={`group relative border rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl ${view === "list" ? "flex gap-6 p-6" : "flex flex-col p-6"} `}>
            {/* IMAGE */}
            {project.image ? (
                <div className={`relative overflow-hidden rounded-xl bg-brand-muted-gray/10  ${view === "list" ? "w-48 h-32 flex-shrink-0" : "w-full h-52 mb-6"}`}>
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
            ) : (
                <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-crimson-red/20 to-brand-soft-red/20 ${view === "list" ? "w-48 h-32" : "w-full h-52 mb-6"} `}>
                    <Code size={48} className="text-brand-crimson-red/40" />
                </div>
            )}

            {/* CONTENT */}
            <div className="flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-xl font-bold text-brand-white group-hover:text-brand-crimson-red ${view === "list" ? "" : " w-[20rem]"}`}>
                        {project.title}
                    </h3>
                    <span className={`px-3 py-1 ${view === "list" ? "" : "w-[6rem]"} text-xs font-bold rounded-full bg-brand-crimson-red text-brand-white`}>
                        {project.category}
                    </span>
                </div>

                <p className="mb-4 text-sm text-brand-light-gray">
                    {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full text-brand-crimson-red bg-brand-crimson-red/10">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* FEATURES (grid only) */}
                {view === "grid" && (
                    <div className="mb-4">
                        <h4 className="flex items-center gap-2 mb-2 text-sm font-semibold text-brand-white">
                            <Layers size={14} className="text-brand-crimson-red" />
                            Key Features
                        </h4>
                        <ul className="space-y-1">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex gap-2 text-xs text-brand-light-gray">
                                    <CheckCircle size={14} className="text-brand-crimson-red" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* LINKS */}
                <div className="flex flex-wrap gap-3 pt-4 mt-auto border-t border-brand-muted-gray/20">
                    <Link href={project.links.demo} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-brand-crimson-red text-brand-white hover:scale-105">
                        <ExternalLink size={14} />
                        Live Demo
                    </Link>

                    {project.links.githubFrontend !== "#" && (
                        <Link href={project.links.githubFrontend} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-xs border rounded-lg border-brand-muted-gray/30 text-brand-light-gray hover:text-brand-crimson-red" >
                            <Github size={14} />
                            Frontend
                        </Link>
                    )}

                    {project.links.githubBackend !== "#" && (
                        <Link href={project.links.githubBackend} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-xs border rounded-lg border-brand-muted-gray/30 text-brand-light-gray hover:text-brand-crimson-red">
                            <Github size={14} />
                            Backend
                        </Link>
                    )}
                </div>
            </div>
        </motion.article>
    );
};

const ProjectSection = () => {
    const [search, setSearch] = useState("");
    const [view, setView] = useState<"grid" | "list">("grid");

    const filteredProjects = projects.filter((project) =>
        `${project.title} ${project.description} ${project.techStack.join(" ")}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <section className="px-6 py-12">
            <div className="mx-auto max-w-7xl">

                {/* TOP BAR */}
                <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative w-full sm:max-w-sm">
                        <Search size={18} className="absolute -translate-y-1/2 left-3 top-1/2 text-brand-muted-gray" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search projects..."
                            className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg bg-brand-muted-gray/10 border-brand-muted-gray/30 text-brand-white focus:border-brand-crimson-red"
                        />
                    </div>

                    <div className="z-50 flex gap-2">
                        <button onClick={() => setView("grid")}
                            className={`p-2 rounded-lg border ${view === "grid" ? "bg-brand-crimson-red text-brand-white border-brand-crimson-red" : "border-brand-muted-gray/30 text-brand-light-gray"}`}>
                            <LayoutGrid size={18} />
                        </button>
                        <button onClick={() => setView("list")} className={`p-2 rounded-lg border ${view === "list" ? "bg-brand-crimson-red text-brand-white border-brand-crimson-red" : "border-brand-muted-gray/30 text-brand-light-gray"}`}>
                            <List size={18} />
                        </button>
                    </div >
                </div >

                {/* PROJECTS */}
                <AnimatePresence mode="wait" >
                    {
                        filteredProjects.length > 0 ? (
                            <motion.div
                                key={view}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className={
                                    view === "grid"
                                        ? "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                                        : "flex flex-col gap-6"
                                }>
                                {filteredProjects.map((project) => (
                                    <ProjectCard key={project.title} project={project} view={view} />
                                ))}
                            </motion.div>
                        ) : (
                            /* EMPTY STATE */
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center py-24 text-center rounded-2xl bg-gradient-to-br from-brand-muted-gray/10 to-brand-crimson-red/10">
                                <FolderX size={56} className="mb-4 text-brand-crimson-red/50" />
                                <h3 className="mb-2 text-xl font-semibold text-brand-white">
                                    No projects found
                                </h3>
                                <p className="text-sm text-brand-light-gray">
                                    Try a different keyword or clear the search.
                                </p>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div >
        </section >
    );
};

export default ProjectSection;
