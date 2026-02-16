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
    }, 2000); // Show splash for 2 seconds

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
        backgroundColor: '#ffffff',
        zIndex: 9999
      }}>
        <img 
          src="/media/logo.png" 
          alt="MJ Salon Logo" 
          style={{
            maxWidth: '300px',
            maxHeight: '300px',
            animation: 'fadeIn 1s ease-in-out'
          }}
        />
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <section id="home">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
      </section>
      <section id="about">
        <Suspense fallback={null}>
          <AboutUs />
        </Suspense>
      </section>
      <section id="services">
        <Suspense fallback={null}>
          <Services />
        </Suspense>
      </section>
      <section id="packages">
        <Suspense fallback={null}>
          <Packages />
        </Suspense>
      </section>
      <section id="work">
        <Suspense fallback={null}>
          <OurWork />
        </Suspense>
      </section>
      <section id="contact">
        <Suspense fallback={null}>
          <ContactUs />
        </Suspense>
      </section>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* WhatsApp Floating Icon - Always visible */}
      <Suspense fallback={null}>
        <WhatsappChat />
      </Suspense>
    </div>
  );
}

export default App;