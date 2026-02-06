import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const NAME = "Yohan Awishka";
const ROLE = "Full Stack Developer";
const TAGLINE = "Building seamless digital experiences.";
const YEAR = new Date().getFullYear();

const socialLinks = [
    {
        icon: Facebook,
        url: "#",
        label: "Facebook",
    },
    {
        icon: Instagram,
        url: "#",
        label: "Instagram",
    },
    {
        icon: Linkedin,
        url: "#",
        label: "LinkedIn",
    },
    {
        icon: Github,
        url: "#",
        label: "GitHub",
    },
    {
        icon: Youtube,
        url: "#",
        label: "YouTube",
    },
];

const Footer: React.FC = () => (
    <footer className="relative overflow-hidden bg-brand-gray">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-crimson-red to-transparent opacity-70"></div>

        <div className="px-6 py-12 mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">

                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-brand-white font-poppins">
                        {NAME.split(' ')[0]} <span className="text-brand-crimson-red">{NAME.split(' ')[1]}</span>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-light-gray font-inter">{ROLE}</p>
                    <p className="mt-2 text-sm italic text-brand-muted-gray font-inter">{TAGLINE}</p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                    {socialLinks.map(({ icon: Icon, url, label }) => (
                        <Link key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                            className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20 font-inter">
                            <Icon size={18} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="my-5 border-t border-brand-muted-gray/20"></div>
            <div className="text-center">
                <p className="text-sm text-brand-muted-gray font-inter">
                    &copy; {YEAR} <span className="font-medium text-brand-light-gray">{NAME}</span>. All rights reserved.
                </p>
            </div>
        </div>
    </footer >
);

export default Footer;