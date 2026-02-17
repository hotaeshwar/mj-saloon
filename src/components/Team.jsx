import React from 'react';

const Team = () => {
  return (
    <section
      id="team"
      className="w-full pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 relative overflow-hidden"
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
            opacity: '0.4',
          }}
        />
        
        {/* Dark overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

          {/* Content Section - Left on Desktop */}
          <div className="w-full lg:w-1/2 animate-fade-in-left">
            <h2
              className="font-bold uppercase leading-tight mb-4 lg:mb-6"
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: '#f5f5f5',
                letterSpacing: '0.02em',
              }}
            >
              MEET OUR <span style={{ color: '#c4a574' }}>TEAM</span>
            </h2>

            <div className="space-y-4" style={{ color: '#e0e0e0' }}>
              <p
                className="leading-relaxed animate-fade-in-up"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                  lineHeight: '1.8',
                  animationDelay: '100ms',
                }}
              >
                At <strong style={{ color: '#c4a574' }}>MJ Salon</strong>, our expert team is led by founders <strong style={{ color: '#c4a574' }}>Mohit and Jatin</strong>. We specialize in precision haircuts, advanced coloring, keratin treatments, bridal makeup, and nail art extensions.
              </p>

              <p
                className="leading-relaxed animate-fade-in-up"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                  lineHeight: '1.8',
                  animationDelay: '200ms',
                }}
              >
                With years of experience, we deliver personalized beauty services tailored to your unique style. Whether it's a wedding, special event, or everyday grooming, trust our skilled professionals to bring out your best.
              </p>
            </div>
          </div>

          {/* Image Section - Right on Desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <img
                src="/media/team.jpeg"
                alt="MJ Salon Team - Professional Hair and Beauty Experts in Kalka JI, Delhi"
                className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 shadow-2xl"
                loading="lazy"
              />
              
              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-4 border-r-4 border-[#c4a574] rounded-tr-2xl pointer-events-none opacity-60" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-4 border-l-4 border-[#c4a574] rounded-bl-2xl pointer-events-none opacity-60" />
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
          animation: fade-in-left 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.7s ease-out 0.2s forwards;
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

export default Team;