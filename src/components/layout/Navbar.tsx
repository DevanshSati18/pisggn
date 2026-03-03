import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Ashram', path: '/ashram' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Infrastructure', path: '/infrastructure' },
  { name: 'Admission', path: '/admission' },
  { name: 'Academic', path: '/academic' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-header backdrop-blur-md shadow-sm border-b border-orange-100 transition-all duration-300">
        <div className="max-w-9xl mx-auto px-3 md:px-6 ">
          <div className="flex justify-items-stretch items-center h-20 md:h-28">
            
            {/* 1. Left: Logo & Text - Added flex-1 and min-w-0 to prevent overflow */}
            <NavLink to="/" className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0 group pr-2">
              <div className="p-1 shrink-0 transition-transform duration-400 ease-out group-hover:scale-105">
                <img 
                  src="/logo_pis.png" 
                  alt="Pranavananda International School Crest" 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              
              {/* Stacked Academic Typography - Added truncate so it doesn't push the menu away */}
              <div className="flex flex-col min-w-0">
                <h1 className="flex flex-col leading-tight tracking-wide font-medium ">
                  <span className="text-brand font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl uppercase ">
                    Pranavananda
                  </span>
                  <span className="text-main text-xs sm:text-sm md:text-base lg:text-lg font-semibold -mt-0.5 ">
                    International School
                  </span>
                </h1>
                {/* Hid the long subtext on tiny screens, shows on sm and up */}
                <p className="text-brand-hover text-[10px] md:text-xs font-serif italic tracking-wider mt-0.5 md:mt-1.5 opacity-95 hidden sm:block">
                  An Educational Unit of Bharat Sevashram Sangha
                </p>
              </div>
            </NavLink>

            {/* 2. Right: Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2 text-nowrap shrink-0">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="nav-link-btn"
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* 3. Mobile Hamburger Button - Added shrink-0 so it's locked in place */}
            <div className="xl:hidden flex items-center shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 sm:p-3 rounded-full bg-white shadow-sm text-text-primary hover:text-brand hover:bg-brand-subtle focus:outline-none transition-all duration-300 active:scale-95"
                aria-label="Open main menu"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer matching the header height */}
      <div className="h-20 md:h-28"></div>

      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks} 
      />
    </>
  );
};

export default Navbar;