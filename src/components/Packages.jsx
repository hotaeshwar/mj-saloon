import React, { useState, useEffect, useRef } from 'react';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visiblePackages, setVisiblePackages] = useState([]);
  const [visibleCustomization, setVisibleCustomization] = useState(false);

  const headerRef = useRef(null);
  const packagesRef = useRef([]);
  const customizationRef = useRef(null);

  const packageImages = [
    {
      id: 1,
      image: '/media/packages1.jpeg',
      alt: 'MJ Salon Package 1 - Festival Beauty Services'
    },
    {
      id: 2,
      image: '/media/packages2.jpeg',
      alt: 'MJ Salon Package 2 - Festival Beauty Services'
    },
    {
      id: 3,
      image: '/media/packages3.jpeg',
      alt: 'MJ Salon Package 3 - Festival Beauty Services'
    },
    {
      id: 4,
      image: '/media/packages4.jpeg',
      alt: 'MJ Salon Package 4 - Festival Beauty Services'
    }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;

          // Check header visibility
          if (headerRef.current && !visibleHeader) {
            const rect = headerRef.current.getBoundingClientRect();
            if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
              setVisibleHeader(true);
            }
          }

          // Check package cards visibility
          packagesRef.current.forEach((pkg, index) => {
            if (pkg && !visiblePackages.includes(index)) {
              const rect = pkg.getBoundingClientRect();
              if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
                setVisiblePackages(prev => [...new Set([...prev, index])]);
              }
            }
          });

          // Check customization section visibility
          if (customizationRef.current && !visibleCustomization) {
            const rect = customizationRef.current.getBoundingClientRect();
            if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
              setVisibleCustomization(true);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    setTimeout(() => handleScroll(), 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleHeader, visiblePackages, visibleCustomization]);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'unset';
  };

  const handleBookAppointment = () => {
    if (selectedPackage) {
      closeModal();
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="packages"
      className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: 'url(/media/background.jpg)',
            filter: 'brightness(0.3)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out will-change-transform ${
            visibleHeader
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="font-bold uppercase mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f5f5f5] tracking-tight leading-none">
            PACKAGES FOR{' '}
            <span className="text-[#c4a574]">2026 FESTIVALS</span>
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-12">
          {packageImages.map((pkg, index) => (
            <div
              key={pkg.id}
              ref={(el) => (packagesRef.current[index] = el)}
              className={`group rounded-2xl overflow-hidden shadow-2xl transition-all duration-600 ease-out transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(196,165,116,0.4)] cursor-pointer bg-black/40 border-2 border-[#c4a574] will-change-transform ${
                visiblePackages.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: visiblePackages.includes(index) ? `${index * 80}ms` : '0ms',
              }}
              onClick={() => openModal(pkg)}
            >
              {/* Logo Container */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden p-4">
                <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-black/60 to-black/40 border-2 border-[#c4a574]/40 group-hover:border-[#c4a574]/60 transition-colors duration-300">
                  <img
                    src="/media/logo.png"
                    alt="MJ Salon Logo"
                    className="w-3/4 h-auto object-contain opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 will-change-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Info Card */}
        <div
          ref={customizationRef}
          className={`mt-16 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-700 ease-out bg-black/40 border-2 border-[#c4a574] will-change-transform ${
            visibleCustomization
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">

            {/* Images Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {packageImages.map((pkg) => (
                <div
                  key={`custom-${pkg.id}`}
                  className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-[#c4a574]/40 hover:border-[#c4a574]/60 will-change-transform"
                  onClick={() => openModal(pkg)}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-24 sm:h-28 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="font-bold mb-6 uppercase tracking-wide text-2xl sm:text-3xl lg:text-4xl text-[#c4a574]">
                MJ Salon by Mohit & Jatin
              </p>
              <p className="font-bold mb-4 uppercase text-xl sm:text-2xl lg:text-3xl text-[#f5f5f5]">
                All packages can be customized according to your needs
              </p>
              <p className="mb-6 text-base sm:text-lg text-[#e0e0e0]/70">
                Contact us for personalized packages tailored just for you!
              </p>
              <button
                onClick={handleBookAppointment}
                className="w-full lg:w-auto py-3 px-8 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-transparent border-2 border-[#c4a574] text-[#c4a574] hover:bg-[#c4a574] hover:text-black"
              >
                Book Your Appointment
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Package Image Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl shadow-2xl p-4 bg-gradient-to-br from-black/80 to-black/60 border-2 border-[#c4a574]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 rounded-full p-2 transition-colors duration-300 bg-[#c4a574] text-black hover:bg-[#d4b896]"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Package Image */}
            <div className="w-full rounded-xl overflow-hidden border-2 border-[#c4a574]/40">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.alt}
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Packages;