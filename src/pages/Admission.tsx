import React, { useState, useEffect } from 'react';

// TypeScript interface for the admission sections
interface AdmissionSection {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean; // Used to alternate the layout left/right
}

const Admissions: React.FC = () => {
  // State for the full-screen image lightbox
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

  // Data for the 4 sections you requested
  const admissionData: AdmissionSection[] = [
    {
      id: "criteria",
      title: "Admission Criteria & Entrance Test",
      description: "Understand our eligibility requirements and the details regarding the entrance examination for prospective students. We aim to make the process transparent and accessible.",
      imageSrc: "/admission/admission_criteria.jpg", // <-- 1st Image Link Goes Here
      imageAlt: "Admission Criteria and Test Information",
      reverse: false,
    },
    {
      id: "fees",
      title: "Fee Structure & Online Payment",
      description: "Review our comprehensive fee structure for the academic year. For your convenience, we offer secure online fee payment options.",
      imageSrc: "/admission/fee_structure.jpg", // <-- 2nd Image Link Goes Here
      imageAlt: "Fee Structure and Payment Details",
      reverse: true, // Image on the right
    },
    {
      id: "documents",
      title: "Required Documents & School Timings",
      description: "Ensure you have all the necessary documentation ready for a smooth enrollment process. This section also outlines our daily school timings for different grades.",
      imageSrc: "/admission/documents.jpg", // <-- 3rd Image Link Goes Here
      imageAlt: "List of Documents and School Timings",
      reverse: false,
    },
    {
      id: "policy",
      title: "Free & Concessional Education Policy",
      description: "We are committed to providing quality education to all. Explore our policies regarding free and concessional education for eligible students.",
      imageSrc: "/admission/education_policy.jpg", // <-- 4th Image Link Goes Here
      imageAlt: "Concessional Education Policy Details",
      reverse: true, // Image on the right
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden relative">
      
      {/* Hero Section (Matches your Infrastructure page style) */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-[#004b87]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Optional: Add a background image here if you have a nice school photo */}
        <div className="absolute inset-0 w-full h-full bg-[#004b87] mix-blend-overlay"></div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider uppercase mb-4 drop-shadow-lg">
            Admissions
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
          <p className="text-blue-100 mt-6 max-w-2xl text-lg md:text-xl">
            Join our academic community. Explore the step-by-step process to enroll your child.
          </p>
        </div>
      </section>

      {/* Main Content - Alternating Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-24">
        {admissionData.map((section, index) => (
          <div 
            key={section.id} 
            className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
          >
            {/* Text Content Area */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-2">
                Step {index + 1}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004b87]">
                {section.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {section.description}
              </p>
              <button 
                onClick={() => setSelectedImage(section.imageSrc)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#004b87] text-white font-medium rounded-lg hover:bg-orange-500 transition-colors duration-300 shadow-md"
              >
                View Full Details
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </button>
            </div>

            {/* Image Area */}
            <div className="w-full md:w-1/2">
              <div 
                className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer bg-gray-50 aspect-4/3 flex items-center justify-center object-cover"
                onClick={() => setSelectedImage(section.imageSrc)}
              >
                {/* Fallback text in case the image link is empty. 
                  Once you paste the link, the image will cover this.
                */}
                <span className="text-gray-400 absolute z-0 text-sm">Image Placeholder</span>
                
                <img 
                  src={section.imageSrc} 
                  alt={section.imageAlt}
                  className="w-full h-full object-cover relative z-10 transform group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#004b87]/0 group-hover:bg-[#004b87]/10 transition-colors duration-300 z-20 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white text-[#004b87] px-6 py-3 rounded-full font-semibold shadow-xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Click to Expand
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
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

          {/* Expanded Image */}
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
};

export default Admissions;