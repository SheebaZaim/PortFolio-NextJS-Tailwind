import React from 'react';
import Link from 'next/link';
import { SKILLS } from '@/constant';

const Skills = () => {
    return (
        <section className="max-container padding-container py-16 px-6 md:py-24 flex flex-col items-center bg-white">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-1.5 mb-4">
                <span className="text-indigo-600 text-sm font-semibold uppercase tracking-widest">Skills & Expertise</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">What I Bring to the Table</h2>
            <p className="text-gray-500 text-center max-w-lg mb-14">A unique blend of educational leadership and modern AI-driven technology skills. Click any skill to explore more.</p>

            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
                {SKILLS.map((skill) => (
                    <Link key={skill.slug} href={`/Skills/${skill.slug}`}>
                        <li className="relative flex w-full flex-col items-center text-center bg-white shadow-md rounded-3xl p-8 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-violet-600 group transition-all duration-300 border border-gray-100 hover:border-transparent hover:shadow-xl cursor-pointer h-full">
                            <div className="text-4xl mb-4">{skill.emoji}</div>
                            <h3 className="font-bold text-lg lg:text-xl capitalize group-hover:text-white text-gray-800">{skill.title}</h3>
                            <p className="text-gray-500 mt-3 text-sm leading-relaxed group-hover:text-indigo-100">{skill.description}</p>
                            <span className="mt-5 text-xs font-semibold text-indigo-500 group-hover:text-white uppercase tracking-widest">View Details →</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
