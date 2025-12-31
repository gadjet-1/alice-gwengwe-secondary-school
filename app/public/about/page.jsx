"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Target, 
  Compass, 
  Users, 
  Award, 
  CheckCircle, 
  Cpu, 
  Music, 
  Dribbble, 
  Home, 
  Microscope,
  ArrowRight
} from 'lucide-react';

// Counter Component for Stat Animation
const StatCounter = ({ endValue, label, isVisible }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(endValue.replace(/\D/g, ''));
      const suffix = endValue.replace(/[0-9]/g, '');
      const increment = end / (duration / 16); // 60fps approx

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end + suffix);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start) + suffix);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, endValue]);

  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-teal-400/50">
      <div className="text-5xl font-serif mb-2 text-teal-400">{count || '0' + endValue.replace(/[0-9]/g, '')}</div>
      <div className="text-xs uppercase tracking-[0.2em] font-bold text-white/60">{label}</div>
    </div>
  );
};

const App = () => {
  const [isVisible, setIsVisible] = useState({});
  const [heroIndex, setHeroIndex] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000",
      tagline: "Nurturing global leaders through excellence, integrity, and a passion for lifelong learning."
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dee81c?auto=format&fit=crop&q=80&w=2000",
      tagline: "Empowering young women to lead with courage and academic distinction."
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
      tagline: "A legacy of innovation, shaping the bright minds of tomorrow."
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const fadeInClass = (id) => 
    `transition-all duration-1000 transform ${isVisible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return (
    <div className="bg-[#FAFAF7] text-[#0A2540] font-sans overflow-x-hidden">
      {/* 1. Hero Section */}
      <section 
        id="hero"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A2540]"
      >
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <img 
              key={index}
              src={slide.image} 
              alt="School Campus" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out scale-105 ${index === heroIndex ? 'opacity-40' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 via-transparent to-[#0A2540]"></div>
        </div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-crimson-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <div className={`relative z-10 text-center px-4 max-w-5xl ${fadeInClass('hero')}`}>
          <h1 className="text-5xl md:text-7xl font-serif text-[#FAFAF7] mb-6 tracking-tight leading-tight">
            Alice Gwengwe <br/><span className="italic text-teal-400">Girls Secondary School</span>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto border-l-2 border-teal-500 pl-6 transition-all duration-500 ease-in-out">
              {heroSlides[heroIndex].tagline}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section id="who-we-are" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${fadeInClass('who-we-are')}`}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-crimson-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" 
              className="rounded-2xl shadow-2xl relative z-10"
              alt="Classroom Interaction"
            />
            <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-8 rounded-xl shadow-xl hidden md:block z-20">
              <p className="text-4xl font-serif font-bold">25+</p>
              <p className="text-sm uppercase tracking-widest">Years of Heritage</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.3em] text-crimson-700 uppercase">Legacy of Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-serif leading-tight">Empowering Minds, Shaping Futures</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded on the principles of academic rigor and holistic development, Alice Gwengwe Girls Secondary School has been at the forefront of secondary education for over two decades. We believe that every student possesses unique talents waiting to be unearthed.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our philosophy transcends traditional rote learning. We cultivate critical thinkers, empathetic collaborators, and resilient problem-solvers who are prepared to navigate the complexities of the 21st century.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Motto */}
      <section id="mission" className="py-20 bg-[#0A2540] text-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Target className="w-10 h-10 mb-4 text-teal-400"/>, title: "Our Mission", desc: "To provide a world-class education that inspires students to achieve academic excellence and personal growth." },
            { icon: <Compass className="w-10 h-10 mb-4 text-crimson-400"/>, title: "Our Vision", desc: "To be a global benchmark for innovative secondary education, fostering a community of responsible global citizens." },
            { icon: <BookOpen className="w-10 h-10 mb-4 text-teal-400"/>, title: "Our Motto", desc: '"Per Aspera Ad Astra" — Through hardships to the stars. A reminder that persistence leads to greatness.' }
          ].map((item, i) => (
            <div key={i} className={`p-10 rounded-3xl border border-white/10 hover:border-teal-400/50 transition-all group bg-white/5 ${fadeInClass('mission')}`}>
              {item.icon}
              <h4 className="text-2xl font-serif mb-4">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. History / Timeline */}
      <section id="history" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-serif mb-20">Our Journey Through Time</h2>
        <div className="relative border-l-2 border-gray-200 ml-4 md:mx-auto md:w-fit">
          {[
            { year: "1998", event: "Foundation of the Academy with 50 students." },
            { year: "2005", event: "Inauguration of the Science & Technology Wing." },
            { year: "2012", event: "Awarded 'School of the Year' for Academic Innovation." },
            { year: "2023", event: "Completion of our Olympic-standard Sports Complex." }
          ].map((item, i) => (
            <div key={i} className={`mb-12 ml-8 relative ${fadeInClass('history')}`}>
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-crimson-700 rounded-full border-4 border-white"></div>
              <span className="text-crimson-700 font-bold text-xl">{item.year}</span>
              <p className="text-lg text-gray-700 mt-2">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Leadership */}
      <section id="leadership" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-crimson-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Elizabeth Thorne", role: "Head of School", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Mr. Marcus Vane", role: "Deputy Principal", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Sarah Jenkins", role: "Director of Academics", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
            ].map((staff, i) => (
              <div key={i} className={`text-center group ${fadeInClass('leadership')}`}>
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-teal-500 rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 opacity-20"></div>
                  <img src={staff.img} className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" alt={staff.name} />
                </div>
                <h4 className="text-2xl font-serif">{staff.name}</h4>
                <p className="text-crimson-700 uppercase tracking-widest text-sm mt-1">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Academic Excellence */}
      <section id="academic" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`${fadeInClass('academic')}`}>
            <h2 className="text-sm font-bold tracking-[0.3em] text-teal-600 uppercase mb-4">Curriculum & Pedagogy</h2>
            <h3 className="text-4xl font-serif mb-6 italic">A Rigorous Foundation for Global Success</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer a dual-curriculum path integrating international standards with local academic excellence. Our teaching approach focuses on inquiry-based learning and practical application.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['STEM Focused', 'Arts Integration', 'Critical Thinking', 'Global Languages'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white shadow-sm rounded-lg border-l-4 border-teal-500">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0A2540] p-8 rounded-2xl text-white flex flex-col justify-center items-center text-center">
              <Microscope className="w-12 h-12 mb-4 text-teal-400" />
              <h5 className="font-serif text-xl">Advanced Science</h5>
            </div>
            <div className="bg-crimson-700 p-8 rounded-2xl text-white mt-8 flex flex-col justify-center items-center text-center">
              <Cpu className="w-12 h-12 mb-4 text-white/80" />
              <h5 className="font-serif text-xl">Tech & Coding</h5>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Student Life */}
      <section id="student-life" className="py-24 bg-[#0A2540] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif mb-4">Beyond the Classroom</h2>
              <p className="text-gray-400 italic">Vibrant clubs, competitive sports, and a nurturing community that feels like home.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10"><ArrowRight className="w-5 h-5 rotate-180"/></div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10"><ArrowRight className="w-5 h-5"/></div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Elite Athletics", icon: <Dribbble/>, img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400" },
              { label: "Performing Arts", icon: <Music/>, img: "https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80&w=400" },
              { label: "Student Union", icon: <Users/>, img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" },
              { label: "Residency Life", icon: <Home/>, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=400" }
            ].map((item, i) => (
              <div key={i} className="relative h-96 group overflow-hidden rounded-2xl">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.label} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="p-2 bg-teal-500 rounded-lg">{item.icon}</div>
                  <span className="font-serif text-xl">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Core Values */}
      <section id="values" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif">The Pillars of Our Character</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {['Integrity', 'Resilience', 'Respect', 'Discipline', 'Service'].map((val, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-700 group-hover:text-white transition-colors duration-300">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h6 className="font-bold text-sm tracking-widest uppercase text-gray-500 group-hover:text-crimson-700">{val}</h6>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Facilities */}
      <section id="facilities" className="py-24 bg-cream px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dee81c?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-64 w-full object-cover shadow-lg hover:scale-105 transition-transform" />
            <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8 hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-serif mb-6 leading-tight">Modern Spaces Designed <br/> for Deep Learning</h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Hi-Tech Robotics & STEAM Labs</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Library of the Future with Digital Archives</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Professional Grade Music & Arts Studio</li>
              <li className="flex items-center gap-4"><div className="w-2 h-2 bg-teal-500 rounded-full"></div> Eco-Friendly Sustainable Campus Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. Achievements */}
      <section id="achievements" className="py-24 bg-[#5A0F1A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Pass Rate", value: "100%" },
            { label: "Top University Placements", value: "92%" },
            { label: "National Championships", value: "15+" },
            { label: "Global Alumni Network", value: "5000+" }
          ].map((stat, i) => (
            <div key={i} className={`${fadeInClass('achievements')}`}>
               <StatCounter 
                endValue={stat.value} 
                label={stat.label} 
                isVisible={isVisible['achievements']} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* 11. Why Choose Us */}
      <section id="why-us" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#0A2540] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-8">The Alice Gwengwe Advantage</h2>
              <div className="space-y-6">
                {[
                  "Personalized mentoring for every student.",
                  "Strong focus on emotional intelligence and leadership.",
                  "State-of-the-art technological infrastructure.",
                  "Diverse international student body from 20+ countries."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Award className="text-teal-400 flex-shrink-0" />
                    <p className="text-lg text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-center border border-white/20">
               <h3 className="text-2xl font-serif mb-4 italic">"The teachers here didn't just teach me formulas; they taught me how to think, how to lead, and how to care."</h3>
               <p className="font-bold text-teal-400">— David K., Alumni '18 (Oxford University)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Call to Action */}
      <section id="cta" className="py-32 px-6 text-center bg-gray-50">
        <div className={`max-w-4xl mx-auto ${fadeInClass('cta')}`}>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Begin Your Journey <br/> of Discovery Today</h2>
          <p className="text-xl text-gray-600 mb-12">Admissions are now open for the 2024-25 academic year. Secure your child's future with us.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Fix: Text color changed to navy blue (#0A2540) */}
            <button className="bg-crimson-700 text-[#0A2540] px-10 py-5 rounded-full font-bold hover:bg-[#5A0F1A] hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3">
              Apply Now <ArrowRight className="w-5 h-5"/>
            </button>
            <button className="border-2 border-[#0A2540] text-[#0A2540] px-10 py-5 rounded-full font-bold hover:bg-[#0A2540] hover:text-white transition-all transform hover:-translate-y-1">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-pulse-slow {
          animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .bg-cream { background-color: #FAFAF7; }
      `}</style>
    </div>
  );
};

export default App;