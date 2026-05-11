"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { PROJECTS } from '@/constant'

const CERTIFICATES = [
    {
        title: "Early Childhood Education Diploma",
        file: "/Images/earlychildhood diploma.pdf",
        emoji: "🌱",
        issuer: "Udemy (2026)",
    },
    {
        title: "Curriculum Design & Development",
        file: "/Images/front side of curriculum design and development course.pdf",
        emoji: "📚",
        issuer: "UK CPD Certification Service",
    },
    {
        title: "Master Teacher Course with AI",
        file: "/Images/master teacher course with AI.pdf",
        emoji: "🤖",
        issuer: "Professional Development (2023)",
    },
]

const ProjectCard = ({ title, description, vercelLink, videoUrl, tags }: {
    title: string
    description: string
    vercelLink: string
    videoUrl: string
    tags: string[]
}) => {
    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            {/* Video */}
            <div className="relative bg-gradient-to-br from-indigo-50 to-violet-100 h-52 flex items-center justify-center overflow-hidden">
                {videoUrl ? (
                    <video
                        src={videoUrl}
                        controls
                        className="w-full h-full object-cover"
                        preload="metadata"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-3 text-indigo-400">
                        <span className="text-5xl">🎬</span>
                        <p className="text-sm font-medium text-indigo-500">Video coming soon</p>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-100">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Live Demo Button */}
                <div className="mt-6">
                    <Link
                        href={vercelLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            vercelLink === '#'
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                    >
                        🚀 Live Demo
                    </Link>
                </div>
            </div>
        </div>
    )
}

const CertCard = ({ title, file, emoji, issuer }: { title: string; file: string; emoji: string; issuer: string }) => (
    <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 flex items-center gap-4 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group"
    >
        <div className="text-4xl w-14 h-14 flex items-center justify-center bg-indigo-50 rounded-2xl group-hover:bg-indigo-100 transition-colors shrink-0">
            {emoji}
        </div>
        <div>
            <h4 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{title}</h4>
            <p className="text-sm text-gray-400 mt-0.5">{issuer}</p>
            <span className="text-xs text-indigo-500 font-semibold mt-1 inline-block">View Certificate →</span>
        </div>
    </a>
)

const Projects = () => {
    return (
        <section className="max-container padding-container py-16 px-6 lg:py-24 bg-white">

            {/* Projects */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-4">
                <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">Projects</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">What I've Built</h2>
            <p className="text-gray-500 mb-14 max-w-xl">AI agents, automation systems, and full-stack apps — all live demos coming soon.</p>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            {/* Certificates */}
            <div className="mt-24">
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">Certifications</span>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">My Certificates</h2>
                <p className="text-gray-500 mb-10 max-w-xl">Click any certificate to view the full document.</p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {CERTIFICATES.map((cert, index) => (
                        <CertCard key={index} {...cert} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Projects
