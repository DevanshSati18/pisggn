import React, { useState, useEffect } from 'react';

export default function Academics() {
  // State for the Students Corner image lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when an image is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  // Array for the 3 Students Corner images so we can easily map them
  const studentImages = [
    { src: "/academic/student_corner1.jpg", alt: "Students Corner Image 1" },
    { src: "/academic/student_corner2.jpg", alt: "Students Corner Image 2" },
    { src: "/academic/student_corner3.jpg", alt: "Students Corner Image 3" },
  ];

  return (
    <div className="w-full bg-[#FFFBF5] overflow-x-hidden relative min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-[#004b87]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Optional background image for the academics hero */}
        <div className="absolute inset-0 w-full h-full bg-[#004b87] mix-blend-overlay"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider uppercase mb-4 drop-shadow-lg">
            Academics
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
          <p className="text-blue-100 mt-6 max-w-2xl text-lg md:text-xl">
            Fostering excellence through a robust curriculum and dedicated faculty.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-24">
        
        {/* Core Academics Grid (4 Cards) */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Syllabus Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 text-[#004b87] rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-[#004b87] mb-4">Syllabus</h2>
              <p className="text-gray-600 leading-relaxed">
                As the school is affiliated to CBSE, the school follows the CBSE prescribed curriculum, ensuring a standardized and high-quality educational framework for all students.
              </p>
            </div>

            {/* Test & Examination Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-[#004b87] mb-4">Test & Examination</h2>
              <p className="text-gray-600 leading-relaxed">
                The institute follows the CBSE pattern of revised assessment structure implemented from the academic year 2017 - 2018 to holistically evaluate student progress.
              </p>
            </div>

            {/* Faculty Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="w-12 h-12 bg-blue-50 text-[#004b87] rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-[#004b87] mb-4">Faculty</h2>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                The teaching members of Pranavananda International School are highly qualified to teach its pupils with utmost care. Having imbibed the core philosophy of Acharya Swami Pranavanandaji Maharaj, the teachers have been bringing new ideas and helpful tools to this ever-changing arena.
              </p>
              <a 
                href="/20250915124817_FACULTY 2025-26 SEPT.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#004b87] text-white font-medium rounded-lg hover:bg-orange-500 transition-colors duration-300 w-full sm:w-auto self-start"
              >
                Click For More Information
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </div>

            {/* Book List Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-[#004b87] mb-4">Book List</h2>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Access the complete, updated list of required textbooks and academic materials for the upcoming academic session.
              </p>
              <a 
                href="/20250507072648_BOOK LIST FOR WEB.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-[#004b87] transition-colors duration-300 w-full sm:w-auto self-start"
              >
                Click here for BOOKLIST 2025-26
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200"></div>

        {/* Students Corner Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004b87] mb-4">Students Corner</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage(img.src)}
                className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden aspect-square cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-0">
                   <span className="text-gray-400 text-sm">Image {idx + 1} Placeholder</span>
                </div>
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#004b87]/0 group-hover:bg-[#004b87]/20 transition-colors duration-300 z-20 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-white text-[#004b87] p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* A Day in Our School Highlight Banner */}
        <section className="bg-gradient-to-br from-[#004b87] to-[#003366] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 md:w-3/4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">
              A Day in Our School
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed md:leading-loose">
              Gurugram branch of Bharat Sevashram Sangha at Sector - 92 distributed blankets to the underprivileged people residing in nearby areas on 20th December 2019. Students, teachers and staff of <strong className="font-semibold text-white">Pranavananda International School</strong> (An educational unit of Bharat Sevashram Sangha) also joined in this programme. All were feeling happy seeing the smiles on their faces.
            </p>
          </div>
        </section>

      </div>

      {/* Full-Screen Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Close fullscreen image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
}