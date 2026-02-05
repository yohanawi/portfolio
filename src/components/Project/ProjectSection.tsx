"use client";

import { projects } from "@/data/ProjectData";
import { X, Layers, CheckCircle, ExternalLink, Github, Code } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

type ProjectCardProps = {
    project: Project;
    index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
    <article
        className="relative flex flex-col h-full p-6 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-2xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2 animate-fade-in-up"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        {/* Project Image */}
        {project.image ? (
            <div className="relative w-full mb-6 overflow-hidden h-52 rounded-xl bg-brand-muted-gray/10">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brand-gray/90 to-transparent group-hover:opacity-100"></div>
            </div>
        ) : (
            <div className="relative flex items-center justify-center w-full mb-6 overflow-hidden h-52 rounded-xl bg-gradient-to-br from-brand-crimson-red/20 to-brand-soft-red/20">
                <Code className="text-brand-crimson-red/40" size={64} />
            </div>
        )}

        {/* Category Badge */}
        <div className="absolute px-3 py-1 text-xs font-bold rounded-full top-8 right-8 text-brand-white bg-brand-crimson-red">
            {project.category}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold transition-colors md:text-2xl text-brand-white font-poppins group-hover:text-brand-crimson-red">
            {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-brand-light-gray">
            {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech: string) => (
                <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold border rounded-full text-brand-crimson-red bg-brand-crimson-red/10 border-brand-crimson-red/20"
                >
                    {tech}
                </span>
            ))}
        </div>

        {/* Features */}
        <div className="mb-4">
            <h4 className="flex items-center gap-2 mb-2 text-sm font-semibold text-brand-white">
                <Layers size={16} className="text-brand-crimson-red" />
                Key Features
            </h4>
            <ul className="space-y-1">
                {project.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-brand-light-gray">
                        <CheckCircle size={14} className="flex-shrink-0 mt-0.5 text-brand-crimson-red" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Role */}
        <div className="p-4 mb-4 border rounded-lg bg-brand-crimson-red/5 border-brand-crimson-red/20">
            <h4 className="mb-2 text-xs font-semibold text-brand-muted-gray">My Role</h4>
            <p className="text-xs leading-relaxed text-brand-light-gray">{project.role}</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 mt-auto border-t border-brand-muted-gray/20">
            <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-all duration-300 rounded-lg text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:scale-105"
            >
                <ExternalLink size={14} />
                Live Demo
            </a>
            {project.links.githubFrontend !== "#" && (
                <a
                    href={project.links.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-all duration-300 border rounded-lg text-brand-light-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-105"
                >
                    <Github size={14} />
                    Frontend
                </a>
            )}
            {project.links.githubBackend !== "#" && (
                <a
                    href={project.links.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-all duration-300 border rounded-lg text-brand-light-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-105"
                >
                    <Github size={14} />
                    Backend
                </a>
            )}
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300 border-b-2 border-r-2 opacity-0 rounded-br-2xl border-brand-crimson-red group-hover:opacity-100"></div>
    </article>
);

const ProjectSection = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className="relative px-6 py-12">
            <div className="mx-auto max-w-7xl">
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <X size={48} className="mb-4 text-brand-muted-gray" />
                        <p className="text-lg text-brand-light-gray">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectSection;