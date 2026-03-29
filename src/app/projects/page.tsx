import { Metadata } from "next";
import CTA from "@/components/Common/CTA";
import StatsSection from "@/components/Project/StatsSection";
import HeroSection from "@/components/Project/HeroSection";
import ProjectSection from "@/components/Project/ProjectSection";

// SEO Metadata(Place this in a separate metadata export for App Router)
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Projects | Yohan Awishka - Full Stack Web Developer Portfolio",
        description: "Discover Yohan Awishka's web development projects: from Next.js travel booking platforms to Laravel productivity apps and full-stack e-learning systems. SEO-optimized, scalable, and modern web solutions.",
        keywords: [
            "Full Stack Developer Sri Lanka",
            "Web Development Portfolio",
            "Next.js Projects",
            "React Applications",
            "Laravel Web Apps",
            "Node.js Development",
            "Tailwind CSS Projects",
            "MySQL Projects",
            "Yohan Awishka Portfolio",
            "SEO Web Developer",
            "Custom Web Applications"
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: "Yohan Awishka Projects | Full Stack Web Developer",
            description: "Explore featured projects by Yohan Awishka, showcasing modern web development using Next.js, React, Laravel, Node.js, and more. Scalable and SEO-optimized applications.",
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
            title: "Yohan Awishka Projects | Full Stack Web Developer",
            description: "Explore featured projects by Yohan Awishka, showcasing modern web development using Next.js, React, Laravel, Node.js, and more. Scalable and SEO-optimized applications.",
            images: ["/images/twitter-projects.jpg"],
            creator: "@yohanawishka",
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Portfolio",
                        name: "Yohan Awishka Portfolio",
                        url: "https://yohanawishka.com/projects",
                        description: "Featured web development projects by Yohan Awishka, built using Next.js, React, Laravel, Node.js, Tailwind CSS, and MySQL.",
                        creator: {
                            "@type": "Person",
                            name: "Yohan Awishka",
                            jobTitle: "Full Stack Developer",
                            sameAs: [
                                "https://github.com/yourusername",
                                "https://linkedin.com/in/yourusername"
                            ]
                        },
                        mainEntityOfPage: "https://yohanawishka.com/projects"
                    })
                }}
            />
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
