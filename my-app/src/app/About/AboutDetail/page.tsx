"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const TABS = ["Summary", "Experience", "Education", "Certifications"] as const
type Tab = typeof TABS[number]

const AboutDetail = () => {
    const [active, setActive] = useState<Tab>("Summary")

    return (
        <div className="min-h-screen bg-[#EFF6FF]">

            {/* Banner */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white text-sm mb-8 transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">About Sheeba Zaim</h1>
                    <p className="text-indigo-100 text-base">Educator · Academic Leader · AI Agentic Expert · ECED Specialist</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-3xl mx-auto px-6 flex gap-1 overflow-x-auto">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                                active === tab
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-800'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-12">

                {/* SUMMARY */}
                {active === "Summary" && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8">
                            <h2 className="text-xl font-extrabold text-gray-800 mb-4">Professional Summary</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Dedicated and results-driven educator with <strong>7+ years</strong> of senior academic leadership, including <strong>5 years as Primary Principal</strong> at The Citizen Foundation — overseeing 365+ students and 22+ teachers. Skilled in primary curriculum design, teacher mentoring, ECED, and student welfare, with a strong commitment to inclusive and high-quality education.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 text-center">
                                <h3 className="text-3xl font-extrabold text-indigo-600">7+</h3>
                                <p className="text-gray-500 text-sm mt-1">Years Leadership</p>
                            </div>
                            <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 text-center">
                                <h3 className="text-3xl font-extrabold text-teal-600">365+</h3>
                                <p className="text-gray-500 text-sm mt-1">Students Managed</p>
                            </div>
                            <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 text-center">
                                <h3 className="text-3xl font-extrabold text-amber-500">22+</h3>
                                <p className="text-gray-500 text-sm mt-1">Teachers Mentored</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* EXPERIENCE */}
                {active === "Experience" && (
                    <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 space-y-8">
                        <h2 className="text-xl font-extrabold text-gray-800">Professional Experience</h2>
                        {[
                            {
                                role: "Primary Principal",
                                org: "The Citizen Foundation",
                                period: "2018 – 2023",
                                color: "border-indigo-400",
                                badge: "bg-indigo-50 text-indigo-600",
                                points: [
                                    "Managed 365+ students across multiple grades",
                                    "Led and mentored 22+ teachers via CPD and observations",
                                    "Designed curriculum aligned with national standards",
                                    "Oversaw ECED programmes and student pastoral care",
                                    "Organised parent-teacher meetings and community events",
                                    "Managed school timetabling and day-to-day operations",
                                ],
                            },
                            {
                                role: "Vice Principal",
                                org: "Green Peace School",
                                period: "2017",
                                color: "border-violet-400",
                                badge: "bg-violet-50 text-violet-600",
                                points: [
                                    "Supervised teacher performance and lesson planning quality",
                                    "Assisted in primary section coordination and timetabling",
                                    "Facilitated parent-teacher meetings and progress evaluations",
                                ],
                            },
                            {
                                role: "Science Teacher",
                                org: "Nasra Public School",
                                period: "2016 – 2017",
                                color: "border-teal-400",
                                badge: "bg-teal-50 text-teal-600",
                                points: [
                                    "Delivered Chemistry, Biology, and Physics with lab components",
                                    "Designed structured lesson plans and conducted assessments",
                                ],
                            },
                            {
                                role: "Freelance AI & Full Stack Developer",
                                org: "Self-Employed",
                                period: "2023 – Present",
                                color: "border-amber-400",
                                badge: "bg-amber-50 text-amber-600",
                                points: [
                                    "Builds AI chatbots and agentic workflows using Anthropic Claude",
                                    "Develops Next.js apps, Streamlit tools, and n8n automations",
                                    "Integrates APIs and delivers full-stack educational tech solutions",
                                ],
                            },
                        ].map((exp) => (
                            <div key={exp.role} className={`border-l-4 ${exp.color} pl-5`}>
                                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                    <div>
                                        <p className="font-bold text-gray-800">{exp.role}</p>
                                        <p className="text-sm font-medium text-gray-500">{exp.org}</p>
                                    </div>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${exp.badge}`}>{exp.period}</span>
                                </div>
                                <ul className="space-y-1 mt-2">
                                    {exp.points.map((p, i) => (
                                        <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                                            <span className="text-gray-300 mt-0.5">•</span>{p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* EDUCATION */}
                {active === "Education" && (
                    <div className="space-y-5">
                        <h2 className="text-2xl font-extrabold text-gray-800">Education</h2>
                        {[
                            {
                                degree: "Postgraduate Diploma in Education",
                                institute: "In Progress",
                                year: "",
                                accent: "from-indigo-500 to-violet-500",
                                badge: "bg-indigo-50 text-indigo-600",
                            },
                            {
                                degree: "MSc Inorganic Chemistry",
                                institute: "University of Karachi",
                                year: "2010",
                                accent: "from-violet-500 to-purple-600",
                                badge: "bg-violet-50 text-violet-600",
                            },
                            {
                                degree: "BSc (Hons) Chemistry",
                                institute: "University of Karachi",
                                year: "2009",
                                accent: "from-teal-500 to-cyan-500",
                                badge: "bg-teal-50 text-teal-600",
                            },
                        ].map((edu) => (
                            <div key={edu.degree} className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.accent} flex items-center justify-center shrink-0 text-2xl shadow-md`}>🎓</div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800 text-base">{edu.degree}</p>
                                    <p className="text-sm text-gray-500 mt-1">{edu.institute}</p>
                                </div>
                                {edu.year && (
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${edu.badge}`}>{edu.year}</span>
                                )}
                                {!edu.year && (
                                    <span className="text-xs font-bold px-3 py-1 rounded-full shrink-0 bg-amber-50 text-amber-600">In Progress</span>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* CERTIFICATIONS */}
                {active === "Certifications" && (
                    <div className="space-y-5">
                        <h2 className="text-2xl font-extrabold text-gray-800">Certifications</h2>
                        {[
                            { title: "Early Childhood Education Diploma", issuer: "Udemy", year: "2026", emoji: "🌱", accent: "from-teal-400 to-emerald-500", badge: "bg-teal-50 text-teal-700" },
                            { title: "AI Certification", issuer: "Udemy", year: "In Progress", emoji: "🤖", accent: "from-indigo-500 to-blue-500", badge: "bg-amber-50 text-amber-600" },
                            { title: "Master Teacher Course with AI", issuer: "Professional Development", year: "2023", emoji: "👩‍🏫", accent: "from-violet-500 to-purple-600", badge: "bg-violet-50 text-violet-700" },
                            { title: "UK CPD — Curriculum Designing", issuer: "UK CPD Certification Service", year: "2020–2023", emoji: "📚", accent: "from-amber-400 to-orange-500", badge: "bg-amber-50 text-amber-700" },
                            { title: "ECED Training", issuer: "Professional Development", year: "2023", emoji: "🌿", accent: "from-teal-400 to-cyan-500", badge: "bg-teal-50 text-teal-700" },
                            { title: "Principal's Academy Leadership Training", issuer: "Leadership Programme", year: "2019 & 2021", emoji: "🏫", accent: "from-indigo-500 to-violet-500", badge: "bg-indigo-50 text-indigo-700" },
                        ].map((cert) => (
                            <div key={cert.title} className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.accent} flex items-center justify-center shrink-0 text-2xl shadow-md`}>{cert.emoji}</div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-800 text-base">{cert.title}</p>
                                    <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${cert.badge}`}>{cert.year}</span>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default AboutDetail
