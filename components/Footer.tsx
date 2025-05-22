import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-purple-800/50 py-8 text-center"> {/* Removed "bg-purple-950" */}
      <p className="text-slate-400 text-sm">
        &copy; {currentYear} {name}. All rights reserved.
      </p>
      
    </footer>
  );
};

export default Footer;