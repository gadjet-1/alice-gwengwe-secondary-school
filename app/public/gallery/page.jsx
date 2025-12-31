"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera, Calendar, Info } from 'lucide-react';

// --- SEO Metadata ---
const metadata = {
  title: "Gallery | Alice Gwengwe Secondary School",
  description: "Explore life at Alice Gwengwe Secondary School. A visual record of our campus, academic excellence, sporting achievements, and cultural heritage."
};

// --- Gallery Data ---
const categories = [
  "All",
  "Campus",
  "Academic Activities",
  "Sports",
  "Cultural Events",
  "Assemblies & Ceremonies"
];

const galleryItems = [
  {
    id: 1,
    title: "Main Administration Block",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80",
    date: "August 2024"
  },
  {
    id: 2,
    title: "Senior Science Laboratory Session",
    category: "Academic Activities",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80",
    date: "September 2024"
  },
  {
    id: 3,
    title: "Annual Inter-House Sports Day",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80",
    date: "July 2024"
  },
  {
    id: 4,
    title: "Traditional Dance Showcase",
    category: "Cultural Events",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    date: "June 2024"
  },
  {
    id: 5,
    title: "Monday Morning Assembly",
    category: "Assemblies & Ceremonies",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    date: "October 2024"
  },
  {
    id: 6,
    title: "Modern Computer Laboratory",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80",
    date: "August 2024"
  },
  {
    id: 7,
    title: "Mathematics Excellence Workshop",
    category: "Academic Activities",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
    date: "September 2024"
  },
  {
    id: 8,
    title: "Girls Basketball Finals",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80",
    date: "July 2024"
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#002147] selection:text-white">
      
      {/* 1. GALLERY HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" 
            alt="School Campus Life" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002147]/65" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
          >
            Gallery
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-24 bg-[#800000] mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto"
          >
            A glimpse into life at Alice Gwengwe Secondary School
          </motion.p>
        </div>
      </section>

      {/* 2. GALLERY INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-[#800000] font-bold">Holistic Education</h2>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-serif italic">
              "Our gallery serves as a visual record of our commitment to academic excellence, disciplined character, and the diverse talents of our student body."
            </p>
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
              From rigorous laboratory work to the vibrant energy of our sporting fields, these curated moments reflect the everyday pursuit of integrity and knowledge at Alice Gwengwe Secondary School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. GALLERY CATEGORIES / FILTERS */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-y border-gray-100 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-[#002147] text-white border-[#002147]' 
                  : 'bg-transparent text-gray-500 border-transparent hover:border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMAGE GRID SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#002147]/0 group-hover:bg-[#002147]/20 transition-all duration-500 flex items-center justify-center">
                      <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                    </div>
                  </div>
                  
                  <div className="p-5 border-t border-gray-50">
                    <span className="text-[10px] uppercase tracking-widest text-[#800000] font-bold block mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#002147] line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-gray-400 text-xs">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. FEATURED MOMENTS (Graduation Highlight) */}
      <section className="py-24 bg-[#002147]/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#800000]">Highlighted Event</span>
              <h2 className="text-4xl font-serif font-bold text-[#002147]">2024 Graduation Ceremony</h2>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Our most significant annual event celebrating the achievements of our graduating class. A testament to years of dedication, discipline, and intellectual growth.
              </p>
              <button className="flex items-center gap-3 text-[#002147] font-bold uppercase tracking-widest text-sm hover:text-[#800000] transition-colors group">
                View Ceremony Album <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#800000]/20 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80" 
                alt="Graduation Highlight" 
                className="w-full h-[400px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEDIA POLICY / NOTICE */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex gap-6 items-start p-8 bg-gray-50 border border-gray-200">
            <Info className="text-[#002147] shrink-0" size={24} />
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#002147]">Media Policy & Consent</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Alice Gwengwe Secondary School respects the privacy of its students and staff. All photographs displayed on this official website are used with explicit consent from parents/guardians and are intended solely for educational and institutional documentation purposes.
              </p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                Unauthorized reproduction of gallery media is strictly prohibited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-6xl w-full h-full flex flex-col justify-center gap-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex-1 overflow-hidden flex items-center justify-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-black/40 backdrop-blur-md p-6 text-white border-l-4 border-[#800000]">
                <span className="text-[10px] uppercase tracking-widest text-[#800000] font-bold">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-serif font-bold mt-1">{selectedImage.title}</h3>
                <p className="text-white/60 text-sm mt-2 flex items-center gap-2">
                  <Calendar size={14} /> {selectedImage.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center text-xs tracking-widest text-gray-400 uppercase font-bold">
          © 2024 Alice Gwengwe Secondary School | Photo Archives
        </div>
      </footer>

      {/* STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #002147;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #800000;
        }
      `}} />
    </div>
  );
}

function ArrowRight({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}