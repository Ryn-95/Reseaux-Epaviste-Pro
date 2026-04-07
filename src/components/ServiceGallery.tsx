import React from 'react';
import Image from 'next/image';

const images = [
  "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=800", // Tow truck
  "https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?q=80&w=800", // Mechanic / Towing
  "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?q=80&w=800", // Junkyard / Scrap
];

export default function ServiceGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-hover group">
          <Image
            src={img}
            alt={`Intervention Épaviste - Image ${i + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ filter: "grayscale(0.1) contrast(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent"></div>
        </div>
      ))}
    </div>
  );
}
