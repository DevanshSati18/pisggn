"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  '/slider/DiwaliCelebration.jpg',
  '/slider/Christmas.jpg',
  '/slider/NewYear.jpg',
  '/slider/Holi.jpg',
];

const SideShow = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 
        bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 
        bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition
              ${index === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SideShow;
