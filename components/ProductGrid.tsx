import React, { useState } from 'react';
import { SAREES } from '../constants';
import { Eye, Heart } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(SAREES.map(s => s.category)))];

  const filteredSarees = filter === 'All' 
    ? SAREES 
    : SAREES.filter(s => s.category === filter);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Only set placeholder if the current src is different to avoid infinite loop
    const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1610189012906-44093a083f53?auto=format&fit=crop&q=80&w=800';
    if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
        e.currentTarget.src = PLACEHOLDER_IMAGE;
    }
  };

  return (
    <section id="collections" className="py-24 bg-peach scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Exquisite Collection</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Handpicked masterpieces for the modern woman who cherishes her roots.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm tracking-wider border transition-all duration-300 ${
                filter === cat 
                ? 'border-rosegold bg-rosegold text-white' 
                : 'border-charcoal/20 text-charcoal hover:border-rosegold hover:text-rosegold'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {filteredSarees.map((saree) => (
            <div key={saree.id} className="group bg-white p-3 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                {saree.isNew && (
                  <span className="absolute top-3 left-3 bg-charcoal text-white text-[10px] font-bold px-2 py-1 z-20">
                    NEW ARRIVAL
                  </span>
                )}
                <img 
                  src={saree.image} 
                  alt={saree.name} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                   <button className="bg-white text-charcoal p-3 rounded-full hover:bg-rosegold hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                     <Eye size={20} />
                   </button>
                   <button className="bg-white text-charcoal p-3 rounded-full hover:bg-rosegold hover:text-white transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                     <Heart size={20} />
                   </button>
                </div>
              </div>
              
              <div className="text-center pb-2">
                <p className="text-xs text-rosegold uppercase tracking-wider font-bold mb-1">{saree.category}</p>
                <h3 className="font-serif text-lg text-charcoal mb-2 truncate">{saree.name}</h3>
                <p className="font-medium text-gray-900">₹{saree.price.toLocaleString('en-IN')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};