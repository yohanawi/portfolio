import { Metadata } from "next";
import CTA from "@/components/Common/CTA";
import HeroSection from "@/components/Experience/HeroSection";
import StatsSection from "@/components/Experience/StastSection";
import TimeLineSection from "@/components/Experience/TimeLineSection";

// SEO Metadata (Place this in a separate metadata export for App Router)
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: { absolute: "Work Experience | Yohan Awishka - Full Stack Dev" },
        description: "Explore Yohan Awishka's work experience as a Full Stack Web Developer in Sri Lanka, specializing in Next.js, React, and Laravel.",
        keywords: [
            "Yohan Awishka Experience",
            "Full Stack Web Developer Sri Lanka",
            "Web Developer Experience Sri Lanka",
            "Next.js Developer Experience",
            "React Developer Experience",
            "Laravel Developer Portfolio",
            "Freelance Web Developer Sri Lanka",
            "Software Developer Work History",
            "Web Development Projects Experience"
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: "Work Experience | Yohan Awishka - Full Stack Dev",
            description: "Explore Yohan Awishka's work experience as a Full Stack Web Developer in Sri Lanka, specializing in Next.js, React, and Laravel.",
            url: "https://yohanawishka.com/experience",
            siteName: "Yohan Awishka Portfolio",
            images: [
                {
                    url: "/assets/images/portfolio home.png",
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
            title: "Work Experience | Yohan Awishka - Full Stack Dev",
            description: "Explore Yohan Awishka's work experience as a Full Stack Web Developer in Sri Lanka, specializing in Next.js, React, and Laravel.",
            images: ["/assets/images/portfolio home.png"],
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
            canonical: "https://yohanawishka.com/experience",
            languages: {
                "en-US": "https://yohanawishka.com/experience",
                "x-default": "https://yohanawishka.com/experience",
            },
        },
    };
}

export default async function ExperiencePage() {
    return (
        <>
            {/* JSON-LD Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "@id": "https://yohanawishka.com/experience",
                        name: "Work Experience | Yohan Awishka",
                        description:
                            "Explore Yohan Awishka's work experience as a Full Stack Web Developer in Sri Lanka, specializing in Next.js, React, and Laravel.",
                        url: "https://yohanawishka.com/experience",
                        mainEntity: {
                            "@type": "Person",
                            "@id": "https://yohanawishka.com/#person",
                            name: "Yohan Awishka",
                            jobTitle: "Full Stack Web Developer",
                            url: "https://yohanawishka.com",
                            worksFor: {
                                "@type": "Organization",
                                name: "XESS Global",
                            },
                            sameAs: [
                                "https://github.com/yohanawi",
                                "https://www.linkedin.com/in/yohan-awishka-indrawansha",
                            ],
                            hasOccupation: [
                                {
                                    "@type": "Occupation",
                                    name: "Full Stack Web Developer",
                                    occupationLocation: { "@type": "Country", name: "Sri Lanka" },
                                },
                            ],
                        },
                    }),
                }}
            />

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