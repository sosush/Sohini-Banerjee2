import React from 'react';

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Databases' | 'Tools & Platforms' | 'Other';
  icon?: React.ReactNode; // Optional: For a visual representation
  proficiency?: number; // Optional: 0-100 for a progress bar or similar
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface EducationalQualification {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string[];
  gpa?: string;
  percentage?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}