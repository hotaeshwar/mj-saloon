import React, { useState, useEffect, useRef } from 'react';

const OurWork = () => {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleCarousel, setVisibleCarousel] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  const workImages = [
    { id: 1, image: '/media/ourwork.png', alt: 'MJ Salon Work 1' },
    { id: 2, image: '/media/ourwork1.png', alt: 'MJ Salon Work 2' },
    { id: 3, image: '/media/ourwork2.png', alt: 'MJ Salon Work 3' },
    { id: 4, image: '/media/ourwork3.png', alt: 'MJ Salon Work 4' },
    { id: 5, image: '/media/ourwork.png', alt: 'MJ Salon Work 5' },
    { id: 6, image: '/media/ourwork1.png', alt: 'MJ Salon Work 6' },
    { id: 7, image: '/media/ourwork2.png', alt: 'MJ Salon Work 7' },
    { id: 8, image: '/media/ourwork3.png', alt: 'MJ Salon Work 8' },
  ];

  // Scroll-based animation effect
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setVisibleHeader(true);
        }
      }

      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setVisibleCarousel(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [workImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="our-work"
      className="relative w-full overflow-hidden bg-[#1a1a1a]"
      style={{ paddingTop: '100px', paddingBottom: '48px' }}
    >
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/media/background.jpg)',
            filter: 'brightness(0.3)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ease-out ${
            visibleHeader
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="font-bold uppercase mb-2 text-3xl sm:text-4xl md:text-5xl text-[#f5f5f5] tracking-tight leading-none">
            OUR <span className="text-[#c4a574]">WORK</span>
          </h2>
          <p className="text-sm sm:text-base text-[#e0e0e0]/70">
            Showcasing our expertise and creativity
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className={`relative transition-all duration-1000 ease-out ${
            visibleCarousel
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          {/* Carousel Track */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {workImages.map((work) => (
                <div
                  key={work.id}
                  className="min-w-full px-3 sm:px-4"
                >
                  <div className="relative mx-auto max-w-sm">
                    <div className="relative group">
                      {/* Image Container */}
                      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                        <img
                          src={work.image}
                          alt={work.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* L-shaped Corner Brackets - Top Left */}
                      <div className="absolute -top-2 -left-2 w-10 h-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-[#c4a574]" />
                        <div className="absolute top-0 left-0 w-px h-full bg-[#c4a574]" />
                      </div>

                      {/* L-shaped Corner Brackets - Bottom Right */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 pointer-events-none">
                        <div className="absolute bottom-0 left-0 w-full h-px bg-[#c4a574]" />
                        <div className="absolute bottom-0 right-0 w-px h-full bg-[#c4a574]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-1.5 mt-4">
            {workImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-5 h-1.5 bg-[#c4a574]'
                    : 'w-1.5 h-1.5 bg-[#c4a574]/30 hover:bg-[#c4a574]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;