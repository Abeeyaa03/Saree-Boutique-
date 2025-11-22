import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-peach relative scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="w-full md:w-2/5 bg-charcoal text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl mb-6">Visit Our Boutique</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed mb-8">
                Experience the texture and sheen of our silks in person. Our stylists are waiting to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-rosegold flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium">SareeSoul Boutique</p>
                    <p className="text-xs text-gray-400">12, Heritage Lane, Hauz Khas Village<br/>New Delhi, 110016</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-rosegold flex-shrink-0" size={20} />
                  <p className="text-sm text-gray-300">+91 98765 43210</p>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="text-rosegold flex-shrink-0" size={20} />
                  <p className="text-sm text-gray-300">hello@sareesoul.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-rosegold cursor-pointer transition-colors"></div>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-rosegold cursor-pointer transition-colors"></div>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-rosegold cursor-pointer transition-colors"></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-3/5 p-10">
            <h3 className="font-serif text-2xl text-charcoal mb-2">Get in Touch</h3>
            <p className="text-gray-500 text-sm mb-8">Send us a message about customizations or inquiries.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-rosegold transition-colors bg-transparent"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-rosegold transition-colors bg-transparent"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4} 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-rosegold transition-colors bg-transparent resize-none"
                  placeholder="I am interested in..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-rosegold text-white px-8 py-3 text-sm font-bold tracking-wider hover:bg-rosegold-dark transition-colors w-full md:w-auto flex items-center justify-center gap-2"
              >
                {isSubmitted ? 'SENT SUCCESSFULLY' : 'SEND MESSAGE'}
                {!isSubmitted && <Send size={16} />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};