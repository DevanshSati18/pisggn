import React from 'react';
import { Link } from 'react-router-dom';

export default function Calendar() {
  // Array of calendar data. Ordered from newest to oldest for better UX.
  const calendars = [
    { 
      id: 1, 
      session: "2026-27", 
      pdfLink: "https://pisgurugram.com/images/20260227174623_PIS%20CALENDAR%202026%2027_compressed_11zon.pdf" 
    },
    { 
      id: 2, 
      session: "2025-26", 
      pdfLink: "https://pisgurugram.com/images/20250319155706_PIS%20Calendar%202025-26.pdf" 
    },
    { 
      id: 3, 
      session: "2024-25", 
      pdfLink: "https://pisgurugram.com/Images/PIS%20CALENDAR%202024%20-%2025%20NEW.pdf" 
    },
    { 
      id: 4, 
      session: "2023-24", 
      pdfLink: "https://www.pisgurugram.com/upload_img/document_img/210.pdf" 
    },
    { 
      id: 5, 
      session: "2022-23", 
      pdfLink: "https://www.pisgurugram.com/upload_img/document_img/209.pdf" 
    }
  ];

  return (
    <div className="w-full bg-[#FFFBF5] min-h-screen pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-[#004b87]">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider uppercase mb-6 drop-shadow-md">
            School Calendar
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-6 shadow-sm"></div>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Stay updated with our academic schedule, holidays, and upcoming school events.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-30">
        
        {/* Navigation Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-12 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-50 hover:bg-orange-50 text-[#004b87] hover:text-orange-600 font-semibold rounded-xl transition-all duration-300 border border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-gray-500 font-medium px-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
            Select a session to view or download
          </div>
        </div>

        {/* Calendars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calendars.map((cal) => (
            <div 
              key={cal.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* PDF Icon Decoration */}
              <div className="w-16 h-16 bg-blue-50 text-[#004b87] group-hover:bg-orange-50 group-hover:text-orange-500 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <path d="M8 13h2"/>
                  <path d="M8 17h2"/>
                  <path d="M14 13h2"/>
                  <path d="M14 17h2"/>
                </svg>
              </div>

              {/* Text Info */}
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Calendar Session
              </h3>
              <h2 className="text-2xl font-bold text-[#004b87] mb-6">
                {cal.session}
              </h2>

              {/* Download / View Link */}
              <a 
                href={cal.pdfLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 hover:bg-[#004b87] text-[#004b87] hover:text-white font-semibold rounded-xl transition-colors duration-300 border border-gray-200 hover:border-transparent"
              >
                Click here for PDF
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}