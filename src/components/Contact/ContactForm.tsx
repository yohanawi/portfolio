"use client";

import { Send, CheckCircle, User, AtSign, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {

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
        <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

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
                        autoComplete="name"
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
                        autoComplete="email"
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
                aria-busy={loading}
                aria-disabled={loading || submitted}
                disabled={submitted || loading}
                className="relative w-full py-4 overflow-hidden font-bold transition-all duration-300 rounded-lg text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:shadow-lg hover:shadow-brand-crimson-red/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
            >
                {submitted ? (
                    <span className="flex items-center justify-center gap-2" aria-live="polite">
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

    );
}
