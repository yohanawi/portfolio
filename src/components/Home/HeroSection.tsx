"use client";

import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-screen min-h-screen overflow-hidden bg-brand-gray">
            <div className="absolute inset-0 z-0 bg-center bg-cover opacity-70"
                style={{ backgroundImage: "url('/assets/images/portfolio home.png')" }}
            />
            <div className="absolute w-48 h-48 rounded-full top-20 left-10 md:left-20 md:w-72 md:h-72 bg-brand-crimson-red/20 blur-3xl animate-pulse"></div>
            <div className="absolute w-64 h-64 rounded-full bottom-20 right-10 md:right-20 md:w-96 md:h-96 bg-brand-soft-red/10 blur-3xl animate-pulse-slow"></div>

            <div className="relative z-10 flex items-center justify-center w-full min-h-screen px-4 pt-20 sm:px-6 md:px-12 lg:px-20">
                <div className="w-full max-w-6xl">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="space-y-6 text-center lg:text-left animate-fade-in-up">
                            <h1 className="mb-2 text-sm font-semibold tracking-wide uppercase sm:text-base text-brand-muted-gray animate-fade-in">
                                Hello, I'm
                            </h1>
                            <h2 className="mb-4 text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-brand-white via-brand-light-gray to-brand-white animate-gradient">
                                Yohan <span className="text-brand-crimson-red">Awishka</span>
                            </h2>
                            <div className="relative w-24 mx-auto h-1.5 mb-6 overflow-hidden rounded-full bg-gradient-to-r from-brand-crimson-red to-brand-soft-red lg:mx-0">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                            </div>
                            <div className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl text-brand-white min-h-[40px] lg:min-h-[50px]">
                                <span className="text-brand-light-gray">And I'm a </span>
                                <span className="text-brand-crimson-red">
                                    <Typewriter
                                        words={[
                                            "Full Stack Developer",
                                            "Software Engineer",
                                            "Tech Enthusiast",
                                            "Problem Solver",
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                                <Link href="#contact" className="relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden font-bold transition-all duration-300 rounded-full shadow-lg sm:px-8 sm:py-4 group text-brand-white bg-brand-crimson-red hover:shadow-brand-crimson-red/50 hover:scale-105">
                                    <span className="relative z-10">Hire Me</span>
                                    <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" size={20} />
                                    <div className="absolute inset-0 transition-transform duration-300 origin-left scale-x-0 bg-gradient-to-r from-brand-soft-red to-brand-crimson-red group-hover:scale-x-100"></div>
                                </Link>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center gap-4 lg:justify-start">
                                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                                    aria-label="GitHub">
                                    <Github size={20} />
                                </Link>

                                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                                    aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </Link>

                                <Link href="mailto:yohan.indrawansha2000@gmail.com"
                                    className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                                    aria-label="Email">
                                    <Mail size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Image/Illustration */}
                        <div className="relative flex items-center justify-center lg:justify-end animate-fade-in-right">
                            <div className="relative">
                                <div className="absolute rounded-full -inset-4 bg-gradient-to-r from-brand-crimson-red/20 to-brand-soft-red/20 blur-2xl animate-pulse-slow"></div>
                                <div className="relative w-64 h-64 overflow-hidden border-4 rounded-full sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-brand-crimson-red/30 bg-brand-gray/50 backdrop-blur-sm">
                                    <img
                                        src="/assets/images/Notion.png"
                                        alt="Yohan Awishka"
                                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="absolute top-0 right-0 p-3 border rounded-lg shadow-lg bg-brand-gray/90 border-brand-crimson-red/30 backdrop-blur-sm animate-float">
                                    <div className="text-xs font-semibold text-brand-muted-gray">Experience</div>
                                    <div className="text-lg font-bold text-brand-crimson-red">3+ Years</div>
                                </div>

                                <div className="absolute bottom-0 left-0 p-3 border rounded-lg shadow-lg bg-brand-gray/90 border-brand-crimson-red/30 backdrop-blur-sm animate-float-delayed">
                                    <div className="text-xs font-semibold text-brand-muted-gray">Projects</div>
                                    <div className="text-lg font-bold text-brand-crimson-red">50+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 flex flex-col items-center gap-2 text-xs font-semibold transform -translate-x-1/2 left-1/2 text-brand-muted-gray animate-bounce">
                        <span>Scroll Down</span>
                        <div className="w-6 h-10 border-2 rounded-full border-brand-crimson-red/50">
                            <div className="w-1.5 h-3 mx-auto mt-2 rounded-full bg-brand-crimson-red animate-scroll"></div>
                        </div>
                    </div>
                </div >
            </div >

            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 0; }
                    40% { opacity: 1; }
                    80% { transform: translateY(20px); opacity: 0; }
                    100% { opacity: 0; }
                }
                
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }
                
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-out;
                }

                .animate-fade-in-right {
                    animation: fade-in-right 1s ease-out 0.3s both;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float 3s ease-in-out infinite 1.5s;
                }

                .animate-scroll {
                    animation: scroll 2s ease-in-out infinite;
                }
            `}</style>
        </div >
    );
};

export default HeroSection;