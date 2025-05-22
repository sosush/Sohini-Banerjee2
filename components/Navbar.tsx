
import React, { useState, useEffect } from 'react';
import { navItems, DEVELOPER_NAME } from '../constants';
import { NavItem } from '../types';
import { MenuIcon, CloseIcon } from './icons';

const getInitialActiveSection = (): string => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '');
    if (hash && navItems.some(item => item.href.substring(1) === hash)) {
      return hash;
    }
  }
  return 'hero'; // Default
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(getInitialActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkBaseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative";
  const activeNavLinkClasses = "text-purple-400";
  const inactiveNavLinkClasses = `
    text-slate-300 hover:text-white 
    after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
    after:h-[2px] after:w-0 after:bg-purple-400 
    after:transition-all after:duration-300 hover:after:w-full
  `;

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.href.substring(1))).filter(Boolean);
    if (sections.length === 0) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6, // Section is active when 60% is visible
    });

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []); // navItems is constant, so run once on mount.


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 
                    ${isScrolled || isOpen ? 'bg-purple-950 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0 text-white text-lg sm:text-xl font-bold">
              {DEVELOPER_NAME.split(' ')[0]}<span className="text-purple-400">.</span>{DEVELOPER_NAME.split(' ')[1]}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item: NavItem) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => { // Smooth scroll for internal links
                    setIsOpen(false);
                    // Update hash for correct highlighting on click if observer is slow
                    window.location.hash = item.href;
                    // setActiveSection(item.href.substring(1)); // Optionally set active immediately
                    document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`${navLinkBaseClasses} ${activeSection === item.href.substring(1) ? activeNavLinkClasses : inactiveNavLinkClasses}`}
                  aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen} 
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-950" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item: NavItem, index: number) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  toggleMenu();
                  // Update hash for correct highlighting on click
                  window.location.hash = item.href;
                  // setActiveSection(item.href.substring(1)); // Optionally set active immediately
                  document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`${navLinkBaseClasses} mobile-nav-item ${isOpen ? 'mobile-nav-item-active' : ''} block text-center ${activeSection === item.href.substring(1) ? activeNavLinkClasses : inactiveNavLinkClasses.replace('hover:after:w-full', 'sm:hover:after:w-auto')}`}
                style={{ transitionDelay: isOpen ? `${index * 75}ms` : '0ms' }}
                aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
