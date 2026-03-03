import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, navLinks }) => {
  return (
    <>
      {/* Premium Dark Overlay with a slightly deeper blur */}
      <div 
        className={`fixed inset-0 bg-gray-900/30 backdrop-blur-[4px] z-[60] xl:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Drawer Panel - Now with a curved left edge and soft warm background */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#FFFBF5] rounded-l-[2rem] z-[70] shadow-[-10px_0_30px_-15px_rgba(249,115,22,0.2)] xl:hidden flex flex-col transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) border-l border-orange-100/50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header - Clean, no harsh borders */}
        <div className="flex justify-between items-center px-6 py-6 bg-gradient-to-b from-[#FFF0DC]/80 to-transparent rounded-tl-[2rem]">
          <span className="text-brand font-extrabold tracking-wider text-lg uppercase drop-shadow-sm">
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white shadow-sm text-text-secondary hover:bg-brand hover:text-white hover:shadow-md hover:shadow-orange-300/40 transition-all duration-300 active:scale-90"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links - Pill shaped, spaced elegantly */}
        <nav className="flex-1 px-5 py-2 space-y-2.5 overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-5 py-3.5 rounded-2xl text-base font-medium transition-all duration-300 ease-in-out ${
                  isActive 
                    ? 'bg-brand text-orange-800 shadow-lg shadow-orange-500/30 font-semibold scale-[1.02]' 
                    : 'text-text-primary bg-transparent hover:bg-[#FFF0DC] hover:text-brand hover:scale-[1.02]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Optional: A subtle footer design to anchor the bottom */}
        <div className="p-6 text-center opacity-70">
          <p className="text-[10px] text-brand-hover font-serif italic">
            School with a difference
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;