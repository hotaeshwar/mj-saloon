import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [visibleSection, setVisibleSection] = useState(false);
  const [visibleImage, setVisibleImage] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);

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

      // Check image visibility
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setTimeout(() => setVisibleImage(true), 300);
        }
      }

      // Check content visibility with delay
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setTimeout(() => setVisibleContent(true), 600);
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
      id="about"
      className={`w-full py-16 md:py-20 lg:py-24 relative overflow-hidden transition-all duration-1000 ease-out ${
        visibleSection ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundColor: '#1a1a1a',
      }}
    >
      {/* Background Image - Dark brick wall effect */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/media/background.jpg)',
            opacity: '0.4',
          }}
        />
        
        {/* Dark overlay - almost black like the reference */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Image Section */}
          <div
            ref={imageRef}
            className={`w-full lg:w-1/2 flex justify-center lg:justify-start transition-all duration-1000 ease-out ${
              visibleImage
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-32 scale-95'
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="/media/aboutus.png"
                alt="MJ Salon by Mohit & Jatin - Premier Unisex Salon in Delhi and Abohar"
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                style={{
                  borderRadius: '1rem',
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            ref={contentRef}
            className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
              visibleContent
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-32 scale-95'
            }`}
          >
            <h2
              className={`font-bold uppercase leading-tight mb-6 lg:mb-8 transition-all duration-700 ${
                visibleContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                transitionDelay: '200ms',
              }}
            >
              ABOUT OUR <span style={{ color: '#c4a574' }}>SALON</span>
            </h2>

            <div className="space-y-5" style={{ color: '#e0e0e0' }}>
              <p
                className={`leading-relaxed transition-all duration-700 ${
                  visibleContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                  lineHeight: '1.8',
                  transitionDelay: '400ms',
                }}
              >
                <strong style={{ color: '#c4a574' }}>MJ Salon by Mohit & Jatin</strong> is a premier unisex salon with locations in{' '}
                <strong style={{ color: '#c4a574' }}>Alaknanda (South Delhi)</strong>, <strong style={{ color: '#c4a574' }}>Kalkaji (New Delhi)</strong>, and{' '}
                <strong style={{ color: '#c4a574' }}>Abohar (Punjab)</strong>, offering top-notch beauty, hair, nails, and makeup services.
              </p>

              <p
                className={`leading-relaxed transition-all duration-700 ${
                  visibleContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                  lineHeight: '1.8',
                  transitionDelay: '600ms',
                }}
              >
                Known for its professional and skilled team, the salon specializes in{' '}
                <strong style={{ color: '#c4a574' }}>bridal makeup, hairstyling, keratin treatments, hair coloring</strong>, and{' '}
                <strong style={{ color: '#c4a574' }}>nail extensions</strong>. With a commitment to delivering exceptional customer experiences, the salon combines high-quality products with personalized care.
              </p>

              <p
                className={`leading-relaxed transition-all duration-700 ${
                  visibleContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                  lineHeight: '1.8',
                  transitionDelay: '800ms',
                }}
              >
                <strong style={{ color: '#c4a574' }}>MJ Salon</strong> also provides{' '}
                <strong style={{ color: '#c4a574' }}>home salon services</strong>, ensuring convenience for busy clients. Whether it's a wedding, party, or regular grooming, MJ Salon is your go-to destination for all beauty and styling needs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;