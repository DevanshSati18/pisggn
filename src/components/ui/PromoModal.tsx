import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // A slight delay (800ms) makes the popup feel much more premium and less aggressive
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Lock background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }, 800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // If the modal is closed, don't render anything
  if (!isOpen) return null;

  return (
    // Backdrop
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={closeModal} // Closes if they click the dark background
    >
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all duration-500 scale-100 opacity-100 animate-[popUp_0.4s_ease-out]"
        onClick={(e) => e.stopPropagation()} // Prevents clicks inside the box from closing it
      >
        
        {/* Floating Close Button (X) */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {/* Banner Image from Public Folder */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 bg-gray-100 overflow-hidden">
          <img 
            src="/banner.jpg" 
            alt="Admissions Open 2026-27" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay to make the bottom text blend nicely */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Text & Action Area */}
        <div className="p-6 md:p-8 text-center bg-white">
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-bold text-xs md:text-sm uppercase tracking-widest rounded-full mb-4">
            Announcement
          </span>
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#004b87] leading-tight mb-3">
            Admissions Open for Session <span className="text-orange-500">2026-27</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg font-medium mb-8">
            Enrolling now for <strong className="text-gray-800">Nursery to 9th</strong> and <strong className="text-gray-800">11th</strong> grades. Secure your child's future with Pranavananda International School.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/admission"
              onClick={closeModal} // Closes the modal when they click the link
              className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Enroll Now
            </Link>
            <button 
              onClick={closeModal}
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all duration-300"
            >
              Continue to Website
            </button>
          </div>
        </div>

      </div>

      {/* Tiny bit of custom CSS for the popup bounce animation */}
      <style>{`
        @keyframes popUp {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}