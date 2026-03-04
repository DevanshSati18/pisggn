
export default function ContactUs() {
  return (
    <div className="w-full bg-[#FFFBF5] overflow-x-hidden min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-[#004b87]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 w-full h-full bg-[#004b87] mix-blend-overlay"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider uppercase mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          {/* Orange Accent */}
          <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
          <p className="text-blue-100 mt-6 max-w-2xl text-lg md:text-xl">
            We'd love to hear from you. Reach out with any questions or to schedule a visit.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        
        {/* 2-Column Grid (Info on Left, Map on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Details */}
          <div className="flex flex-col gap-10">
            
            {/* Header */}
            <div className="border-l-4 border-orange-500 pl-5">
              <h2 className="text-3xl md:text-4xl font-bold text-[#004b87] mb-3">Get in Touch</h2>
              <p className="text-gray-600 text-lg">
                Our admissions team and administrative staff are ready to assist you.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-6">
              
              {/* Address Card */}
              <div className="flex items-start gap-5 group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                <div className="w-14 h-14 flex-shrink-0 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004b87] mb-2">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Wazirpur, Sector – 92,<br />
                    Gurugram, Haryana - 122505
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-5 group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                <div className="w-14 h-14 flex-shrink-0 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004b87] mb-2">Phone Numbers</h3>
                  <div className="text-gray-600 flex flex-col space-y-1.5 font-medium">
                    <a href="tel:+918448293021" className="hover:text-orange-500 transition-colors">8448293021</a>
                    <a href="tel:+918448293023" className="hover:text-orange-500 transition-colors">8448293023</a>
                    <a href="tel:+918448293024" className="hover:text-orange-500 transition-colors">8448293024</a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-5 group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                <div className="w-14 h-14 flex-shrink-0 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#004b87] mb-2">Email Address</h3>
                  <a href="mailto:bsspisggn@gmail.com" className="text-gray-600 font-medium hover:text-orange-500 transition-colors">
                    bsspisggn@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Large Embedded Google Map */}
          <div className="w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white ring-1 ring-orange-100 relative bg-gray-100 transform lg:hover:-translate-y-2 transition-transform duration-500">
            <iframe 
              title="Pranavananda International School Location"
              src="https://maps.google.com/maps?q=Pranavananda+International+School,+Sector+92,+Gurugram,+Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}