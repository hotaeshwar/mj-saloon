import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ onShowDetailedServices, onShowTeam, onShowLocation, showDetailedServices, showTeam, showLocation, onBackToHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);

  // Ref to the mobile menu DOM node for instant hide
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!showDetailedServices && !showTeam && !showLocation) {
        const sections = ['home', 'about', 'services', 'packages', 'work', 'contact'];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveLink(section);
              break;
            }
          }
        }
      }
    };

    const closeDropdownsOnScroll = () => {
      setIsAboutDropdownOpen(false);
      setIsServicesDropdownOpen(false);
      setIsContactDropdownOpen(false);
    };

    window.addEventListener('scroll', closeDropdownsOnScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', closeDropdownsOnScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showDetailedServices, showTeam, showLocation]);

  // Instantly collapses the mobile menu by directly setting DOM styles,
  // bypassing the CSS max-h transition entirely
  const closeMobileMenuInstantly = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.transition = 'none';
      mobileMenuRef.current.style.maxHeight = '0';
      mobileMenuRef.current.style.opacity = '0';
      mobileMenuRef.current.style.overflow = 'hidden';
    }
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileContactOpen(false);
  };

  // Restores CSS transitions and opens the menu
  const openMobileMenu = () => {
    if (mobileMenuRef.current) {
      // Re-enable transition before animating open
      mobileMenuRef.current.style.transition = '';
      mobileMenuRef.current.style.maxHeight = '700px';
      mobileMenuRef.current.style.opacity = '1';
      mobileMenuRef.current.style.overflow = '';
    }
    setIsMobileMenuOpen(true);
  };

  const closeAllDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };

  const handleLinkClick = (id, e) => {
    e.preventDefault();
    setActiveLink(id);
    closeMobileMenuInstantly();
    closeAllDropdowns();

    if (showDetailedServices || showTeam || showLocation) {
      onBackToHome();
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80 });
      }
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setActiveLink('home');
    closeMobileMenuInstantly();
    closeAllDropdowns();

    if (showDetailedServices || showTeam || showLocation) {
      onBackToHome();
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  const handleViewAllServices = (e) => {
    e.preventDefault();
    closeMobileMenuInstantly();
    closeAllDropdowns();
    onShowDetailedServices();
  };

  const handleTeamClick = (e) => {
    e.preventDefault();
    closeMobileMenuInstantly();
    closeAllDropdowns();
    onShowTeam();
  };

  const handleLocationClick = (e) => {
    e.preventDefault();
    closeMobileMenuInstantly();
    closeAllDropdowns();
    onShowLocation();
  };

  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAboutDropdownOpen(p => !p);
    setIsServicesDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesDropdownOpen(p => !p);
    setIsAboutDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };

  const toggleContactDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsContactDropdownOpen(p => !p);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const toggleMobileAbout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileAboutOpen(p => !p);
    setIsMobileServicesOpen(false);
    setIsMobileContactOpen(false);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileServicesOpen(p => !p);
    setIsMobileAboutOpen(false);
    setIsMobileContactOpen(false);
  };

  const toggleMobileContact = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileContactOpen(p => !p);
    setIsMobileAboutOpen(false);
    setIsMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#3e3631] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20 md:h-24' : 'h-24 md:h-28'}`}>

          {/* Left Links */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-end pr-4">
            <div className="relative dropdown-container">
              <div className="flex items-center">
                <a href="#about" onClick={(e) => handleLinkClick('about', e)}
                  className={`text-white px-4 py-2 rounded-l-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'about' ? 'bg-[#ad9b80]' : ''}`}>
                  About Us
                </a>
                <button onClick={toggleAboutDropdown}
                  className={`text-white px-2 py-2 rounded-r-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] border-l border-[#ad9b80]/30 ${activeLink === 'about' ? 'bg-[#ad9b80]' : ''}`}
                  aria-label="Toggle dropdown">
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-[#3e3631] rounded-lg shadow-xl border border-[#ad9b80]/20 overflow-hidden">
                  <button onClick={handleTeamClick}
                    className="w-full text-left block px-4 py-3 text-white text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80]">
                    Team
                  </button>
                </div>
              )}
            </div>

            <div className="relative dropdown-container">
              <div className="flex items-center">
                <a href="#services" onClick={(e) => handleLinkClick('services', e)}
                  className={`text-white px-4 py-2 rounded-l-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'services' ? 'bg-[#ad9b80]' : ''}`}>
                  Services
                </a>
                <button onClick={toggleServicesDropdown}
                  className={`text-white px-2 py-2 rounded-r-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] border-l border-[#ad9b80]/30 ${activeLink === 'services' ? 'bg-[#ad9b80]' : ''}`}
                  aria-label="Toggle dropdown">
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#3e3631] rounded-lg shadow-xl border border-[#ad9b80]/20 overflow-hidden">
                  <button onClick={handleViewAllServices}
                    className="w-full text-left block px-4 py-3 text-white text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] border-t border-[#ad9b80]/30">
                    View All Services
                  </button>
                </div>
              )}
            </div>

            <a href="#packages" onClick={(e) => handleLinkClick('packages', e)}
              className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'packages' ? 'bg-[#ad9b80]' : ''}`}>
              Packages
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#home" className="flex items-center h-full" onClick={handleHomeClick}>
              <img src="/media/logo.png" alt="MJ Salon Logo"
                className="h-28 md:h-36 w-auto object-contain transition-all duration-300" />
            </a>
          </div>

          {/* Right Links */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-start pl-4">
            <a href="#work" onClick={(e) => handleLinkClick('work', e)}
              className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'work' ? 'bg-[#ad9b80]' : ''}`}>
              Work
            </a>

            <div className="relative dropdown-container">
              <div className="flex items-center">
                <a href="#contact" onClick={(e) => handleLinkClick('contact', e)}
                  className={`text-white px-4 py-2 rounded-l-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'contact' ? 'bg-[#ad9b80]' : ''}`}>
                  Contact
                </a>
                <button onClick={toggleContactDropdown}
                  className={`text-white px-2 py-2 rounded-r-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] border-l border-[#ad9b80]/30 ${activeLink === 'contact' ? 'bg-[#ad9b80]' : ''}`}
                  aria-label="Toggle dropdown">
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isContactDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {isContactDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-[#3e3631] rounded-lg shadow-xl border border-[#ad9b80]/20 overflow-hidden">
                  <button onClick={handleLocationClick}
                    className="w-full text-left block px-4 py-3 text-white text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80]">
                    Location
                  </button>
                </div>
              )}
            </div>

            <a href="#contact" onClick={(e) => handleLinkClick('contact', e)}
              className={`text-white px-4 py-1.5 rounded-lg text-sm font-medium border-2 border-[#ad9b80] transition-all duration-300 hover:bg-[#ad9b80] hover:border-[#ad9b80] ml-3 ${activeLink === 'contact' ? 'bg-[#ad9b80] border-[#ad9b80]' : ''}`}>
              Book Your Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => isMobileMenuOpen ? closeMobileMenuInstantly() : openMobileMenu()}
              className="text-black p-2 rounded-lg hover:bg-[#ad9b80] transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — starts hidden via inline style; opened/closed via ref for instant control */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: 0, opacity: 0 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#3e3631] shadow-lg">

          <a href="#home" onClick={handleHomeClick}
            className={`block text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'home' ? 'bg-[#ad9b80]' : ''}`}>
            Home
          </a>

          {/* About Us */}
          <div>
            <button onClick={toggleMobileAbout}
              className={`w-full flex items-center justify-between text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'about' ? 'bg-[#ad9b80]' : ''}`}>
              <span onClick={(e) => { e.stopPropagation(); handleLinkClick('about', e); }}>About Us</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileAboutOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <button onClick={handleTeamClick}
                className="w-full text-left block text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-[#ad9b80] ml-4 bg-[#2d2621]">
                <span className="text-[#ad9b80]">└─</span> Team
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <button onClick={toggleMobileServices}
              className={`w-full flex items-center justify-between text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'services' ? 'bg-[#ad9b80]' : ''}`}>
              <span onClick={(e) => { e.stopPropagation(); handleLinkClick('services', e); }}>Services</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <button onClick={handleViewAllServices}
                className="w-full text-left block text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-[#ad9b80] ml-4 bg-[#2d2621]">
                <span className="text-[#ad9b80]">└─</span> View All Services
              </button>
            </div>
          </div>

          <a href="#packages" onClick={(e) => handleLinkClick('packages', e)}
            className={`block text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'packages' ? 'bg-[#ad9b80]' : ''}`}>
            Packages
          </a>

          <a href="#work" onClick={(e) => handleLinkClick('work', e)}
            className={`block text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'work' ? 'bg-[#ad9b80]' : ''}`}>
            Work
          </a>

          {/* Contact */}
          <div>
            <button onClick={toggleMobileContact}
              className={`w-full flex items-center justify-between text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'contact' ? 'bg-[#ad9b80]' : ''}`}>
              <span onClick={(e) => { e.stopPropagation(); handleLinkClick('contact', e); }}>Contact</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileContactOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileContactOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <button onClick={handleLocationClick}
                className="w-full text-left block text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-[#ad9b80] ml-4 bg-[#2d2621]">
                <span className="text-[#ad9b80]">└─</span> Location
              </button>
            </div>
          </div>

          <a href="#contact" onClick={(e) => handleLinkClick('contact', e)}
            className={`block text-white px-4 py-3 rounded-lg text-base font-medium border-2 border-[#ad9b80] transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'contact' ? 'bg-[#ad9b80]' : ''}`}>
            Book Your Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;