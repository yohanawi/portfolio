"use client";

import React, { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        quote: "Working with Yohan was a fantastic experience. He delivered high-quality work on time and exceeded our expectations. His attention to detail and commitment to excellence is truly remarkable.",
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

const TestimonialsSection: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="relative py-20 overflow-hidden bg-brand-gray" id="testimonials">
            {/* Decorative background elements */}
            <div className="absolute rounded-full top-10 left-10 w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
            <div className="absolute rounded-full bottom-10 right-10 w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                {/* Section Title - Centered */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brand-white">
                        Client <span className="text-brand-crimson-red">Testimonials</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                        <span className="text-sm font-semibold tracking-wider text-brand-crimson-red">
                            WHAT CLIENTS SAY
                        </span>
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                    </div>
                    <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                        Don't just take my word for it - hear what my clients have to say about working with me
                    </p>
                </div>

                {/* Testimonials Swiper */}
                <div className="relative group">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletActiveClass: "swiper-pagination-bullet-active-testimonial",
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className="pb-16"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-full p-8 transition-all duration-300 border rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-2xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 left-8">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-brand-crimson-red">
                                            <Quote className="text-brand-white" size={24} fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mt-6 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className="text-brand-crimson-red fill-brand-crimson-red"
                                            />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="mb-6 text-base italic leading-relaxed text-brand-light-gray">
                                        "{testimonial.quote}"
                                    </p>

                                    {/* Divider */}
                                    <div className="w-full h-px mb-6 bg-gradient-to-r from-transparent via-brand-muted-gray/30 to-transparent"></div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4">
                                        {/* Avatar */}
                                        <div className="flex-shrink-0">
                                            {testimonial.avatar ? (
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className="object-cover border-2 rounded-full w-14 h-14 border-brand-crimson-red"
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
                                            <p className="text-sm text-brand-muted-gray">
                                                {testimonial.role}
                                            </p>
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
                <div className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4">
                    <div className="p-6 text-center transition-all border rounded-xl border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/40">
                        <div className="mb-2 text-4xl font-bold text-brand-crimson-red">50+</div>
                        <div className="text-sm text-brand-light-gray">Happy Clients</div>
                    </div>
                    <div className="p-6 text-center transition-all border rounded-xl border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/40">
                        <div className="mb-2 text-4xl font-bold text-brand-crimson-red">100%</div>
                        <div className="text-sm text-brand-light-gray">Satisfaction Rate</div>
                    </div>
                    <div className="p-6 text-center transition-all border rounded-xl border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/40">
                        <div className="mb-2 text-4xl font-bold text-brand-crimson-red">5.0</div>
                        <div className="text-sm text-brand-light-gray">Average Rating</div>
                    </div>
                    <div className="p-6 text-center transition-all border rounded-xl border-brand-muted-gray/20 bg-brand-gray/50 hover:border-brand-crimson-red/40">
                        <div className="mb-2 text-4xl font-bold text-brand-crimson-red">3+</div>
                        <div className="text-sm text-brand-light-gray">Years Experience</div>
                    </div>
                </div>
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