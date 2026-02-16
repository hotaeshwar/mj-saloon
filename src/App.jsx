import React, { lazy, Suspense, useState, useEffect } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const AboutUs = lazy(() => import('./components/Aboutus'));
const Services = lazy(() => import('./components/Services'));
const Packages = lazy(() => import('./components/Packages'));
const OurWork = lazy(() => import('./components/Ourwork'));
const ContactUs = lazy(() => import('./components/Contactus'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsappChat = lazy(() => import('./components/Whatsappchat'));

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800); // slightly longer to let animations breathe

    return () => clearTimeout(timer);
  }, []);

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

        {/* ── Background Image — slow Ken Burns zoom ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/media/chair.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'slowZoom 3s ease-out forwards',
        }} />

        {/* ── Dark Overlay ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.62)',
          animation: 'overlayFadeIn 0.8s ease-in forwards',
        }} />

        {/* ── Logo + decorative line ── */}
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
          {/* Decorative expanding line beneath logo */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
            animation: 'lineExpand 0.9s ease-out 1s both',
          }} />
        </div>

        <style>{`
          /* Background slowly zooms in — cinematic Ken Burns */
          @keyframes slowZoom {
            from { transform: scale(1.1); }
            to   { transform: scale(1); }
          }

          /* Overlay fades in quickly */
          @keyframes overlayFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }

          /* Logo rises up, fades in, and un-blurs */
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

          /* Decorative line expands outward from center */
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
      <Suspense fallback={null}><Navbar /></Suspense>
      <section id="home"><Suspense fallback={null}><Hero /></Suspense></section>
      <section id="about"><Suspense fallback={null}><AboutUs /></Suspense></section>
      <section id="services"><Suspense fallback={null}><Services /></Suspense></section>
      <section id="packages"><Suspense fallback={null}><Packages /></Suspense></section>
      <section id="work"><Suspense fallback={null}><OurWork /></Suspense></section>
      <section id="contact"><Suspense fallback={null}><ContactUs /></Suspense></section>
      <Suspense fallback={null}><Footer /></Suspense>
      <Suspense fallback={null}><WhatsappChat /></Suspense>
    </div>
  );
}

export default App;