
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { EducationalQualification } from '../types';
import { GraduationCapIcon } from './icons';

interface EducationItemProps {
  qualification: EducationalQualification;
  isLast: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ qualification, isLast }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Animate only once // Removed this line
    threshold: 0.2,    // Trigger when 20% of the item is visible
    delay: 100,        // Small delay to ensure parent section animation has started
  });

  return (
    <div ref={ref} className="relative pl-10 sm:pl-12 pb-10">
      {/* Timeline line */}
      {!isLast && (
        <div 
          className={`absolute left-[18px] sm:left-[22px] top-2 bottom-0 w-0.5 bg-slate-700 
                      origin-top transform transition-transform duration-700 ease-out
                      ${inView ? 'scale-y-100' : 'scale-y-0'}`}
          aria-hidden="true"
        ></div>
      )}
      
      {/* Timeline dot - styled to appear slightly on top of the line */}
      <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-slate-800 rounded-full border-2 border-purple-500 z-10">
        <GraduationCapIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
      </div>

      {/* Content - slight opacity transition for smoother appearance */}
      <div className={`ml-4 transition-opacity duration-500 ease-in ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-1">{qualification.degree}</h3>
        <p className="text-base sm:text-md text-purple-400 mb-1">{qualification.institution}</p>
        <p className="text-xs sm:text-sm text-slate-500 mb-2">{qualification.period}</p>
        {qualification.gpa && (
          <p className="text-xs sm:text-sm text-slate-400 mb-3">GPA: {qualification.gpa}</p>
        )}
         {qualification.percentage && (
          <p className="text-xs sm:text-sm text-slate-400 mb-3">Percentage: {qualification.percentage}%</p>
        )}
        {qualification.details && qualification.details.length > 0 && (
          <ul className="list-disc list-inside text-slate-400 space-y-1 text-xs sm:text-sm mt-2">
            {qualification.details.map((detail, index) => (
              <li 
                key={index}
                className={`transition-all duration-300 ease-out
                            ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}
                style={{ transitionDelay: inView ? `${150 + index * 100}ms` : '0ms' }} // Staggered delay after main content
              >
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
