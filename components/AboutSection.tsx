import React from 'react';

const WEAVING_IMAGE = 'https://images.unsplash.com/photo-1596238622153-61b4020a568c?auto=format&fit=crop&q=80&w=1000';
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1610189012906-44093a083f53?auto=format&fit=crop&q=80&w=800';

export const AboutSection: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
      e.currentTarget.src = PLACEHOLDER_IMAGE;
    }
  };

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
            <div className="relative p-4 border-2 border-peach bg-gray-50">
              <img 
                src={WEAVING_IMAGE} 
                alt="Our Artisan Weaving" 
                onError={handleImageError}
                className="w-full h-auto shadow-lg object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-peach w-24 h-24 -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 bg-peach w-24 h-24 -z-10 hidden md:block"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-rosegold font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              Weaving Heritage <br/> Into Every Thread.
            </h2>
            <p className="text-gray-600 leading-loose mb-6 font-light">
              Founded in 1985, SareeSoul began as a humble loom in Varanasi. Today, we are a sanctuary for authentic handlooms. We believe a saree is not just a garment; it's a canvas of culture, six yards of sheer grace passed down through generations.
            </p>
            <p className="text-gray-600 leading-loose mb-8 font-light">
              We collaborate directly with artisans from Kanchipuram to Bengal, ensuring fair trade and preserving the dying art of hand-weaving. Every piece in our boutique tells a story—your story.
            </p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
              alt="Signature" 
              className="h-12 opacity-60 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};