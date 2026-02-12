"use client";

import { GraduationCap, Award, MapPin, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description?: string;
    certifications?: {
        name: string;
        issuer: string;
        year: string;
        credentialUrl?: string;
    }[];
}

const educationData: EducationItem[] = [
    {
        degree: 'B.Sc. in Computer Science',
        institution: 'University of Colombo',
        location: 'Colombo, Sri Lanka',
        period: '2018 - 2022',
        description: 'Graduated with First Class Honors. Specialized in Software Engineering and Web Technologies.',
        certifications: [
            {
                name: 'AWS Certified Solutions Architect',
                issuer: 'Amazon Web Services',
                year: '2023',
                credentialUrl: '#',
            },
            {
                name: 'Scrum Master Certification',
                issuer: 'Scrum Alliance',
                year: '2023',
                credentialUrl: '#',
            },
        ],
    },
    {
        degree: 'Diploma in Software Engineering',
        institution: 'SLIIT',
        location: 'Malabe, Sri Lanka',
        period: '2016 - 2018',
        description: 'Comprehensive program covering fundamentals of software development and programming.',
        certifications: [
            {
                name: 'Microsoft Certified: Azure Developer Associate',
                issuer: 'Microsoft',
                year: '2022',
                credentialUrl: '#',
            },
        ],
    },
];

const EducationSection: React.FC = () => {

    const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');

    const degreesCount = educationData.length;
    const certsCount = educationData.reduce((acc, edu) => acc + (edu.certifications?.length || 0), 0);

    const latestYear = Math.max(
        ...educationData
            .flatMap(edu => edu.certifications?.map(cert => parseInt(cert.year)) || [])
            .filter(Boolean)
    );

    const StatsCounter: React.FC<{ end: number; label: string; icon: React.ReactNode }> = ({ end, label, icon }) => {
        const { count, ref } = useCounterAnimation({ end, duration: 2000 });

        return (
            <div ref={ref} className="p-6 text-center transition-all border rounded-xl bg-brand-gray/50 border-brand-muted-gray/20 hover:border-brand-crimson-red/40 hover:shadow-lg">
                <div className="flex items-center justify-center mb-3 text-brand-crimson-red">
                    {icon}
                </div>
                <div className="mb-2 text-3xl font-bold text-brand-white">{count}</div>
                <div className="text-sm text-brand-muted-gray">{label}</div>
            </div>
        );
    };

    return (
        <section className="relative py-20 overflow-hidden bg-brand-gray" id="education">
            <div className="bg-blob-top-right" style={{ top: 0, left: 0 }} />
            <div className="bg-blob-bottom-left" style={{ bottom: 0, right: 0 }} />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <header className="mb-16 text-center">
                    <h2 className="section-title">
                        Education & <span className="text-brand-crimson-red">Certifications</span>
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                        <span className="section-subtitle">ACADEMIC BACKGROUND</span>
                        <span className="w-12 h-px bg-brand-muted-gray" aria-hidden="true" />
                    </div>
                    <p className="max-w-2xl mx-auto mt-4 text-brand-light-gray">
                        My academic journey and professional certifications that validate my expertise
                    </p>
                </header>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 border rounded-full bg-brand-gray/80 border-brand-muted-gray/20">
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'education'
                                ? 'bg-brand-crimson-red text-brand-white shadow-lg'
                                : 'text-brand-muted-gray hover:text-brand-light-gray'
                                }`}
                        >
                            <GraduationCap className="inline-block mr-2" size={20} />
                            Education
                        </button>
                        <button
                            onClick={() => setActiveTab('certifications')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'certifications'
                                ? 'bg-brand-crimson-red text-brand-white shadow-lg'
                                : 'text-brand-muted-gray hover:text-brand-light-gray'
                                }`}
                        >
                            <Award className="inline-block mr-2" size={20} />
                            Certifications
                        </button>
                    </div>
                </div>

                {/* Education Tab Content */}
                {activeTab === 'education' && (
                    <div className="space-y-8 animate-fadeIn">
                        {educationData.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative p-8 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-1"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {/* Decorative element */}
                                <div className="absolute top-0 left-0 w-2 h-full rounded-l-2xl bg-gradient-to-b from-brand-crimson-red to-brand-soft-red"></div>

                                <div className="flex flex-col gap-6 ml-4 md:flex-row md:items-start md:gap-8">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 text-white transition-colors rounded-xl bg-brand-crimson-red/10 group-hover:bg-brand-crimson-red/20">
                                            <GraduationCap size={32} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="mb-2 text-2xl font-bold transition-colors text-brand-white group-hover:text-brand-crimson-red">
                                            {item.degree}
                                        </h3>

                                        <div className="flex flex-wrap gap-4 mb-3 text-sm">
                                            <div className="flex items-center gap-2 text-brand-light-gray">
                                                <GraduationCap size={16} className="text-brand-crimson-red" />
                                                <span className="font-medium">{item.institution}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-brand-muted-gray">
                                                <MapPin size={16} className="text-brand-crimson-red" />
                                                <span>{item.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-brand-muted-gray">
                                                <Calendar size={16} className="text-brand-crimson-red" />
                                                <span>{item.period}</span>
                                            </div>
                                        </div>

                                        {item.description && (
                                            <p className="mb-4 leading-relaxed text-brand-light-gray">
                                                {item.description}
                                            </p>
                                        )}

                                        {/* Quick certifications preview */}
                                        {item.certifications && item.certifications.length > 0 && (
                                            <div className="p-4 mt-4 border rounded-lg bg-brand-crimson-red/5 border-brand-crimson-red/20">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Award size={16} className="text-brand-crimson-red" />
                                                    <span className="text-sm font-semibold text-brand-light-gray">
                                                        Related Certifications ({item.certifications.length})
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.certifications.map((cert, cIdx) => (
                                                        <span
                                                            key={cIdx}
                                                            className="px-3 py-1 text-xs font-medium border rounded-full text-brand-crimson-red bg-brand-crimson-red/10 border-brand-crimson-red/20"
                                                        >
                                                            {cert.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 border-t-2 border-r-2 opacity-0 rounded-tr-2xl border-brand-crimson-red group-hover:opacity-100"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Certifications Tab Content */}
                {activeTab === 'certifications' && (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
                        {educationData.flatMap(edu => edu.certifications || []).map((cert, idx) => (
                            <div
                                key={idx}
                                className="relative p-6 transition-all duration-300 border group rounded-2xl bg-brand-gray/80 border-brand-muted-gray/20 hover:border-brand-crimson-red/60 hover:shadow-xl hover:shadow-brand-crimson-red/10 hover:-translate-y-2"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                {/* Badge Icon */}
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white transition-colors rounded-xl bg-brand-crimson-red/10 group-hover:bg-brand-crimson-red/20">
                                    <Award size={32} />
                                </div>

                                {/* Certification Name */}
                                <h4 className="mb-2 text-lg font-bold text-center transition-colors text-brand-white group-hover:text-brand-crimson-red">
                                    {cert.name}
                                </h4>

                                {/* Issuer */}
                                <p className="mb-1 text-sm text-center text-brand-light-gray">
                                    {cert.issuer}
                                </p>

                                {/* Year */}
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Calendar size={14} className="text-brand-crimson-red" />
                                    <span className="text-sm text-brand-muted-gray">{cert.year}</span>
                                </div>

                                {/* Credential Link */}
                                {cert.credentialUrl && (
                                    <Link
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold transition-colors rounded-lg text-brand-white bg-brand-crimson-red hover:bg-brand-soft-red"
                                    >
                                        <CheckCircle size={16} />
                                        View Credential
                                        <ExternalLink size={14} />
                                    </Link>
                                )}

                                {/* Decorative corner accent */}
                                <div className="absolute bottom-0 right-0 w-12 h-12 transition-opacity duration-300 border-b-2 border-r-2 opacity-0 rounded-br-2xl border-brand-crimson-red group-hover:opacity-100"></div>
                            </div>
                        ))}
                    </div>
                )}



                {/* Summary Stats */}
                <div className="grid grid-cols-2 gap-4 mt-16 md:grid-cols-4">
                    <StatsCounter
                        end={degreesCount}
                        label="Degrees"
                        icon={<GraduationCap size={32} />}
                    />
                    <StatsCounter
                        end={certsCount}
                        label="Certifications"
                        icon={<Award size={32} />}
                    />
                    <StatsCounter
                        end={100}
                        label="Verified"
                        icon={<CheckCircle size={32} />}
                    />
                    <StatsCounter
                        end={latestYear}
                        label="Latest Year"
                        icon={<Calendar size={32} />}
                    />
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }
            `}</style>
        </section >
    );
};

export default EducationSection;