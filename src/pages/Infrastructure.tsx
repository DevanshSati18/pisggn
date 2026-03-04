import React, { useState, useEffect } from 'react';

// 1. Define TypeScript interfaces for your data
interface ImageItem {
  src: string;
  title: string;
}

interface InfraCategory {
  category: string;
  description: string;
  images: ImageItem[];
}

const Infrastructure: React.FC = () => {
  // 2. Add State for the lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 3. Prevent background scrolling when an image is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  // Organizing infrastructure images into categories
  const infraData: InfraCategory[] = [
    {
      category: "Academic Facilities",
      description: "State-of-the-art classrooms and laboratories designed to foster an interactive and engaging learning environment.",
      images: [
        { src: "/infrastructure/school_building_3.png", title: "School Building" },
        { src: "/infrastructure/school_building1.png", title: "School Building" },
        { src: "/infrastructure/school_building2.png", title: "School Building" },
        { src: "/infrastructure/school_campus.png", title: "School Campus" },
        { src: "/infrastructure/primary_cls_room.png", title: "Primary Classroom" },
        { src: "/infrastructure/pre_primary_classroom.png", title: "Pre-Primary Classroom" },
        { src: "/infrastructure/LKG.png", title: "LKG Room" },
        { src: "/infrastructure/UKG.png", title: "UKG Room" },
        { src: "/infrastructure/LIBRARY.png", title: "School Library" },
      ]
    },
    {
      category: "Specialized Laboratories",
      description: "Fully equipped laboratories providing hands-on practical experience across various scientific disciplines.",
      images: [
        { src: "/infrastructure/computer_lab_snr.png", title: "Senior Computer Lab" },
        { src: "/infrastructure/c_lab_junior.jpg", title: "Junior Computer Lab" },
        { src: "/infrastructure/PHYSICS_lab.png", title: "Physics Lab" },
        { src: "/infrastructure/chem_lab.png", title: "Chemistry Lab" },
        { src: "/infrastructure/geography_lab.png", title: "Geography Lab" },
        { src: "/infrastructure/atal_tinkering_lab.png", title: "Atal Tinkering Lab" },
      ]
    },
    {
      category: "Arts & Activities",
      description: "Dedicated spaces for nurturing creativity, physical fitness, and holistic development.",
      images: [
        { src: "/infrastructure/Art_room.jpg", title: "Art & Craft Room" },
        { src: "/infrastructure/Dance_room.jpg", title: "Dance Room" },
        { src: "/infrastructure/music_room.jpg", title: "Music Room" },
        { src: "/infrastructure/play_ground.png", title: "Playground" },
        { src: "/infrastructure/play_room.png", title: "Indoor Play Room" },
      ]
    },
    {
      category: "Administration & Support",
      description: "Facilities ensuring smooth operations and safe transport for all our students.",
      images: [
        { src: "/infrastructure/Registraion_office.jpg", title: "Registration Office" },
        { src: "/infrastructure/school_teachers.jpg", title: "Staff Room" },
        { src: "/infrastructure/school_buses.jpg", title: "Transport Facility" },
      ]
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden relative">
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-[#004b87]">
         <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/infrastructure/school_building_3.png" 
          alt="School Infrastructure" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider uppercase mb-4 drop-shadow-lg">
            Our Infrastructure
          </h1>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
          <p className="text-blue-100 mt-6 max-w-2xl text-lg md:text-xl">
            Providing a world-class environment for holistic development and academic excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-20">
        
        {infraData.map((section, index) => (
          <section key={index} className="scroll-mt-24">
            
            {/* Section Header */}
            <div className="mb-10 text-center md:text-left border-l-0 md:border-l-4 border-orange-500 md:pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {section.category}
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                {section.description}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {section.images.map((img, imgIndex) => (
                <div 
                  key={imgIndex} 
                  onClick={() => setSelectedImage(img.src)}
                  className="group relative bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                      loading="lazy"
                    />
                    
                  </div>
                  <div className="p-4 bg-white border-t border-gray-50">
                    <h3 className="text-lg font-semibold text-[#004b87] group-hover:text-orange-600 transition-colors">
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Divider between sections */}
            {index !== infraData.length - 1 && (
              <div className="w-full h-px bg-gray-200 mt-20"></div>
            )}
            
          </section>
        ))}
      </div>

      {/* Full-Screen Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedImage(null)} // Close when clicking the background
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
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Infrastructure;