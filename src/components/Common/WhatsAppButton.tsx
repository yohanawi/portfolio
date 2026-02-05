"use client";

import React, { useCallback } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

export const WhatsAppButton: React.FC = () => {
    const phoneNumber = '94781667267'; // Replace with your WhatsApp number
    const message = 'Hello! I’m looking for professional support and would like to discuss how your services can help my project.'; // Optional: pre-filled message

    const handleClick = useCallback(() => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
    }, []);

    return (
        <div className="fixed z-50 bottom-6 left-6 group">
            <span className="absolute px-3 py-1 text-xs text-white transition-all scale-0 -translate-y-1/2 bg-black rounded left-14 top-1/2 group-hover:scale-100">
                Chat with us on WhatsApp
            </span>
            <button onClick={handleClick} aria-label="Chat on WhatsApp"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]">
                <BsWhatsapp size={32} />
            </button>
        </div>
    );
};