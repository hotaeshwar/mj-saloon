import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Navigation, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Minimalist Gradient Overlay */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Logo and About - More Compact */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c4a574]/20 to-transparent blur-lg" />
              <img
                src="/media/logo.png"
                alt="MJ Salon by Mohit & Jatin"
                className="h-28 sm:h-32 w-auto relative"
              />
            </div>
            <p className="text-center lg:text-left text-sm sm:text-base leading-relaxed text-white/50 max-w-md">
              <span className="text-[#c4a574] font-medium">MJ Salon</span> — Where artistry meets elegance. 
              Crafting timeless beauty experiences in the heart of Delhi.
            </p>
            
            {/* Social Media - Cleaner Design */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/salon_by_mj_southdelhi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-[#c4a574] hover:border-[#c4a574]/30 hover:bg-[#c4a574]/5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/MJ-Salon-by-Mohit-Jatin-61567288407579/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-[#c4a574] hover:border-[#c4a574]/30 hover:bg-[#c4a574]/5 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Contact - Sleek Card Style */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-light tracking-wider mb-6 text-white/40 uppercase">
              Connect
            </h3>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/5">
                <div className="text-[#c4a574] text-xs font-medium mb-3 tracking-wider">
                  DIRECT CONTACT
                </div>
                <div className="space-y-3">
                  <a
                    href="tel:+918557854703"
                    className="flex items-center gap-3 text-white/70 hover:text-[#c4a574] transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#c4a574]/70" />
                    <span className="text-sm sm:text-base font-light">+91 85578 54703</span>
                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="tel:+917508373378"
                    className="flex items-center gap-3 text-white/70 hover:text-[#c4a574] transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#c4a574]/70" />
                    <span className="text-sm sm:text-base font-light">+91 75083 73378</span>
                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locations - Clean Grid Layout */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-light tracking-wider mb-6 text-white/40 uppercase">
              Studios
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Alaknanda */}
              <div className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/5 hover:border-[#c4a574]/20 transition-all duration-300 group">
                <h4 className="text-[#c4a574] text-base font-medium mb-3 flex items-center">
                  <span className="w-1 h-4 bg-[#c4a574] rounded-full mr-2"></span>
                  Alaknanda
                </h4>
                <address className="not-italic text-xs sm:text-sm leading-relaxed text-white/50 mb-4">
                  L1,119, Opp. Ganga Apartment,<br />
                  Alaknanda, South Delhi-110019
                </address>
                <a
                  href="https://maps.app.goo.gl/DuB7xciytDhM97Mn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-[#c4a574] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get directions</span>
                </a>
              </div>

              {/* Kalkaji */}
              <div className="bg-white/5 rounded-xl p-5 backdrop-blur-sm border border-white/5 hover:border-[#c4a574]/20 transition-all duration-300 group">
                <h4 className="text-[#c4a574] text-base font-medium mb-3 flex items-center">
                  <span className="w-1 h-4 bg-[#c4a574] rounded-full mr-2"></span>
                  Kalkaji
                </h4>
                <address className="not-italic text-xs sm:text-sm leading-relaxed text-white/50 mb-4">
                  Upper Ground, M5, L-Block Rd,<br />
                  Gurudwara, Rampuri, Kalkaji,<br />
                  New Delhi - 110019
                </address>
                <a
                  href="https://maps.app.goo.gl/KDy2xhjyrTQbYVAB6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-[#c4a574] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Minimal */}
        <div className="mt-16 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-white/20">
              © 2026 MJ Salon. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <a
                href="#"
                className="text-white/20 hover:text-[#c4a574] transition-colors"
              >
                Privacy
              </a>
              <span className="text-white/10">•</span>
              <a
                href="#"
                className="text-white/20 hover:text-[#c4a574] transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* SEO Script - Keep as is */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "MJ Salon by Mohit & Jatin",
            "image": "/media/logo.png",
            "telephone": ["+918557854703", "+917508373378"],
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "L1,119, Opp. Ganga Apartment, Alaknanda",
                "addressLocality": "South Delhi",
                "postalCode": "110019",
                "addressCountry": "IN"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Upper Ground, Near, M5, L-Block Rd, Gurudwara, Rampuri, Kalkaji",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110019",
                "addressCountry": "IN"
              }
            ],
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