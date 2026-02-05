"use client";

import { Award, Briefcase, Calendar, CheckCircle, Code, Target, TrendingUp } from "lucide-react";

type Experience = {
    title: string;
    company: string;
    duration: string;
    type: string;
    description: string;
    responsibilities: string[];
    achievements?: string[];
    technologies?: string[];
};

const experiences: Experience[] = [
    {
        title: "Full Stack Developer",
        company: "Freelance & Personal Projects",
        duration: "2023 – Present",
        type: "Freelance",
        description:
            "Built real-world web applications for clients and personal growth, focusing on scalable, maintainable solutions with modern technologies.",
        responsibilities: [
            "Developed REST APIs using Node.js & Express",
            "Built responsive UI with Next.js and Tailwind CSS",
            "Integrated authentication and role-based access",
            "Improved page speed & SEO scores",
            "Managed client relationships and project timelines"
        ],
        achievements: [
            "Reduced load time by 30% on client projects",
            "Delivered multiple projects before deadline",
            "Achieved 100% client satisfaction rate",
            "Built 15+ production-ready applications"
        ],
        technologies: ["Next.js", "React", "Node.js", "Laravel", "MySQL", "Tailwind CSS"]
    },
    {
        title: "Frontend Developer (Intern)",
        company: "TechNova Solutions",
        duration: "2022 – 2023",
        type: "Internship",
        description:
            "Worked on a SaaS dashboard for small businesses, collaborating with a cross-functional team to deliver high-quality user interfaces.",
        responsibilities: [
            "Implemented dynamic dashboards with React and Next.js",
            "Collaborated with backend team to integrate REST APIs",
            "Wrote unit and integration tests for UI components",
            "Participated in code reviews and agile ceremonies",
            "Contributed to UI/UX design discussions"
        ],
        achievements: [
            "Received 'Best Intern' award for Q1 2023",
            "Improved dashboard load time by 25%",
            "Successfully delivered 5 major features"
        ],
        technologies: ["React", "Next.js", "TypeScript", "Jest", "REST APIs"]
    },
    {
        title: "Web Developer",
        company: "Digital Solutions Agency",
        duration: "2021 – 2022",
        type: "Part-time",
        description:
            "Developed and maintained client websites, ensuring responsive design and optimal performance across all devices.",
        responsibilities: [
            "Created responsive websites using HTML, CSS, and JavaScript",
            "Integrated CMS platforms for content management",
            "Optimized websites for SEO and performance",
            "Provided technical support and maintenance"
        ],
        achievements: [
            "Completed 20+ client websites",
            "Achieved 95+ Google PageSpeed scores",
            "Reduced bounce rate by 40% through UX improvements"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    }
];


type ExperienceCardProps = {
    experience: Experience;
    index: number;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div
            className="relative flex flex-col gap-8 md:flex-row animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Timeline Line and Dot (Desktop) */}
            <div className="hidden md:flex md:flex-col md:items-center md:w-24">
                <div className="relative flex items-center justify-center w-16 h-16 border-4 rounded-full bg-brand-crimson-red/10 border-brand-gray">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-crimson-red text-brand-white">
                        <Briefcase size={20} />
                    </div>
                    {/* Pulsing effect */}
                    <div className="absolute inset-0 rounded-full bg-brand-crimson-red animate-ping opacity-20"></div>
                </div>
                {index < experiences.length - 1 && (
                    <div className="flex-1 w-0.5 mt-4 bg-gradient-to-b from-brand-crimson-red to-brand-soft-red"></div>
                )}
            </div>

            {/* Content Card */}
            <article className="flex-1 p-8 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-2xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2">
                {/* Mobile Timeline Dot */}
                <div className="absolute flex items-center justify-center w-12 h-12 border-4 rounded-full -left-6 top-8 md:hidden bg-brand-crimson-red/10 border-brand-gray">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-crimson-red">
                        <Briefcase size={12} className="text-brand-white" />
                    </div>
                </div>

                {/* Header */}
                <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold transition-colors text-brand-white font-poppins group-hover:text-brand-crimson-red">
                                {experience.title}
                            </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2 text-brand-light-gray">
                            <Briefcase size={16} className="text-brand-crimson-red" />
                            <span className="font-semibold">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-muted-gray">
                            <Calendar size={16} className="text-brand-crimson-red" />
                            <span>{experience.duration}</span>
                        </div>
                    </div>
                    <div className="px-4 py-2 text-sm font-bold rounded-full text-brand-white bg-brand-crimson-red">
                        {experience.type}
                    </div>
                </div>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-brand-light-gray">
                    {experience.description}
                </p>

                {/* Technologies */}
                {experience.technologies && (
                    <div className="mb-6">
                        <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-brand-white">
                            <Code size={16} className="text-brand-crimson-red" />
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs font-semibold border rounded-full text-brand-crimson-red bg-brand-crimson-red/10 border-brand-crimson-red/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Responsibilities */}
                <div className="mb-6">
                    <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-brand-white">
                        <Target size={16} className="text-brand-crimson-red" />
                        Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                        {experience.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-brand-light-gray">
                                <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-brand-crimson-red" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                    <div className="p-4 border rounded-lg bg-brand-crimson-red/5 border-brand-crimson-red/20">
                        <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-brand-white">
                            <Award size={16} className="text-brand-crimson-red" />
                            Key Achievements
                        </h4>
                        <ul className="space-y-2">
                            {experience.achievements.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-brand-light-gray">
                                    <TrendingUp size={16} className="flex-shrink-0 mt-0.5 text-brand-crimson-red" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300 border-b-2 border-r-2 opacity-0 rounded-br-2xl border-brand-crimson-red group-hover:opacity-100"></div>
            </article>
        </div>
    );
};

const TimeLineSection = () => {
    return (
        <section className="relative px-6 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl text-brand-white font-poppins">
                        Career <span className="text-brand-crimson-red">Timeline</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                        <span className="text-sm font-semibold tracking-wider text-brand-crimson-red">
                            MY PROFESSIONAL JOURNEY
                        </span>
                        <span className="w-12 h-px bg-brand-muted-gray"></span>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative ml-6 space-y-12 md:ml-0">
                    {/* Vertical line for mobile */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-crimson-red via-brand-soft-red to-brand-crimson-red md:hidden"></div>

                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} index={index} />
                    ))}

                    {/* Timeline end indicator */}
                    <div className="relative flex justify-center md:justify-start md:ml-8">
                        <div className="w-6 h-6 border-4 rounded-full shadow-lg bg-brand-crimson-red border-brand-gray"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimeLineSection;