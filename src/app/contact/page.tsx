import { Metadata } from "next";

import HeroSection from "@/components/Contact/HeroSection";
import MainSection from "@/components/Contact/MainSection";

export async function generateMetadata(): Promise<Metadata> {
    return {

        title: {
            absolute: "Contact Yohan Awishka | Full Stack Web Developer",
            default: "Contact Yohan Awishka | Full Stack Web Developer",
            template: "%s | Contact Yohan Awishka"
        },

        description: "Contact Yohan Awishka, a Full Stack Web Developer specializing in Next.js, React, and Laravel, for freelance or remote work.",
        keywords: [
            "Contact Yohan Awishka",
            "Hire Full Stack Developer",
            "Web Developer Contact",
            "Freelance Developer",
            "Next.js Developer for Hire",
            "React Developer Contact",
            "Laravel Developer",
            "Web Development Services",
            "Full Stack Web Developer Sri Lanka",
            "Hire Web Developer Sri Lanka",
            "Next.js Developer Sri Lanka",
            "React Developer Sri Lanka",
            "Laravel Developer Sri Lanka",
            "Freelance Web Developer",
            "Remote Web Developer",
            "Web Developer Portfolio Contact",
            "best portfolio website developer Sri Lanka",
            "affordable web developer Sri Lanka",
            "Next.js developer for startups",
            "build ecommerce website Sri Lanka",
            "custom web app developer Sri Lanka"
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: "Contact Yohan Awishka | Full Stack Web Developer",
            description: "Contact Yohan Awishka, a Full Stack Web Developer specializing in Next.js, React, and Laravel, for freelance or remote work.",
            url: "https://yohanawishka.com/contact",
            siteName: "Yohan Awishka Portfolio",
            images: [
                {
                    url: "/assets/images/portfolio home.png",
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
            site: "@yohanawishka",
            title: "Contact Yohan Awishka | Full Stack Web Developer",
            description: "Contact Yohan Awishka, a Full Stack Web Developer specializing in Next.js, React, and Laravel, for freelance or remote work.",
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
            canonical: "https://yohanawishka.com/contact",
            languages: {
                "en-US": "https://yohanawishka.com/contact",
                "x-default": "https://yohanawishka.com/contact",
            },
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
                        "@id": "https://yohanawishka.com/contact",
                        name: "Contact Yohan Awishka",
                        description: "Contact Yohan Awishka, a Full Stack Web Developer specializing in Next.js, React, and Laravel, for freelance or remote work.",
                        url: "https://yohanawishka.com/contact",
                        mainEntity: {
                            "@type": "Person",
                            "@id": "https://yohanawishka.com/#person",
                            name: "Yohan Awishka",
                            jobTitle: "Full Stack Developer",
                            url: "https://yohanawishka.com",
                            email: "mailto:yohan.indrawansha2000@gmail.com",
                            telephone: "+94785161481",
                            sameAs: [
                                "https://github.com/yohanawi",
                                "https://www.linkedin.com/in/yohan-awishka-indrawansha",
                            ],
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Colombo",
                                addressCountry: "LK"
                            }
                        }
                    }),
                }}
            />

            <main className="relative min-h-screen overflow-hidden font-inter bg-brand-gray">
                <div className="fixed top-0 left-0 rounded-full w-96 h-96 bg-brand-crimson-red/5 blur-3xl"></div>
                <div className="fixed bottom-0 right-0 rounded-full w-96 h-96 bg-brand-soft-red/5 blur-3xl"></div>
                <HeroSection />
                <MainSection />
            </main>
        </>
    );
};
