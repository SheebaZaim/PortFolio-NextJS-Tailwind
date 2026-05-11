import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <section className="max-container padding-container py-16 lg:py-24 bg-gradient-to-br from-indigo-50 via-violet-50 to-amber-50">
            <div className="max-w-3xl mx-auto text-center">

                <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 rounded-full px-4 py-1.5 mb-6">
                    <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">About Me</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
                    Educator. Leader. <span className="text-indigo-600">AI Builder.</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Sheeba Zaim is a dedicated educator and tech professional with <strong>7+ years</strong> of academic leadership, including <strong>5 years as Primary Principal</strong> at The Citizen Foundation. She combines deep expertise in ECED and curriculum design with hands-on skills in AI agent development, Next.js, and automation.
                </p>

                <Link
                    href="/About/AboutDetail"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-violet-700 transition-all duration-200 shadow-md shadow-indigo-200"
                >
                    Read Full Story →
                </Link>

            </div>
        </section>
    )
}

export default About
