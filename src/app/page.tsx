import type { Metadata } from "next";

import HeroSection from "@/components/Home/HeroSection";
import AboutSection from "@/components/Home/AboutSection";
import SkillSection from "@/components/Home/SkillSection";
import ProjectSection from "@/components/Home/ProjectSection";
import ExperienceSection from "@/components/Home/ExperienceSection";
import EducationSection from "@/components/Home/EducationSection";
import Testimonials from "@/components/Home/Testimonials";
import ContactSection from "@/components/Home/ContactSection";

/**
 * Home page SEO (overrides layout defaults)
 */
export const metadata: Metadata = {
  title: "Yohan Awishka | Full Stack Web Developer",
  description:
    "Yohan Awishka is a Full Stack Web Developer specializing in Next.js, Laravel & React, building fast, SEO-optimized web applications.",
  keywords: [
    "Yohan Awishka",
    "Full Stack Developer Sri Lanka",
    "Next.js Developer",
    "Laravel Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Tailwind CSS Developer",
    "Freelance Web Developer Sri Lanka",
  ],
  alternates: {
    canonical: "https://yohanawishka.com",
    languages: {
      "en-US": "https://yohanawishka.com",
      "x-default": "https://yohanawishka.com",
    },
  },
  openGraph: {
    title: "Yohan Awishka | Full Stack Web Developer",
    description:
      "Personal portfolio of Yohan Awishka, showcasing projects, skills, experience, and education in modern web development.",
    url: "https://yohanawishka.com",
    siteName: "Yohan Awishka Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/portfolio home.png",
        width: 1200,
        height: 630,
        alt: "Yohan Awishka Portfolio",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://yohanawishka.com/#person",
                name: "Yohan Awishka",
                jobTitle: "Full Stack Web Developer",
                description:
                  "Full Stack Web Developer specializing in Next.js, React, Laravel, and modern web technologies.",
                url: "https://yohanawishka.com",
                image: "https://yohanawishka.com/assets/images/About.jpg",
                email: "mailto:yohan.indrawansha2000@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Colombo",
                  addressCountry: "LK",
                },
                sameAs: [
                  "https://github.com/yohanawi",
                  "https://www.linkedin.com/in/yohan-awishka-indrawansha",
                ],
                knowsAbout: [
                  "Next.js",
                  "React",
                  "Laravel",
                  "Node.js",
                  "TypeScript",
                  "Full Stack Development",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://yohanawishka.com/#website",
                name: "Yohan Awishka Portfolio",
                url: "https://yohanawishka.com",
                publisher: { "@id": "https://yohanawishka.com/#person" },
              },
            ],
          }),
        }}
      />

      {/* Hero / Introduction */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Skills */}
      <section id="skills">
        <SkillSection />
      </section>

      {/* Projects */}
      <section id="projects">
        <ProjectSection />
      </section>

      {/* Experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* Education */}
      <section id="education">
        <EducationSection />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
