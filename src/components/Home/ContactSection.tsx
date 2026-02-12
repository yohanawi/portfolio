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
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

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
        <motion.section
            id="contact"
            className="relative py-20 overflow-hidden bg-brand-gray"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="bg-blob-top-right" />
            <div className="bg-blob-bottom-left" />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <header className="mb-16 text-center">
                    <h2 className="section-title">
                        Get In <span className="text-brand-crimson-red">Touch</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                        <span className="section-subtitle">LET'S CONNECT</span>
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                    </div>
                    <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                        Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <aside className="space-y-8">
                        <div>
                            <h3 className="mb-6 text-2xl font-bold text-brand-white">Contact Information</h3>
                            <p className="mb-8 leading-relaxed text-brand-light-gray">
                                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <address className="space-y-4 not-italic">
                                {contactInfo.map((info, index) => (
                                    <Link
                                        key={index}
                                        href={info.href}
                                        className="card flex items-center gap-4 group"
                                    >
                                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red group-hover:text-brand-white">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-brand-muted-gray">{info.label}</p>
                                            <p className="font-medium transition-colors text-brand-white group-hover:text-brand-crimson-red">{info.value}</p>
                                        </div>
                                    </Link>
                                ))}
                            </address>
                        </div>

                        <nav aria-label="Social media links">
                            <h4 className="mb-4 text-lg font-semibold text-brand-white">Follow Me</h4>
                            <ul className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => (
                                    <li key={index}>
                                        <Link
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <aside className="card bg-brand-crimson-red/5 border-brand-crimson-red/20">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="relative flex w-3 h-3">
                                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-brand-crimson-red animate-ping" aria-hidden="true" />
                                    <span className="relative inline-flex w-3 h-3 rounded-full bg-brand-crimson-red" />
                                </span>
                                <strong className="font-semibold text-brand-white">Available for Freelance</strong>
                            </div>
                            <p className="text-sm text-brand-light-gray">
                                I'm currently available for freelance work and new opportunities. Let's create something amazing together!
                            </p>
                        </aside>
                    </aside>

                    <div className="relative card hover:border-brand-crimson-red/40">
                        <h3 className="mb-6 text-2xl font-bold text-brand-white">Send Me a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-brand-light-gray">Your Name</label>
                                <div className="relative">
                                    <User className="absolute -translate-y-1/2 text-brand-muted-gray left-4 top-1/2" size={18} aria-hidden="true" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        disabled={submitted}
                                        className="w-full py-3 pl-12 pr-4 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-brand-light-gray">Your Email</label>
                                <div className="relative">
                                    <AtSign className="absolute -translate-y-1/2 text-brand-muted-gray left-4 top-1/2" size={18} aria-hidden="true" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        disabled={submitted}
                                        className="w-full py-3 pl-12 pr-4 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-brand-light-gray">Subject</label>
                                <div className="relative">
                                    <MessageSquare className="absolute -translate-y-1/2 text-brand-muted-gray left-4 top-1/2" size={18} aria-hidden="true" />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Project Inquiry"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={submitted}
                                        className="w-full py-3 pl-12 pr-4 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-brand-light-gray">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    disabled={submitted}
                                    rows={5}
                                    className="w-full px-4 py-3 border rounded-lg outline-none resize-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitted || loading}
                                className="relative w-full py-4 font-bold rounded-lg text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                            >
                                {submitted ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <CheckCircle size={20} />
                                        Message Sent Successfully!
                                    </span>
                                ) : loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-5 h-5 border-2 rounded-full border-t-transparent border-brand-white animate-spin" aria-hidden="true" />
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

                        <div className="corner-accent corner-accent-tr" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;