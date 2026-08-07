"use client";

import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, MessageSquare, User, AtSign } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
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
        value: "078-5161481",
        href: "tel:+94785161481",
    },
    {
        icon: <MapPin size={24} />,
        label: "Location",
        value: "Colombo, Sri Lanka",
    },
];

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yohan-awishka-indrawansha",
        icon: <Linkedin size={20} />,
        color: "#0077B5"
    },
    {
        name: "GitHub",
        url: "https://github.com/yohanawi",
        icon: <Github size={20} />,
        color: "#333"
    },
];

const ContactSection: React.FC = () => {

    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", company: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSubmitError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => null);
                throw new Error(data?.error || "Failed to send your message. Please try again later.");
            }

            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setForm({ name: "", email: "", subject: "", message: "", company: "" });
                setSubmitted(false);
            }, 3000);
        } catch (error) {
            setSubmitError(
                error instanceof Error ? error.message : "Failed to send your message. Please try again later.",
            );
        } finally {
            setLoading(false);
        }
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
                    <p className="max-w-4xl mx-auto mt-4 text-brand-light-gray">
                        Whether you have a project idea, a collaboration in mind, or just want to say hello, I’d love to hear from you! I specialize in building modern, optimized web applications using Next.js, Node.js, Laravel, Strapi, GraphQL, and AWS. Feel free to reach out for freelance projects, collaborations, or just to connect and share ideas.
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
                                {contactInfo.map((info, index) => {
                                    const content = (
                                        <>
                                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors rounded-lg bg-brand-crimson-red/10 text-brand-crimson-red group-hover:bg-brand-crimson-red group-hover:text-brand-white">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-brand-muted-gray">{info.label}</p>
                                                <p className="font-medium transition-colors text-brand-white group-hover:text-brand-crimson-red">{info.value}</p>
                                            </div>
                                        </>
                                    );

                                    return info.href ? (
                                        <Link key={index} href={info.href} className="flex items-center gap-4 card group">
                                            {content}
                                        </Link>
                                    ) : (
                                        <div key={index} className="flex items-center gap-4 card group">
                                            {content}
                                        </div>
                                    );
                                })}
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
                    </aside>

                    <div className="relative card hover:border-brand-crimson-red/40">
                        <h3 className="mb-6 text-2xl font-bold text-brand-white">Send Me a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Honeypot field - hidden from real users, catches basic bots */}
                            <div className="absolute w-px h-px overflow-hidden opacity-0 -z-10" aria-hidden="true">
                                <label htmlFor="home-company">Company</label>
                                <input
                                    type="text"
                                    id="home-company"
                                    name="company"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={form.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-brand-light-gray">Your Name</label>
                                <div className="relative">
                                    <User className="absolute -translate-y-1/2 text-brand-muted-gray left-4 top-1/2" size={18} aria-hidden="true" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
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
                                        placeholder="Enter your email"
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
                                        placeholder="Enter the subject"
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

                            {submitError && (
                                <p className="flex items-center gap-2 text-sm text-red-500" role="alert">
                                    <AlertCircle size={16} className="flex-shrink-0" />
                                    {submitError}
                                </p>
                            )}

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
