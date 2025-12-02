import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-brand-accentSoft bg-brand-light/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <h3 className="text-base font-semibold text-brand-dark">
            Pranavananda International School
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            A CBSE-affiliated institution focused on academic excellence, value
            education, and holistic development.
          </p>
          <p className="mt-3 text-sm text-slate-700">
            Gurugram, Haryana, India
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-3">
          <div>
            <h4 className="font-semibold text-brand-dark">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link to="/about" className="hover:text-brand-accent">About</Link></li>
              <li><Link to="/academics" className="hover:text-brand-accent">Academics</Link></li>
              <li><Link to="/infrastructure" className="hover:text-brand-accent">Infrastructure</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-accent">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-dark">Resources</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-brand-accent">Mandatory Disclosure</a></li>
              <li><a href="#" className="hover:text-brand-accent">Fee Structure</a></li>
              <li><a href="#" className="hover:text-brand-accent">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-brand-accent">Downloads</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-dark">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>Phone: +91-XXXXXXXXXX</li>
              <li>Email: info@pisgurugram.com</li>
              <li>Office Hours: 8:00 AM – 3:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-accentSoft/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 md:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Pranavananda International School. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed & developed with <span className="text-brand-accent">●</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
