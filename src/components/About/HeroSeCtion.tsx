"use client";

import { Coffee, Download, Mail, Users } from "lucide-react";
import Link from "next/link";


const HeroSection: React.FC = () => {

    return (

        <section className="relative px-6 pb-16 overflow-hidden pt-36" >
            <div className="mx-auto text-center max-w-7xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full border-brand-crimson-red/30 bg-brand-crimson-red/10 animate-fade-in-down">
                    <Users size={16} />
                    About Me
                </div>
                <h1 className="mb-2 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-brand-white font-poppins animate-fade-in-up">
                    Yohan <span className="text-brand-crimson-red">Awishka</span>
                </h1>

                <div className="relative w-24 mx-auto mb-6 overflow-hidden rounded-full h-1.5 bg-gradient-to-r from-brand-crimson-red to-brand-soft-red animate-fade-in">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                </div>

                <h2 className="mb-6 text-xl font-semibold md:text-2xl text-brand-crimson-red font-poppins animate-fade-in-up animation-delay-200">
                    Full Stack Developer / Software Engineer
                </h2>

                <p className="max-w-3xl mx-auto mb-8 text-base leading-relaxed text-brand-light-gray animate-fade-in-up animation-delay-300">
                    I'm a Full Stack Developer specializing in building fast, scalable, and SEO-optimized web applications
                    using modern technologies. I turn complex problems into elegant solutions.
                </p>

                <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400 font-inter">
                    <Link href="/cv/yohan-cv.pdf" download
                        className="inline-flex items-center gap-2 px-8 py-2 font-bold transition-all duration-300 rounded-full text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:shadow-lg hover:shadow-brand-crimson-red/30 hover:scale-105 group">
                        <Download size={20} className="transition-transform group-hover:translate-y-1" />
                        Download CV
                    </Link>
                    <Link href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-2 font-bold text-white transition-all duration-300 border-2 rounded-full border-brand-crimson-red hover:bg-brand-crimson-red hover:text-brand-white hover:scale-105 group">
                        <Mail size={20} />
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;