import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Admissions", to: "/admissions" },
  { label: "Gallery", to: "/gallery" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-brand-accentSoft/60 bg-brand-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* You can replace with img later */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent text-white font-bold">
            P
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-accent">
              Pranavananda
            </p>
            <p className="text-sm md:text-base font-medium text-brand-dark">
              International School
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-accent"
                    : "text-slate-700 hover:text-brand-accent"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/admissions"
            className="rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-soft hover:brightness-110 transition"
          >
            Admission Enquiry
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center gap-2 rounded-full border border-brand-accentSoft px-3 py-1.5 text-sm font-medium text-brand-dark md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span>Menu</span>
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Nav Sheet */}
      {open && (
        <div className="border-t border-brand-accentSoft bg-brand-bg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-brand-accent text-white"
                      : "text-slate-700 hover:bg-brand-light"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-accent px-4 py-2 text-center text-sm font-semibold text-white shadow-soft"
            >
              Admission Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
