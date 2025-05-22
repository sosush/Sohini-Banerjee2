
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education'; // Changed from Experience
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import ScrollToTopButton
// Changed experiencesData to educationData
import { skillsData, projectsData, socialLinksData, DEVELOPER_NAME, ANIMATED_TITLES, ABOUT_ME_TEXT, CONTACT_EMAIL, educationData } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero name={DEVELOPER_NAME} animatedTitles={ANIMATED_TITLES} />
        <About aboutText={ABOUT_ME_TEXT} cvUrl="#download-cv" />
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
        {/* Changed from Experience to Education */}
        <Education qualifications={educationData} /> 
        <Contact email={CONTACT_EMAIL} socialLinks={socialLinksData} />
      </main>
      <Footer name={DEVELOPER_NAME}/>
      <ScrollToTopButton /> {/* Add ScrollToTopButton here */}
    </div>
  );
};

export default App;
