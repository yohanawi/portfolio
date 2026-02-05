"use client";

import React, { useState, useEffect } from 'react';
import { ArrowBigUpDash } from 'lucide-react';

const ScrollTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <button onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 rounded-lg border-none bg-[#E10600] text-white text-2xl cursor-pointer shadow-lg z-[1000] transition-colors duration-200 hover:bg-[#FF2C2C]"
                aria-label="Scroll to top">
                <ArrowBigUpDash className="w-5 h-5" />
            </button>
        )
    );
};

export default ScrollTop;