"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Settings, 
  Microscope, 
  MessageSquare, 
  Wrench, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  UserCheck,
  ArrowRight
} from 'lucide-react';

// --- Departmental Data ---
const departments = [
  {
    id: "sci",
    title: "Sciences Department",
    icon: <Microscope className="text-[#800000]" size={32} />,
    description: "The Sciences Department is dedicated to fostering empirical inquiry and technical proficiency. We prioritize laboratory-based learning and analytical problem-solving across all scientific disciplines.",
    hod: "Mr. J. Phiri",
    subjects: ["Mathematics", "Biology", "Chemistry", "Physics"],
    focus: "Empirical inquiry, laboratory safety, and evidence-based analysis."
  },
  {
    id: "hum",
    title: "Humanities Department",
    icon: <MessageSquare className="text-[#800000]" size={32} />,
    description: "Our Humanities Department focuses on the development of critical thinking, effective communication, and a deep understanding of historical and social contexts within Malawi and the wider world.",
    hod: "Mrs. E. Banda",
    subjects: ["English Language", "Chichewa", "Geography", "History", "Social Studies"],
    focus: "Literary analysis, cultural heritage, and civic responsibility."
  },
  {
    id: "tech",
    title: "Technical & Practical Department",
    icon: <Wrench className="text-[#800000]" size={32} />,
    description: "This department equips students with vocational competencies and practical skills, bridging the gap between theoretical knowledge and real-world application in a modern economy.",
    hod: "Mr. D. Mwale",
    subjects: ["Agriculture", "Computer Studies", "Life Skills"],
    focus: "Skill-based competency, hands-on training, and technological literacy."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#002147] selection:text-white">
      
      {/* 1. DEPARTMENTS HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" 
            alt="School Leadership Building" 
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
              Academic Departments
            </h1>
            <div className="h-1 w-20 bg-[#800000] mx-auto mb-6" />
            <p className="text-white/70 text-lg font-light tracking-wide max-w-2xl mx-auto">
              Structured leadership and specialized supervision to ensure the highest standards of secondary education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DEPARTMENTS OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#800000]">Organization</span>
            <h2 className="text-3xl font-serif font-bold text-[#002147]">Quality Assurance & Coordination</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Alice Gwengwe Secondary School, our academic structure is built upon specialized departments. Each department functions as a center of excellence, responsible for curriculum delivery, teacher supervision, and the continuous monitoring of student performance to meet national benchmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. DEPARTMENT LISTINGS */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 space-y-12">
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row bg-white border border-gray-100 shadow-sm overflow-hidden ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Dept Info */}
              <div className="lg:w-2/3 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-50 rounded-sm">
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#002147]">{dept.title}</h3>
                    <p className="text-xs text-[#800000] font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                      <UserCheck size={14} /> Head of Department: {dept.hod}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-8 border-l-2 border-gray-100 pl-6">
                  {dept.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Core Subjects</h4>
                    <ul className="space-y-2">
                      {dept.subjects.map(sub => (
                        <li key={sub} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 size={14} className="text-[#002147]" /> {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Strategic Focus</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {dept.focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dept Side Graphic/Summary */}
              <div className="lg:w-1/3 bg-[#002147] p-12 text-white flex flex-col justify-center">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#800000] mb-4">Academic Oversight</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                  Continuous performance tracking and resource management are handled directly by the {dept.title} leadership team.
                </p>
                <div className="h-px bg-white/10 w-full mb-6" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs">
                    <Layers size={16} className="text-[#800000]" /> <span>Resource Allocation</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <ShieldCheck size={16} className="text-[#800000]" /> <span>Curriculum Compliance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. DEPARTMENT LEADERSHIP SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-[#002147]">Departmental Leadership Roles</h2>
              <p className="text-gray-600 leading-relaxed">
                Heads of Department (HODs) at Alice Gwengwe are experienced educators responsible for the administrative and academic management of their respective fields. Their roles are vital for maintaining the discipline and high standards associated with our institution.
              </p>
              <ul className="space-y-4">
                {[
                  "Supervision of lesson planning and syllabus coverage",
                  "Coordination of departmental internal examinations",
                  "Mentorship and professional development of teaching staff",
                  "Management of laboratory and classroom resources"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <ArrowRight size={16} className="text-[#800000] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#002147]/5 p-12 border-l-4 border-[#002147]">
              <div className="flex items-center gap-4 mb-6">
                <Users size={40} className="text-[#002147]" />
                <h3 className="text-xl font-bold text-[#002147]">Staff Coordination</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed italic">
                "Our departmental structure ensures that every teacher receives the necessary support and oversight to deliver a first-class education to our students. We prioritize accountability and professional growth above all."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEACHING APPROACH & COLLABORATION */}
      <section className="py-24 bg-[#002147] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Inter-Departmental Synergy</h2>
            <p className="text-white/60 text-sm font-light uppercase tracking-widest">Bridging Academic Disciplines</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 hover:bg-white/5 transition-colors">
              <Settings className="text-[#800000] mb-6" size={24} />
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Lesson Planning</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Standardized planning across all departments ensures syllabus compliance and pedagogical consistency for all learners.
              </p>
            </div>
            <div className="p-8 border border-white/10 hover:bg-white/5 transition-colors">
              <Layers className="text-[#800000] mb-6" size={24} />
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Internal Assessments</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Collaborative exam setting ensures cross-curricular linkages and high academic rigor across all forms.
              </p>
            </div>
            <div className="p-8 border border-white/10 hover:bg-white/5 transition-colors">
              <Users className="text-[#800000] mb-6" size={24} />
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Student Support</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Departments work together to identify students requiring remedial support or advanced academic challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL NOTICE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="h-px w-24 bg-[#800000] mx-auto mb-10" />
          <h2 className="text-2xl font-serif font-bold text-[#002147] mb-6">Commitment to Excellence</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Academic departments at Alice Gwengwe Secondary School are regularly reviewed by the Board of Governors and the Ministry of Education. We maintain strict adherence to the national curriculum while striving for regional academic leadership through innovation and disciplined teaching.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">
            Alice Gwengwe Secondary School | Academic Administration 2024/25
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