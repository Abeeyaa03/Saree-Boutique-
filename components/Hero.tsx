import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCollection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1610189012906-44093a083f53?auto=format&fit=crop&q=80&w=2000"
          alt="Saree Model" 
          className="w-full h-full object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-peach/80 via-peach/40 to-transparent md:via-peach/20"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-rosegold text-rosegold text-xs font-bold tracking-[0.2em] mb-6 uppercase bg-white/50 backdrop-blur-sm">
            New Collection 2024
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-charcoal leading-tight mb-6">
            The Essence of <br/>
            <span className="italic text-rosegold">Indian Grace</span>
          </h1>
          <p className="font-sans text-gray-700 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            Discover the timeless elegance of handwoven sarees. 
            Where tradition meets contemporary soul.
          </p>
          <a 
            href="#collections"
            onClick={scrollToCollection}
            className="group inline-flex items-center bg-rosegold text-white px-8 py-4 text-sm font-semibold tracking-widest hover:bg-rosegold-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            EXPLORE COLLECTION
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};