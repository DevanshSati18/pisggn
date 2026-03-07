// import React from 'react';
import { Link } from 'react-router-dom';

export default function OnlineFeePayment() {
  // Data for the benefits section to map them into beautiful cards
  const benefits = [
    {
      id: 1,
      title: "Great Convenience",
      description: "Pay anytime from anywhere using the internet with 24 x 7 access.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      )
    },
    {
      id: 2,
      title: "Easy Payment Options",
      description: "Choose Net Banking or use any major Credit Card or Debit Card.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
      )
    },
    {
      id: 3,
      title: "Save Time & Effort",
      description: "Avoid the hassle of making a physical trip to the school or bank.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    },
    {
      id: 4,
      title: "Instant E-Receipt",
      description: "Get an instant online receipt with a soft copy delivered right to your email.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      )
    }
  ];

  return (
    <div className="w-full bg-[#FFFBF5] min-h-screen pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-[#004b87] overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider uppercase mb-6 drop-shadow-md">
            Online Fee Payment
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mb-6 shadow-sm"></div>
          <p className="text-blue-100 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Fast, secure, and convenient fee processing for parents and guardians.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20 space-y-10">
        
        {/* Navigation Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-50 hover:bg-orange-50 text-[#004b87] hover:text-orange-600 font-semibold rounded-xl transition-all duration-300 border border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-gray-500 font-medium px-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            100% Secure Portal
          </div>
        </div>

        {/* Payment Dashboard Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* Top Letter Section */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-[#004b87] mb-4">Dear Parents,</h2>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              In our continued endeavor to simplify your engagement with the school, we are happy to introduce Online Fee Payment through our school website. Starting from the quarterly fee payment cycle in April 2016, you will be able to pay your ward's fee ONLINE.
            </p>
          </div>

          {/* Benefits Grid Section */}
          <div className="bg-gray-50/50 p-8 md:p-12">
            <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
              Core Benefits to You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="w-14 h-14 shrink-0 bg-white border border-gray-100 text-orange-500 rounded-2xl flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#004b87] mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action (Payment Process) */}
          <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center bg-white">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to make a payment?</h3>
            <p className="text-gray-500 mb-8 max-w-md">
              Process your payments securely using the official Campus Pro application portal.
            </p>
            
            <a 
              href="https://app.campuspro.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 w-full sm:w-auto"
            >
              <span>Pay Fees on Campus Pro</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            
            <p className="text-sm text-gray-400 mt-6 flex items-center justify-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              You will be redirected to a secure external gateway.
            </p>
          </div>

          {/* Sign-off */}
          <div className="bg-[#004b87] text-blue-100 p-6 text-center border-t-4 border-orange-500">
            <p className="italic">Thanks & Regards,</p>
            <p className="font-bold tracking-widest uppercase mt-1 text-white">PRINCIPAL</p>
          </div>

        </div>

      </div>
    </div>
  );
}