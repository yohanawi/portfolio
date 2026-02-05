"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={` fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${scrolled ? "bg-brand-gray" : "bg-transparent"}`} style={{ height: "72px" }}>
            <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl sm:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/logo/YA.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="items-center hidden gap-8 md:flex">
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href} className={`relative px-2 py-1 transition-colors duration-200 font-inter font-bold tracking-wider
                                ${pathname === item.href ? "text-brand-crimson-red" : "hover:text-brand-crimson-red text-white"}`}>
                            <span
                                className={`transition-all duration-300 ${pathname === item.href ? "after:scale-x-100" : "after:scale-x-0"
                                    } after:content-[''] after:block after:h-0.5 after:bg-brand-crimson-red after:transition-transform after:duration-300 after:origin-left after:scale-x-0 hover:after:scale-x-100`}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="/contact" className="flex items-center gap-2 px-5 py-2 font-bold tracking-wider text-white transition-colors duration-200 rounded-full shadow bg-brand-crimson-red font-inter hover:bg-brand-soft-red">
                        <Rocket className="w-5 h-5 " /> Let’s Work
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="flex items-center justify-center w-10 h-10 md:hidden" onClick={() => setMobileOpen((prev) => !prev)} aria-label="Open menu">
                    <span className="sr-only">Open menu</span>
                    <div className="space-y-1.5">
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-brand-gray/50 bg-opacity-95 z-40 transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {/* Close Button */}
                    <button className="absolute text-5xl text-gray-700 top-4 right-6" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                        &times;
                    </button>
                    {menuItems.map((item) => (
                        <Link key={item.name} href={item.href}
                            className={`text-xl transition-colors duration-200 font-inter font-bold tracking-wider ${pathname === item.href
                                ? "text-brand-crimson-red" : "text-white hover:text-brand-crimson-red"}`} onClick={() => setMobileOpen(false)}>
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="flex items-center gap-2 px-5 py-2 text-xl font-bold tracking-wider text-white transition-colors duration-200 rounded-full shadow bg-brand-crimson-red font-inter hover:bg-brand-soft-red">
                        <Rocket className="w-5 h-5 " /> Let’s Work
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;