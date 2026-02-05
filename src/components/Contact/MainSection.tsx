"use client";

import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter, Facebook, Instagram, User, AtSign, MessageSquare, Clock, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
    ];

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!form.subject.trim()) newErrors.subject = "Subject is required";
        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setLoading(false);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setForm({ name: "", email: "", subject: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    return (
        <section className="relative px-6 py-12">
            <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">

                {/* Left Side - Contact Form */}
                <div className="animate-fade-in-left">
                    <div className="relative p-8 transition-all duration-300 border rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/40">
                        <h2 className="mb-6 text-2xl font-bold md:text-3xl text-brand-white font-poppins">
                            Send Me a <span className="text-brand-crimson-red">Message</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <div className="relative">
                                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Your Name <span className="text-brand-crimson-red">*</span>
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
                                        disabled={submitted}
                                        className={`w-full py-3 pl-12 pr-4 transition-all duration-300 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50 ${errors.name ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Your Email <span className="text-brand-crimson-red">*</span>
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
                                        disabled={submitted}
                                        className={`w-full py-3 pl-12 pr-4 transition-all duration-300 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50 ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                                )}
                            </div>

                            {/* Subject Input */}
                            <div className="relative">
                                <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Subject <span className="text-brand-crimson-red">*</span>
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
                                        disabled={submitted}
                                        className={`w-full py-3 pl-12 pr-4 transition-all duration-300 border rounded-lg outline-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50 ${errors.subject ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                {errors.subject && (
                                    <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                                )}
                            </div>

                            {/* Message Textarea */}
                            <div className="relative">
                                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-brand-light-gray">
                                    Your Message <span className="text-brand-crimson-red">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    value={form.message}
                                    onChange={handleChange}
                                    disabled={submitted}
                                    rows={6}
                                    className={`w-full px-4 py-3 transition-all duration-300 border rounded-lg outline-none resize-none bg-brand-gray text-brand-white border-brand-muted-gray/30 focus:border-brand-crimson-red focus:ring-2 focus:ring-brand-crimson-red/20 placeholder:text-brand-muted-gray disabled:opacity-50 ${errors.message ? 'border-red-500' : ''}`}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                                )}
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

                {/* Right Side - Contact Info */}
                <div className="space-y-8 animate-fade-in-right">
                    {/* Contact Information */}
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
                                <Link
                                    key={index}
                                    href={info.href}
                                    className="flex items-center gap-4 p-4 transition-all duration-300 border rounded-xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-lg hover:shadow-brand-crimson-red/10 hover:-translate-y-1 group"
                                >
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
                                    className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-lg text-brand-muted-gray border-brand-muted-gray/30 hover:border-brand-crimson-red hover:text-brand-crimson-red hover:scale-110 hover:shadow-lg hover:shadow-brand-crimson-red/20"
                                    title={social.name}
                                >
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