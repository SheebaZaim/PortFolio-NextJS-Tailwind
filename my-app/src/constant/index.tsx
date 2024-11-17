import React from 'react';
import Image from 'next/link';
// Navigation
export const NAV_LINKS=[
    {href:'/',key:'home',label:'HOME'},
    {href:'/About',key:'about',label:'ABOUT'},
{href:'/Skills',key:'skills',label:'SKILLS'},
{href:'/Contact', key:'contact',label:'CONTACT US'},
];

// SKILL SECTION
// constants.ts

export type SkillItemProps = {
    title: string;
    description: string;
};

// Skills data array
export const SKILLS: SkillItemProps[] = [
    {
        title: "Full Stack Developer",
        description: "Experienced in building and managing web applications using modern technologies.",
    },
    {
        title: "Teacher",
        description: "Skilled in teaching and guiding students with a focus on understanding and engagement.",
    },
    {
        title: "Curriculum Designer",
        description: "Proficient in designing curriculum materials to enhance learning outcomes.",
    },
    {
        title: "Academic Leader as a Principal",
        description: "Experienced in leadership, managing operations, and fostering an educational environment.",
    },
];


export const SOCIAL = [
    { href: "https://github.com/yourprofile", key: "GitHub", Image: "/images/github.png" },
    { href: "https://linkedin.com/in/yourprofile", key: "LinkedIn",Image : "/images/linkedin-icon.png" },
    
  ];