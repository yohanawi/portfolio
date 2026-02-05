import { Metadata } from "next";
import CTA from "@/components/Common/CTA";
import StatsSection from "@/components/Project/StatsSection";
import HeroSection from "@/components/Project/HeroSection";
import ProjectSection from "@/components/Project/ProjectSection";

// SEO Metadata(Place this in a separate metadata export for App Router)
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Projects | Yohan Awishka - Full Stack Developer Portfolio",
        description: "Explore my portfolio of web development projects including travel booking platforms, productivity apps, and e-learning systems built with Next.js, React, Laravel, and modern technologies.",
        keywords: [
            "Web Development Projects",
            "Next.js Projects",
            "React Portfolio",
            "Laravel Projects",
            "Full Stack Projects",
            "Yohan Awishka Projects",
            "Travel Booking Platform",
            "Task Management App",
            "E-learning Platform",
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: "Projects | Yohan Awishka - Full Stack Developer",
            description: "Explore my portfolio of modern web applications and full-stack projects.",
            url: "https://yohanawishka.com/projects",
            siteName: "Yohan Awishka Portfolio",
            images: [
                {
                    url: "/images/og-projects.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Yohan Awishka Projects Portfolio",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Projects | Yohan Awishka - Full Stack Developer",
            description: "Explore my portfolio of modern web applications and full-stack projects.",
            images: ["/images/twitter-projects.jpg"],
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
            canonical: "https://yohanawishka.com/projects",
        },
    };
}

export default async function ProjectsPage() {

    return (
        <>
            <main className="relative min-h-screen overflow-hidden font-inter bg-brand-gray">
                {/* Decorative background elements */}
                <div className="fixed top-0 right-0 rounded-full w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
                <div className="fixed bottom-0 left-0 rounded-full w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>

                <HeroSection />
                <StatsSection />
                <ProjectSection />


                <CTA />
            </main>
        </>
    );
};
