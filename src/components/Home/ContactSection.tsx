"use client";

import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    Linkedin,
    Github,
    Twitter,
    Facebook,
    Instagram,
    MessageSquare,
    User,
    AtSign
} from "lucide-react";
import Link from "next/link";

const contactInfo = [
    {
        icon: <Mail size={24} />,
        label: "Email",
        value: "yohan.indrawansha2000@gmail.com",
        href: "mailto:yohan.indrawansha2000@gmail.com",
    },
    {
        icon: <Phone size={24} />,
        label: "Phone",
        value: "077-8638568",
        href: "tel:0778638568",
    },
    {
        icon: <MapPin size={24} />,
        label: "Location",
        value: "Colombo, Sri Lanka",
        href: "#",
    },
];

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: <Linkedin size={20} />,
        color: "#0077B5"
    },
    {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: <Github size={20} />,
        color: "#333"
    },
    {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: <Twitter size={20} />,
        color: "#1DA1F2"
    },
    {
        name: "Facebook",
        url: "https://facebook.com/yourusername",
        icon: <Facebook size={20} />,
        color: "#1877F2"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/yourusername",
        icon: <Instagram size={20} />,
        color: "#E4405F"
    },
];

const ContactSection: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setLoading(false);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setForm({ name: "", email: "", subject: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section className="relative py-20 overflow-hidden bg-brand-gray" id="contact">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                {/* Section Title - Centered */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brand-white">
                        Get In <span className="text-brand-crimson-red">Touch</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                        <span className="text-sm font-semibold tracking-wider text-brand-crimson-red">
                            LET'S CONNECT
                        </span>
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                    </div>
                    <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                        Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-brand-white">
                                Contact Information
                            </h3>
                            <p className="mb-8 leading-relaxed text-brand-light-gray">
                                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <Link
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-4 p-4 transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-lg hover:shadow-brand-crimson-red/10 hover:-translate-y-1 group"
                                    >
                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red group-hover:text-brand-white">
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
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-brand-white">
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
                                        className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="p-6 border rounded-xl bg-brand-crimson-red/5 border-brand-crimson-red/20">
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

                    {/* Right Side - Contact Form */}
                    <div className="relative p-8 transition-all duration-300 border rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/40">
                        <h3 className="mb-6 text-2xl font-bold text-brand-white">
                            Send Me a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <div className="relative">
                                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <User className="absolute -translate-y-1/2 text-brand-muted-gray left-4 top-1/2" size={18} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        disabled={submitted}
                                        className="w-full py-3 pl-12 pr-4 transition-all duration-300 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Your Email
                                </label>
                                <div className="relative">
                                    <AtSign className="absolute -translate-y-1/2 text-brand-muted-gray left-4 top-1/2" size={18} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        disabled={submitted}
                                        className="w-full py-3 pl-12 pr-4 transition-all duration-300 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="relative">
                                <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Subject
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute -translate-y-1/2 text-brand-muted-gray left-4 top-1/2" size={18} />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Project Inquiry"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={submitted}
                                        className="w-full py-3 pl-12 pr-4 transition-all duration-300 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="relative">
                                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    disabled={submitted}
                                    rows={5}
                                    className="w-full px-4 py-3 transition-all duration-300 border rounded-lg outline-none resize-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={submitted || loading}
                                className="relative w-full py-4 overflow-hidden font-bold transition-all duration-300 rounded-lg text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:shadow-lg hover:shadow-brand-crimson-red/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                            >
                                {submitted ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <CheckCircle size={20} />
                                        Message Sent Successfully!
                                    </span>
                                ) : loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 rounded-full border-t-transparent border-brand-white animate-spin"></div>
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <Send size={20} className="transition-transform group-hover:translate-x-1" />
                                        Send Message
                                    </span>
                                )}
                            </button>
                        </form>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 rounded-tr-2xl border-brand-crimson-red opacity-30"></div>
                    </div>
                </div>
            </div >

            <style jsx>{`
                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                
                .animate-ping {
                    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </section >
    );
};

export default ContactSection;