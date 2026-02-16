import React, { useEffect, useRef, useState } from 'react';

export default function Services() {
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;

          // Header visibility
          if (headerRef.current && !visibleHeader) {
            const rect = headerRef.current.getBoundingClientRect();
            if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
              setVisibleHeader(true);
            }
          }

          // Service cards visibility
          serviceRefs.current.forEach((service, index) => {
            if (service && !visibleServices.includes(index)) {
              const rect = service.getBoundingClientRect();
              if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                setVisibleServices(prev => [...new Set([...prev, index])]);
              }
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check immediately on mount
    setTimeout(() => handleScroll(), 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleHeader, visibleServices]);

  const services = [
    {
      id: 1,
      title: "HAIR TREATMENT",
      image: "/media/hairtreatment.jpg",
    },
    {
      id: 2,
      title: "MAKEUP",
      image: "/media/makeup.jpg",
    },
    {
      id: 3,
      title: "NAIL EXTENSION",
      image: "/media/nailextension.jpg",
    },
    {
      id: 4,
      title: "PEDICURE",
      image: "/media/pedicure.jpg",
    },
    {
      id: 5,
      title: "FACIAL",
      image: "/media/facial.jpg",
    }
  ];

  return (
    <section className="relative overflow-hidden">
      
      {/* Hero Header with Chair Background */}
      <div 
        ref={headerRef}
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#1a1a1a]"
      >
        {/* Background Image - chair.jpg */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: 'url(/media/chair.jpg)',
              filter: 'brightness(0.4)',
            }}
          />
        </div>

        {/* Header Content */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-700 ease-out will-change-transform ${
          visibleHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="font-bold uppercase mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f5f5f5] tracking-[0.2em] leading-none">
            SERVICES
          </h1>
          
          {/* Decorative line with diamond */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="w-12 sm:w-16 h-px bg-[#c4a574]" />
            <div className="w-2 h-2 bg-[#c4a574] rotate-45" />
            <div className="w-12 sm:w-16 h-px bg-[#c4a574]" />
          </div>
        </div>
      </div>

      {/* Services Grid with Background.jpg */}
      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a0a]">
        {/* Background Image - background.jpg */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: 'url(/media/background.jpg)',
              filter: 'brightness(0.3)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                className={`transition-all duration-700 ease-out will-change-transform hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  visibleServices.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{
                  transitionDelay: visibleServices.includes(index) ? `${index * 80}ms` : '0ms',
                }}
              >
                {/* Image with L-shaped Corner Brackets */}
                <div className="relative mb-6 sm:mb-8 group">
                  
                  {/* Main Image with Glow */}
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg group-hover:shadow-[0_0_30px_rgba(196,165,116,0.6)] transition-shadow duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
                      loading="lazy"
                    />
                    
                    {/* Overlay glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-radial from-[#c4a574]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Top-Left L-shaped Corner - Glows on hover */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 pointer-events-none transition-all duration-300 group-hover:scale-110">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-[#c4a574] group-hover:shadow-[0_0_8px_rgba(196,165,116,0.8)] transition-shadow duration-300" />
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-[#c4a574] group-hover:shadow-[0_0_8px_rgba(196,165,116,0.8)] transition-shadow duration-300" />
                  </div>

                  {/* Bottom-Right L-shaped Corner - Glows on hover */}
                  <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 pointer-events-none transition-all duration-300 group-hover:scale-110">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c4a574] group-hover:shadow-[0_0_8px_rgba(196,165,116,0.8)] transition-shadow duration-300" />
                    <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#c4a574] group-hover:shadow-[0_0_8px_rgba(196,165,116,0.8)] transition-shadow duration-300" />
                  </div>

                </div>

                {/* Title - Glows on hover */}
                <h3 className="font-bold uppercase text-center text-sm sm:text-base lg:text-lg text-[#f5f5f5] tracking-[0.15em] group-hover:text-[#c4a574] group-hover:drop-shadow-[0_0_8px_rgba(196,165,116,0.8)] transition-all duration-300">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}