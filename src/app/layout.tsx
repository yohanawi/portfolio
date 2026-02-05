import { Inter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import ScrollTop from "@/components/Common/ScrollTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourname.com"), // 🔴 replace with your domain

  title: {
    default: "Yohan | Full Stack Web Developer",
    template: "%s | Yohan",
  },

  description:
    "Yohan is a Full Stack Web Developer specializing in Next.js, Laravel, Tailwind CSS, and scalable web applications. View projects, skills, and contact details.",

  applicationName: "Yohan Portfolio",

  keywords: [
    "Yohan",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio Website",
  ],

  authors: [{ name: "Yohan" }],
  creator: "Yohan",
  publisher: "Yohan",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yourname.com",
    siteName: "Yohan Portfolio",
    title: "Yohan | Full Stack Web Developer",
    description:
      "Personal portfolio of Yohan, a Full Stack Web Developer building modern, fast, and scalable web applications.",
    images: [
      {
        url: "/og-image.jpg", // put this in /public
        width: 1200,
        height: 630,
        alt: "Yohan Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yohan | Full Stack Web Developer",
    description:
      "Explore Yohan’s portfolio – Full Stack Web Developer specializing in Next.js and Laravel.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitter", // optional
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://www.yourname.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
