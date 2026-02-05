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
        url: "https://facebook.com/yourusername",
        label: "Facebook",
    },
    {
        icon: Instagram,
        url: "https://instagram.com/yourusername",
        label: "Instagram",
    },
    {
        icon: Linkedin,
        url: "https://linkedin.com/in/yourusername",
        label: "LinkedIn",
    },
    {
        icon: Github,
        url: "https://github.com/yourusername",
        label: "GitHub",
    },
    {
        icon: Youtube,
        url: "https://youtube.com/yourusername",
        label: "YouTube",
    },
];

const Footer: React.FC = () => (
    <footer className="relative overflow-hidden bg-brand-gray">
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-crimson-red to-transparent opacity-70"></div>

        <div className="max-w-6xl px-6 py-12 mx-auto">
            {/* Main content */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">

                {/* Brand section */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-brand-white">
                        {NAME.split(' ')[0]} <span className="text-brand-crimson-red">{NAME.split(' ')[1]}</span>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-light-gray">{ROLE}</p>
                    <p className="mt-2 text-sm italic text-brand-muted-gray">{TAGLINE}</p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3">
                    {socialLinks.map(({ icon: Icon, url, label }) => (
                        <Link
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                        >
                            <Icon size={18} />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-brand-muted-gray/20"></div>

            {/* Copyright */}
            <div className="text-center">
                <p className="text-sm text-brand-muted-gray">
                    &copy; {YEAR} <span className="font-medium text-brand-light-gray">{NAME}</span>. All rights reserved.
                </p>
            </div>
        </div>
    </footer >
);

export default Footer;