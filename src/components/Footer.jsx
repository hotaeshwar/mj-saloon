import React from 'react';
import { Phone, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  // Smooth scroll navigation function
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // If we're on a different page (team, detailed-services, location), go back to home first
    const hash = window.location.hash;
    if (hash === '#team' || hash === '#detailed-services' || hash === '#location') {
      window.history.pushState(null, '', `#${sectionId}`);
      window.location.reload(); // Reload to go back to home
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  return (
    <footer className="relative w-full py-12 md:py-16 overflow-hidden bg-[#0a0a0a]">
      {/* Background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/media/chair.jpg)',
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/90 to-[#0a0a0a]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c4a574]/20 to-transparent blur-lg" />
              <img
                src="/media/logo.png"
                alt="MJ Salon by Mohit & Jatin"
                className="h-24 w-auto relative"
              />
            </div>
            <p className="text-center md:text-left text-sm leading-relaxed text-white/50 max-w-xs">
              <span className="text-[#c4a574] font-medium">MJ Salon</span> — Where artistry meets elegance. 
              Crafting timeless beauty experiences in the heart of Delhi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold tracking-wider mb-4 text-white uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleNavClick(e, 'packages')}
                  className="text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, 'work')}
                  className="text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Hours */}
          <div>
            <h3 className="text-base font-semibold tracking-wider mb-4 text-white uppercase">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+918557854703"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-[#c4a574] group-hover:scale-110 transition-transform" />
                <span>+91 85578 54703</span>
              </a>
              <a
                href="tel:+917508373378"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#c4a574] transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-[#c4a574] group-hover:scale-110 transition-transform" />
                <span>+91 75083 73378</span>
              </a>
              
              {/* Operating Hours */}
              <div className="pt-3 border-t border-white/10 mt-4">
                <div className="flex items-start gap-2 text-sm text-white/60 mb-2">
                  <Clock className="w-4 h-4 text-[#c4a574] mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-white/70 font-medium">Opening Hours</p>
                    <div className="text-xs space-y-0.5">
                      <p><span className="text-white/50">Tue - Sat:</span> <span className="text-[#c4a574]">9:30 AM - 10:00 PM</span></p>
                      <p><span className="text-white/50">Sunday:</span> <span className="text-[#c4a574]">9:30 AM - 10:00 PM</span></p>
                      <p><span className="text-white/50">Monday:</span> <span className="text-[#c4a574]">9:00 AM - 10:00 PM</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base font-semibold tracking-wider mb-4 text-white uppercase">
              Follow Us
            </h3>
            <p className="text-sm text-white/50 mb-4">
              Stay connected for the latest updates and beauty tips
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/salon_by_mj_southdelhi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#c4a574] hover:bg-[#c4a574]/10 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/MJ-Salon-by-Mohit-Jatin-61567288407579/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#c4a574] hover:bg-[#c4a574]/10 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © 2026 MJ Salon by Mohit & Jatin. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-white/40 hover:text-[#c4a574] transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a
                href="#terms"
                className="text-white/40 hover:text-[#c4a574] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* SEO Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "MJ Salon by Mohit & Jatin",
            "image": "/media/logo.png",
            "telephone": ["+918557854703", "+917508373378"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "South Delhi",
              "postalCode": "110019",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/salon_by_mj_southdelhi/?hl=en",
              "https://www.facebook.com/p/MJ-Salon-by-Mohit-Jatin-61567288407579/"
            ],
            "priceRange": "$$",
            "openingHours": "Mo-Su 10:00-20:00"
          })}
        </script>
      </div>
    </footer>
  );
};

export default Footer;