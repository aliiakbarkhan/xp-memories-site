import { useState } from "react";
import image0 from "@/assets/gallery/0.jpeg";
import image1 from "@/assets/gallery/1.jpg";
import image2 from "@/assets/gallery/2.jpg";
import image3 from "@/assets/gallery/3.jpg";
import image4 from "@/assets/gallery/4.jpg";
import image5 from "@/assets/gallery/5.jpeg";
import image6 from "@/assets/gallery/6.jpeg";
import image7 from "@/assets/gallery/7.jpg";
import image8 from "@/assets/gallery/8.jpeg";
import image9 from "@/assets/gallery/9.jpg";

const GalleryWindow = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    { id: 0, src: image0, title: "Hackathon Award Ceremony" },
    { id: 1, src: image1, title: "RCAT Conference" },
    { id: 2, src: image2, title: "Team Collaboration" },
    { id: 3, src: image3, title: "RCAT Building" },
    { id: 4, src: image4, title: "Project Presentation" },
    { id: 5, src: image5, title: "News Coverage" },
    { id: 6, src: image6, title: "Innovation Award" },
    { id: 7, src: image7, title: "Conference Day" },
    { id: 8, src: image8, title: "Award Reception" },
    { id: 9, src: image9, title: "Tech-10 Achievement" },
  ];

  return (
    <>
      <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
        <div className="bg-[#0054E3] text-white p-3 rounded">
          <h2 className="text-xl font-bold">🖼️ Visual Showcase</h2>
          <p className="text-sm">Photos from hackathons, certifications, and achievements.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-gradient-to-br from-[#ECE9D8] to-[#D4D0C8] border-2 border-gray-400 rounded hover:border-[#0054E3] transition-colors overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕ Close
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryWindow;
