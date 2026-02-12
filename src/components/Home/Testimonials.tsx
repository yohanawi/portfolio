"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    avatar?: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Working with Yohan was a fantastic experience. He delivered high-quality work on time and exceeded our expectations.",
        name: "Jane Doe",
        role: "Project Manager",
        company: "Acme Corp",
        rating: 5,
        avatar: "/avatars/jane.jpg",
    },
    {
        quote: "Yohan's attention to detail and problem-solving skills made a huge difference in our project. He was able to tackle complex challenges with innovative solutions.",
        name: "John Smith",
        role: "Lead Developer",
        company: "Tech Solutions",
        rating: 5,
        avatar: "/avatars/john.jpg",
    },
    {
        quote: "Exceptional developer with great communication skills. Yohan transformed our vision into reality and delivered a product that exceeded all our expectations.",
        name: "Sarah Johnson",
        role: "CEO",
        company: "StartUp Digital",
        rating: 5,
        avatar: "/avatars/sarah.jpg",
    },
    {
        quote: "Professional, skilled, and a pleasure to work with. I highly recommend Yohan for any web development project. He brings creativity and technical expertise.",
        name: "Michael Chen",
        role: "Marketing Director",
        company: "Growth Agency",
        rating: 5,
        avatar: "/avatars/michael.jpg",
    },
];

interface CounterProps {
    end: number;
    suffix?: string;
}

const TestimonialsSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const AnimatedCounter = ({ end, suffix = "" }: CounterProps) => {
        const { count, ref } = useCounterAnimation({ end, duration: 2000 });

        return (
            <span ref={ref}>
                {count}
                {suffix}
            </span>
        );
    };

    return (
        <section className="relative py-20 overflow-hidden bg-brand-gray" id="testimonials">
            <div className="bg-blob-top-right" style={{ top: '2.5rem', left: '2.5rem' }} />
            <div className="bg-blob-bottom-left" style={{ bottom: '2.5rem', right: '2.5rem' }} />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <header className="mb-16 text-center">
                    <h2 className="section-title">
                        Client <span className="text-brand-crimson-red">Testimonials</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                        <span className="section-subtitle">WHAT CLIENTS SAY</span>
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                    </div>
                    <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                        Don't just take my word for it - hear what my clients have to say about working with me
                    </p>
                </header>

                {/* Testimonials Swiper */}
                <div className="relative group">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="pb-14">
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative flex flex-col p-8 transition-all duration-300 border h-96 rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-2xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2">
                                    <div className="mb-6">
                                        <Quote size={32} className="text-brand-crimson-red" fill="currentColor" />
                                    </div>

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={18} className="text-brand-crimson-red fill-brand-crimson-red" />
                                        ))}
                                    </div>

                                    <p className="mb-6 italic leading-relaxed text-brand-light-gray">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Divider */}
                                    <div className="w-full h-px mb-6 bg-gradient-to-r from-transparent via-brand-muted-gray/30 to-transparent"></div>

                                    {/* Author Info */}
                                    <div className="absolute flex items-center gap-4 bottom-8 left-8 right-8">
                                        {/* Avatar */}
                                        <div className="flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    width={40}
                                                    height={40}
                                                    className="object-cover w-10 h-10 border-2 rounded-full border-brand-crimson-red"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center text-xl font-bold border-2 rounded-full w-14 h-14 bg-brand-crimson-red/10 text-brand-crimson-red border-brand-crimson-red">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>

                                        {/* Name & Role */}
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-brand-white">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-xs text-brand-crimson-red">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300 border-b-2 border-r-2 opacity-0 rounded-br-2xl border-brand-crimson-red group-hover:opacity-100"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 -translate-x-6 -translate-y-1/2 rounded-full shadow-lg opacity-0 top-1/2 bg-brand-crimson-red text-brand-white hover:bg-brand-soft-red hover:scale-110 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-0 z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 translate-x-6 -translate-y-1/2 rounded-full shadow-lg opacity-0 top-1/2 bg-brand-crimson-red text-brand-white hover:bg-brand-soft-red hover:scale-110 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6 mt-20 md:grid-cols-4"
                >
                    {[
                        { end: 50, suffix: "+", label: "Happy Clients" },
                        { end: 100, suffix: "%", label: "Satisfaction Rate" },
                        { end: 5, suffix: ".0", label: "Average Rating" },
                        { end: 3, suffix: "+", label: "Years Experience" },
                    ].map((stat, idx) => (
                        <div key={stat.label}
                            className="p-6 text-center transition border rounded-xl border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/40">
                            <div className="mb-2 text-4xl font-bold text-brand-crimson-red">
                                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-brand-light-gray">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* Custom Swiper Pagination Styles */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #B3B3B3;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s;
                }
                
                .swiper-pagination-bullet-active-testimonial {
                    background: #E10600;
                    opacity: 1;
                    width: 30px;
                    border-radius: 5px;
                }
                
                .swiper-pagination-bullet:hover {
                    opacity: 0.8;
                }
            `}</style>
        </section>
    );
};

export default TestimonialsSection;