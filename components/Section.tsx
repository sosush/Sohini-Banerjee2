
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  titleAccent?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '', titleAccent='.' }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Animate only once // Removed this line
    threshold: 0.1,    // Trigger when 10% of the section is visible
  });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-12 sm:py-16 md:py-24 ${className} transition-all duration-[1500ms] ease-out 
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      aria-live="polite" 
      aria-busy={!inView}  
    >
      <div className="container mx-auto px-6 md:px-12">
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold text-slate-100 ${titleClassName} inline-block relative pb-2`}>
              {title}
              <span className="text-purple-400">{titleAccent}</span>
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-purple-400 transition-all duration-700 ease-out
                            ${inView ? 'w-2/5 sm:w-1/3' : 'w-0'}`}
                aria-hidden="true"
              ></span>
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;