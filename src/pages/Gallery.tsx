import { useState } from 'react';

const Gallery = () => {
  // Categorized images based on your folder contents
  const images = [
    // Annual Day
    { id: 1, src: '/gallery/annual_1.jpg', category: 'Annual Day', title: 'Annual Function' },
    { id: 2, src: '/gallery/annual_2.jpg', category: 'Annual Day', title: 'Annual Function' },
    { id: 3, src: '/gallery/annual_3.jpg', category: 'Annual Day', title: 'Annual Function' },
    { id: 4, src: '/gallery/annual_4.jpg', category: 'Annual Day', title: 'Annual Function' },
    
    // Events & Celebrations
    { id: 5, src: '/gallery/FARE_WELL_1.jpg', category: 'Events', title: 'Farewell Celebration' },
    { id: 6, src: '/gallery/PPC_2024.jpg', category: 'Events', title: 'PPC 2024' },
    { id: 7, src: '/gallery/S_PUJA_2.jpg', category: 'Events', title: 'Saraswati Puja' },
    { id: 8, src: '/gallery/WOMAN_SEAFTY.jpg', category: 'Events', title: 'Women Safety Workshop' },
    
    // Ashram & Leadership
    { id: 9, src: '/gallery/BSS_1.jpg', category: 'Ashram', title: 'Bharat Sevashram Sangha' },
    { id: 10, src: '/gallery/SECRETARY_SWAMIJI.jpg', category: 'Ashram', title: 'Secretary Swamiji' },
    
    // General / Campus (G1 to G14)
    { id: 11, src: '/gallery/G1.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 12, src: '/gallery/G2.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 13, src: '/gallery/G3.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 14, src: '/gallery/G4.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 15, src: '/gallery/G5.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 16, src: '/gallery/G6.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 17, src: '/gallery/G7.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 18, src: '/gallery/G8.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 19, src: '/gallery/G9.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 20, src: '/gallery/G10.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 21, src: '/gallery/G11.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 22, src: '/gallery/G12.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 23, src: '/gallery/G13.jpg', category: 'Campus', title: 'Campus Activity' },
    { id: 24, src: '/gallery/G14.jpg', category: 'Campus', title: 'Campus Activity' },
  ];

  const categories = ['All', 'Annual Day', 'Events', 'Campus', 'Ashram'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter images based on the selected category
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-8 pb-20">
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#004b87] tracking-tight mb-4 relative inline-block">
          Photo Gallery
          <span className="absolute -bottom-3 left-1/2 w-20 h-1.5 bg-orange-500 -translate-x-1/2 rounded-full"></span>
        </h1>
        <p className="text-gray-600 mt-6 text-lg">
          Explore the vibrant life, events, and spiritual journey at Pranavananda International School.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
              activeCategory === category
                ? 'bg-orange-500 text-white shadow-orange-500/30 scale-105'
                : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Optimized Image Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((img) => (
          <div 
            key={img.id}
            onClick={() => setSelectedImage(img.src)}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-200"
          >
            {/* Image with hardware acceleration and async decoding */}
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
              loading="lazy"
              decoding="async"
            />
            
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#004b87]/90 via-[#004b87]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
                {img.category}
              </span>
              <h3 className="text-white text-lg font-semibold">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center text-gray-500 py-20">
          No images found for this category.
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)} 
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors bg-white/10 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Image */}
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

    </div>
  );
};

export default Gallery;