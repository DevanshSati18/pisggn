import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Faculty() {
  // State for the full-screen image lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent background scrolling when a faculty list is open in full-screen
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

  // Generate the array for your 6 faculty list images
  const facultyLists = [
    { id: 1, src: "/faculty/faculty1.jpg", title: "Faculty List - Part 1" },
    { id: 2, src: "/faculty/faculty2.jpg", title: "Faculty List - Part 2" },
    { id: 3, src: "/faculty/faculty3.jpg", title: "Faculty List - Part 3" },
    { id: 4, src: "/faculty/faculty4.jpg", title: "Faculty List - Part 4" },
    { id: 5, src: "/faculty/faculty5.jpg", title: "Faculty List - Part 5" },
    { id: 6, src: "/faculty/faculty6.jpg", title: "Faculty List - Part 6" },
  ];

  return (
    <div className="w-full bg-[#FFFBF5] min-h-screen pb-20 font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-[#004b87]">
        {/* Subtle background overlay pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider uppercase mb-6 drop-shadow-md">
            Our Esteemed Faculty
          </h1>
          <div className="w-32 h-1.5 bg-orange-500 rounded-full mx-auto mb-8 shadow-sm"></div>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Meet the dedicated educators who shape the future of our students.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        
        {/* Back to Home Navigation Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-12 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-50 hover:bg-orange-50 text-[#004b87] hover:text-orange-600 font-semibold rounded-xl transition-all duration-300 border border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
            </svg>
            Back to Home
          </Link>
          <div className="hidden sm:block text-sm text-gray-500 font-medium px-4">
            Click on any list to view in full screen
          </div>
        </div>

        {/* Faculty Lists Grid (2 columns on desktop so the lists are wide and readable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {facultyLists.map((list) => (
            <div 
              key={list.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col cursor-pointer"
              onClick={() => setSelectedImage(list.src)}
            >
              {/* Header for each list */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center group-hover:bg-orange-50 transition-colors">
                <h3 className="text-lg font-bold text-[#004b87] group-hover:text-orange-600 transition-colors">
                  {list.title}
                </h3>
                <div className="bg-white p-2 rounded-full shadow-sm text-gray-400 group-hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative w-full bg-gray-100 overflow-hidden flex-1">
                {/* Fallback text while loading */}
                <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm z-0">
                  Loading Faculty List...
                </span>
                
                <img 
                  src={list.src} 
                  alt={list.title} 
                  className="w-full h-auto object-cover relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                
                {/* Subtle dark overlay on hover to emphasize the expand action */}
                <div className="absolute inset-0 bg-[#004b87]/0 group-hover:bg-[#004b87]/10 transition-colors duration-300 z-20"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)} // Close when clicking the background
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-[110] focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-lg"
            aria-label="Close fullscreen image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Expanded Image Container */}
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center overflow-auto custom-scrollbar">
            <img 
              src={selectedImage} 
              alt="Expanded Faculty List" 
              className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}

      {/* Custom Scrollbar specifically for the modal if the image is extremely tall */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1); 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3); 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5); 
        }
      `}</style>
    </div>
  );
}