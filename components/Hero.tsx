
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { HERO_SUBTITLE } from '../constants';
import { ChevronDownIcon } from './icons';

interface HeroProps {
  name: string;
  animatedTitles: string[];
}

const TYPING_SPEED = 100; // Milliseconds
const DELETING_SPEED = 50; // Milliseconds
const PAUSE_DURATION = 1500; // Milliseconds after typing a word
const NEW_WORD_DELAY = 500; // Milliseconds before typing a new word

const Hero: React.FC<HeroProps> = ({ name, animatedTitles }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const { ref: heroContentRef, inView: heroContentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% is visible
  });

  useEffect(() => {
    if (!animatedTitles || animatedTitles.length === 0) return;

    const handleTypingAnimation = () => {
      const currentTitle = animatedTitles[textIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentTitle.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % animatedTitles.length);
        }
      } else {
        if (charIndex < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      }
    };

    let speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    if (!isDeleting && charIndex === 0 && displayedText === '') { 
      speed = NEW_WORD_DELAY;
    }
    
    const timeoutId = setTimeout(handleTypingAnimation, speed);
    return () => clearTimeout(timeoutId);

  }, [animatedTitles, charIndex, displayedText, isDeleting, textIndex]);


  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-800/20 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0))]"></div>
      <div ref={heroContentRef} className="relative z-10">
        <h1 
          className={`text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 reveal-fade-in-up ${heroContentInView ? 'is-in-view' : ''}`}
          style={{ transitionDuration: '600ms' }}
        >
          <span className="block leading-tight">Hi, I'm <span className="text-purple-400">{name}</span>.</span>
        </h1>
        <p 
          className={`text-xl sm:text-2xl md:text-3xl text-slate-300 mb-6 min-h-[2.5rem] sm:min-h-[2.75rem] md:min-h-[3rem] flex justify-center items-center reveal-fade-in-up ${heroContentInView ? 'is-in-view' : ''}`}
          style={{ transitionDuration: '600ms', transitionDelay: heroContentInView ? '150ms' : '0ms' }}
          role="status" 
          aria-live="polite"
        >
          <span className="inline-block">{displayedText}</span>
          <span className="typing-cursor ml-1" aria-hidden="true"></span>
        </p>
        <p 
          className={`text-md sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 reveal-fade-in-up ${heroContentInView ? 'is-in-view' : ''}`}
          style={{ transitionDuration: '600ms', transitionDelay: heroContentInView ? '300ms' : '0ms' }}
        >
          {HERO_SUBTITLE}
        </p>
        <div 
          className={`flex flex-col sm:flex-row sm:justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 reveal-fade-in-up ${heroContentInView ? 'is-in-view' : ''}`}
          style={{ transitionDuration: '600ms', transitionDelay: heroContentInView ? '450ms' : '0ms' }}
        >
          <a
            href="#projects"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-10 text-purple-400 hover:text-purple-300 transition-colors animate-gentle-bob"
        aria-label="Scroll to about section"
      >
        <ChevronDownIcon className="w-10 h-10" />
        <span className="sr-only">Scroll down</span>
      </a>
    </section>
  );
};

export default Hero;