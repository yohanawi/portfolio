import { Metadata } from "next";
import CTA from "@/components/Common/CTA";
import HeroSection from "@/components/Experience/HeroSection";
import StatsSection from "@/components/Experience/StastSection";
import TimeLineSection from "@/components/Experience/TimeLineSection";

// SEO Metadata (Place this in a separate metadata export for App Router)
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Experience | Yohan Awishka - Professional Work History",
        description: "Explore Yohan Awishka's professional experience as a Full Stack Developer, including freelance projects, internships, and key achievements in web development.",
        keywords: [
            "Yohan Awishka Experience",
            "Full Stack Developer Experience",
            "Web Developer Work History",
            "Professional Experience",
            "Next.js Developer Experience",
            "React Developer Portfolio",
            "Laravel Developer Experience",
            "Freelance Developer",
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: "Experience | Yohan Awishka - Full Stack Developer",
            description: "Professional experience and achievements in full-stack web development.",
            url: "https://yohanawishka.com/experience",
            siteName: "Yohan Awishka Portfolio",
            images: [
                {
                    url: "/images/og-experience.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Yohan Awishka Professional Experience",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Experience | Yohan Awishka - Full Stack Developer",
            description: "Professional experience and achievements in web development.",
            images: ["/images/twitter-experience.jpg"],
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
            canonical: "https://yohanawishka.com/experience",
        },
    };
}

export default async function ExperiencePage() {
    return (
        <>
            <main className="relative min-h-screen overflow-hidden font-inter bg-brand-gray">
                {/* Decorative background elements */}
                <div className="fixed top-0 right-0 rounded-full w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
                <div className="fixed bottom-0 left-0 rounded-full w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>

                {/* Hero Section */}
                <HeroSection />

                {/* Stats Section */}
                <StatsSection />

                {/* Timeline Section */}
                <TimeLineSection />

                <CTA />
            </main>
        </>
    );
}; 