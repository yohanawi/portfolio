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
  title: "Home",
  description:
    "Yohan is a Full Stack Web Developer specializing in Next.js, Laravel, and modern web technologies. Explore projects, skills, experience, and get in touch.",
  keywords: [
    "Yohan",
    "Full Stack Web Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
  alternates: {
    canonical: "https://www.yohanawishka.com",
  },
  openGraph: {
    title: "Yohan | Full Stack Web Developer",
    description:
      "Personal portfolio of Yohan, showcasing projects, skills, experience, and education in modern web development.",
    url: "https://www.yohanawishka.com",
    siteName: "Yohan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yohan Portfolio",
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
