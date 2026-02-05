import { Mail } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative px-6 pt-32 pb-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-white border rounded-full border-brand-crimson-red/30 bg-brand-crimson-red/10 animate-fade-in-down">
                    <Mail size={16} />
                    Get In Touch
                </div>

                <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-brand-white font-poppins animate-fade-in-up">
                    Let's Work <span className="text-brand-crimson-red">Together</span>
                </h1>

                <div className="relative w-24 mx-auto mb-6 overflow-hidden rounded-full h-1.5 bg-gradient-to-r from-brand-crimson-red to-brand-soft-red animate-fade-in">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                </div>

                <p className="max-w-3xl mx-auto mb-8 text-base leading-relaxed md:text-lg text-brand-light-gray animate-fade-in-up animation-delay-200">
                    Have a project in mind or looking to hire a developer? Let's talk and turn your ideas into reality.
                    I'm always excited to collaborate on new projects.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;