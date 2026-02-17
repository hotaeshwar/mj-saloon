import React, { lazy, Suspense, useState, useEffect } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const AboutUs = lazy(() => import('./components/Aboutus'));
const Team = lazy(() => import('./components/Team'));
const Services = lazy(() => import('./components/Services'));
const SingleService = lazy(() => import('./components/SingleService'));
const Packages = lazy(() => import('./components/Packages'));
const OurWork = lazy(() => import('./components/Ourwork'));
const ContactUs = lazy(() => import('./components/Contactus'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsappChat = lazy(() => import('./components/Whatsappchat'));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showDetailedServices, setShowDetailedServices] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      // Ensure we're at #home when splash ends
      window.scrollTo(0, 0);
      window.history.replaceState(null, '', '#home');
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle navigation to detailed services
  const handleShowDetailedServices = () => {
    setShowDetailedServices(true);
    setShowTeam(false);
    window.history.pushState(null, '', '#detailed-services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle navigation to team page
  const handleShowTeam = () => {
    setShowTeam(true);
    setShowDetailedServices(false);
    setShowLocation(false);
    window.history.pushState(null, '', '#team');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to handle navigation to location page
  const handleShowLocation = () => {
    setShowLocation(true);
    setShowTeam(false);
    setShowDetailedServices(false);
    window.history.pushState(null, '', '#location');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to go back to home
  const handleBackToHome = () => {
    setShowDetailedServices(false);
    setShowTeam(false);
    setShowLocation(false);
    window.history.pushState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons and initial hash
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash === '#detailed-services') {
        setShowDetailedServices(true);
        setShowTeam(false);
        setShowLocation(false);
      } else if (hash === '#team') {
        setShowTeam(true);
        setShowDetailedServices(false);
        setShowLocation(false);
      } else if (hash === '#location') {
        setShowLocation(true);
        setShowTeam(false);
        setShowDetailedServices(false);
      } else {
        setShowDetailedServices(false);
        setShowTeam(false);
        setShowLocation(false);
      }
    };

    // Check initial hash on mount
    const initialHash = window.location.hash;
    if (initialHash === '#detailed-services') {
      setShowDetailedServices(true);
      setShowTeam(false);
      setShowLocation(false);
    } else if (initialHash === '#team') {
      setShowTeam(true);
      setShowDetailedServices(false);
      setShowLocation(false);
    } else if (initialHash === '#location') {
      setShowLocation(true);
      setShowTeam(false);
      setShowDetailedServices(false);
    } else if (!initialHash || initialHash === '') {
      // Set default to home if no hash
      window.history.replaceState(null, '', '#home');
    }

    window.addEventListener('popstate', handlePopState);
    
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Track active section when on homepage
  useEffect(() => {
    if (showDetailedServices || showTeam || showLocation) return; // Don't track if on detailed pages

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'packages', 'work', 'contact', 'testimonials'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Update URL hash without triggering scroll
            if (window.location.hash !== `#${section}`) {
              window.history.replaceState(null, '', `#${section}`);
            }
            break;
          }
        }
      }
    };

    // Set initial hash to #home when splash screen ends
    if (!showSplash) {
      window.history.replaceState(null, '', '#home');
      
      // Delay scroll tracking to allow page to settle
      const scrollTimer = setTimeout(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
      }, 500);

      return () => {
        clearTimeout(scrollTimer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [showDetailedServices, showTeam, showLocation, showSplash]);

  if (showSplash) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/media/chair.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'slowZoom 3s ease-out forwards',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.62)',
          animation: 'overlayFadeIn 0.8s ease-in forwards',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
          animation: 'logoReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both',
        }}>
          <img
            src="/media/logo.png"
            alt="MJ Salon Logo"
            style={{
              maxWidth: '260px',
              maxHeight: '260px',
              filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.7))',
            }}
          />
          <div style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            animation: 'lineExpand 0.9s ease-out 1s both',
          }} />
        </div>
        <style>{`
          @keyframes slowZoom {
            from { transform: scale(1.1); }
            to   { transform: scale(1); }
          }
          @keyframes overlayFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes logoReveal {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.92);
              filter: blur(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
          @keyframes lineExpand {
            from { width: 0px;  opacity: 0; }
            to   { width: 80px; opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
      <Suspense fallback={null}>
        <Navbar 
          onShowDetailedServices={handleShowDetailedServices}
          onShowTeam={handleShowTeam}
          onShowLocation={handleShowLocation}
          showDetailedServices={showDetailedServices}
          showTeam={showTeam}
          showLocation={showLocation}
          onBackToHome={handleBackToHome}
        />
      </Suspense>

      {!showDetailedServices && !showTeam && !showLocation ? (
        <>
          <section id="home"><Suspense fallback={null}><Hero /></Suspense></section>
          <section id="about"><Suspense fallback={null}><AboutUs /></Suspense></section>
          <section id="services"><Suspense fallback={null}><Services /></Suspense></section>
          <section id="packages"><Suspense fallback={null}><Packages /></Suspense></section>
          <section id="work"><Suspense fallback={null}><OurWork /></Suspense></section>
          <section id="contact"><Suspense fallback={null}><ContactUs /></Suspense></section>
          <section id="testimonials"><Suspense fallback={null}><Testimonials /></Suspense></section>
        </>
      ) : showDetailedServices ? (
        <section id="detailed-services">
          <Suspense fallback={null}>
            <SingleService onBack={handleBackToHome} />
          </Suspense>
        </section>
      ) : showTeam ? (
        <section id="team-page">
          <Suspense fallback={null}>
            <Team onBack={handleBackToHome} />
          </Suspense>
        </section>
      ) : showLocation ? (
        <section id="location-page">
          <Suspense fallback={null}>
            <Location />
          </Suspense>
        </section>
      ) : null}

      <Suspense fallback={null}><Footer /></Suspense>
      <Suspense fallback={null}><WhatsappChat /></Suspense>
    </div>
  );
}

export default App;