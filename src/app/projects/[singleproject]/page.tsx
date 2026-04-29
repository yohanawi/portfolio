import SingleProjectContent from "@/components/Project/SingleProjectContent";
import { projects } from "@/data/ProjectData";
import { Metadata } from "next";
    
export async function generateStaticParams() {
    return projects.map((project) => ({
        singleproject: project.slug,
    }));
}

// SEO Metadata
export async function generateMetadata({
    params,
}: {
    params: Promise<{ singleproject: string }>;
}): Promise<Metadata> {
    const { singleproject } = await params;
    const project = projects.find((p) => p.slug === singleproject);

    if (!project) {
        return {
            title: "Project Not Found | Yohan Awishka Portfolio",
        };
    }

    return {
        title: `${project.title} | Yohan Awishka Portfolio`,
        description: project.description,
        keywords: [
            ...project.techStack,
            "Yohan Awishka",
            "Full Stack Developer",
            "Web Development Portfolio",
            project.category,
        ],
        authors: [{ name: "Yohan Awishka" }],
        creator: "Yohan Awishka",
        openGraph: {
            title: `${project.title} | Yohan Awishka`,
            description: project.description,
            url: `https://yohanawishka.com/projects/${project.slug}`,
            siteName: "Yohan Awishka Portfolio",
            images: project.image
                ? [{ url: project.image, width: 1200, height: 630, alt: project.title }]
                : [{ url: "/images/og-projects.jpg", width: 1200, height: 630, alt: project.title }],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} | Yohan Awishka`,
            description: project.description,
            images: [project.image ?? "/images/twitter-projects.jpg"],
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
            canonical: `https://yohanawishka.com/projects/${project.slug}`,
        },
    };
}

export default async function SingleProjectsPage({
    params,
}: {
    params: Promise<{ singleproject: string }>;
}) {
    const { singleproject } = await params;
    const project = projects.find((p) => p.slug === singleproject);

    return (
        <>
            {project && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: project.title,
                            url: `https://yohanawishka.com/projects/${project.slug}`,
                            description: project.description,
                            applicationCategory: project.category,
                            author: {
                                "@type": "Person",
                                name: "Yohan Awishka",
                                jobTitle: "Full Stack Developer",
                                sameAs: [
                                    "https://github.com/yourusername",
                                    "https://linkedin.com/in/yourusername",
                                ],
                            },
                        }),
                    }}
                />
            )}
            <main className="relative min-h-screen overflow-hidden font-inter bg-brand-gray">
                <SingleProjectContent slug={singleproject} />                
            </main>
        </>
    );
}

