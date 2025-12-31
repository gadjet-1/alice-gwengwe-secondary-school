"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  ChevronRight, 
  Search, 
  Bell, 
  FileText, 
  Clock, 
  ArrowUpRight,
  Info,
  Maximize2,
  ArrowLeft
} from 'lucide-react';

// --- Official News Data ---
const newsData = [
  {
    id: 1,
    title: "Release of MSCE Mock Examination Results",
    summary: "The results for the 2024 MSCE Mock Examinations are now available at the Academic Registry. Parents are advised to collect performance reports.",
    category: "Examinations",
    date: "2024-05-15",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    content: "Following the successful completion of the MSCE Mock Examinations, the Academic Committee has finalized the grading process. These results serve as a critical indicator for the upcoming national examinations. Students who performed below the school's threshold are required to attend mandatory remedial sessions starting next Monday. Reports can be collected between 08:00 and 16:00 at the main administration block.",
    isUrgent: true
  },
  {
    id: 2,
    title: "Term 2 Mid-Term Break Schedule",
    summary: "Official dates for the upcoming mid-term break and resumption of classes for all boarding and day students.",
    category: "Academic",
    date: "2024-05-10",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
    content: "The school will break for mid-term on Friday, 24th May 2024. All students are expected to vacate the premises by 14:00. Classes will resume on Monday, 3rd June 2024. Boarding students must report back by 16:00 on Sunday, 2nd June. Please ensure all holiday assignments are completed as they will be graded upon return.",
    isUrgent: false
  },
  {
    id: 3,
    title: "Annual Inter-Secondary Science Fair",
    summary: "Alice Gwengwe Secondary School to host the regional science and innovation fair involving ten neighboring schools.",
    category: "Events",
    date: "2024-05-02",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&q=80",
    content: "We are pleased to announce that our institution has been selected to host this year's Regional Science Fair. Our students have prepared six major projects focusing on renewable energy and agricultural technology. We invite parents and education partners to witness the innovations of our young scientists on the 15th of June in the School Hall.",
    isUrgent: false
  },
  {
    id: 4,
    title: "Revised School Uniform Policy",
    summary: "Clarification on official school attire requirements for the upcoming winter season.",
    category: "General Notices",
    date: "2024-04-28",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    content: "As we approach the winter season, the administration wishes to remind all students of the approved winter uniform. Only the official school maroon sweater or blazer is permitted. Additional non-school jackets are not allowed on campus. We appreciate the cooperation of parents in maintaining the school's standards of discipline and uniformity.",
    isUrgent: false
  },
  {
    id: 5,
    title: "PTA General Meeting Announcement",
    summary: "A mandatory meeting for all parents and guardians to discuss campus development and student welfare.",
    category: "General Notices",
    date: "2024-04-20",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
    content: "The Parent-Teacher Association (PTA) will hold its second general meeting of the year on Saturday, 18th May. Key agenda items include the expansion of the school library and the introduction of new extracurricular programs. Your presence and input are vital for the continued growth of our school community.",
    isUrgent: false
  }
];

const categories = ["All Updates", "Academic", "Examinations", "Events", "General Notices"];

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All Updates");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredNews = useMemo(() => {
    if (activeFilter === "All Updates") return newsData;
    return newsData.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const urgentNews = useMemo(() => newsData.filter(item => item.isUrgent), []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#002147] selection:text-white">
      
      {/* 1. NEWS HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80" 
            alt="School Notice Board" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002147]/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              News & Announcements
            </h1>
            <div className="h-1 w-20 bg-[#800000] mx-auto mb-6" />
            <p className="text-white/70 text-lg font-light tracking-wide max-w-xl mx-auto">
              The official platform for school communications, academic updates, and administrative notices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. URGENT ANNOUNCEMENT (IF ANY) */}
      {urgentNews.length > 0 && (
        <section className="bg-[#800000] py-4">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 text-white">
              <span className="flex items-center gap-2 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                <Bell size={12} /> Urgent
              </span>
              <div className="flex-1 overflow-hidden whitespace-nowrap">
                <p className="text-sm font-medium animate-pulse">
                  {urgentNews[0].title} — Please check the academic registry for full details.
                </p>
              </div>
              <button 
                onClick={() => setSelectedArticle(urgentNews[0])}
                className="text-xs font-bold underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                View Notice
              </button>
            </div>
          </div>
        </section>
      )}

      <main className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: FILTERS & ARCHIVE */}
          <aside className="lg:col-span-3 space-y-12">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Filter by Category</h3>
              <nav className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`text-left px-4 py-3 text-sm transition-all duration-200 flex items-center justify-between group ${
                      activeFilter === cat 
                      ? 'bg-[#002147] text-white font-bold' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                    <ChevronRight size={14} className={activeFilter === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6 bg-[#002147]/5 border-l-4 border-[#002147]">
              <h4 className="text-sm font-bold text-[#002147] uppercase tracking-wider mb-3">Notice Board Policy</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                All announcements posted here are official communications of Alice Gwengwe Secondary School. Parents are encouraged to check this page weekly.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Archive</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="list-none flex items-center justify-between cursor-pointer text-sm font-bold text-slate-700 hover:text-[#800000]">
                    2024 <ChevronRight size={14} className="group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-2 space-y-2 border-l border-gray-100">
                    <button className="text-xs text-gray-500 hover:text-[#002147] block">May 2024</button>
                    <button className="text-xs text-gray-500 hover:text-[#002147] block">April 2024</button>
                    <button className="text-xs text-gray-500 hover:text-[#002147] block">March 2024</button>
                  </div>
                </details>
                <details className="group">
                  <summary className="list-none flex items-center justify-between cursor-pointer text-sm font-bold text-slate-700 hover:text-[#800000]">
                    2023 <ChevronRight size={14} className="group-open:rotate-90 transition-transform" />
                  </summary>
                </details>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: NEWS GRID FEED */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#002147]">
                {activeFilter}
              </h2>
              <div className="text-xs text-gray-400 font-medium">
                Showing {filteredNews.length} updates
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredNews.map((item, index) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer"
                    onClick={() => setSelectedArticle(item)}
                  >
                    {/* Image Preview */}
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#002147]/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 backdrop-blur-sm">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-[#002147]/0 group-hover:bg-[#002147]/10 transition-colors flex items-center justify-center">
                        <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                        <Calendar size={12} className="text-[#800000]" />
                        {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#002147] group-hover:text-[#800000] transition-colors mb-3 leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                        {item.summary}
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#002147] uppercase tracking-widest group-hover:underline decoration-[#800000] underline-offset-4">
                          Read More
                        </span>
                        <ChevronRight size={16} className="text-[#800000] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* DETAILED VIEW MODAL (EXPANDED CARD) */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#002147]/60 backdrop-blur-md flex items-center justify-center p-0 md:p-10"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] shadow-2xl relative overflow-hidden md:rounded-sm flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              {/* Left: Large Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-slate-100">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 left-4 z-20 bg-white/90 p-2 text-[#002147] hover:bg-white transition-all shadow-lg flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                >
                  <ArrowLeft size={16} /> Back to News
                </button>
              </div>
              
              {/* Right: Detailed Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#800000] uppercase tracking-[0.2em]">
                      {selectedArticle.category}
                    </span>
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                      <Clock size={12} /> {new Date(selectedArticle.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                  <div className="p-2 bg-[#002147]/5 text-[#002147]">
                    <FileText size={20} />
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#002147] mb-6 leading-tight">
                    {selectedArticle.title}
                  </h2>

                  <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed mb-10 font-light text-lg">
                    <p>{selectedArticle.content}</p>
                    <p className="mt-4">For further information, please contact the relevant department or the administration office during standard operating hours.</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 italic">
                    <Info size={14} className="text-[#800000]" />
                    Official Institutional Release
                  </div>
                  <button 
                    className="px-6 py-3 bg-[#002147] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#800000] transition-all"
                  >
                    <ArrowUpRight size={14} /> Download Notice
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER NOTICE */}
      <footer className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Official Disclaimer</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Alice Gwengwe Secondary School ensures all information on this page is accurate at the time of publication. For urgent inquiries or to verify a notice, please contact the administrative office directly via the official channels on our contact page.
          </p>
          <div className="mt-8 text-[10px] text-gray-400 uppercase tracking-widest">
            © 2024 Alice Gwengwe Secondary School | Communications Registry
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        details summary::-webkit-details-marker {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}} />
    </div>
  );
}