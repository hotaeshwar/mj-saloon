import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'packages', 'work', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            // ✅ Update URL hash without jumping
            if (window.location.hash !== `#${section}`) {
              window.history.replaceState(null, '', `#${section}`);
            }
            break;
          }
        }
      }
    };

    // ✅ Set active from URL hash on load
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveLink(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setActiveLink('home');
      window.history.replaceState(null, '', '#home');
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
  ];

  const rightLinks = [
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Our Work', href: '#work', id: 'work' },
  ];

  const bookingLink = { name: 'Book Your Appointment', href: '#contact', id: 'contact' };
  const allNavLinks = [...leftLinks, ...rightLinks, bookingLink];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsMobileMenuOpen(false);
    window.history.replaceState(null, '', `#${id}`);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setActiveLink('home');
    setIsMobileMenuOpen(false);
    window.history.replaceState(null, '', '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#3e3631] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20 md:h-24' : 'h-24 md:h-28'}`}>

          {/* Left Links */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-end pr-4">
            {leftLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === link.id ? 'bg-[#ad9b80]' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#home" className="flex items-center h-full" onClick={handleHomeClick}>
              <img
                src="/media/logo.png"
                alt="MJ Salon Logo"
                className="h-28 md:h-36 w-auto object-contain transition-all duration-300"
              />
            </a>
          </div>

          {/* Right Links + Book Appointment */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-start pl-4">
            {rightLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === link.id ? 'bg-[#ad9b80]' : ''}`}
              >
                {link.name}
              </a>
            ))}

            <a
              href={bookingLink.href}
              onClick={() => handleLinkClick(bookingLink.id)}
              className={`text-white px-4 py-1.5 rounded-lg text-sm font-medium border-2 border-[#ad9b80] transition-all duration-300 hover:bg-[#ad9b80] hover:border-[#ad9b80] ${activeLink === bookingLink.id ? 'bg-[#ad9b80] border-[#ad9b80]' : ''}`}
            >
              {bookingLink.name}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-[#ad9b80] transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
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

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#3e3631] shadow-lg">
          {/* Home link in mobile menu */}
          <a
            href="#home"
            onClick={handleHomeClick}
            className={`block text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${activeLink === 'home' ? 'bg-[#ad9b80]' : ''}`}
          >
            Home
          </a>
          {allNavLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleLinkClick(link.id)}
              className={`block text-white px-4 py-3 rounded-lg text-base font-medium transition-colors duration-300 hover:bg-[#ad9b80] ${
                link.id === bookingLink.id
                  ? `border-2 border-[#ad9b80] ${activeLink === link.id ? 'bg-[#ad9b80]' : ''}`
                  : activeLink === link.id ? 'bg-[#ad9b80]' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;