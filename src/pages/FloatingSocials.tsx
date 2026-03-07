import React, { useState } from 'react';

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);

  // Social Links Data
  const socials = [
    {
      id: 'email',
      name: 'Email Us',
      href: 'mailto:bsspisggn@gmail.com',
      color: 'bg-orange-500 hover:bg-orange-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      href: 'https://www.youtube.com/@PISGURUGRAM',
      color: 'bg-[#FF0000] hover:bg-red-700',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
      )
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://www.instagram.com/pisgurugram/',
      color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      href: 'https://www.facebook.com/PISGURUGRAM',
      color: 'bg-[#1877F2] hover:bg-blue-700',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      )
    }
  ];

  return (
    // Fixed to the bottom-left corner with a very high z-index so nothing covers it
    <div className="fixed bottom-6 left-6 z-[99] flex flex-col items-center">
      
      {/* The Expanding Menu Items */}
      <div 
        className={`flex flex-col gap-3 mb-4 transition-all duration-300 origin-bottom ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {socials.map((social) => (
          <div key={social.id} className="relative group flex items-center">
            
            {/* Tooltip that slides out to the right on hover */}
            <span className="absolute left-14 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
              {social.name}
              {/* Tooltip triangle pointer */}
              <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-[4px] border-y-transparent border-r-[4px] border-r-gray-900"></span>
            </span>

            {/* Social Button */}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transform hover:scale-110 transition-transform duration-200 ${social.color}`}
            >
              {social.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Connect with us"
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl shadow-orange-500/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${
          isOpen ? 'bg-[#004b87] rotate-90 scale-95' : 'bg-orange-500 hover:bg-orange-600 hover:scale-105 animate-[bounce_2s_infinite]'
        }`}
      >
        {isOpen ? (
          // Close (X) Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          // Connect/Link Icon
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        )}
      </button>

    </div>
  );
}