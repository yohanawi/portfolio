import { Metadata } from "next";

import HeroSection from "@/components/About/HeroSeCtion";
import StatsSection from "@/components/About/StastSection";
import SummarySection from "@/components/About/SummarySection";
import CompetenciesSection from "@/components/About/CompetenciesSection";
import CTA from "@/components/Common/CTA";

// SEO Metadata (Place this in a separate metadata export for App Router)
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "About Yohan Awishka | Full Stack Developer & Software Engineer",
        description: "Experienced Full Stack Developer specializing in Next.js, React, Laravel, and modern web technologies. Building fast, scalable, and SEO-optimized web applications.",
        keywords: [
            "Yohan Awishka",
            "Full Stack Developer",
            "Software Engineer",
            "Next.js Developer",
            "React Developer",
            "Laravel Developer",
            "Web Developer Sri Lanka",
            "Frontend Developer",
            "Backend Developer",
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: "About Yohan Awishka | Full Stack Developer",
            description: "Experienced Full Stack Developer specializing in modern web technologies and scalable applications.",
            url: "https://yohanawishka.com/about",
            siteName: "Yohan Awishka Portfolio",
            images: [
                {
                    url: "/images/og-about.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Yohan Awishka - Full Stack Developer",
                },
            ],
            locale: "en_US",
            type: "profile",
        },
        twitter: {
            card: "summary_large_image",
            title: "About Yohan Awishka | Full Stack Developer",
            description: "Experienced Full Stack Developer specializing in modern web technologies.",
            images: ["/images/twitter-about.jpg"],
            creator: "@yourusername",
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: "https://yohanawishka.com/about",
        },
    };
}

export default async function AboutPage() {
    return (
        <>
            {/* JSON-LD Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Yohan Awishka",
                        jobTitle: "Full Stack Developer",
                        description: "Experienced Full Stack Developer specializing in Next.js, React, Laravel, and modern web technologies.",
                        url: "https://yohanawishka.com",
                        sameAs: [
                            "https://github.com/yourusername",
                            "https://linkedin.com/in/yourusername",
                            "https://twitter.com/yourusername",
                        ],
                        knowsAbout: [
                            "Next.js",
                            "React",
                            "Laravel",
                            "Node.js",
                            "Full Stack Development",
                            "Web Development",
                        ],
                    }),
                }}
            />

            <main className="relative min-h-screen overflow-hidden font-inter bg-brand-gray">
                {/* Decorative background elements */}
                <div className="fixed top-0 left-0 rounded-full w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
                <div className="fixed bottom-0 right-0 rounded-full w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>
                <HeroSection />
                <StatsSection />
                <SummarySection />
                <CompetenciesSection />
                <CTA />
            </main>
        </>
    );
};
