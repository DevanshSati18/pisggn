'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from '../../public/logo_pis.png';
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/AboutUs' },
  { name: 'Academic', href: '/Academic' },
  { name: 'Admission', href: '/Admission' },
  { name: 'Infrastructure', href: '/Infrastructure' },
  { name: 'Media Gallery', href: '/MediaGallery' },
  { name: 'News & Events', href: '/NewsEvents' },
  { name: 'Contact Us', href: '/ContactUs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">

          {/* LEFT: Logo + School Name */}
          <div className="flex items-center gap-4">
            {/* Logo Placeholder */}
            <Image
              src={logo}
              alt="School Logo"
              width={70}
              height={70}
              priority
            />

            {/* Text Block */}
            <div className="leading-tight">
              <h1 className="text-red-700 font-extrabold text-xl tracking-wide">
                PRANAVANANDA INTERNATIONAL SCHOOL
              </h1>

              <p className="text-blue-800 text-sm font-semibold">
                (An Educational Unit of Bharat Sevashram Sangha)
              </p>

              <p className="text-orange-600 italic text-sm font-medium">
                School with a difference
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 font-medium transition hover:text-orange-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-orange-600 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
