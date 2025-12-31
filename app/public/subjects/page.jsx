"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Beaker, 
  Calculator, 
  Globe, 
  BookOpen, 
  Cpu, 
  Leaf, 
  ShieldCheck, 
  Award, 
  GraduationCap,
  ChevronRight,
  ClipboardList,
  Library,
  Languages
} from 'lucide-react';

// --- Curriculum Data ---
const curriculumData = [
  {
    category: "Sciences",
    icon: <Beaker size={24} />,
    description: "Developing analytical thinking and a deep understanding of the natural world through empirical study.",
    subjects: [
      { name: "Mathematics", focus: "Logic, algebra, and trigonometry", assessment: "Paper 1 & 2 (Terminal Exams)" },
      { name: "Biology", focus: "Human anatomy, ecology, and plant life", assessment: "Practical Assessment + Theory" },
      { name: "Chemistry", focus: "Matter, chemical reactions, and industrial apps", assessment: "Laboratory Practicals + Exams" },
      { name: "Physics", focus: "Mechanics, energy, and electromagnetism", assessment: "Theoretical & Practical Papers" }
    ]
  },
  {
    category: "Languages",
    icon: <Languages size={24} />,
    description: "Fostering excellence in communication, literacy, and cultural appreciation through the mastery of official and national languages.",
    subjects: [
      { name: "English Language", focus: "Grammar, syntax, and advanced formal communication", assessment: "Composition, Comprehension & Oral Tests" },
      { name: "English Literature", focus: "Critical analysis of prose, poetry, and drama", assessment: "Analytical Essays & Context Papers" },
      { name: "Chichewa", focus: "Malawian linguistic heritage and literary expression", assessment: "Written Exams & Creative Writing" }
    ]
  },
  {
    category: "Humanities",
    icon: <BookOpen size={24} />,
    description: "Cultivating effective communication, critical analysis, and a comprehensive understanding of human history and society.",
    subjects: [
      { name: "Geography", focus: "Physical landscapes and human-environment interaction", assessment: "Fieldwork + Terminal Exams" },
      { name: "History", focus: "Malawian, African, and World history", assessment: "Essay-based Assessment" },
      { name: "Social Studies", focus: "Civic education and Bible knowledge", assessment: "Written Exams" },
      { name: "Bible Knowledge", focus: "Moral ethics and theological study", assessment: "Scriptural Analysis Papers" }
    ]
  },
  {
    category: "Practical & Technical",
    icon: <Cpu size={24} />,
    description: "Equipping students with modern technical skills and vocational competencies essential for the 21st-century economy.",
    subjects: [
      { name: "Agriculture", focus: "Crop science and livestock management", assessment: "School Farm Projects + Exams" },
      { name: "Computer Studies", focus: "Information technology and basic programming", assessment: "Practical Lab Tests + Theory" },
      { name: "Life Skills", focus: "Social ethics and personal development", assessment: "Reflective Coursework" }
    ]
  }
];

export default function SubjectsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#002147] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80" 
            alt="Students in a classroom environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002147]/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Subjects Offered
            </h1>
            <div className="h-1 w-20 bg-[#800000] mx-auto mb-6" />
            <p className="text-white/70 text-lg font-light tracking-wide max-w-2xl mx-auto">
              A comprehensive curriculum aligned with the Malawi National Secondary School standards, fostering academic rigor and intellectual curiosity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-serif font-bold text-[#002147]">Commitment to Academic Excellence</h2>
            <p className="text-gray-600 leading-relaxed text-lg italic">
              "Our academic program is designed to provide a balanced transition from Junior to Senior secondary levels, ensuring every student develops the analytical, linguistic, and technical tools required for tertiary success and professional life."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#002147]/5 flex items-center justify-center text-[#800000]">
                  <ShieldCheck size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#002147]">National Standards</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#002147]/5 flex items-center justify-center text-[#800000]">
                  <GraduationCap size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#002147]">Career Readiness</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#002147]/5 flex items-center justify-center text-[#800000]">
                  <Library size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#002147]">Holistic Learning</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SUBJECT CATEGORIES & CARDS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Category Selection */}
            <aside className="lg:w-1/4 space-y-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Curriculum Pillars</h3>
              <div className="space-y-2">
                {curriculumData.map((dept, index) => (
                  <button
                    key={dept.category}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex items-center justify-between p-5 transition-all duration-300 border-l-4 ${
                      activeTab === index 
                      ? 'bg-white border-[#800000] text-[#002147] shadow-sm' 
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <span className="flex items-center gap-3 font-bold uppercase tracking-wider text-xs">
                      {React.cloneElement(dept.icon, { size: 18 })} {dept.category}
                    </span>
                    <ChevronRight size={16} className={activeTab === index ? 'opacity-100' : 'opacity-0'} />
                  </button>
                ))}
              </div>
              <div className="mt-12 p-6 bg-[#002147] text-white space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider border-b border-white/20 pb-2">Subject Selection</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Students in the Senior Level (Forms 3 & 4) choose a minimum of 8 and maximum of 10 subjects including core requirements.
                </p>
              </div>
            </aside>

            {/* Right: Subject Grid */}
            <div className="lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-12"
                >
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-[#002147] mb-4">{curriculumData[activeTab].category} Department</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {curriculumData[activeTab].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {curriculumData[activeTab].subjects.map((subject, sIdx) => (
                      <div 
                        key={sIdx}
                        className="bg-white border border-gray-100 p-8 hover:border-[#800000]/30 transition-colors shadow-sm"
                      >
                        <h4 className="text-xl font-serif font-bold text-[#002147] mb-3">{subject.name}</h4>
                        <div className="space-y-4">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#800000]">Learning Focus</span>
                            <p className="text-sm text-gray-600 mt-1">{subject.focus}</p>
                          </div>
                          <div className="pt-4 border-t border-gray-50 flex items-start gap-3">
                            <ClipboardList size={16} className="text-[#002147] shrink-0 mt-1" />
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Assessment</span>
                              <p className="text-xs text-gray-500 mt-1">{subject.assessment}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC SUPPORT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#002147] text-white p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#800000]">Student Support</span>
                <h2 className="text-4xl font-serif font-bold leading-tight">Beyond the Classroom: Academic Support Systems</h2>
                <p className="text-white/70 leading-relaxed font-light">
                  Education at Alice Gwengwe is not confined to standard periods. We provide a structured ecosystem of support to ensure no student is left behind and high achievers are sufficiently challenged.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Remedial Classes", desc: "Targeted support for challenging concepts." },
                  { title: "Practical Labs", desc: "Extended hours for science and IT sessions." },
                  { title: "Exam Preparation", desc: "Rigorous drilling for national MSCE papers." },
                  { title: "Peer Tutoring", desc: "Guided collaborative learning sessions." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                    <h5 className="font-bold text-sm mb-2 text-[#800000]">{item.title}</h5>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ASSESSMENT NOTICE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#800000]/10 text-[#800000] mb-8">
            <Award size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#002147] mb-6">Assessment & Integrity Notice</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Alice Gwengwe Secondary School adheres to a strict policy of academic honesty. Assessments include both continuous classroom monitoring and end-of-term examinations. Our grading system is aligned with the Malawi National Examinations Board (MANEB) requirements, prioritizing merit, discipline, and verifiable intellectual achievement.
          </p>
          <div className="h-px w-24 bg-[#002147]/20 mx-auto" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">
            Alice Gwengwe Secondary School | Academic Curriculum 2024/25
          </p>
        </div>
      </footer>

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