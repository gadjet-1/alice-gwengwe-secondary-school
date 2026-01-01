"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  Users, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Calendar,
  FileText,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowUp,
  ExternalLink,
  ShieldCheck,
  HeartPulse,
  Scale
} from 'lucide-react';

// --- Theme Constants ---
const COLORS = {
  navy: '#002147',
  maroon: '#800000',
  teal: '#008080',
  gray: {
    light: '#F5F5F5',
    medium: '#6B7280',
    dark: '#374151',
    border: '#E5E7EB'
  },
  white: '#FFFFFF'
};

// --- Helper Components ---

const StatCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;
      let totalMiliseconds = 1500; 
      let incrementTime = (totalMiliseconds / end);
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 bg-white border border-gray-200 shadow-sm">
      <div className="text-4xl font-bold text-[#002147] mb-2">{count}{suffix}</div>
      <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const SectionHeading = ({ title, subtitle, centered = false, light = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className={`text-3xl font-serif font-bold ${light ? 'text-white' : 'text-[#002147]'} mb-4`}>{title}</h2>
    <div className={`h-1 w-20 bg-[#800000] ${centered ? 'mx-auto' : ''} mb-4`}></div>
    {subtitle && <p className={`${light ? 'text-white/70' : 'text-gray-600'} max-w-2xl leading-relaxed mx-auto`}>{subtitle}</p>}
  </div>
);

const MobileCarousel = ({ items, renderItem }) => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.targetTouches[0].clientX;
    if (touchStart - touchEnd > 75) {
      setIndex((prev) => (prev + 1) % items.length);
      setTouchStart(null);
    }
    if (touchStart - touchEnd < -75) {
      setIndex((prev) => (prev - 1 + items.length) % items.length);
      setTouchStart(null);
    }
  };

  return (
    <div 
      className="md:hidden overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {renderItem(items[index])}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <div key={i} className={`h-1 w-4 transition-all ${i === index ? 'bg-[#800000]' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function App() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const heroImages = useMemo(() => [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200"
  ], []);

  // SEO and Head Management Effect (Fixed validateDOMNesting error)
  useEffect(() => {
    document.title = "Alice Gwengwe Secondary School | Discipline & Academic Excellence";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Alice Gwengwe Secondary School is a premier boarding school in Malawi focusing on MSCE academic excellence and Christian discipline.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Alice Gwengwe Secondary School is a premier boarding school in Malawi focusing on MSCE academic excellence and Christian discipline.";
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroImages.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const announcements = [
    { date: "Oct 15, 2023", title: "2024 Intake Applications Open", category: "Admissions", desc: "We are now accepting applications for Form 1 and Form 3 for the 2024 academic year." },
    { date: "Sep 28, 2023", title: "Annual Sports Day Results", category: "Campus Life", desc: "Congratulations to the Blue House for winning the 2023 overall trophy." },
    { date: "Sep 10, 2023", title: "Term 1 School Calendar", category: "Academics", desc: "The full calendar for the first term including mid-term breaks is now available." }
  ];

  const newsItems = [
    { img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80", title: "New Science Lab Commissioned", desc: "Alice Gwengwe continues to invest in state-of-the-art facilities for STEM education." },
    { img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80", title: "Debate Team Wins Regional Trophy", desc: "Our students showcased exceptional critical thinking skills at the National Debate Championships." },
    { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80", title: "Cultural Day Celebration", desc: "A vibrant display of Malawian heritage and unity through traditional music and attire." }
  ];

  const lifeCards = [
    { title: "Campus Life", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80", link: "#campus-life" },
    { title: "Student Life", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80", link: "#student-life" },
    { title: "After School", img: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80", link: "#after-school" }
  ];

  const leaders = [
    { name: "Mrs. Alice Gwengwe", role: "Founder & Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" },
    { name: "Mr. Chimwemwe Phiri", role: "Head Teacher", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
    { name: "Ms. Sarah Banda", role: "Deputy Head (Academics)", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" }
  ];

  const welfareItems = [
    { icon: <ShieldCheck className="text-[#800000]" size={32} />, title: "24/7 Security", desc: "Fully fenced campus with professional security personnel ensuring student safety around the clock." },
    { icon: <HeartPulse className="text-[#800000]" size={32} />, title: "Medical Care", desc: "On-campus clinic staffed by qualified nurses to handle student health and emergencies." },
    { icon: <Scale className="text-[#800000]" size={32} />, title: "Character Development", desc: "Strict adherence to our code of conduct, fostering discipline, respect, and responsibility." }
  ];

  const sectionAnimate = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#374151] selection:bg-[#008080] selection:text-white relative">
      
      {/* Sticky Controls Bottom Right */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-4 bg-[#002147] text-white rounded-full shadow-lg hover:bg-[#800000] transition-colors"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Contact on WhatsApp"
          className="p-4 bg-[#25D366] text-white rounded-full shadow-lg"
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#002147]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={heroIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroImages[heroIdx]} 
              alt="Alice Gwengwe Secondary School Campus" 
              className="w-full h-full object-cover scale-105" 
              style={{ contentVisibility: 'auto' }}
            />
            <div className="absolute inset-0 bg-[#002147]/70 mix-blend-multiply"></div>
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <span className="text-[#008080] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Established Excellence</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Alice Gwengwe <br /> <span className="text-white/90">Secondary School</span></h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light italic">"Discipline and Hard Work for Academic Excellence"</p>
             <div className="flex gap-4">
  <Link href="/admissions">
    <button
      className="flex items-center justify-center gap-3 px-10 py-4 bg-[#800000] text-white font-bold uppercase tracking-widest text-sm rounded-md hover:bg-[#a00000] transition-all shadow-lg"
    >
      Admissions 2024
      <ArrowRight size={18} />
    </button>
  </Link>

  <Link href="/results">
    <button className="px-10 py-4 border-2 border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-md hover:bg-white/10 transition-all backdrop-blur-sm">
      View Results
    </button>
  </Link>
</div>
          </motion.div>
        </div>
      </section>

  {/* 2. WELCOME / ABOUT */}
<motion.section {...sectionAnimate} className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* TEXT CONTENT */}
      <div>
        <SectionHeading
          title="Welcome to Alice Gwengwe"
          subtitle="A premier boarding secondary school in Malawi dedicated to nurturing leaders."
        />

        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            At Alice Gwengwe Secondary School, we believe education is about
            character building. Founded on Christian values, we provide a secure
            environment where students thrive.
          </p>

          {/* FOUNDER */}
          <div className="pt-4 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=200&q=80"
              alt="Mrs. Alice Gwengwe"
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
              loading="lazy"
            />

            <div>
              <p className="font-bold text-[#002147]">Mrs. Alice Gwengwe</p>
              <p className="text-xs uppercase tracking-tighter">
                Founder & Director
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4">
        <StatCounter value="100" label="MSCE Pass Rate" suffix="%" />
        <StatCounter value="15" label="Student-Teacher Ratio" suffix=":1" />
        <StatCounter value="25" label="Years of Heritage" />
        <StatCounter value="1200" label="Alumni Success" />
      </div>

    </div>
  </div>
</motion.section>


      {/* 3. LATEST ANNOUNCEMENTS */}
      <motion.section {...sectionAnimate} className="py-24 bg-[#F5F5F5] border-y border-gray-200">
        <div className="container mx-auto px-6">
          <SectionHeading title="Latest Announcements" />
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {announcements.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white border border-gray-200 p-8 flex flex-col h-full shadow-sm">
                <div className="flex items-center gap-2 text-[#008080] text-xs font-bold uppercase mb-4"><Calendar size={14}/>{item.date}</div>
                <h3 className="text-xl font-serif font-bold text-[#002147] mb-3 leading-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-gray-100"><span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 uppercase">{item.category}</span></div>
              </motion.div>
            ))}
          </div>
          <MobileCarousel items={announcements} renderItem={(item) => (
            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 text-[#008080] text-xs font-bold uppercase mb-4"><Calendar size={14}/>{item.date}</div>
              <h3 className="text-xl font-serif font-bold text-[#002147] mb-3 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
            </div>
          )} />
        </div>
      </motion.section>

      {/* 4. NEWS SECTION */}
      <motion.section {...sectionAnimate} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="School News" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="group cursor-pointer">
                <div className="overflow-hidden border border-gray-200 shadow-sm">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold text-[#002147] mb-3 group-hover:text-[#800000] transition-colors">{news.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{news.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#800000] text-xs font-bold uppercase tracking-wider">Read More <ArrowRight size={14} /></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CAMPUS LIFE IMAGE CARDS */}
      <motion.section {...sectionAnimate} className="py-12 bg-white pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifeCards.map((card, i) => (
              <motion.a 
                href={card.link}
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="relative h-64 overflow-hidden group block"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/90 via-[#002147]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-serif font-bold mb-2">{card.title}</h4>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ExternalLink size={12} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5. ACADEMICS PREVIEW */}
      <motion.section {...sectionAnimate} className="py-24 bg-[#002147] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#008080]">Excellence in Learning</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">Comprehensive MSCE Curriculum</h3>
              <p className="text-white/70 mb-8 leading-relaxed">We offer a wide range of subjects designed to prepare students for University entry and diverse career paths.</p>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {['Mathematics', 'Physical Science', 'Biology', 'English Literature', 'History', 'Geography', 'Chichewa', 'Agriculture'].map((subject, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 bg-[#800000] rounded-full"></div>{subject}</li>
                ))}
              </ul>
            </div>
            <div className="relative border-4 border-white/10 p-4">
               <img 
                src="https://images.unsplash.com/photo-1577891746191-c6d222218038?auto=format&fit=crop&q=80" 
                alt="Students Focusing in Class" 
                loading="lazy"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700" 
               />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. LEADERSHIP PREVIEW */}
      <motion.section {...sectionAnimate} className="py-24 bg-[#F5F5F5] border-t border-gray-200">
        <div className="container mx-auto px-6">
          <SectionHeading title="School Leadership" centered subtitle="The dedicated team steering Alice Gwengwe Secondary School towards academic excellence and moral uprightness." />
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div key={i} className="bg-white border border-gray-200 group text-center overflow-hidden">
                <div className="h-72 overflow-hidden bg-gray-200 relative">
                   <img 
                    src={leader.img} 
                    alt={leader.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                   <div className="absolute inset-0 bg-[#002147]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#002147] mb-1">{leader.name}</h4>
                  <p className="text-sm text-[#800000] uppercase tracking-wider font-medium">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-10 py-4 border border-[#002147] text-[#002147] font-bold uppercase tracking-widest text-sm hover:bg-[#002147] hover:text-white transition-all duration-300">See More Leadership</button>
          </div>
        </div>
      </motion.section>

      {/* 3. STUDENT WELFARE & DISCIPLINE */}
      <motion.section {...sectionAnimate} className="py-28 bg-[#F8FAFC] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <SectionHeading 
            centered 
            title="Student Welfare & Discipline" 
            subtitle="Providing a stable, nurturing, and highly supervised environment where students can focus entirely on their growth."
          />
          <div className="grid md:grid-cols-3 gap-10">
            {welfareItems.map((item, idx) => (
              <div key={idx} className="bg-white p-10 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#002147] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section {...sectionAnimate} className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="What Parents & Alumni Say"
            subtitle="Trusted by families and graduates for discipline, academic excellence, and strong moral foundations."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                “The discipline and academic focus at Alice Gwengwe Secondary School have greatly shaped my child’s character. 
                The teachers are committed, and communication with parents is excellent.”
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-bold text-[#002147]">Mrs. Patricia Banda</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Parent</p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                “The strong academic foundation I received prepared me well for university. 
                Beyond academics, the school instilled discipline and confidence that I still carry today.”
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-bold text-[#002147]">Daniel M. Phiri</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Alumnus</p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                “The teachers are supportive and always encourage us to work hard. 
                Life at the school has helped me grow academically and personally.”
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-bold text-[#002147]">Grace Chirwa</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Form 4 Student</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. MODERN CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-[#002147] relative overflow-hidden p-12 md:p-24 rounded-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full -ml-48 -mb-48" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to secure a <span className="text-teal-400 italic font-light">bright</span> future?</h2>
              <p className="text-white/60 text-lg mb-12">Admissions for the 2026 academic session are currently open. Contact our office or apply online to start your journey.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/admissions"></Link>
                <button className="bg-white text-[#002147] px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-[#800000] hover:text-white transition-all shadow-xl">
                  Apply Online
                </button>
                <button className="border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                  Request Brochure
                </button>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-8 border-t border-white/10 pt-12">
                <div className="text-left">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Inquiries</p>
                  <p className="text-white font-medium text-sm">+265 888 000 000</p>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="text-left">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium text-sm">admissions@agss.mw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}