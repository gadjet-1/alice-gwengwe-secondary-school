"use client";
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ChevronRight, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  // Official Brand Social Icons via SVG
  const SocialIcons = [
    {
      name: 'Facebook',
      url: '#',
      color: 'bg-[#1877F2]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      name: 'X',
      url: '#',
      color: 'bg-black',
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: '#',
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: '#',
      color: 'bg-[#0A66C2]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-[#020d1f] text-[#f8f5f0] font-sans selection:bg-[#00d1c1] selection:text-[#020d1f] overflow-hidden">
      {/* Background Aesthetic Overlays */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d1c1] to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00d1c1]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00d1c1]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Section 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col items-center md:items-start group cursor-default">
              <div className="w-20 h-20 bg-[#f8f5f0] p-1.5 rounded-2xl shadow-xl shadow-black/20 transform transition-transform group-hover:scale-105 duration-500">
                <div className="w-full h-full border-2 border-[#020d1f] rounded-xl flex items-center justify-center overflow-hidden bg-white">
                  {/* Integrated SVG Logo Placeholder */}
                  <GraduationCap className="w-12 h-12 text-[#020d1f]" />
                </div>
              </div>
              <div className="mt-6 text-center md:text-left">
                <h2 className="text-2xl font-bold tracking-tight text-white">Alice Gwengwe</h2>
                <p className="text-[#00d1c1] font-medium tracking-widest text-xs uppercase">Secondary School</p>
                <p className="mt-4 text-sm text-[#f8f5f0]/70 leading-relaxed max-w-sm">
                  Empowering the next generation of leaders through academic excellence, innovation, and character building in a modern learning environment.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3 text-[#f8f5f0]/80 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00d1c1]/20 transition-colors">
                  <MapPin className="w-4 h-4 text-[#00d1c1]" />
                </div>
                <span>Area 47, Lilongwe, Malawi</span>
              </div>
              <div className="flex items-center gap-3 text-[#f8f5f0]/80 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00d1c1]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#00d1c1]" />
                </div>
                <span>+265 888 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-[#f8f5f0]/80 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00d1c1]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#00d1c1]" />
                </div>
                <span>info@alicegwengwe.edu.mw</span>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#00d1c1] rounded-full" />
            </h3>
            <ul className="space-y-4">
              {['Academic Calendar', 'Student Portal', 'E-Learning', 'Library Services', 'School Fees', 'Examination Results'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#f8f5f0]/60 hover:text-[#00d1c1] transition-all duration-300 flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Institutional */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
              Institutional
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#00d1c1] rounded-full" />
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Our Vision', 'Staff Directory', 'Governance', 'Careers', 'Alumni Network'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#f8f5f0]/60 hover:text-[#00d1c1] transition-all duration-300 flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Interaction & Contact */}
          <div className="lg:col-span-4 space-y-10">
            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <GraduationCap className="w-16 h-16" />
               </div>
               <h4 className="text-xl font-bold text-white mb-2">Ready to Join Us?</h4>
               <p className="text-sm text-[#f8f5f0]/70 mb-5">Applications for the 2025/2026 Academic Year are now open.</p>
               <button className="w-full py-3 px-6 rounded-xl bg-[#00d1c1] hover:bg-[#00b8a9] text-[#020d1f] font-bold text-sm tracking-wide transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#00d1c1]/20">
                 Apply Now <ExternalLink className="w-4 h-4" />
               </button>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
              <form onSubmit={handleSubscribe} className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d1c1]/50 focus:border-[#00d1c1] transition-all placeholder:text-[#f8f5f0]/30"
                />
                <button 
                  type="submit"
                  className={`absolute right-2 top-2 bottom-2 px-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${subscribed ? 'bg-green-500 text-white' : 'bg-[#00d1c1] text-[#020d1f] hover:scale-105'}`}
                >
                  {subscribed ? 'Sent!' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
               <h3 className="text-white font-bold text-lg">Message Us</h3>
               <div className="space-y-3">
                 <div className="grid grid-cols-2 gap-3">
                   <input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-xs focus:outline-none focus:border-[#00d1c1] transition-all"
                   />
                   <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-xs focus:outline-none focus:border-[#00d1c1] transition-all"
                   />
                 </div>
                 <textarea 
                  rows="2" 
                  placeholder="How can we help?" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-4 text-xs focus:outline-none focus:border-[#00d1c1] transition-all resize-none"
                 />
                 <button className="text-[#00d1c1] text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                   Send Message <Send className="w-3 h-3" />
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Social Media Row */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-[#f8f5f0]/40 font-bold">Follow Our Community</span>
            <div className="flex gap-3">
              {SocialIcons.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className={`${social.color} p-2.5 rounded-full transform transition-all hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/40 flex items-center justify-center`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex gap-8 text-xs font-medium text-[#f8f5f0]/40 uppercase tracking-tighter">
            <a href="#" className="hover:text-[#00d1c1] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00d1c1] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#00d1c1] transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Mandatory Copyright Row */}
        <div className="mt-12 flex items-center justify-center py-6 border-t border-white/5">
           <p className="text-[#f8f5f0]/30 text-xs text-center">
              &copy; {new Date().getFullYear()} Alice Gwengwe Secondary School. Powered By Gadjet.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default App;