import React from 'react';
import { CATEGORIES } from '../constants';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1610189012906-44093a083f53?auto=format&fit=crop&q=80&w=600';

export const CategorySection: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = PLACEHOLDER_IMAGE;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Curated Categories</h2>
          <div className="w-16 h-1 bg-rosegold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-full aspect-[3/4] mb-4 shadow-md">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={cat.image || PLACEHOLDER_IMAGE} 
                  alt={cat.name} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-center font-serif text-xl text-charcoal group-hover:text-rosegold transition-colors">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};