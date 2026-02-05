"use client";

import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

type Project = {
    name: string;
    description: string;
    techStack: string[];
    liveDemo: string;
    github: string;
    image?: string;
};

const projects: Project[] = [
    {
        name: "TaskFlow",
        description: "Real-time collaborative Kanban board for seamless workflow management and team productivity.",
        techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
        liveDemo: "https://taskflow-demo.com",
        github: "https://github.com/yourusername/taskflow",
        image: "/projects/taskflow.jpg",
    },
    {
        name: "EcoShop",
        description: "Marketplace platform for verified sustainable and eco-friendly products with carbon tracking.",
        techStack: ["Next.js", "TailwindCSS", "Firebase"],
        liveDemo: "https://ecoshop-demo.com",
        github: "https://github.com/yourusername/ecoshop",
        image: "/projects/ecoshop.jpg",
    },
    {
        name: "FitTrack",
        description: "Comprehensive fitness tracking dashboard with visual analytics for workouts and nutrition.",
        techStack: ["Vue", "Express", "PostgreSQL", "Chart.js"],
        liveDemo: "https://fittrack-demo.com",
        github: "https://github.com/yourusername/fittrack",
        image: "/projects/fittrack.jpg",
    },
    {
        name: "ChatBot AI",
        description: "Intelligent chatbot powered by AI for customer support automation and engagement.",
        techStack: ["Python", "FastAPI", "OpenAI", "Redis"],
        liveDemo: "https://chatbot-demo.com",
        github: "https://github.com/yourusername/chatbot",
        image: "/projects/chatbot.jpg",
    },
];

const ProjectSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="relative py-20 overflow-hidden bg-brand-gray" id="projects">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>

            <div className="relative z-10 px-6 mx-auto max-w-7xl">
                {/* Section Title - Centered */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brand-white">
                        Featured <span className="text-brand-crimson-red">Projects</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                        <span className="text-sm font-semibold tracking-wider text-brand-crimson-red">
                            MY WORK
                        </span>
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                    </div>
                    <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                        Explore my latest projects showcasing innovative solutions built with modern technologies
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: "swiper-pagination-bullet-active-custom",
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="pb-12"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative flex flex-col h-full p-6 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-2xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2">
                                    {/* Project Image Placeholder */}
                                    <div className="relative h-48 mb-5 overflow-hidden rounded-xl bg-gradient-to-br from-brand-crimson-red/20 to-brand-soft-red/20">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full">
                                                <span className="text-6xl font-bold text-brand-crimson-red/30">
                                                    {project.name.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brand-gray/80 to-transparent group-hover:opacity-100"></div>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="mb-3 text-2xl font-bold transition-colors text-brand-white group-hover:text-brand-crimson-red">
                                        {project.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="flex-grow mb-4 text-sm leading-relaxed text-brand-light-gray">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs font-semibold transition-colors border rounded-full text-brand-crimson-red bg-brand-crimson-red/10 border-brand-crimson-red/20 hover:bg-brand-crimson-red/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 pt-4 border-t border-brand-muted-gray/20">
                                        <Link
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold transition-colors text-brand-light-gray hover:text-brand-crimson-red"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            Live Demo
                                        </Link>

                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold transition-colors text-brand-light-gray hover:text-brand-crimson-red"
                                        >
                                            <FaGithub size={16} />
                                            GitHub
                                        </Link>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 border-t-2 border-r-2 opacity-0 rounded-tr-2xl border-brand-crimson-red group-hover:opacity-100"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 -translate-x-6 -translate-y-1/2 rounded-full shadow-lg opacity-0 top-1/2 bg-brand-crimson-red text-brand-white hover:bg-brand-soft-red hover:scale-110 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 translate-x-6 -translate-y-1/2 rounded-full shadow-lg opacity-0 top-1/2 bg-brand-crimson-red text-brand-white hover:bg-brand-soft-red hover:scale-110 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-label="Next slide"
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-12">
                    <Link
                        href="/projects"
                        className="relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden font-bold transition-all duration-300 rounded-full group text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:shadow-lg hover:shadow-brand-crimson-red/30 hover:scale-105"
                    >
                        <span className="relative z-10">View All Projects</span>
                        <FaExternalLinkAlt className="relative z-10 transition-transform group-hover:translate-x-1" size={16} />
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 transition-transform duration-300 origin-left scale-x-0 bg-gradient-to-r from-brand-soft-red to-brand-crimson-red group-hover:scale-x-100"></div>
                    </Link>
                </div>
            </div>

            {/* Custom Swiper Pagination Styles */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #B3B3B3;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s;
                }
                
                .swiper-pagination-bullet-active-custom {
                    background: #E10600;
                    opacity: 1;
                    width: 30px;
                    border-radius: 5px;
                }
                
                .swiper-pagination-bullet:hover {
                    opacity: 0.8;
                }
            `}</style>
        </section>
    );
};

export default ProjectSection;