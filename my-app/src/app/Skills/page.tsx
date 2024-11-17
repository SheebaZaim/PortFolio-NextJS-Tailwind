

import React from 'react';
import { SKILLS } from '@/constant'; 
import{SkillItemProps} from '@/constant';

const SkillItem = ({ title, description }: SkillItemProps) => {
    return (
        <li className="relative flex w-full flex-1 flex-col items-center text-center bg-[#CCFFFF] shadow-[0_3px_10px_rgba(0,0,0,0.3)] rounded-2xl p-10 hover:bg-blue-500 group transition duration-300">
            <div>
                <h3 className="font-bold text-lg lg:text-xl mt-6 capitalize group-hover:text-white">{title}</h3>
                <p className="text-gray-700 mt-4 group-hover:text-white">{description}</p>
            </div>
        </li>
    );
};

const Skills = () => {
    return (
        <section className="max-container padding-containner gap-20 py-10 px-8 md:gap-28 lg:py-20 flex flex-col items-center ">
            {/* Title */}
            <div className="text-center font-bold text-xl uppercase tracking-[1rem] text-blue-600 pb-10">
                SKILLS
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-12">
                {SKILLS.map((skill, index) => (
                    <SkillItem key={index} title={skill.title} description={skill.description} />
                ))}
            </ul>
        </section>
    );
};

export default Skills;
