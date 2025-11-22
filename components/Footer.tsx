import React from 'react';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-2xl mb-6">SareeSoul Boutique</h2>
        <div className="flex justify-center space-x-6 mb-8 text-sm text-gray-400">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-rosegold transition-colors">Home</a>
          <a href="#collections" onClick={(e) => handleNavClick(e, '#collections')} className="hover:text-rosegold transition-colors">Collections</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-rosegold transition-colors">About</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-rosegold transition-colors">Privacy Policy</a>
        </div>
        <p className="text-xs text-gray-500">© 2024 SareeSoul Boutique. All rights reserved.</p>
      </div>
    </footer>
  );
};