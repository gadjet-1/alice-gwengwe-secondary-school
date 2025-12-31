"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ChevronDown, 
  Building, 
  UserCheck, 
  BookOpen,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

// --- Custom Icons for X and TikTok (Official Brand Silhouettes) ---
const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3-.71.47-1.12 1.28-1.24 2.11-.11.75.13 1.52.61 2.1.42.51 1.07.82 1.73.84 1.28.11 2.57-.61 3.06-1.77.14-.34.19-.7.19-1.07-.02-3.47-.01-6.95-.01-10.43Z" />
  </svg>
);

// --- Animation Constants ---
const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const socialPlatforms = [
    { name: 'Facebook', icon: <Facebook size={24} />, color: '#1877F2', url: '#' },
    { name: 'Instagram', icon: <Instagram size={24} />, color: '#E4405F', url: '#' },
    { name: 'X', icon: <XIcon size={20} />, color: '#000000', url: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, color: '#0A66C2', url: '#' },
    { name: 'YouTube', icon: <Youtube size={24} />, color: '#FF0000', url: '#' },
    { name: 'TikTok', icon: <TikTokIcon size={22} />, color: '#010101', url: '#' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#002147] selection:text-white">
      
      {/* 1. CONTACT HERO SECTION */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80" 
            alt="School Administration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002147]/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-lg text-white/90 font-light tracking-wide max-w-2xl mx-auto"
          >
            We are here to assist you. Our administration office is committed to providing timely and clear communication.
          </motion.p>
        </div>
      </section>

      {/* 2. SCHOOL CONTACT INFORMATION & SOCIAL MEDIA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 border-b border-gray-100 pb-20">
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#002147] border-b border-gray-100 pb-4">Our Location</h2>
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#800000] shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-gray-900">Alice Gwengwe Secondary School</p>
                  <p className="text-gray-600 leading-relaxed">
                    Main Campus, Area 25<br />
                    P.O. Box 402, Lilongwe, Malawi
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#002147] border-b border-gray-100 pb-4">General Inquiries</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <Phone className="text-[#800000] shrink-0" size={18} />
                  <p className="text-gray-600 font-medium">+265 (0) 888 123 456</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="text-[#800000] shrink-0" size={18} />
                  <p className="text-gray-600 font-medium">info@alicegwengwe.edu.mw</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#002147] border-b border-gray-100 pb-4">Office Hours</h2>
              <div className="flex gap-4 items-start">
                <Clock className="text-[#800000] shrink-0 mt-1" size={18} />
                <div className="text-gray-600 text-sm space-y-1">
                  <div className="flex justify-between w-48"><span>Mon — Fri:</span><span className="font-bold">07:30 - 16:30</span></div>
                  <div className="flex justify-between w-48"><span>Saturday:</span><span className="font-bold">08:00 - 12:00</span></div>
                  <div className="flex justify-between w-48 text-gray-400"><span>Sunday:</span><span>Closed</span></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SOCIAL MEDIA SECTION */}
          <div className="pt-20">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl font-serif font-bold text-[#002147]">Connect with us on Social Media</h2>
              <div className="h-1 w-12 bg-[#800000] mx-auto mt-4" />
            </motion.div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -8 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all shadow-md group-hover:shadow-xl group-hover:brightness-110"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#002147] transition-colors">
                    {platform.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM SECTION */}
      <section className="py-20 bg-[#F9FAFB] border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-serif font-bold text-[#002147] mb-6">Send an Inquiry</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Please fill out the form below. Our staff will direct your message to the appropriate department.
                </p>
                <div className="p-6 bg-[#002147]/5 border-l-4 border-[#002147]">
                  <p className="text-sm font-bold text-[#002147] mb-2 uppercase tracking-wider">Privacy Notice</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Your information is used solely for school communication.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.form 
                onSubmit={handleSubmit}
                {...fadeInUp}
                className="bg-white p-8 border border-gray-200 shadow-sm space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup label="Full Name" required>
                    <input 
                      type="text" required className="form-input" 
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </InputGroup>
                  <InputGroup label="Phone Number" required>
                    <input 
                      type="tel" required placeholder="+265" className="form-input" 
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </InputGroup>
                </div>
                <InputGroup label="Email Address" required>
                  <input 
                    type="email" required className="form-input" 
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </InputGroup>
                <InputGroup label="Subject" required>
                  <div className="relative">
                    <select 
                      required className="form-input appearance-none"
                      value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select Subject</option>
                      <option>Admissions Inquiry</option>
                      <option>Academic Affairs</option>
                      <option>General Information</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                </InputGroup>
                <InputGroup label="Your Message" required>
                  <textarea 
                    required rows={5} className="form-input resize-none"
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </InputGroup>
                <div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                      formStatus === 'submitting' ? 'bg-gray-400' : 'bg-[#002147] hover:bg-[#800000] text-white'
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Processing...' : <>Send Message <Send size={16} /></>}
                  </button>
                  <AnimatePresence>
                    {formStatus === 'success' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 p-4 bg-teal-50 border border-teal-200 text-teal-800 text-sm text-center">
                        Inquiry sent successfully. We will respond within 48 hours.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAP SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-serif font-bold text-[#002147] mb-6">Our Location</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Situated in Area 25, Lilongwe, our campus is easily accessible via the main road. 
              </p>
              <div className="bg-[#F9FAFB] p-4 border-l-4 border-[#800000] text-sm italic">
                "Adjacent to the Area 25 Community Hospital."
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="h-[400px] bg-gray-100 relative overflow-hidden shadow-inner">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.456728362!2d33.77!3d-13.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d31d!2sArea%2025%2C%20Lilongwe!5e0!3m2!1sen!2smw!4v123456789" className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" allowFullScreen loading="lazy"></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ADMINISTRATIVE CONTACTS */}
      <section className="py-20 bg-[#002147]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#002147]">Administrative Offices</h2>
            <div className="h-1 w-20 bg-[#800000] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <OfficeCard icon={<UserCheck size={24} />} title="Head Teacher" phone="+265 888 123 111" email="head@alicegwengwe.edu.mw" />
            <OfficeCard icon={<Building size={24} />} title="Admissions" phone="+265 888 123 222" email="admissions@alicegwengwe.edu.mw" />
            <OfficeCard icon={<BookOpen size={24} />} title="Registry" phone="+265 888 123 333" email="academics@alicegwengwe.edu.mw" />
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="relative py-28 text-white overflow-hidden text-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" alt="CTA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#002147]/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-serif font-bold mb-6">Experience Alice Gwengwe</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
              <button className="px-10 py-4 bg-[#800000] text-white font-bold uppercase tracking-widest hover:bg-[#600000] transition-all">Apply Now</button>
              <button className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#002147] transition-all flex items-center justify-center gap-2">Visit Campus <ArrowRight size={18} /></button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center text-xs tracking-widest text-gray-500 uppercase">
          © 2024 Alice Gwengwe Secondary School
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .form-input {
          width: 100%; padding: 1rem; background-color: #F9FAFB; border: 1px solid #E5E7EB; font-size: 0.875rem; color: #1F2937; transition: all 0.2s;
        }
        .form-input:focus {
          outline: none; border-color: #800000; background-color: #fff; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
        }
      `}} />
    </div>
  );
}

function InputGroup({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">{label} {required && <span className="text-[#800000]">*</span>}</label>
      {children}
    </div>
  );
}

function OfficeCard({ icon, title, phone, email }) {
  return (
    <motion.div {...fadeInUp} className="bg-white p-8 border border-gray-200 text-center hover:border-[#800000] transition-colors">
      <div className="w-12 h-12 bg-[#002147]/5 text-[#002147] flex items-center justify-center mx-auto mb-6">{icon}</div>
      <h4 className="font-serif font-bold text-[#002147] text-lg mb-4">{title}</h4>
      <div className="space-y-2 text-sm text-gray-600">
        <p className="flex items-center justify-center gap-2"><Phone size={14} className="text-[#800000]" /> {phone}</p>
        <p className="flex items-center justify-center gap-2 underline underline-offset-4 decoration-gray-200"><Mail size={14} className="text-[#800000]" /> {email}</p>
      </div>
    </motion.div>
  );
}