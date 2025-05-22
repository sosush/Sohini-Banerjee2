
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { ref, inView: cardInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-purple-500/40 
                 transition-all duration-300 ease-out flex flex-col 
                 transform hover:scale-[1.03] hover:-translate-y-1.5"
    >
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={tech} 
                className={`bg-slate-700 text-purple-300 text-xs px-2 py-1 rounded-full
                            transition-all duration-300 ease-out
                            ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                style={{ transitionDelay: cardInView ? `${index * 75}ms` : '0ms' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-start space-x-4 pt-4 border-t border-slate-700">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300 flex items-center project-link"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-5 h-5 mr-2 project-link-icon-svg" />
              GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300 flex items-center project-link"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2 project-link-icon-svg" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;