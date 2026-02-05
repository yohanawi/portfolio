"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram, Clock, Globe, Youtube } from "lucide-react";
import Link from "next/link";

import ContactForm from "./ContactForm";

const MainSection = () => {

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "yohan.indrawansha2000@gmail.com",
            href: "mailto:yohan.indrawansha2000@gmail.com",
            color: "text-brand-crimson-red"
        },
        {
            icon: <Phone size={24} />,
            label: "Phone",
            value: "077-8638568",
            href: "tel:0778638568",
            color: "text-brand-crimson-red"
        },
        {
            icon: <MapPin size={24} />,
            label: "Location",
            value: "Colombo, Sri Lanka",
            href: "#",
            color: "text-brand-crimson-red"
        },
        {
            icon: <Clock size={24} />,
            label: "Availability",
            value: "Freelance / Full-time / Remote",
            href: "#",
            color: "text-brand-crimson-red"
        },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/yourusername",
            icon: <Github size={22} />,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/yourusername",
            icon: <Linkedin size={22} />,
        },
        {
            name: "Twitter",
            url: "https://twitter.com/yourusername",
            icon: <Twitter size={22} />,
        },
        {
            name: "Facebook",
            url: "https://facebook.com/yourusername",
            icon: <Facebook size={22} />,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/yourusername",
            icon: <Instagram size={22} />,
        },
        {
            name: "YouTube",
            url: "https://youtube.com/yourusername",
            icon: <Youtube size={22} />,
        }
    ];

    return (

        <section className="relative px-6 py-12">
            <div className="grid max-w-6xl grid-cols-1 gap-5 mx-auto lg:grid-cols-2">

                {/* Left Side - Contact Form */}
                <div className="animate-fade-in-left">
                    <div className="relative p-8 transition-all duration-300 border rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/40">
                        <h2 className="mb-6 text-2xl font-bold md:text-3xl text-brand-white font-poppins">
                            Send Me a <span className="text-brand-crimson-red">Message</span>
                        </h2>
                        <ContactForm />
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 rounded-tr-2xl border-brand-crimson-red opacity-30"></div>
                    </div>
                </div>

                {/* Right Side - Contact Info */}
                <div className="space-y-5 animate-fade-in-right">
                    <div className="p-8 border rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20">
                        <h3 className="mb-6 text-2xl font-bold text-brand-white font-poppins">
                            Contact <span className="text-brand-crimson-red">Information</span>
                        </h3>
                        <p className="mb-6 leading-relaxed text-brand-light-gray">
                            Feel free to reach out through any of these channels. I'm always open to discussing new projects,
                            creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <Link key={index} href={info.href}
                                    className="flex items-center gap-4 p-4 transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-lg hover:shadow-brand-crimson-red/10 hover:-translate-y-1 group">
                                    <div className={`flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-brand-crimson-red/10 ${info.color} group-hover:bg-brand-crimson-red group-hover:text-brand-white transition-colors`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-brand-muted-gray">
                                            {info.label}
                                        </p>
                                        <p className="font-medium transition-colors text-brand-white group-hover:text-brand-crimson-red">
                                            {info.value}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="p-8 border rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20">
                        <h4 className="flex items-center gap-2 mb-6 text-xl font-bold text-brand-white font-poppins">
                            <Globe className="text-brand-crimson-red" size={24} />
                            Follow Me
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                                    title={social.name} >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Availability Badge */}
                    <div className="p-6 border rounded-2xl bg-brand-crimson-red/5 border-brand-crimson-red/20">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="relative flex w-3 h-3">
                                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-brand-crimson-red animate-ping"></span>
                                <span className="relative inline-flex w-3 h-3 rounded-full bg-brand-crimson-red"></span>
                            </div>
                            <span className="font-semibold text-brand-white">
                                Available for Freelance
                            </span>
                        </div>
                        <p className="text-sm text-brand-light-gray">
                            I'm currently available for freelance work and new opportunities. Let's create something amazing together!
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default MainSection;