import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section
      id="location"
      className="w-full pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 relative overflow-hidden"
      style={{
        backgroundColor: '#1a1a1a',
      }}
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/media/background.jpg)',
            filter: 'brightness(0.35)',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Opening Hours - Compact Version */}
          <div className="animate-fade-in-left">
            <div 
              className="relative p-6 sm:p-8 md:p-10 rounded-none overflow-hidden"
              style={{
                border: '2px solid #c4a574',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)',
              }}
            >
              {/* Double Border Frame */}
              <div 
                className="absolute inset-1.5"
                style={{
                  border: '1px solid #c4a574',
                  pointerEvents: 'none',
                }}
              />

              {/* "We're Open" Title */}
              <div className="text-center mb-8 relative z-10">
                <h3 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest mb-5"
                  style={{
                    color: '#ffffff',
                    letterSpacing: '0.3em',
                    fontFamily: 'Impact, "Arial Black", sans-serif',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                  }}
                >
                  WE'RE OPEN
                </h3>
                
                {/* Decorative Line with Diamonds */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 rotate-45 bg-[#c4a574]"></div>
                  <div className="h-px w-48 bg-[#c4a574]"></div>
                  <div className="w-2 h-2 rotate-45 bg-[#c4a574]"></div>
                </div>
              </div>

              {/* Opening Hours - Compact Spacing */}
              <div className="space-y-6 relative z-10">
                
                {/* Tuesday - Saturday */}
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <p 
                    className="text-sm sm:text-base mb-2"
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      letterSpacing: '0.05em',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    Tue - Sat
                  </p>
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{
                      color: '#c4a574',
                      letterSpacing: '0.15em',
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    }}
                  >
                    9:30AM - 10PM
                  </div>
                  <div className="h-px w-full bg-[#c4a574]/30 mt-4"></div>
                </div>

                {/* Sunday */}
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <p 
                    className="text-sm sm:text-base mb-2"
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      letterSpacing: '0.05em',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    Sunday
                  </p>
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{
                      color: '#c4a574',
                      letterSpacing: '0.15em',
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    }}
                  >
                    9:30AM - 10PM
                  </div>
                  <div className="h-px w-full bg-[#c4a574]/30 mt-4"></div>
                </div>

                {/* Monday */}
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <p 
                    className="text-sm sm:text-base mb-2"
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      letterSpacing: '0.05em',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    Monday
                  </p>
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{
                      color: '#c4a574',
                      letterSpacing: '0.15em',
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    }}
                  >
                    9AM - 10PM
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Locations - Matching Border Style */}
          <div className="animate-fade-in-right">
            
            <div 
              className="relative p-6 sm:p-8 md:p-10 rounded-none overflow-hidden"
              style={{
                border: '2px solid #c4a574',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)',
              }}
            >
              {/* Double Border Frame */}
              <div 
                className="absolute inset-1.5"
                style={{
                  border: '1px solid #c4a574',
                  pointerEvents: 'none',
                }}
              />

              {/* Header */}
              <div className="text-center mb-6 relative z-10">
                <h2
                  className="font-bold uppercase leading-tight text-2xl sm:text-3xl md:text-4xl"
                  style={{
                    fontFamily: "'Playfair Display', 'Georgia', serif",
                    color: '#f5f5f5',
                    letterSpacing: '0.02em',
                  }}
                >
                  OUR <span style={{ color: '#c4a574' }}>LOCATIONS</span>
                </h2>
              </div>

              {/* Locations Stack */}
              <div className="space-y-6 relative z-10">

            {/* Alaknanda Location */}
            <div 
              className="p-4 sm:p-5 rounded-lg animate-fade-in-up"
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(196,165,116,0.2)',
                animationDelay: '100ms',
              }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#c4a574]/10 border border-[#c4a574]/30 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c4a574]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg sm:text-xl font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', 'Georgia', serif",
                      color: '#f5f5f5',
                    }}
                  >
                    Alaknanda Studio
                  </h3>
                  <address 
                    className="not-italic text-xs sm:text-sm leading-relaxed mb-3"
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: '#e0e0e0',
                      lineHeight: '1.6',
                    }}
                  >
                    L1,119, Opp. Ganga Apartment, Alaknanda, South Delhi - 110019
                  </address>
                  <a
                    href="https://maps.app.goo.gl/DuB7xciytDhM97Mn7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      color: '#c4a574',
                      border: '1px solid #c4a574',
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c4a574';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#c4a574';
                    }}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Kalkaji Location */}
            <div 
              className="p-4 sm:p-5 rounded-lg animate-fade-in-up"
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(196,165,116,0.2)',
                animationDelay: '200ms',
              }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#c4a574]/10 border border-[#c4a574]/30 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c4a574]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg sm:text-xl font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', 'Georgia', serif",
                      color: '#f5f5f5',
                    }}
                  >
                    Kalkaji Studio
                  </h3>
                  <address 
                    className="not-italic text-xs sm:text-sm leading-relaxed mb-3"
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: '#e0e0e0',
                      lineHeight: '1.6',
                    }}
                  >
                    Upper Ground, M5, L-Block Rd, Gurudwara, Rampuri, Kalkaji, New Delhi - 110019
                  </address>
                  <a
                    href="https://maps.app.goo.gl/KDy2xhjyrTQbYVAB6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      color: '#c4a574',
                      border: '1px solid #c4a574',
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c4a574';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#c4a574';
                    }}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Abohar Location */}
            <div 
              className="p-4 sm:p-5 rounded-lg animate-fade-in-up"
              style={{
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(196,165,116,0.2)',
                animationDelay: '300ms',
              }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#c4a574]/10 border border-[#c4a574]/30 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c4a574]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg sm:text-xl font-bold mb-1"
                    style={{
                      fontFamily: "'Playfair Display', 'Georgia', serif",
                      color: '#f5f5f5',
                    }}
                  >
                    Abohar Academy
                  </h3>
                  <address 
                    className="not-italic text-xs sm:text-sm leading-relaxed mb-3"
                    style={{
                      fontFamily: "'Georgia', serif",
                      color: '#e0e0e0',
                      lineHeight: '1.6',
                    }}
                  >
                    St no 13, Circular Rd, Opp. Octave Exceed, Main Bazar, Abohar, Punjab - 152116
                  </address>
                  <a
                    href="https://maps.app.goo.gl/F6EcUXxrnbBEZc269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      color: '#c4a574',
                      border: '1px solid #c4a574',
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c4a574';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#c4a574';
                    }}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Directions
                  </a>
                </div>
              </div>
            </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.7s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.7s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Location;