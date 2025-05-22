
import React from 'react';
import Section from './Section';
import { Skill } from '../types';
import { skillCategories } from '../constants';
// fix: Import IconProps for strong typing with React.cloneElement
import { IconProps } from './icons';


interface SkillsProps {
  skills: Skill[];
}

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 
                  transition-all duration-300 ease-out flex flex-col justify-between
                  transform hover:scale-[1.03] hover:-translate-y-1.5">
      <div>
        <div className="flex items-center mb-3">
          {/* fix: Added React.isValidElement check and typed React.cloneElement */}
          {skill.icon && React.isValidElement(skill.icon) && (
            <span className="mr-3 text-purple-400">
              {React.cloneElement(skill.icon as React.ReactElement<IconProps>, { className: 'w-7 h-7' })}
            </span>
          )}
          <h4 className="text-xl font-semibold text-slate-100">{skill.name}</h4>
        </div>
        {skill.proficiency && (
          <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
            <div
              className="bg-purple-500 h-2.5 rounded-full"
              style={{ width: `${skill.proficiency}%` }}
              role="progressbar"
              aria-valuenow={skill.proficiency}
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
    <Section id="skills" title="My Skillset" className="bg-purple-950">
      {skillCategories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-200 mb-6 text-center md:text-left relative inline-block pb-2">
            {category}
             <span className="absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-500 ease-out w-full "
                aria-hidden="true" 
             ></span>
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