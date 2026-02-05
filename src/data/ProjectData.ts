type Project = {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  role: string;
  category: string;
  image?: string;
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
    title: "ExploryaTravel – Travel Booking Platform",
    description:
      "A full-featured travel booking platform with SEO-optimized pages, admin CMS, and secure authentication.",
    techStack: ["Next.js", "Laravel", "Tailwind CSS", "MySQL", "JWT"],
    features: [
      "User authentication & role management",
      "SEO-friendly dynamic pages",
      "Admin dashboard for content management",
      "Responsive UI for all devices",
    ],
    role: "Designed the architecture, developed frontend & backend, handled database design, and deployed the application.",
    category: "Full Stack",
    image: "/projects/explorya.jpg",
    links: {
      demo: "https://exploryatravel-demo.com",
      githubFrontend: "https://github.com/yourusername/explorya-frontend",
      githubBackend: "https://github.com/yourusername/explorya-backend",
    },
  },
  {
    title: "TaskFlow – Team Productivity App",
    description:
      "A collaborative task management tool for teams, featuring real-time updates, notifications, and analytics dashboard.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Real-time task updates",
      "Team notifications",
      "Analytics dashboard",
      "Role-based access control",
    ],
    role: "Built the frontend, integrated REST APIs, and implemented real-time features using WebSockets.",
    category: "Full Stack",
    image: "/projects/taskflow.jpg",
    links: {
      demo: "https://taskflow-demo.com",
      githubFrontend: "https://github.com/yourusername/taskflow-frontend",
      githubBackend: "https://github.com/yourusername/taskflow-backend",
    },
  },
  {
    title: "EduPro – Online Learning Platform",
    description:
      "An e-learning platform with video courses, quizzes, and progress tracking for students and instructors.",
    techStack: ["Next.js", "Laravel", "Bootstrap", "MySQL"],
    features: [
      "Video course management",
      "Interactive quizzes",
      "Student progress tracking",
      "Instructor dashboard",
    ],
    role: "Developed backend APIs, managed database schema, and contributed to UI/UX design.",
    category: "Full Stack",
    image: "/projects/edupro.jpg",
    links: {
      demo: "https://edupro-demo.com",
      githubFrontend: "https://github.com/yourusername/edupro-frontend",
      githubBackend: "https://github.com/yourusername/edupro-backend",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and SEO optimization.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Smooth page transitions",
      "SEO optimized",
      "Dark mode support",
      "Contact form integration",
    ],
    role: "Full design and development from scratch, including UI/UX design and deployment.",
    category: "Frontend",
    image: "/projects/portfolio.jpg",
    links: {
      demo: "https://yohanawishka.com",
      githubFrontend: "https://github.com/yourusername/portfolio",
      githubBackend: "#",
    },
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and customer data with advanced analytics and reporting.",
    techStack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    features: [
      "Product management system",
      "Order tracking",
      "Sales analytics",
      "Customer insights",
    ],
    role: "Developed the complete admin panel with data visualization and export features.",
    category: "Full Stack",
    image: "/projects/ecommerce.jpg",
    links: {
      demo: "https://dashboard-demo.com",
      githubFrontend: "https://github.com/yourusername/dashboard-frontend",
      githubBackend: "https://github.com/yourusername/dashboard-backend",
    },
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
    techStack: ["React", "OpenWeather API", "Tailwind CSS"],
    features: [
      "Current weather conditions",
      "7-day forecast",
      "Interactive weather maps",
      "Location search",
    ],
    role: "Frontend development with API integration and responsive design implementation.",
    category: "Frontend",
    image: "/projects/weather.jpg",
    links: {
      demo: "https://weather-demo.com",
      githubFrontend: "https://github.com/yourusername/weather-app",
      githubBackend: "#",
    },
  },
];

export { projects };