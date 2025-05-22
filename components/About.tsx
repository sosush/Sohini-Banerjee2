
import React from 'react';
import Section from './Section';

interface AboutProps {
  aboutText: string;
  cvUrl: string;
}

const About: React.FC<AboutProps> = ({ aboutText, cvUrl }) => {
  return (
    <Section id="about" title="About Me" > {/* Removed className="bg-purple-950" */}
      <div className="max-w-3xl mx-auto text-center">
        {/* Developer profile image removed */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 mt-8"> {/* Added mt-8 for spacing after image removal */}
          {aboutText}
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 inline-block"
        >
          Download CV
        </a>
      </div>
    </Section>
  );
};

export default About;
