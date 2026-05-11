import React from 'react'
import Link from 'next/link'
import { SKILLS } from '@/constant'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
    return SKILLS.map((skill) => ({ slug: skill.slug }))
}

export default function SkillPage({ params }: { params: { slug: string } }) {
    const skill = SKILLS.find((s) => s.slug === params.slug)
    if (!skill) notFound()

    const others = SKILLS.filter((s) => s.slug !== params.slug)

    return (
        <div className="min-h-screen bg-[#EFF6FF]">

            {/* Hero banner */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/Skills" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white text-sm mb-8 transition-colors">
                        ← Back to Skills
                    </Link>
                    <div className="text-6xl mb-4">{skill.emoji}</div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">{skill.title}</h1>
                    <p className="text-indigo-100 text-lg max-w-xl leading-relaxed">{skill.description}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6 py-14">

                {/* Key capabilities */}
                <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 mb-8">
                    <h2 className="text-xl font-extrabold text-gray-800 mb-6">Key Capabilities</h2>
                    <ul className="space-y-3">
                        {skill.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                <span className="mt-1 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-bold">{i + 1}</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tools & Technologies */}
                <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 mb-12">
                    <h2 className="text-xl font-extrabold text-gray-800 mb-6">Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-3">
                        {skill.tools.map((tool) => (
                            <span key={tool} className="bg-indigo-50 text-indigo-600 border border-indigo-100 text-sm font-semibold px-4 py-2 rounded-full">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Other skills */}
                <h2 className="text-xl font-extrabold text-gray-800 mb-6">Explore Other Skills</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {others.map((s) => (
                        <Link key={s.slug} href={`/Skills/${s.slug}`}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 hover:shadow-md hover:border-indigo-200 transition-all duration-200 group"
                        >
                            <span className="text-3xl">{s.emoji}</span>
                            <div>
                                <p className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{s.title}</p>
                                <p className="text-xs text-gray-400 mt-0.5">View details →</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
