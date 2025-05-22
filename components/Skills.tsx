
import React from 'react';
import Section from './Section';
import { Skill } from '../types';
import { skillCategories } from '../constants';
import { IconProps } from './icons'; // fix: Import IconProps for strong typing
import { useInView } from 'react-intersection-observer';


interface SkillsProps {
  skills: Skill[];
}

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true, // Animate proficiency bar once
    threshold: 0.4,    // Trigger when 40% of the card is visible
  });

  return (
    <div 
      ref={cardRef}
      className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 
                  transition-all duration-300 ease-out flex flex-col justify-between
                  transform hover:scale-[1.03] hover:-translate-y-1.5">
      <div>
        <div className="flex items-center mb-3">
          {skill.icon && React.isValidElement(skill.icon) && (
            <span className="mr-3 text-purple-400 skill-card-icon-wrapper">
              {React.cloneElement(skill.icon as React.ReactElement<IconProps>, { className: 'w-7 h-7' })}
            </span>
          )}
          <h4 className="text-lg sm:text-xl font-semibold text-slate-100">{skill.name}</h4>
        </div>
        {skill.proficiency && (
          <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2 overflow-hidden">
            <div
              className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" // Custom cubic-bezier for smooth, slightly elastic fill
              style={{ width: cardInView ? `${skill.proficiency}%` : `0%` }}
              role="progressbar"
              aria-valuenow={cardInView ? skill.proficiency : 0}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency`}
            ></div>
          </div>
        )}
      </div>
      <p className="text-xs text-slate-400 mt-auto pt-2 text-right">{skill.category}</p>
    </div>
  );
};


const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section id="skills" title="My Skillset" >
      {skillCategories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-6 text-center md:text-left relative inline-block pb-2 skills-category-title">
            {category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Skills;