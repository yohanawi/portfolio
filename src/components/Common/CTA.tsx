"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="relative px-6 py-20">
            <div className="max-w-4xl p-12 mx-auto text-center border rounded-2xl bg-brand-gray/80 border-brand-crimson-red/40 animate-fade-in">
                <h3 className="mb-4 text-2xl font-bold md:text-3xl text-brand-white font-poppins">
                    Let's Build Something <span className="text-brand-crimson-red">Amazing</span> Together
                </h3>
                <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-brand-light-gray">
                    I'm always excited to work on new projects and collaborate with creative minds.
                    Let's turn your ideas into reality!
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 font-bold transition-all duration-300 rounded-full text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red hover:shadow-lg hover:shadow-brand-crimson-red/30 hover:scale-105 group"
                >
                    Get In Touch
                    <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
                </Link>
            </div>
        </section>
    );
}

export default CTA;