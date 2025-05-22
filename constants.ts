import React from 'react';
// Import EducationalQualification instead of ExperienceEntry for active data
import { Project, Skill, SocialLink, NavItem, EducationalQualification } from './types';
// fix: Corrected icon assignments to use React.createElement
// Add GraduationCapIcon, InstagramIcon and remove TwitterIcon
import { GithubIcon, LinkedinIcon, EmailIcon, InstagramIcon, CodeIcon, DatabaseIcon, CloudIcon, ToolsIcon, LanguageIcon, ServerIcon, GraduationCapIcon } from './components/icons';

export const DEVELOPER_NAME = "Sohini Banerjee";
export const ANIMATED_TITLES: string[] = [
  "Student Full-Stack Developer",
  "Cybersecurity Enthusiast",
  "Problem Solver",
  "AI ML Engineer",
  "API Specialist"
];
export const HERO_SUBTITLE = "     Pushing the boundaries of web development by coding with vision, creativity, and a drive to make an impact.";
export const ABOUT_ME_TEXT = "I am a student engineer passionate about exploring the intersection of full stack development, AI/ML, and cybersecurity. I love building innovative digital solutions—from crafting seamless web applications to developing intelligent systems that learn and adapt. With a strong curiosity for how things work (and how they can break), I am equally fascinated by the world of cybersecurity, always eager to understand and secure the systems I create. Whether it is coding front to back, training machine learning models, or diving into ethical hacking, I am driven by a desire to learn, create, and push boundaries.";
export const CONTACT_EMAIL = "son20apakhi05@gmail.com";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" }, // Changed from Experience
  { label: "Contact", href: "#contact" },
];

export const skillsData: Skill[] = [
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Python", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 95 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Java", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 90 },

  { name: "C", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 80 },

  { name: "C++", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 90 },

  { name: "HTML-CSS", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 98 },

  { name: "Javascript", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 95 },

  { name: "Typescript", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 75 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Swift", category: "Languages", icon: React.createElement(LanguageIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 30 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Node.js", category: "Frameworks & Libraries", icon: React.createElement(ServerIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 80 },
  // fix: Changed JSX to React.createElement for icon definition
  //{ name: "Spring Boot", category: "Frameworks & Libraries", icon: React.createElement(ServerIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 90 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Django", category: "Frameworks & Libraries", icon: React.createElement(ServerIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 50 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "FastAPI", category: "Frameworks & Libraries", icon: React.createElement(ServerIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 80 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "SQL", category: "Databases", icon: React.createElement(DatabaseIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 90 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "MongoDB", category: "Databases", icon: React.createElement(DatabaseIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 55 },
  // fix: Changed JSX to React.createElement for icon definition
  //{ name: "Redis", category: "Databases", icon: React.createElement(DatabaseIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 90 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Docker", category: "Tools & Platforms", icon: React.createElement(ToolsIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 60 },
  // fix: Changed JSX to React.createElement for icon definition
  //{ name: "Kubernetes", category: "Tools & Platforms", icon: React.createElement(ToolsIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 80 },
  // fix: Changed JSX to React.createElement for icon definition
  //{ name: "AWS (EC2, S3, RDS, Lambda)", category: "Tools & Platforms", icon: React.createElement(CloudIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 90 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Git & GitHub", category: "Tools & Platforms", icon: React.createElement(GithubIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 98 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Microservices", category: "Other", icon: React.createElement(CodeIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 90 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "RESTful APIs", category: "Other", icon: React.createElement(CodeIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 85 },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Arduino", category: "Other", icon: React.createElement(CodeIcon, { className: "w-6 h-6 mr-2 text-purple-400" }), proficiency: 75 },
];

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "Portfolio Website",
    description: "The one you are viewing right now.",
    technologies: ["Python", "React", "Typescript", "HTML", "CSS", "API"],
    repoUrl: "https://github.com/2S00B5/Sohini-Banerjee",
    liveUrl: "https://2s00b5.github.io/Sohini-Banerjee/",
  },
  {
    id: "proj2",
    title: "GUI Calculator",
    description: "The simple hassle free one.",
    technologies: ["HTML", "CSS", "Javascipt"],
    repoUrl: "https://github.com/2S00B5/GUI-calculatore",
  },
  {
    id: "proj3",
    title: "Weather App",
    description: "An API integrated platform to give u your weather data.",
    technologies: ["HTML", "CSS", "Javascirpt", "NodeJS", "API"],
    repoUrl: "https://github.com/2S00B5/Weather-app",
  },
   {
    id: "proj4",
    title: "Translator",
    description: "Language translation service utilizing API functionality",
    technologies: ["Python", "FastAPI", "HTML", "CSS", "Javascript"],
    repoUrl: "#",
  },
];

export const educationData: EducationalQualification[] = [
  {
    id: "edu1",
    degree: "Bachelor of Computer Sciennce Engineering",
    institution: "Vellore Institute of Technology",
    period: "2024 - 2028",
    // details: [
    //   "Specialized in Artificial Intelligence and Machine Learning."
    // ],
    gpa: "8.89/10.0"
  },
  {
    id: "edu2",
    degree: "Higher Secondary Education",
    institution: "Delhi Public School",
    period: "2022 - 2024",
    // details: [
    //   "Graduated Summa Cum Laude.",
    //   "Lead Developer for a university-wide student portal project.",
    //   "Member of the ACM Programming Contest team."
    // ],
    percentage: "91.2"
  },
  {
    id: "edu3",
    degree: "Secondary Education",
    institution: "Vivekananda Mission School",
    period: "2009 - 2022",
    // details: [
    //   "National Merit Scholar.",
    //   "President of the Coding Club.",
    // ],
    percentage: "97.5"
  },
];

export const socialLinksData: SocialLink[] = [
  // fix: Changed JSX to React.createElement for icon definition
  { name: "GitHub", url: "https://github.com/2S00B5", icon: React.createElement(GithubIcon, { className: "w-6 h-6" }) },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sohini-banerjee-12882731b/", icon: React.createElement(LinkedinIcon, { className: "w-6 h-6" }) },
  // fix: Changed JSX to React.createElement for icon definition, changed Twitter to Instagram
  { name: "Instagram", url: "https://www.instagram.com/_sosush_/", icon: React.createElement(InstagramIcon, { className: "w-6 h-6" }) },
  // fix: Changed JSX to React.createElement for icon definition
  { name: "Email", url: `mailto:${CONTACT_EMAIL}`, icon: React.createElement(EmailIcon, { className: "w-6 h-6" }) },
];

export const skillCategories: Skill['category'][] = ['Languages', 'Frameworks & Libraries', 'Databases', 'Tools & Platforms', 'Other'];