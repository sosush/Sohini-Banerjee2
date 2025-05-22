
import React from 'react';
import Section from './Section';
import { SocialLink } from '../types';
import { IconProps } from './icons'; // fix: Import IconProps for strong typing

interface ContactProps {
  email: string;
  socialLinks: SocialLink[];
}

const Contact: React.FC<ContactProps> = ({ email, socialLinks }) => {
  return (
    <Section id="contact" title="Get In Touch" >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-base sm:text-lg text-slate-300 mb-8">
          I love welcoming new connections and collaborations. If you wish to contact me please feel free to leave me a mail and I will get back to you shortly!
        </p>
        
        <a
          href={`mailto:${email}`}
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105 mb-10"
        >
          Send me an Email
        </a>

        <div className="flex justify-center space-x-4 sm:space-x-6">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110 contact-social-icon" // Added contact-social-icon for CSS targeting
            >
              {link.icon && React.isValidElement(link.icon) 
                ? React.cloneElement(link.icon as React.ReactElement<IconProps>, { className: 'w-7 h-7 sm:w-8 sm:h-8' })
                : null}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;