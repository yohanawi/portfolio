import { Metadata } from "next";
import HeroSection from "@/components/Contact/HeroSection";
import MainSection from "@/components/Contact/MainSection";

// SEO Metadata (Place this in a separate metadata export for App Router)
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Contact Yohan Awishka | Hire Full Stack Developer",
        description: "Get in touch with Yohan Awishka for web development projects, freelance work, or collaboration opportunities. Available for Next.js, React, and Laravel projects.",
        keywords: [
            "Contact Yohan Awishka",
            "Hire Full Stack Developer",
            "Web Developer Contact",
            "Freelance Developer",
            "Next.js Developer for Hire",
            "React Developer Contact",
            "Laravel Developer",
            "Web Development Services",
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: "Contact Yohan Awishka | Full Stack Developer",
            description: "Get in touch for web development projects and collaboration opportunities.",
            url: "https://yohanawishka.com/contact",
            siteName: "Yohan Awishka Portfolio",
            images: [
                {
                    url: "/images/og-contact.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Contact Yohan Awishka - Full Stack Developer",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Contact Yohan Awishka | Full Stack Developer",
            description: "Get in touch for web development projects and collaboration.",
            images: ["/images/twitter-contact.jpg"],
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
            canonical: "https://yohanawishka.com/contact",
        },
    };
}

export default async function ContactPage() {
    return (
        <>
            {/* JSON-LD Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        name: "Contact Yohan Awishka",
                        description: "Get in touch with Yohan Awishka for web development projects",
                        url: "https://yohanawishka.com/contact",
                        mainEntity: {
                            "@type": "Person",
                            name: "Yohan Awishka",
                            jobTitle: "Full Stack Developer",
                            email: "yohan.indrawansha2000@gmail.com",
                            telephone: "077-8638568",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Colombo",
                                addressCountry: "LK",
                            },
                        },
                    }),
                }}
            />

            <main className="relative min-h-screen overflow-hidden font-inter bg-brand-gray">
                {/* Decorative background elements */}
                <div className="fixed top-0 left-0 rounded-full w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
                <div className="fixed bottom-0 right-0 rounded-full w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>

                <HeroSection />
                <MainSection />

            </main>
        </>
    );
};
