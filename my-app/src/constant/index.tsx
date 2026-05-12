import React from 'react';

// Navigation
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'HOME' },
    { href: '/About/AboutDetail', key: 'about', label: 'ABOUT' },
    { href: '/Skills', key: 'skills', label: 'SKILLS' },
    { href: '/Projects', key: 'projects', label: 'PROJECTS' },
    { href: '/Contact', key: 'contact', label: 'CONTACT' },
];

// SKILLS SECTION
export type SkillItemProps = {
    title: string;
    slug: string;
    description: string;
    emoji: string;
    points: string[];
    tools: string[];
};

export const SKILLS: SkillItemProps[] = [
    {
        title: "Full Stack Developer",
        slug: "fullstack",
        emoji: "💻",
        description: "Builds modern web apps using Next.js, TypeScript, HTML/CSS, Python, and Streamlit with clean, scalable code.",
        points: [
            "Next.js & React — component-based UI development",
            "TypeScript & HTML/CSS — typed, structured front-end code",
            "Python & Streamlit — rapid AI-powered web apps",
            "Sanity CMS — headless content management",
            "Git & GitHub — version control and collaboration",
            "Responsive design with Tailwind CSS",
        ],
        tools: ["Next.js", "React", "TypeScript", "Python", "Streamlit", "Tailwind CSS", "Sanity CMS", "Git"],
    },
    {
        title: "AI & Automation",
        slug: "ai-automation",
        emoji: "🤖",
        description: "Develops autonomous AI agents, chatbots, and n8n automation workflows integrated with Anthropic Claude.",
        points: [
            "Agentic AI development using Anthropic Claude API",
            "Multi-step autonomous agents with tool use & memory",
            "n8n automation workflows connecting APIs and platforms",
            "RAG (Retrieval-Augmented Generation) pipelines",
            "AI chatbot design for education and business use cases",
            "API integrations — Google Workspace, Slack, webhooks",
        ],
        tools: ["Anthropic Claude", "n8n", "Python", "Streamlit", "REST APIs", "RAG", "LLMs"],
    },
    {
        title: "Academic Leader",
        slug: "academic-leader",
        emoji: "🏫",
        description: "5+ years as Primary Principal managing 365+ students and 22+ teachers with structured academic planning.",
        points: [
            "Full primary section management across multiple grades",
            "Structured academic planning and timetabling",
            "Staff observation, CPD, and performance reviews",
            "Student welfare, pastoral care, and discipline",
            "Parent communication and community engagement",
            "Day-to-day operations and resource allocation",
        ],
        tools: ["Leadership", "School Management", "Timetabling", "Staff Evaluation", "Reporting"],
    },
    {
        title: "Curriculum Designer",
        slug: "curriculum",
        emoji: "📚",
        description: "Designs primary curriculum aligned with national standards, ECED programmes, and UK CPD frameworks.",
        points: [
            "Primary curriculum design aligned with national standards",
            "ECED programme development for foundational learning",
            "Lesson planning frameworks and structured units",
            "UK CPD-certified curriculum designing (2020–2023)",
            "Assessment design and learning outcome mapping",
            "Integrating modern and AI-assisted teaching resources",
        ],
        tools: ["Curriculum Mapping", "Lesson Planning", "ECED Frameworks", "Assessment Design", "UK CPD"],
    },
    {
        title: "Teacher Trainer",
        slug: "teacher-trainer",
        emoji: "👩‍🏫",
        description: "Skilled in CPD facilitation, classroom observation, lesson planning guidance, and teacher mentoring.",
        points: [
            "Conducting structured CPD sessions and workshops",
            "Classroom observation with constructive feedback",
            "Mentoring newly qualified and developing teachers",
            "Lesson plan review and quality assurance",
            "Master Teacher Course with AI (2023)",
            "Promoting innovative and reflective teaching practices",
        ],
        tools: ["CPD Facilitation", "Mentoring", "Observation", "Coaching", "Feedback"],
    },
    {
        title: "ECED Specialist",
        slug: "eced",
        emoji: "🌱",
        description: "Certified Early Childhood Education specialist supporting foundational learning for early primary students.",
        points: [
            "Early Childhood Education Diploma — Udemy (2026)",
            "Designing play-based and experiential learning activities",
            "Supporting social-emotional development in young learners",
            "Coordinating ECED programmes within school settings",
            "Parent and family engagement in early learning",
            "Creating inclusive, nurturing classroom environments",
        ],
        tools: ["ECED Frameworks", "Play-Based Learning", "Child Development", "Inclusive Education"],
    },
];

// PROJECTS SECTION
export type ProjectItemProps = {
    title: string;
    description: string;
    vercelLink: string;
    videoUrl: string;
    tags: string[];
};

export const PROJECTS: ProjectItemProps[] = [
    {
        title: "AI Ebook Writer",
        description: "An AI-powered ebook writing assistant built with Anthropic Claude that generates structured, well-researched ebook content — from outline to full chapters — using agentic workflows and tool use.",
        vercelLink: "#",
        videoUrl: "https://www.youtube.com/embed/Hnme6SGYe8I",
        tags: ["Anthropic Claude", "AI Agents", "Python", "Content Generation"],
    },
    {
        title: "Payroll Automation System",
        description: "An agentic automation system that handles end-to-end payroll processing — connecting APIs, calculating salaries, generating reports, and sending automated notifications.",
        vercelLink: "#",
        videoUrl: "https://www.youtube.com/embed/6j4IZSlmIDw",
        tags: ["n8n", "Automation", "API Integration", "Claude AI"],
    },
    {
        title: "Todo App for All",
        description: "A full-stack productivity app built with modern web technologies — featuring task management, priority setting, and real-time updates for educators and teams.",
        vercelLink: "#",
        videoUrl: "https://www.youtube.com/embed/GMsnSXEXntc",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Full Stack"],
    },
];

// SOCIAL LINKS
export const SOCIAL = [
    { href: "https://github.com/SheebaZaim", key: "GitHub", Image: "/Images/github.png" },
    { href: "https://linkedin.com/in/sheebazaim", key: "LinkedIn", Image: "/Images/linkedin-icon.png" },
];
