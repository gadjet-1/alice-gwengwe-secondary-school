"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  FileText, 
  Calendar, 
  CreditCard, 
  Upload, 
  ChevronDown, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  ArrowRight,
  Info
} from 'lucide-react';

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

// --- FAQ Item Component ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#002147] transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AdmissionsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '', gender: '', dob: '', prevSchool: '', class: '',
    parentName: '', phone: '', email: '', address: '', notes: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      studentName: '', gender: '', dob: '', prevSchool: '', class: '',
      parentName: '', phone: '', email: '', address: '', notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#002147] selection:text-white">
      
      {/* 1. ADMISSIONS HERO SECTION */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" 
            alt="Students on Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002147]/75" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            Admissions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 font-light tracking-wide uppercase"
          >
            Join Alice Gwengwe Secondary School
          </motion.p>
        </div>
      </section>

      {/* 2. ADMISSION OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-serif font-bold text-[#002147] mb-6">General Admission Overview</h2>
            <div className="h-1 w-20 bg-[#800000] mx-auto mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Alice Gwengwe Secondary School welcomes applications from students who demonstrate academic 
              potential and a commitment to our values of discipline and integrity. We offer entry points 
              at Form 1 level, as well as limited transfer opportunities for Form 2 and Form 3 students.
            </p>
            <p className="text-gray-500 italic">
              Our school is an equal opportunity institution and does not discriminate based on 
              religious affiliation or background.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. ADMISSION REQUIREMENTS */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-serif font-bold text-[#002147] mb-6">Academic Qualifications</h3>
              <ul className="space-y-4">
                {[
                  "Primary School Leaving Certificate of Education (PSLCE) for Form 1 entry.",
                  "Official transfer letter and latest academic reports for transfer students.",
                  "Minimum required grade average in Core Mathematics and English.",
                  "Successful completion of the school's entrance assessment (if applicable)."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200">
                    <CheckCircle className="text-[#008080] shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-serif font-bold text-[#002147] mb-6">Required Documentation</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "ID Documents", desc: "Certified copy of Birth Certificate." },
                  { title: "Academic Proof", desc: "Latest Results Slip or Report Card." },
                  { title: "Photography", desc: "Two recent passport-sized photos." },
                  { title: "Identification", desc: "Copy of Parent/Guardian National ID." }
                ].map((doc, i) => (
                  <div key={i} className="p-6 bg-white border-l-4 border-[#800000] shadow-sm">
                    <h4 className="font-bold text-[#002147] mb-1">{doc.title}</h4>
                    <p className="text-sm text-gray-500">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. APPLICATION PROCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeader title="The Application Journey" subtitle="Your step-by-step guide to enrollment" />
          <div className="grid md:grid-cols-5 gap-8 mt-12">
            {[
              { step: "01", title: "Apply", desc: "Submit online or physical form." },
              { step: "02", title: "Review", desc: "Staff verify all documents." },
              { step: "03", title: "Assess", desc: "Entrance interview or exam." },
              { step: "04", title: "Select", desc: "Offer of admission issued." },
              { step: "05", title: "Enroll", desc: "Payment of fees and registration." }
            ].map((s, i) => (
              <motion.div key={i} {...fadeInUp} className="relative group">
                <div className="text-4xl font-serif font-bold text-gray-100 group-hover:text-[#800000]/10 transition-colors absolute -top-8 left-1/2 -translate-x-1/2 z-0">
                  {s.step}
                </div>
                <div className="relative z-10 pt-4">
                  <h4 className="font-bold text-[#002147] mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY DATES & DEADLINES (Overlay Section) */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
            alt="School Calendar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#374151]/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold uppercase tracking-widest">Important Admissions Dates</h2>
            <div className="h-1 w-20 bg-[#800000] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Applications Open", date: "May 1st, 2024", icon: <Calendar size={24} /> },
              { label: "Closing Date", date: "July 15th, 2024", icon: <Clock size={24} /> },
              { label: "Entrance Exams", date: "August 5th, 2024", icon: <FileText size={24} /> },
              { label: "Term One Begins", date: "September 9th, 2024", icon: <CheckCircle size={24} /> }
            ].map((d, i) => (
              <motion.div key={i} {...fadeInUp} className="bg-white/10 backdrop-blur-md p-8 border border-white/20 text-center">
                <div className="text-[#008080] mb-4 flex justify-center">{d.icon}</div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-2">{d.label}</p>
                <h4 className="text-xl font-bold">{d.date}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEES & FINANCIAL INFORMATION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-12 items-center bg-[#F9FAFB] p-10 border border-gray-200">
            <div className="md:w-1/3 text-center md:text-left">
              <CreditCard className="text-[#800000] mb-4 mx-auto md:mx-0" size={48} />
              <h3 className="text-2xl font-serif font-bold text-[#002147] mb-4">Financial Overview</h3>
              <p className="text-sm text-gray-500">Clear and transparent tuition structures for Malawian families.</p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">Boarding Fees</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Includes full-term accommodation, meals, medical support, and laundry services.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">Uniform & Study Material</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Required school attire and core exercise books are provided upon initial registration.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="mt-8 p-6 bg-[#002147]/5 border-l-4 border-[#002147] text-sm text-gray-600">
            <div className="flex gap-3">
              <Info size={18} className="text-[#002147] shrink-0" />
              <p>For detailed fee structures and bank details, please download the <span className="font-bold text-[#002147] cursor-pointer hover:underline">Official Financial Policy Guide</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ONLINE APPLICATION FORM */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#002147]">Online Application Form</h2>
            <div className="h-1 w-20 bg-[#800000] mx-auto mt-4 mb-6" />
            <p className="text-gray-500">Please fill out all mandatory fields carefully to avoid selection delays.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-12">
            {/* Student Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-3">
                <User size={18} /> Student Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Student Full Name" required>
                  <input type="text" required placeholder="As shown on PSLC" className="form-input" 
                         value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
                </InputGroup>
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Gender" required>
                    <select required className="form-input" value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </InputGroup>
                  <InputGroup label="Date of Birth" required>
                    <input type="date" required className="form-input" 
                           value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
                  </InputGroup>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Previous School">
                  <input type="text" placeholder="Name of primary school" className="form-input" 
                         value={formData.prevSchool} onChange={(e) => setFormData({...formData, prevSchool: e.target.value})} />
                </InputGroup>
                <InputGroup label="Class Applying For" required>
                  <select required className="form-input" value={formData.class} onChange={(e) => setFormData({...formData, class: e.target.value})}>
                    <option value="">Select Class</option>
                    <option>Form 1</option>
                    <option>Form 2 (Transfer)</option>
                    <option>Form 3 (Transfer)</option>
                  </select>
                </InputGroup>
              </div>
            </div>

            {/* Parent Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-3">
                <Phone size={18} /> Parent / Guardian Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" required>
                  <input type="text" required className="form-input" 
                         value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} />
                </InputGroup>
                <InputGroup label="Phone Number" required>
                  <input type="tel" required placeholder="+265..." className="form-input" 
                         value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </InputGroup>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Email Address">
                  <input type="email" className="form-input" 
                         value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </InputGroup>
                <InputGroup label="Home Address" required>
                  <input type="text" required placeholder="District, Town/Village" className="form-input" 
                         value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
                </InputGroup>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-3">
                <Upload size={18} /> Documentation
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 border-2 border-dashed border-gray-200 text-center hover:border-[#008080] transition-colors cursor-pointer">
                  <Upload className="mx-auto text-gray-300 mb-2" size={32} />
                  <p className="text-sm font-bold text-[#002147]">Results Slip (PDF/Image)</p>
                  <p className="text-xs text-gray-400 mt-1">Upload PSLCE or latest reports</p>
                </div>
                <div className="p-8 border-2 border-dashed border-gray-200 text-center hover:border-[#008080] transition-colors cursor-pointer">
                  <Upload className="mx-auto text-gray-300 mb-2" size={32} />
                  <p className="text-sm font-bold text-[#002147]">Birth Certificate</p>
                  <p className="text-xs text-gray-400 mt-1">Clear scan or photograph</p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 font-bold uppercase tracking-widest transition-all ${
                  isSubmitting ? 'bg-gray-400' : 'bg-[#002147] hover:bg-[#800000] text-white shadow-xl'
                }`}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Official Application'}
              </button>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-6 bg-teal-50 border border-teal-200 text-teal-800 text-center"
                >
                  <h4 className="font-bold mb-2">Application Submitted Successfully!</h4>
                  <p className="text-sm">Thank you for choosing Alice Gwengwe. Our admissions office will contact you via phone or email within 5 working days.</p>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#002147]">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-[#800000] mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            <FAQItem 
              question="When is the best time to apply for Form 1?"
              answer="We recommend applying between May and July, as selection is finalized by August to ensure students are ready for the September term opening."
            />
            <FAQItem 
              question="Does the school offer scholarships or financial aid?"
              answer="Currently, scholarships are merit-based and awarded to the top three performing students in our internal Form 2 assessments. We also consider special cases through our Board of Directors."
            />
            <FAQItem 
              question="Is there an application fee?"
              answer="A non-refundable application processing fee of MK 10,000 is required with every official submission."
            />
            <FAQItem 
              question="What is the average class size?"
              answer="To ensure personalized attention, we maintain an average class size of 35 to 40 students."
            />
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION (Overlay Section) */}
      <section className="relative py-32 text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80" 
            alt="School Hall" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002147]/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join a community where academic excellence meets strong moral discipline. 
              Limited slots are available for the upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button onClick={() => window.scrollTo({ top: document.body.scrollHeight/2, behavior: 'smooth' })} 
                      className="px-10 py-4 bg-[#800000] text-white font-bold uppercase tracking-widest hover:bg-[#600000] transition-all">
                Apply Online Now
              </button>
              <button className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#002147] transition-all flex items-center gap-2 mx-auto sm:mx-0">
                Contact Admissions <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER MOCK */}
      <footer className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            © 2024 Alice Gwengwe Secondary School | Excellence Through Discipline
          </p>
        </div>
      </footer>

      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 1rem;
          background-color: #F9FAFB;
          border: 1px solid #E5E7EB;
          font-size: 0.875rem;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: #800000;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
}

// --- Internal Helper ---
function SectionHeader({ title, subtitle }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-[#002147] mb-4">{title}</h2>
      <div className="h-1 w-20 bg-[#800000] mx-auto mb-4" />
      <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">{subtitle}</p>
    </div>
  );
}

function InputGroup({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
        {label} {required && <span className="text-[#800000]">*</span>}
      </label>
      {children}
    </div>
  );
}