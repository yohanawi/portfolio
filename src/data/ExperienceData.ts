type EmploymentType = "Full-time" | "Part-time" | "Internship" | "Freelance";

type Experience = {
  title: string;
  id: string;
  company: string;
  duration: string;
  type: EmploymentType;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
};

const experiences: Experience[] = [
  {
    title: "Software Enginner",
    id: "encyte",
    company: "Encyte",
    duration: "2026 – Present",
    type: "Full-time",
    description:
    "Working as a Software Engineer at Encyte, contributing to the development and maintenance of modern software solutions. Focused on building reliable, scalable, and maintainable applications while collaborating with the development team to deliver high-quality features and improve existing systems.",

    responsibilities: [
    "Develop and maintain scalable web applications and software solutions",
    "Build and enhance frontend and backend application features",
    "Design and integrate RESTful APIs and third-party services",
    "Work with databases to manage and optimize application data",
    "Write clean, reusable, and maintainable code following development best practices",
    "Debug, troubleshoot, and resolve application issues",
    "Optimize application performance, reliability, and user experience",
    "Collaborate with team members on feature development, testing, and deployment",
    "Participate in code reviews and contribute to improving code quality",
    "Maintain and improve existing production applications",
  ],

    achievements: ["Contributed to the development and improvement of production software applications",
    "Successfully delivered new features based on business and technical requirements",
    "Improved application stability and maintainability through code enhancements",
    "Strengthened software engineering practices through team collaboration and code reviews",
    "Gained hands-on experience working within a professional software engineering environment",
  ],

    technologies: [
      "Next.js",
      "NestJs",
      "Node.js",
      "Laravel",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "Postergql",
      "Git",
      "Docker",
    ],
  },
  
  {
    title: "Full Stack Web Developer",
    id: "xess-global",
    company: "XESS Global",
    duration: "2024 – Present",
    type: "Full-time",
    description:
      "Working as a Full Stack Web Developer at XESS Global, building scalable and high-performance web applications using modern technologies. Focused on delivering SEO-optimized, user-friendly, and production-ready solutions for real-world business needs.",

    responsibilities: [
      "Developing modern web applications using Next.js, React, and Laravel",
      "Building and maintaining RESTful APIs and GraphQL APIs",
      "Designing responsive and user-friendly interfaces using Tailwind CSS and Figma",
      "Implementing authentication systems and role-based access control",
      "Optimizing web performance, page speed, and SEO for better search rankings",
      "Managing databases using MySQL and integrating third-party services",
      "Deploying and managing applications using AWS cloud services",
      "Collaborating with teams to deliver scalable and maintainable solutions",
    ],

    achievements: [
      "Improved application performance and reduced load time significantly",
      "Successfully delivered multiple production-ready web applications",
      "Enhanced SEO performance and search visibility for projects",
      "Gained 1+ year of professional industry experience in full-stack development",
      "Contributed to building scalable systems used in real-world business environments",
    ],

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Laravel",
      "Strapi",
      "GraphQL",
      "MySQL",
      "AWS",
      "Tailwind CSS",
      "Figma",
    ],
  },

  {
    title: "Web Developer (Part-time)",
    id: "dynamicx-uk",
    company: "DynamicX (UK)",
    duration: "2025 – Present",
    type: "Part-time",

    description:
      "Working as a Part-time Web Developer for DynamicX (UK), responsible for maintaining and enhancing modern web applications. Focused on delivering high-performance, SEO-optimized, and scalable solutions using Next.js and headless CMS architecture.",

    responsibilities: [
      "Maintaining and improving existing websites built with Next.js and Strapi",
      "Developing new features and optimizing application performance",
      "Managing content and data using headless CMS (Strapi)",
      "Ensuring responsive design and cross-device compatibility",
      "Optimizing SEO, page speed, and overall user experience",
      "Troubleshooting issues and providing ongoing technical support",
    ],

    achievements: [
      "Successfully maintaining a live international web platform",
      "Improved website performance and loading speed",
      "Enhanced SEO structure and search visibility",
      "Gained experience working with international clients (UK-based company)",
    ],

    technologies: [
      "Next.js",
      "React",
      "Strapi",
      "GraphQL",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "AWS",
    ],
  },

  {
    title: "Full Stack Developer (Intern)",
    id: "bluechip-asia-technology",
    company: "Bluechip Asia Technology",
    duration: "2022 (6 Months)",
    type: "Internship",

    description:
      "Completed a 6-month internship as a Full Stack Developer at Bluechip Asia Technology, gaining hands-on experience in building real-world web applications using modern development tools and frameworks. Focused on developing scalable, user-friendly, and functional web solutions.",

    responsibilities: [
      "Developed dynamic web applications using PHP and Laravel framework",
      "Designed and implemented user interfaces using Figma and frontend technologies",
      "Integrated REST APIs to connect frontend and backend systems",
      "Worked with MySQL databases for data management and optimization",
      "Collaborated with team members to deliver functional and efficient web solutions",
      "Participated in debugging, testing, and improving application performance",
    ],

    achievements: [
      "Successfully completed a full-stack internship with real-world project experience",
      "Built and contributed to multiple functional web applications",
      "Improved understanding of backend architecture and API integration",
      "Developed strong problem-solving and teamwork skills in a professional environment",
    ],

    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    title: "Freelance Full Stack Developer",
    id: "self-employed",
    company: "Self-Employed",
    duration: "2023 – Present",
    type: "Freelance",

    description:
      "Working as a Freelance Full Stack Developer, delivering custom web solutions for clients based on their business requirements. Specialized in building modern, responsive, and SEO-optimized web applications using the latest technologies.",

    responsibilities: [
      "Developing custom websites and web applications using Next.js, React, and Laravel",
      "Designing user interfaces and prototypes using Figma",
      "Building and integrating REST APIs and backend systems",
      "Optimizing websites for SEO, performance, and user experience",
      "Communicating directly with clients to understand and deliver requirements",
      "Deploying and maintaining projects on cloud platforms",
    ],

    achievements: [
      "Successfully delivered multiple freelance projects for various clients",
      "Built scalable and user-friendly web applications tailored to business needs",
      "Maintained high client satisfaction through quality and timely delivery",
      "Strengthened real-world problem-solving and project management skills",
    ],

    technologies: [
      "Next.js",
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "Strapi",
      "GraphQL",
      "Tailwind CSS",
      "Figma",
      "AWS",
    ],
  },
];

export { experiences };
