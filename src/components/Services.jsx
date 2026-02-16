import React, { useEffect, useRef, useState } from 'react';

export default function Services() {
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    // ── Header Observer ──
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleHeader(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);

    // ── Cards Observer ──
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleServices((prev) => [...new Set([...prev, index])]);
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    serviceRefs.current.forEach((el) => { if (el) cardObserver.observe(el); });

    return () => {
      headerObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  const services = [
    { id: 1, title: 'HAIR TREATMENT', image: '/media/hairtreatment.jpg' },
    { id: 2, title: 'MAKEUP',         image: '/media/makeup.jpg'        },
    { id: 3, title: 'NAIL EXTENSION', image: '/media/nailextension.jpg' },
    { id: 4, title: 'PEDICURE',       image: '/media/pedicure.jpg'      },
    { id: 5, title: 'FACIAL',         image: '/media/facial.jpg'        },
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── Hero Header ── */}
      <div
        ref={headerRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#1a1a1a',
          /* ✅ FIX: paddingTop pushes content below fixed navbar (~70px) + breathing room */
          paddingTop: '110px',
          paddingBottom: '56px',
        }}
      >
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/media/chair.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }} />
        </div>

        {/* Header Content — inline styles only, zero Tailwind class toggling */}
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 1.5rem',
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            opacity: visibleHeader ? 1 : 0,
            transform: visibleHeader ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            willChange: 'opacity, transform',
          }}
        >
          <h1 style={{
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#f5f5f5',
            letterSpacing: '0.2em',
            lineHeight: 1,
          }}>
            SERVICES
          </h1>

          {/* Decorative line + diamond */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#c4a574' }} />
            <div style={{ width: '8px', height: '8px', backgroundColor: '#c4a574', transform: 'rotate(45deg)' }} />
            <div style={{ width: '60px', height: '1px', backgroundColor: '#c4a574' }} />
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
        padding: '4rem 1.5rem',
      }}>
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(/media/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }} />
        </div>

        <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
          }}>
            {services.map((service, index) => {
              const isVisible = visibleServices.includes(index);
              return (
                <div
                  key={service.id}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  data-index={index}
                  className="group"
                  style={{
                    cursor: 'pointer',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.96)',
                    transition: 'opacity 0.45s ease-out, transform 0.45s ease-out',
                    transitionDelay: isVisible ? `${index * 65}ms` : '0ms',
                    willChange: 'opacity, transform',
                  }}
                >
                  {/* Image + Corner Brackets */}
                  <div style={{ position: 'relative', marginBottom: '1.5rem' }} className="group">

                    {/* Image */}
                    <div style={{
                      position: 'relative',
                      aspectRatio: '1 / 1',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="group-hover:scale-110"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease-out',
                          willChange: 'transform',
                          display: 'block',
                        }}
                      />
                    </div>

                    {/* Top-Left Corner Bracket */}
                    <div style={{
                      position: 'absolute', top: '-14px', left: '-14px',
                      width: '72px', height: '72px',
                      pointerEvents: 'none',
                      transition: 'transform 0.3s ease',
                    }} className="group-hover:scale-110">
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', backgroundColor: '#c4a574' }} />
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', backgroundColor: '#c4a574' }} />
                    </div>

                    {/* Bottom-Right Corner Bracket */}
                    <div style={{
                      position: 'absolute', bottom: '-14px', right: '-14px',
                      width: '72px', height: '72px',
                      pointerEvents: 'none',
                      transition: 'transform 0.3s ease',
                    }} className="group-hover:scale-110">
                      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', backgroundColor: '#c4a574' }} />
                      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '2px', height: '100%', backgroundColor: '#c4a574' }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="group-hover:text-[#c4a574]"
                    style={{
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
                      color: '#f5f5f5',
                      letterSpacing: '0.15em',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}