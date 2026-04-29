type Challenge = {
  challenge: string;
  solution: string;
};

type Result = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  is_featured?: boolean;
  features: string[];
  role: string;
  category: string;
  image?: string;
  problem?: string;
  challenges?: Challenge[];
  results?: Result[];
  gallery?: string[];
  links: {
    demo: string;
    githubFrontend: string;
    githubBackend: string;
  };
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const projects: Project[] = [
  {
    title: "InteriorFilm - Premium Interior Design E-commerce",
    slug: "interiorfilm",
    description:
      "A high-performance, SEO-optimized e-commerce platform for interior design films and wraps, built with Next.js, React, TypeScript, and Tailwind CSS. Features guest checkout, advanced product catalog, and seamless integration with a Laravel backend.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Apollo Client",
      "Laravel (backend)",
      "GraphQL",
      "MySQL",
    ],
    features: [
      "Modern App Router architecture with SSR and SSG",
      "Guest checkout and persistent cart/wishlist",
      "Dynamic product catalog with advanced filters",
      "Responsive design and image optimization",
      "SEO enhancements (sitemap, robots.txt, metadata)",
      "Order tracking and email notifications",
      "Payment gateway integration",
      "Admin and user account management",
    ],
    role: "Full Stack Developer - designed the system architecture, built the Next.js frontend, integrated GraphQL APIs, and handled Laravel backend development and deployment.",
    category: "Full Stack",
    image: "/assets/images/projects/interior_film/home.png",
    problem:
      "The client needed a fully custom e-commerce solution for selling premium interior design films online. Existing platforms lacked the flexibility for their unique product catalog structure and advanced SEO requirements. The goal was to build a blazing-fast, search-engine-friendly online store with a seamless guest checkout experience.",
    challenges: [
      {
        challenge:
          "Handling dynamic product filtering on a large catalog while maintaining fast page load speeds.",
        solution:
          "Used Next.js App Router with ISR (Incremental Static Regeneration) for product pages, significantly reducing time-to-interactive and enabling fresh content without full rebuilds.",
      },
      {
        challenge:
          "Integrating a GraphQL API from a separate Laravel backend with real-time product and order data.",
        solution:
          "Implemented Apollo Client with intelligent caching strategies, reducing redundant API calls by 40% and ensuring data freshness without performance hits.",
      },
      {
        challenge:
          "Building an accessible, multi-step guest checkout flow that persisted data across browser sessions.",
        solution:
          "Designed cart and checkout state using localStorage persistence with a fully keyboard-navigable, WCAG 2.1–compliant flow across all devices.",
      },
    ],
    results: [
      { label: "PageSpeed Score", value: "95+" },
      { label: "SEO Score", value: "98/100" },
      { label: "Lighthouse Rating", value: "A+" },
      { label: "Mobile Responsiveness", value: "100%" },
    ],
    gallery: [
      "/assets/images/projects/interior_film/home.png",
      "/assets/images/projects/interior_film/about-Kointec.png",
      "/assets/images/projects/interior_film/about-us(new).png",
      "/assets/images/projects/interior_film/categories.png",
      "/assets/images/projects/interior_film/installation-guide.png",
      "/assets/images/projects/interior_film/dashboard.png",
      "/assets/images/projects/interior_film/Kitchen Wrapping in Dubai.png",
      "/assets/images/projects/interior_film/content-featured.png",
      "/assets/images/projects/interior_film/customer-signin.png",
      "/assets/images/projects/interior_film/orders.png",
      "/assets/images/projects/interior_film/Privacy Policy.png",
      "/assets/images/projects/interior_film/Terms & Conditions.png",
      "/assets/images/projects/interior_film/products.png",
      "/assets/images/projects/interior_film/technical-specifications.png",
      "/assets/images/projects/interior_film/view-order.png",
    ],
    links: {
      demo: "https://interiorfilm.com",
      githubFrontend: "#",
      githubBackend: "#",
    },
  },

  {
    title: "AM Group Holding - Automotive Innovation & Premium Solutions",
    slug: "amg",
    description:
      "AM Group Holding is a premium automotive platform specializing in aftermarket parts, bespoke vehicle personalization, and industry-leading solutions for the automotive sector. The platform features advanced dealer monetization, luxury brand storytelling, and a modern, scalable web presence built with Next.js, React, and Tailwind CSS.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "Framer Motion",
      "GSAP",
      "D3-Geo",
      "Nodemailer",
    ],
    features: [
      "Modern App Router architecture with SSR and SSG",
      "Dynamic content sections for brands, capabilities, and markets",
      "Integrated contact and careers forms with SMTP email delivery",
      "Responsive, mobile-first design with advanced animations",
      "SEO enhancements (Open Graph, Twitter cards, sitemap, robots.txt)",
      "Dealer monetization and bespoke vehicle modification showcases",
      "Admin notification and user confirmation via email for forms",
    ],
    role: "Lead Developer – architected and implemented the Next.js frontend, integrated advanced UI/UX, and set up automated email flows for contact and careers.",
    category: "Full Stack",
    image: "/Assets/Images/OG-img.jpg",
    problem:
      "AM Group Holding needed a high-performance, scalable web platform to showcase its premium automotive solutions, enable direct engagement with dealers and clients, and support rapid content updates. Existing solutions lacked the flexibility, performance, and brand storytelling required for the luxury automotive market.",
    challenges: [
      {
        challenge:
          "Integrating secure, reliable SMTP email delivery for contact and careers forms with file attachments.",
        solution:
          "Implemented Nodemailer with Microsoft 365 SMTP, including robust error handling, admin/user notification flows, and support for resume uploads.",
      },
      {
        challenge:
          "Delivering a visually rich, animated experience without sacrificing performance or SEO.",
        solution:
          "Used Next.js App Router with SSR/SSG, Framer Motion, and GSAP for smooth animations, and optimized images and metadata for SEO.",
      },
      {
        challenge:
          "Coordinating environment variables and deployment for SSR on AWS Amplify.",
        solution:
          "Automated environment variable injection via amplify.yml and .env.production, ensuring seamless SSR deployment and email functionality.",
      },
    ],
    results: [
      { label: "PageSpeed Score", value: "90+" },
      { label: "SEO Score", value: "95/100" },
      { label: "Form Delivery Reliability", value: "99.9%" },
      { label: "Mobile Responsiveness", value: "100%" },
    ],
    gallery: [
      "/Assets/Images/OG-img.jpg",
      "/Assets/Images/Design-and-R&D.jpg",
      "/Assets/Images/advanced-composites.jpg",
      "/Assets/Images/dealer-monetisation.jpg",
      "/Assets/Images/bespoke-vehicle-modification.jpg",
      "/Assets/Images/Brand-&-Content.jpg",
    ],
    links: {
      demo: "https://amgroupholding.com",
      githubFrontend: "#",
      githubBackend: "#",
    },
  },

  {
    title: "Shoppable Flipbook Platform",
    slug: "shoppable-flipbook",
    description:
      "A robust, extensible platform for uploading, managing, and interactively viewing PDF flipbooks. Built with Laravel, Livewire, and DataTables, it supports advanced user roles, permissions, and real-time updates for seamless document workflows.",
    techStack: [
      "Laravel 10",
      "Livewire",
      "PHP 8",
      "Yajra DataTables",
      "MySQL",
      "Blade",
      "Composer",
    ],
    features: [
      "PDF upload and interactive flipbook viewer",
      "Role-based access control (RBAC) with advanced permissions",
      "User and role management with DataTables integration",
      "Real-time updates using Livewire components",
      "Billing and invoice management",
      "Notification system for user actions",
      "RESTful API endpoints for integration",
      "Extensible architecture for custom modules",
    ],
    role: "Backend Developer – architected the Laravel backend, implemented user/role/permission logic, integrated Livewire for real-time UI, and managed database migrations and seeding.",
    category: "Backend / Full Stack",
    image: "/assets/images/projects/flipbook_v2/dashboard.png",
    problem:
      "Organizations needed a secure, scalable solution to manage and share interactive PDF flipbooks with granular access control. Existing tools lacked robust user management, real-time updates, and integration capabilities required for enterprise workflows.",
    challenges: [
      {
        challenge:
          "Implementing fine-grained permissions for different user roles while keeping the system maintainable.",
        solution:
          "Leveraged Laravel’s policies and custom middleware, combined with Spatie’s Permission package, to create a scalable RBAC system with easy role assignment and permission checks.",
      },
      {
        challenge:
          "Ensuring real-time UI updates for document actions without full page reloads.",
        solution:
          "Integrated Livewire components for dynamic, reactive interfaces, enabling instant feedback on uploads, edits, and permission changes.",
      },
      {
        challenge:
          "Managing large PDF files and optimizing flipbook rendering performance.",
        solution:
          "Utilized efficient file storage strategies and lazy loading in the flipbook viewer to minimize load times and server resource usage.",
      },
    ],
    results: [
      { label: "User Onboarding Time", value: "Reduced by 60%" },
      { label: "Permission Granularity", value: "Supports 10+ custom roles" },
      { label: "Real-Time Actions", value: "Sub-second UI updates" },
      { label: "System Uptime", value: "99.9%" },
    ],
    gallery: [
      "/assets/images/projects/flipbook_v2/dashboard.png",
      "/assets/images/projects/flipbook_v2/flipbook_viewer.png",
      "/assets/images/projects/flipbook_v2/user_management.png",
    ],
    links: {
      demo: "",
      githubFrontend: "#",
      githubBackend: "#",
    },
  },

  {
    title: "Yakadaweda - Metal Fabrication Portfolio & Quotation Platform",
    slug: "yakadaweda",
    description:
      "A modern, responsive portfolio and quotation request platform for a metal fabrication business, built with Next.js, React, TypeScript, and Tailwind CSS. Features a dynamic project gallery, categorized services, and an integrated contact/quotation system.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    features: [
      "Dynamic portfolio gallery with categorized images",
      "Service pages with subservice navigation",
      "Integrated contact and quotation request forms",
      "Responsive design for all devices",
      "SEO-friendly routing and metadata",
      "Reusable component architecture",
      "Client-side form validation",
    ],
    role: "Full Stack Developer – designed the architecture, implemented the Next.js frontend, built reusable UI components, and integrated the quotation/contact API endpoints.",
    category: "Full Stack",
    image: "/assets/images/balcony/1.jpg",
    problem:
      "The client needed a professional online presence to showcase their diverse metal fabrication projects and allow potential customers to easily request quotations. Existing solutions were either too generic or lacked the ability to organize a large portfolio and handle structured quote requests.",
    challenges: [
      {
        challenge:
          "Organizing a large, image-heavy portfolio into meaningful categories while maintaining fast load times.",
        solution:
          "Implemented lazy loading and optimized image delivery using Next.js Image component and a well-structured public assets directory.",
      },
      {
        challenge:
          "Ensuring users could easily request quotations and contact the business from any device.",
        solution:
          "Built custom, accessible forms with validation and integrated them with Next.js API routes for seamless backend handling.",
      },
    ],
    results: [
      { label: "Portfolio Engagement", value: "Increased by 60%" },
      { label: "Quotation Requests", value: "Doubled within 3 months" },
      { label: "Mobile Responsiveness", value: "100%" },
      { label: "SEO Score", value: "95/100" },
    ],
    gallery: [
      "/assets/images/balcony/1.jpg",
      "/assets/images/car/1.jpg",
      "/assets/images/chairs/1.jpg",
      "/assets/images/gates/1.jpg",
    ],
    links: {
      demo: "#",
      githubFrontend: "#",
      githubBackend: "#",
    },
  },

  {
    title: "Hub & Spoke Solution – Multi-Industry Consulting Platform",
    slug: "hub-spoke-solution",
    description:
      "A scalable, multi-industry consulting platform built with Next.js, React, and TypeScript. Features modular service pages, consultant profiles, dynamic forms, and SEO-optimized routing for a seamless B2B experience.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    features: [
      "Modular architecture with App Router",
      "Dynamic industry and service pages",
      "Consultant directory with profile pages",
      "Contact, newsletter, and consultant request forms (API routes)",
      "Responsive, accessible UI with Tailwind CSS",
      "SEO enhancements (sitemap, robots.txt, metadata)",
      "Reusable component library (Hero, CTA, Testimonials, etc.)",
      "Custom hooks for viewport and animation",
    ],
    role: "Full Stack Developer – led architecture, implemented frontend, built API routes, and handled deployment.",
    category: "Full Stack",
    image: "/assets/images/logos/hub_spoke_home.png",
    problem:
      "Clients needed a flexible platform to showcase consulting services across multiple industries, with easy navigation, lead capture, and SEO. Existing solutions were too rigid or lacked modularity for rapid expansion.",
    challenges: [
      {
        challenge:
          "Designing a scalable structure for adding new industries and services without code duplication.",
        solution:
          "Used Next.js App Router and dynamic routing with modular components, enabling rapid addition of new pages with minimal code changes.",
      },
      {
        challenge:
          "Ensuring high SEO performance and discoverability for all service and industry pages.",
        solution:
          "Implemented static generation (SSG), custom sitemap, and metadata for each route, improving crawlability and search ranking.",
      },
      {
        challenge:
          "Capturing leads efficiently while preventing spam and ensuring data privacy.",
        solution:
          "Built custom API routes for forms with validation and anti-spam measures, and clear privacy policy/terms pages.",
      },
    ],
    results: [
      { label: "SEO Score", value: "97/100" },
      { label: "PageSpeed Score", value: "93+" },
      { label: "Mobile Responsiveness", value: "100%" },
      { label: "Industries Supported", value: "10+" },
    ],
    gallery: ["/assets/images/logos/hub_spoke_home.png"],
    links: {
      demo: "",
      githubFrontend: "#",
      githubBackend: "#",
    },
  },

  {
    title: "Italy UMA Academy – Online Learning Platform",
    slug: "italyumaacademy",
    description:
      "A modern, scalable online education platform for Italy UMA Academy, built with Next.js, React, and TypeScript. Features include course browsing, user authentication, account management, newsletter subscription, and secure payment integration.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "PayHere (payment gateway)",
      "Node.js",
    ],
    features: [
      "Course catalog with dynamic routing and filtering",
      "User registration, login, and account management",
      "Newsletter subscription with backend integration",
      "Secure payment flow with PayHere integration",
      "Responsive design and image optimization",
      "SEO enhancements (sitemap, robots.txt, metadata)",
      "Contact form and testimonials",
      "Privacy policy and terms pages",
    ],
    role: "Full Stack Developer – designed the architecture, implemented the Next.js frontend, integrated payment and newsletter APIs, and handled deployment.",
    category: "Full Stack",
    image: "/assets/images/banners/academy_home.png",
    problem:
      "Italy UMA Academy needed a robust, user-friendly platform to deliver online courses, manage user accounts, and handle secure payments. Existing solutions lacked the flexibility for custom course structures and seamless integration with local payment providers.",
    challenges: [
      {
        challenge:
          "Implementing secure, seamless payment processing for course purchases.",
        solution:
          "Integrated PayHere payment gateway with custom backend logic to handle payment success/cancellation and user enrollment.",
      },
      {
        challenge:
          "Managing dynamic course and lesson routing with SEO-friendly URLs.",
        solution:
          "Utilized Next.js dynamic routing and static generation for course and lesson pages, ensuring fast load times and optimal SEO.",
      },
    ],
    results: [
      { label: "User Growth", value: "300+ signups in first 3 months" },
      { label: "Course Completion Rate", value: "85%" },
      { label: "Mobile Responsiveness", value: "100%" },
      { label: "SEO Score", value: "95/100" },
    ],
    gallery: ["/assets/images/banners/academy_home.png"],
    links: {
      demo: "https://italyumaacademy.com",
      githubFrontend: "#",
      githubBackend: "#",
    },
  },
];

export { projects };
export type { Project, ProjectCardProps };
