"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ArrowLeft, ExternalLink, Github, Code, Target,
    Zap, Shield, Smartphone, CheckCircle, AlertTriangle,
    Lightbulb, TrendingUp, User, Globe, Layers, Star, Award,
    Search, Database, Layout, Settings, Package, Monitor,
    Rocket, Code2,
} from "lucide-react";
import {
    SiNextdotjs, SiReact, SiLaravel, SiNodedotjs,
    SiTailwindcss, SiMysql, SiTypescript, SiGraphql,
    SiMongodb, SiPostgresql,
} from "react-icons/si";
import { projects } from "@/data/ProjectData";
import type { Project } from "@/data/ProjectData";

/* ─────────────────────────────────────────
   Animation Variants
──────────────────────────────────────── */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FV: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: EASE_OUT },
    }),
};

const SV: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const inView = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-60px" },
};

const INITIAL_GALLERY_ITEMS = 8;

/* ─────────────────────────────────────────
   Tech Badge Map
──────────────────────────────────────── */
const TECH_MAP: Record<string, { icon: React.ReactNode; color: string }> = {
    "Next.js": { icon: <SiNextdotjs />, color: "text-white" },
    "Next.js 16": { icon: <SiNextdotjs />, color: "text-white" },
    "React": { icon: <SiReact />, color: "text-sky-400" },
    "Laravel": { icon: <SiLaravel />, color: "text-red-400" },
    "Laravel (backend)": { icon: <SiLaravel />, color: "text-red-400" },
    "Node.js": { icon: <SiNodedotjs />, color: "text-green-400" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "text-sky-400" },
    "MySQL": { icon: <SiMysql />, color: "text-orange-400" },
    "TypeScript": { icon: <SiTypescript />, color: "text-blue-400" },
    "GraphQL": { icon: <SiGraphql />, color: "text-pink-400" },
    "MongoDB": { icon: <SiMongodb />, color: "text-green-500" },
    "PostgreSQL": { icon: <SiPostgresql />, color: "text-blue-400" },
};

function TechBadge({ name }: { name: string }) {
    const tech = TECH_MAP[name];
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-brand-muted-gray/25 bg-brand-dark/70 text-brand-light-gray hover:border-brand-crimson-red/50 hover:text-brand-white transition-colors cursor-default">
            {tech ? (
                <span className={`text-base leading-none ${tech.color}`}>{tech.icon}</span>
            ) : (
                <Code size={11} className="text-brand-muted-gray" />
            )}
            {name}
        </span>
    );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full border-brand-crimson-red/30 bg-brand-crimson-red/10 animate-fade-in-down">
            {children}
        </div>
    );
}

/* ─────────────────────────────────────────
   Feature Icons (cycles through)
──────────────────────────────────────── */
const FEATURE_ICONS = [
    <Code2 size={18} key="code2" />,
    <Shield size={18} key="shield" />,
    <Zap size={18} key="zap" />,
    <Smartphone size={18} key="smartphone" />,
    <Globe size={18} key="globe" />,
    <Database size={18} key="database" />,
    <Layout size={18} key="layout" />,
    <Settings size={18} key="settings" />,
    <Package size={18} key="package" />,
    <Monitor size={18} key="monitor" />,
];

/* ─────────────────────────────────────────
   HERO SECTION
──────────────────────────────────────── */
function HeroSection({ project }: { project: Project }) {

    const titleParts = project.title.split(/\s*[–\-]\s*/);
    const mainTitle = titleParts[0];
    const subtitle = titleParts.slice(1).join(" – ");

    return (
        <section className="relative flex items-center min-h-screen px-6 pt-24 pb-20 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-brand-crimson-red/7 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-brand-soft-red/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-crimson-red/3 blur-[100px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10 w-full mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-brand-muted-gray hover:text-brand-crimson-red group">
                        <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </motion.div>

                <div className="grid items-center lg:grid-cols-2 gap-14">
                    <motion.div {...inView} variants={SV}>
                        <motion.div variants={FV} custom={0}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full border-brand-crimson-red/30 bg-brand-crimson-red/10 animate-fade-in-down">
                                <Layers size={11} />
                                {project.category}
                            </span>
                        </motion.div>

                        <motion.h1 variants={FV} custom={1} className="font-poppins font-black leading-[1.1] text-4xl md:text-5xl xl:text-6xl mb-5">
                            <span className="text-brand-crimson-red">{mainTitle}</span>
                            {subtitle && (
                                <span className="block mt-2 text-2xl font-bold leading-tight text-brand-white md:text-3xl xl:text-4xl">
                                    {subtitle}
                                </span>
                            )}
                        </motion.h1>

                        <motion.div variants={FV} custom={2} className="w-16 h-1 mb-6 rounded-full bg-gradient-to-r from-brand-crimson-red to-brand-soft-red" />

                        <motion.p variants={FV} custom={3} className="max-w-xl mb-8 text-base leading-relaxed text-brand-light-gray">
                            {project.description}
                        </motion.p>

                        <motion.div variants={FV} custom={4} className="flex flex-wrap gap-2 mb-10">
                            {project.techStack.map((tech) => (
                                <TechBadge key={tech} name={tech} />
                            ))}
                        </motion.div>

                        <motion.div variants={FV} custom={5} className="flex flex-wrap gap-4">
                            {project.links.demo !== "#" && (
                                <Link href={project.links.demo} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all rounded-xl bg-brand-crimson-red hover:bg-brand-soft-red hover:scale-105 hover:shadow-lg hover:shadow-brand-crimson-red/30">
                                    <ExternalLink size={15} />
                                    View Live
                                </Link>
                            )}
                            {project.links.githubFrontend !== "#" && (
                                <Link href={project.links.githubFrontend} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all border rounded-xl border-brand-muted-gray/35 text-brand-light-gray hover:border-brand-crimson-red/60 hover:text-brand-crimson-red">
                                    <Github size={15} />
                                    View Code
                                </Link>
                            )}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative">

                        <div className="absolute inset-0 scale-105 rounded-2xl bg-gradient-to-br from-brand-crimson-red/20 to-brand-soft-red/10 blur-xl -z-10" />

                        <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-brand-muted-gray/20 shadow-black/60 aspect-video group">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center w-full h-full gap-5 bg-gradient-to-br from-brand-crimson-red/15 via-brand-dark to-brand-soft-red/15">
                                    <div className="border shadow-lg p-7 rounded-2xl bg-brand-gray/80 border-brand-crimson-red/30 shadow-brand-crimson-red/10">
                                        <Code size={52} className="text-brand-crimson-red/70" />
                                    </div>
                                    <p className="text-sm font-medium tracking-wide text-brand-muted-gray">Project Preview</p>
                                </div>
                            )}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
                        </div>

                        <div className="absolute rounded-full -top-5 -right-5 w-28 h-28 bg-brand-crimson-red/10 blur-2xl" />
                        <div className="absolute rounded-full -bottom-5 -left-5 w-36 h-36 bg-brand-soft-red/8 blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   META STRIP
──────────────────────────────────────── */
function MetaStrip({ project }: { project: Project }) {
    const items = [
        { icon: <Layers size={15} />, label: "Category", value: project.category },
        {
            icon: <User size={15} />, label: "My Role",
            value: project.role.split("—")[0].split(",")[0].trim(),
        },
        {
            icon: <Code size={15} />, label: "Core Stack",
            value: project.techStack.slice(0, 2).join(", ") + (project.techStack.length > 2 ? ` +${project.techStack.length - 2}` : ""),
        },
        {
            icon: <Globe size={15} />, label: "Status",
            value: project.links.demo !== "#" ? "Live" : "In Progress",
        },
    ];

    return (
        <motion.section
            {...inView}
            variants={FV}
            className="px-6 py-16 border-y border-brand-muted-gray/15 bg-brand-dark/60 backdrop-blur-md"
        >
            <div className="grid grid-cols-2 mx-auto max-w-7xl md:grid-cols-4 gap-y-5 gap-x-4 md:divide-x divide-brand-muted-gray/15">
                {items.map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 ${i > 0 ? "md:pl-6" : ""}`}>
                        <div className="flex-shrink-0 p-2 rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red">
                            {item.icon}
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs text-brand-muted-gray font-medium mb-0.5">{item.label}</p>
                            <div className="relative group w-fit">
                                <p className="text-sm font-semibold truncate text-brand-white max-w-[150px]">
                                    {item.value}
                                </p>

                                <div className="absolute z-10 px-3 py-1 mb-2 text-xs text-white transition-all duration-200 scale-95 -translate-x-1/2 rounded-md shadow-xl opacity-0 bottom-full left-1/2 group-hover:opacity-100 group-hover:scale-100 bg-gradient-to-r from-gray-800 to-black whitespace-nowrap">
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

/* ─────────────────────────────────────────
   PROBLEM / GOAL SECTION
──────────────────────────────────────── */
function ProblemSection({ problem }: { problem: string }) {
    return (
        <section className="px-6 py-24">
            <div className="grid items-center gap-16 mx-auto max-w-7xl lg:grid-cols-2">
                <motion.div {...inView} variants={SV}>
                    <motion.div variants={FV} custom={0}>
                        <SectionLabel><Target size={11} /> The Challenge</SectionLabel>
                    </motion.div>
                    <motion.h2 variants={FV} custom={1} className="mb-6 text-3xl font-black md:text-4xl text-brand-white font-poppins">
                        Problem &amp; <span className="text-brand-crimson-red">Goal</span>
                    </motion.h2>
                    <motion.p variants={FV} custom={2} className="pl-5 text-base leading-relaxed border-l-2 text-brand-light-gray border-brand-crimson-red/40">
                        {problem}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center"
                >
                    <div className="relative w-64 h-64">
                        <div className="absolute inset-0 border-2 border-dashed rounded-full border-brand-crimson-red/30 animate-spin-slow" style={{ animationDuration: "22s" }} />
                        <div className="absolute flex items-center justify-center border rounded-full inset-6 border-brand-muted-gray/20 bg-brand-gray/20 backdrop-blur-sm">
                            <div className="absolute rounded-full inset-4 bg-brand-crimson-red/5 blur-sm" />
                            <div className="relative flex items-center justify-center border rounded-full shadow-xl w-28 h-28 bg-gradient-to-br from-brand-crimson-red/30 to-brand-soft-red/20 shadow-brand-crimson-red/20 border-brand-crimson-red/30">
                                <Target size={46} className="text-brand-crimson-red" />
                            </div>
                        </div>
                        {[0, 72, 144, 216, 288].map((deg) => (
                            <div key={deg} className="absolute w-3 h-3 rounded-full shadow-sm bg-brand-crimson-red/70 shadow-brand-crimson-red/50"
                                style={{
                                    top: `${50 - 46 * Math.cos((deg * Math.PI) / 180)}%`,
                                    left: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
                                    transform: "translate(-50%, -50%)",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   SOLUTION / WHAT I BUILT SECTION
──────────────────────────────────────── */
function SolutionSection({ features }: { features: string[] }) {
    return (
        <section className="px-6 py-24 bg-brand-dark/40">
            <div className="mx-auto max-w-7xl">
                <motion.div {...inView} variants={SV} className="text-center mb-14">
                    <motion.div variants={FV} custom={0} className="flex justify-center">
                        <SectionLabel><Lightbulb size={11} /> The Solution</SectionLabel>
                    </motion.div>
                    <motion.h2 variants={FV} custom={1} className="text-3xl font-black md:text-4xl text-brand-white font-poppins">
                        What I <span className="text-brand-crimson-red">Built</span>
                    </motion.h2>
                    <motion.p variants={FV} custom={2} className="max-w-lg mx-auto mt-4 text-sm text-brand-muted-gray">
                        Key features and functionality implemented in this project
                    </motion.p>
                </motion.div>

                <motion.div
                    {...inView}
                    variants={SV}
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {features.map((feature, i) => (
                        <motion.div key={i} variants={FV} custom={i} className="group relative p-5 rounded-xl border border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/50 hover:bg-brand-gray/70 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:shadow-brand-crimson-red/10">
                            <div className="p-2.5 w-10 h-10 rounded-lg bg-brand-crimson-red/10 text-white mb-4 group-hover:bg-brand-crimson-red/20 transition-colors flex items-center justify-center flex-shrink-0">
                                {FEATURE_ICONS[i % FEATURE_ICONS.length]}
                            </div>
                            <p className="text-sm leading-relaxed text-brand-light-gray">{feature}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   GALLERY SECTION
──────────────────────────────────────── */
function GallerySection({ gallery, title }: { gallery: string[]; title: string }) {
    const [visibleItems, setVisibleItems] = useState(INITIAL_GALLERY_ITEMS);
    const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });

    // Reset if the gallery source changes
    useEffect(() => {
        setVisibleItems(INITIAL_GALLERY_ITEMS);
        setLightbox({ open: false, index: 0 });
    }, [gallery, title]);

    const visibleGallery = gallery.slice(0, visibleItems);
    const hasMoreImages = gallery.length > visibleItems;

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!lightbox.open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox({ open: false, index: 0 });
            if (e.key === "ArrowRight") setLightbox(l => ({ open: true, index: (l.index + 1) % gallery.length }));
            if (e.key === "ArrowLeft") setLightbox(l => ({ open: true, index: (l.index - 1 + gallery.length) % gallery.length }));
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightbox.open, gallery.length]);

    return (
        <section className="px-6 py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={SV} className="mb-16 text-center">
                    <motion.div variants={FV} className="flex justify-center">
                        <SectionLabel><Monitor size={14} /> Screenshots</SectionLabel>
                    </motion.div>
                    <motion.h2 variants={FV} className="text-3xl font-black md:text-4xl text-brand-white font-poppins">
                        UI <span className="text-brand-crimson-red">Gallery</span>
                    </motion.h2>

                    <motion.p variants={FV} className="max-w-2xl mx-auto mt-6 text-base leading-relaxed text-slate-400">
                        A square-format gallery with layered details and progressive loading, tuned to stay sharp across mobile, tablet, and desktop viewing experiences.
                    </motion.p>
                </motion.div>

                {/* Grid Section */}
                <motion.div key={visibleItems} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={SV} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 xl:gap-8">
                    {visibleGallery.map((src, i) => (
                        <motion.div key={`${src}-${i}`} variants={FV}
                            className="group relative aspect-square overflow-hidden rounded-[1.5rem] transition-all duration-500 hover:-translate-y-2 hover:border-rose-500/50 hover:shadow-[0_24px_60px_rgba(225,29,72,0.2)]">

                            {/* Use Next.js Image for best hydration and optimization */}
                            <Image
                                src={src}
                                alt={`${title} screenshot ${i + 1}`}
                                fill
                                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Zoom Icon Overlay */}
                            <button
                                type="button"
                                aria-label="Zoom image"
                                tabIndex={0}
                                onClick={() => setLightbox({ open: true, index: i })}
                                className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 cursor-zoom-in"
                                style={{ background: "linear-gradient(0deg, rgba(30,30,40,0.45) 0%, rgba(0,0,0,0.15) 100%)" }}
                            >
                                <span className="flex items-center justify-center w-16 h-16 transition-transform border-2 rounded-full shadow-lg bg-white/20 backdrop-blur-md shadow-black/20 border-white/30 hover:scale-110">
                                    <Search size={38} className="text-white drop-shadow-lg" />
                                </span>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Load More Button */}
                {hasMoreImages && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center mt-16">
                        <button type="button" onClick={() => setVisibleItems(gallery.length)}
                            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold text-white transition-all duration-300 border rounded-full border-rose-500/40 bg-rose-500/10 hover:-translate-y-1 hover:border-rose-500 hover:bg-rose-600 hover:shadow-[0_14px_32px_rgba(225,29,72,0.3)] focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:ring-offset-2 focus:ring-offset-slate-900">
                            Load More
                            <span className="flex items-center justify-center rounded-full bg-white/20 px-2.5 py-1 text-xs font-black text-white">
                                +{gallery.length - visibleItems}
                            </span>
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightbox.open && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[2px] animate-fade-in" style={{ animation: "fadeIn 0.3s" }}>
                    {/* Backdrop click closes */}
                    <button
                        aria-label="Close lightbox"
                        className="absolute inset-0 w-full h-full cursor-zoom-out"
                        style={{ background: "linear-gradient(120deg, rgba(30,30,40,0.7) 0%, rgba(225,29,72,0.12) 100%)" }}
                        onClick={() => setLightbox({ open: false, index: 0 })}
                        tabIndex={-1}
                    />

                    {/* Centered Image Card */}
                    <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.35, ease: EASE_OUT }}
                            className="relative flex items-center justify-center w-full overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-brand-crimson-red/10 to-brand-dark/60 rounded-3xl">
                            <Image src={gallery[lightbox.index]} alt={`${title} screenshot ${lightbox.index + 1}`} fill sizes="90vw" className="object-contain w-full h-full" priority />

                            {/* Close Button */}
                            <button aria-label="Close" onClick={() => setLightbox({ open: false, index: 0 })} className="absolute z-20 p-2 text-white transition-colors rounded-full shadow-lg top-4 right-4 bg-black/60 hover:bg-black/80">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>

                            {/* Left/Right Navigation */}
                            {gallery.length > 1 && (
                                <>
                                    <button aria-label="Previous image" onClick={e => { e.stopPropagation(); setLightbox(l => ({ open: true, index: (l.index - 1 + gallery.length) % gallery.length })); }}
                                        className="absolute z-20 p-2 text-white transition-colors -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 bg-black/50 hover:bg-black/80">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                                    </button>
                                    <button aria-label="Next image" onClick={e => { e.stopPropagation(); setLightbox(l => ({ open: true, index: (l.index + 1) % gallery.length })); }}
                                        className="absolute z-20 p-2 text-white transition-colors -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 bg-black/50 hover:bg-black/80">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                                    </button>
                                </>
                            )}

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 text-white text-xs font-semibold shadow-lg">
                                {lightbox.index + 1} / {gallery.length}
                            </div>
                        </motion.div>
                        {/* Caption or alt text */}
                        <div className="mt-6 text-base font-medium text-center text-white/90 drop-shadow-lg">
                            {title} screenshot {lightbox.index + 1}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

/* ─────────────────────────────────────────
   KEY HIGHLIGHTS SECTION
──────────────────────────────────────── */
function KeyHighlightsSection() {
    const highlights = [
        {
            icon: <Zap size={28} />,
            title: "High Performance",
            description: "Optimized with lazy loading, code splitting, and image optimization for 95+ Lighthouse performance scores.",
            metric: "95+ Score",
        },
        {
            icon: <Search size={28} />,
            title: "SEO Optimized",
            description: "Structured metadata, Open Graph tags, schema markup, and canonical URLs for maximum search engine visibility.",
            metric: "98/100 SEO",
        },
        {
            icon: <Smartphone size={28} />,
            title: "Fully Responsive",
            description: "Pixel-perfect layout from 320px mobile screens to 4K displays, with accessible UI patterns throughout.",
            metric: "All Devices",
        },
    ];

    return (
        <section className="px-6 py-24 bg-brand-dark/40">
            <div className="mx-auto max-w-7xl">
                <motion.div {...inView} variants={SV} className="text-center mb-14">
                    <motion.div variants={FV} custom={0} className="flex justify-center">
                        <SectionLabel><Star size={11} /> Key Highlights</SectionLabel>
                    </motion.div>
                    <motion.h2 variants={FV} custom={1} className="text-3xl font-black md:text-4xl text-brand-white font-poppins">
                        Built to <span className="text-brand-crimson-red">Perform</span>
                    </motion.h2>
                </motion.div>

                <motion.div {...inView} variants={SV} className="grid sm:grid-cols-3 gap-7">
                    {highlights.map((h, i) => (
                        <motion.div key={i} variants={FV} custom={i} className="relative pt-8 text-center transition-all border pb-7 px-7 rounded-2xl border-brand-muted-gray/20 bg-brand-gray/50 group hover:border-brand-crimson-red/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-crimson-red/10">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-crimson-red text-white shadow-md shadow-brand-crimson-red/30 whitespace-nowrap">
                                    {h.metric}
                                </span>
                            </div>

                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 transition-colors rounded-2xl bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red/20">
                                {h.icon}
                            </div>
                            <h3 className="mb-3 text-base font-bold text-brand-white">{h.title}</h3>
                            <p className="text-sm leading-relaxed text-brand-muted-gray">{h.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   CHALLENGES & SOLUTIONS SECTION
──────────────────────────────────────── */
type ChallengeItem = { challenge: string; solution: string };

function ChallengesSection({ challenges }: { challenges: ChallengeItem[] }) {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div {...inView} variants={SV} className="text-center mb-14">
                    <motion.div variants={FV} custom={0} className="flex justify-center">
                        <SectionLabel><AlertTriangle size={11} /> Problem Solving</SectionLabel>
                    </motion.div>
                    <motion.h2 variants={FV} custom={1} className="text-3xl font-black md:text-4xl text-brand-white font-poppins">
                        Challenges &amp; <span className="text-brand-crimson-red">Solutions</span>
                    </motion.h2>
                    <motion.p variants={FV} custom={2} className="max-w-lg mx-auto mt-4 text-sm text-brand-muted-gray">
                        Technical obstacles encountered and how they were overcome
                    </motion.p>
                </motion.div>

                <motion.div {...inView} variants={SV} className="space-y-5">
                    {challenges.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={FV}
                            custom={i}
                            className="grid overflow-hidden border shadow-sm md:grid-cols-2 rounded-2xl border-brand-muted-gray/20 shadow-black/30"
                        >
                            <div className="flex flex-col gap-3 p-6 border-l-4 bg-brand-dark/70 border-amber-500/60">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-lg bg-amber-500/10 flex-shrink-0">
                                        <AlertTriangle size={15} className="text-amber-400" />
                                    </div>
                                    <span className="text-xs font-bold tracking-widest uppercase text-amber-400">Challenge</span>
                                </div>
                                <p className="text-sm leading-relaxed text-brand-light-gray">{item.challenge}</p>
                            </div>

                            <div className="flex flex-col gap-3 p-6 border-l-4 bg-brand-gray/60 border-emerald-500/60">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-lg bg-emerald-500/10 flex-shrink-0">
                                        <CheckCircle size={15} className="text-emerald-400" />
                                    </div>
                                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">Solution</span>
                                </div>
                                <p className="text-sm leading-relaxed text-brand-light-gray">{item.solution}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   RESULTS SECTION
──────────────────────────────────────── */
type ResultItem = { label: string; value: string };

function ResultsSection({ results }: { results: ResultItem[] }) {
    return (
        <section className="px-6 py-24 bg-brand-dark/40">
            <div className="mx-auto max-w-7xl">
                <motion.div {...inView} variants={SV} className="text-center mb-14">
                    <motion.div variants={FV} custom={0} className="flex justify-center">
                        <SectionLabel><TrendingUp size={11} /> Impact</SectionLabel>
                    </motion.div>
                    <motion.h2 variants={FV} custom={1} className="text-3xl font-black md:text-4xl text-brand-white font-poppins">
                        Results &amp; <span className="text-brand-crimson-red">Impact</span>
                    </motion.h2>
                </motion.div>

                <motion.div  {...inView} variants={SV} className="grid grid-cols-2 gap-5 md:grid-cols-4">
                    {results.map((result, i) => (
                        <motion.div
                            key={i}
                            variants={FV}
                            custom={i}
                            className="relative p-7 rounded-2xl border border-brand-muted-gray/20 bg-brand-gray/50 text-center group hover:border-brand-crimson-red/40 hover:-translate-y-1.5 transition-all hover:shadow-lg hover:shadow-brand-crimson-red/10 overflow-hidden"
                        >
                            <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-br from-brand-crimson-red/5 to-transparent group-hover:opacity-100" />
                            <div className="relative z-10">
                                <div className="inline-block mb-2 text-3xl font-black text-transparent transition-transform md:text-4xl font-poppins bg-gradient-to-r from-brand-crimson-red to-brand-soft-red bg-clip-text group-hover:scale-110">
                                    {result.value}
                                </div>
                                <div className="text-xs font-semibold leading-tight tracking-wider uppercase text-brand-muted-gray">
                                    {result.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   MY ROLE SECTION
──────────────────────────────────────── */
function RoleSection({ role }: { role: string }) {
    const isFullStack = role.toLowerCase().includes("full stack") || role.toLowerCase().includes("full-stack");
    const isFrontend = role.toLowerCase().includes("frontend") && !isFullStack;

    const roleTag = isFullStack ? "Full Stack Developer" : isFrontend ? "Frontend Developer" : "Backend Developer";

    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div {...inView} variants={SV} className="text-center mb-14">
                    <motion.div variants={FV} custom={0} className="flex justify-center">
                        <SectionLabel><User size={11} /> Contribution</SectionLabel>
                    </motion.div>
                    <motion.h2 variants={FV} custom={1} className="text-3xl font-black md:text-4xl text-brand-white font-poppins">
                        My <span className="text-brand-crimson-red">Role</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    {...inView}
                    variants={FV}
                    className="relative max-w-3xl p-8 mx-auto overflow-hidden border md:p-10 rounded-2xl border-brand-muted-gray/20 bg-brand-gray/50"
                >
                    <div className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none bg-brand-crimson-red/5 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none bg-brand-soft-red/5 blur-2xl" />

                    <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row">
                        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 shadow-lg rounded-2xl bg-gradient-to-br from-brand-crimson-red to-brand-soft-red shadow-brand-crimson-red/30">
                            <User size={26} className="text-white" />
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h3 className="text-xl font-bold text-brand-white">{roleTag}</h3>
                                <span className="px-3 py-1 text-xs font-bold border rounded-full bg-brand-crimson-red/20 border-brand-crimson-red/30 text-brand-crimson-red">
                                    {isFullStack ? "Full Stack" : isFrontend ? "Frontend" : "Backend"}
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed text-brand-light-gray">{role}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   PROJECT CTA SECTION
──────────────────────────────────────── */
function ProjectCTA({ links, title }: { links: Project["links"]; title: string }) {
    const shortTitle = title.split(/\s*[–\-]\s*/)[0];

    return (
        <section className="px-6 py-24 bg-brand-dark/40">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    {...inView}
                    variants={SV}
                    className="relative p-10 overflow-hidden text-center border md:p-16 rounded-3xl border-brand-muted-gray/20 bg-brand-gray/50">
                    <div className="absolute top-0 left-0 rounded-full pointer-events-none w-52 h-52 bg-brand-crimson-red/15 blur-3xl" />
                    <div className="absolute bottom-0 right-0 rounded-full pointer-events-none w-52 h-52 bg-brand-soft-red/10 blur-3xl" />

                    <div className="relative z-10">
                        <motion.div variants={FV} custom={0} className="flex justify-center">
                            <SectionLabel><Rocket size={11} /> See It Live</SectionLabel>
                        </motion.div>

                        <motion.h2 variants={FV} custom={1} className="mb-4 text-3xl font-black md:text-4xl text-brand-white font-poppins">
                            Explore{" "}
                            <span className="text-brand-crimson-red">{shortTitle}</span>
                        </motion.h2>

                        <motion.p variants={FV} custom={2} className="max-w-lg mx-auto mb-10 text-sm leading-relaxed text-brand-muted-gray">
                            Check out the live deployment or explore the full source code on GitHub.
                        </motion.p>

                        <motion.div variants={FV} custom={3} className="flex flex-wrap justify-center gap-4">
                            {links.demo !== "#" && (
                                <Link href={links.demo} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white transition-all rounded-xl bg-brand-crimson-red hover:bg-brand-soft-red hover:scale-105 hover:shadow-xl hover:shadow-brand-crimson-red/30">
                                    <ExternalLink size={17} />
                                    View Live Demo
                                </Link>
                            )}
                            {links.githubFrontend !== "#" && (
                                <Link href={links.githubFrontend} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all border-2 rounded-xl border-brand-muted-gray/30 text-brand-light-gray hover:border-brand-crimson-red/60 hover:text-brand-crimson-red">
                                    <Github size={17} />
                                    Frontend Code
                                </Link>
                            )}
                            {links.githubBackend !== "#" && (
                                <Link href={links.githubBackend} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all border-2 rounded-xl border-brand-muted-gray/30 text-brand-light-gray hover:border-brand-muted-gray/50 hover:text-brand-white">
                                    <Github size={17} />
                                    Backend Code
                                </Link>
                            )}
                        </motion.div>

                        <motion.div variants={FV} custom={4} className="mt-10">
                            <Link href="/projects" className="inline-flex items-center gap-2 text-sm transition-colors text-brand-muted-gray hover:text-brand-crimson-red group">
                                <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                                Back to All Projects
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
──────────────────────────────────────── */
interface Props {
    slug: string;
}

export default function SingleProjectContent({ slug }: Props) {

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6 text-center">
                <div className="p-6 border rounded-2xl border-brand-crimson-red/30 bg-brand-crimson-red/10">
                    <AlertTriangle size={48} className="mx-auto text-brand-crimson-red" />
                </div>
                <h1 className="text-3xl font-black text-brand-white font-poppins">Project Not Found</h1>
                <p className="text-brand-muted-gray">The project you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                    href="/projects"
                    className="px-6 py-3 font-semibold transition-colors rounded-xl bg-brand-crimson-red text-brand-white hover:bg-brand-soft-red"
                >
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen font-inter bg-brand-gray">
            <HeroSection project={project} />
            <MetaStrip project={project} />
            {project.problem && <ProblemSection problem={project.problem} />}
            <SolutionSection features={project.features} />
            {project.gallery && project.gallery.length > 0 && (
                <GallerySection gallery={project.gallery} title={project.title} />
            )}
            <KeyHighlightsSection />
            {project.challenges && project.challenges.length > 0 && (
                <ChallengesSection challenges={project.challenges} />
            )}
            {project.results && project.results.length > 0 && (
                <ResultsSection results={project.results} />
            )}
            <RoleSection role={project.role} />
            <ProjectCTA links={project.links} title={project.title} />
        </div>
    );
}
