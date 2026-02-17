import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Play } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const videosRef = useRef(null);
  const [visibleSection, setVisibleSection] = useState(false);
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleVideos, setVisibleVideos] = useState(false);

  // Instagram video posts - using local logo as placeholder
  const instagramPosts = [
    {
      id: 'DUYEjGVkvll',
      url: 'https://www.instagram.com/p/DUYEjGVkvll/',
    },
    {
      id: 'DUsXiankpEy',
      url: 'https://www.instagram.com/p/DUsXiankpEy/',
    },
    {
      id: 'DSc4H-okkbq',
      url: 'https://www.instagram.com/p/DSc4H-okkbq/',
    },
    {
      id: 'DUNy1Xzkreh',
      url: 'https://www.instagram.com/p/DUNy1Xzkreh/',
    },
    {
      id: 'DTkFtHhktrt',
      url: 'https://www.instagram.com/p/DTkFtHhktrt/',
    },
    {
      id: 'DThWa95DaYd',
      url: 'https://www.instagram.com/p/DThWa95DaYd/',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check section visibility
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setVisibleSection(true);
        }
      }

      // Check header visibility
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setTimeout(() => setVisibleHeader(true), 300);
        }
      }

      // Check videos visibility
      if (videosRef.current) {
        const rect = videosRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setTimeout(() => setVisibleVideos(true), 600);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`w-full py-12 md:py-16 lg:py-20 relative overflow-hidden transition-all duration-1000 ease-out ${
        visibleSection ? 'opacity-100' : 'opacity-0'
      }`}
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
        
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ease-out ${
            visibleHeader
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h2
            className="font-bold uppercase leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#f5f5f5',
              letterSpacing: '0.02em',
            }}
          >
            CLIENT <span style={{ color: '#c4a574' }}>TESTIMONIALS</span>
          </h2>
          
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
              color: '#e0e0e0',
              lineHeight: '1.8',
            }}
          >
            See what our valued clients have to say about their experience at{' '}
            <strong style={{ color: '#c4a574' }}>MJ Salon</strong>
          </p>
        </div>

        {/* Instagram Videos Grid */}
        <div
          ref={videosRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 ease-out ${
            visibleVideos
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-all duration-700 ease-out ${
                visibleVideos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Square Box Container */}
              <div
                className="relative w-full overflow-hidden group cursor-pointer"
                style={{
                  paddingBottom: '100%', // 1:1 aspect ratio for square
                  border: '2px solid #c4a574',
                  borderRadius: '0.5rem',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                {/* Double Border Frame */}
                <div
                  className="absolute inset-1.5 pointer-events-none z-30"
                  style={{
                    border: '1px solid #c4a574',
                  }}
                />

                {/* Logo Background */}
                <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center">
                  <img
                    src="/media/logo.png"
                    alt="MJ Salon - View on Instagram"
                    className="w-1/2 h-auto opacity-30"
                    loading="lazy"
                  />
                </div>

                {/* Hover Overlay with Play Button */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-[#c4a574] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </div>
                    <div className="flex items-center gap-2 text-white">
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm font-medium">View on Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <div
          className={`text-center mt-8 md:mt-12 transition-all duration-1000 ease-out ${
            visibleVideos
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '900ms',
          }}
        >
          <a
            href="https://www.instagram.com/salon_by_mj_southdelhi/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 group"
            style={{
              background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              color: '#ffffff',
              fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
              fontFamily: "'Georgia', serif",
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 15px rgba(196, 165, 116, 0.3)',
            }}
          >
            <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>FOLLOW US FOR MORE</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;