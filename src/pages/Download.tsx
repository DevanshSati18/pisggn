import { Link } from 'react-router-dom';

export default function Download() {
  // Data for the main registration forms
  const forms = [
    { 
      id: "admission", 
      title: "Student Registration / Admission Form", 
      description: "Download the official admission form to begin the enrollment process for your child.",
      link: "https://www.pisgurugram.com/upload_img/document_img/206.pdf" 
    },
    { 
      id: "teacher", 
      title: "Application Form for Post of Teacher & Staff", 
      description: "Looking to join our team? Download the official application form for faculty and staff positions.",
      link: "https://www.pisgurugram.com/upload_img/document_img/27.pdf" 
    }
  ];

  // Data for the book lists, ordered newest to oldest
  const bookLists = [
    { id: 1, year: "2023-24", classes: "Nursery to class X", link: "PASTE_BOOK_23_24_LINK_HERE" },
    { id: 2, year: "2022-23", classes: "Nursery to class XII", link: "PASTE_BOOK_22_23_LINK_HERE" },
    { id: 3, year: "2021-22", classes: "Nursery to class XII", link: "PASTE_BOOK_21_22_LINK_HERE" },
    { id: 4, year: "2020-21", classes: "Nursery to class XII", link: "PASTE_BOOK_20_21_LINK_HERE" },
    { id: 5, year: "2019-20", classes: "Nursery to class X", link: "PASTE_BOOK_19_20_LINK_HERE" },
  ];

  return (
    <div className="w-full bg-[#FFFBF5] min-h-screen pb-24 font-sans">
      
      {/* Hero Section - Orange Theme */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl z-0"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider uppercase mb-6 drop-shadow-md">
            Download Center
          </h1>
          <div className="w-24 h-1.5 bg-white/80 rounded-full mx-auto mb-6 shadow-sm"></div>
          <p className="text-orange-50 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Access important registration forms and academic book lists quickly and easily.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 space-y-16">
        
        {/* Navigation Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold rounded-xl transition-all duration-300 border border-orange-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-gray-500 font-medium px-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            All files are in PDF format
          </div>
        </div>

        {/* Section 1: Important Forms */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-l-4 border-orange-500 pl-4">
            <h2 className="text-3xl font-bold text-gray-800">Registration Forms</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forms.map((form) => (
              <div key={form.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-orange-100 hover:border-orange-300 transition-all duration-300 flex flex-col group">
                <div className="w-14 h-14 bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                  {form.id === 'admission' ? (
                    // Student Icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                  ) : (
                    // Briefcase/Teacher Icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{form.title}</h3>
                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                  {form.description}
                </p>
                
                <a 
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white font-bold rounded-xl transition-all duration-300 shadow-sm"
                >
                  Download PDF
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-orange-200/50"></div>

        {/* Section 2: Book Lists */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-l-4 border-orange-500 pl-4">
            <h2 className="text-3xl font-bold text-gray-800">List of Books</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
            <div className="flex flex-col">
              {bookLists.map((book, index) => (
                <div 
                  key={book.id} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-orange-50 transition-colors duration-200 ${
                    index !== bookLists.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-4 mb-4 sm:mb-0">
                    <div className="w-12 h-12 shrink-0 bg-blue-50 text-[#004b87] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Session {book.year}
                      </h3>
                      <p className="text-gray-500 font-medium">
                        For {book.classes}
                      </p>
                    </div>
                  </div>

                  <a 
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-sm sm:w-auto w-full"
                  >
                    here Pdf
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}