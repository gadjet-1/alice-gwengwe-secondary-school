"use client";
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardCheck, 
  FileText, 
  Bell, 
  LogOut, 
  User, 
  Download, 
  Printer, 
  ChevronRight, 
  Calendar, 
  Clock,
  ShieldCheck,
  Award,
  BarChart3,
  Search,
  CheckCircle2,
  AlertCircle,
  FileDown,
  Menu,
  X,
  UserCircle,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  // Official Institutional Data
  const studentProfile = {
    fullName: "Tiwonge Grace Kumwenda",
    admissionNo: "AGSS/2022/084",
    form: "Form 4",
    stream: "A",
    academicYear: "2024/2025",
    term: "Term 2",
    status: "ACTIVE",
    house: "Sapitwa",
    enrollmentDate: "05/09/2022"
  };

  const academicStats = [
    { label: "Registered Subjects", value: "09", icon: BookOpen },
    { label: "Passed Subjects", value: "08", icon: CheckCircle2 },
    { label: "Terminal Average", value: "74.2%", icon: BarChart3 },
    { label: "Class Position", value: "04 / 42", icon: Award },
    { label: "Attendance Rate", value: "96.0%", icon: Clock }
  ];

  const results = [
    { subject: "Mathematics", ca: 34, exam: 52, total: 86, grade: "Distinction", teacher: "Mr. C. Phiri", remarks: "Excellent performance" },
    { subject: "English Language", ca: 28, exam: 45, total: 73, grade: "Credit", teacher: "Mrs. J. Banda", remarks: "Consistent effort shown" },
    { subject: "Biology", ca: 30, exam: 48, total: 78, grade: "Distinction", teacher: "Mr. L. Mwale", remarks: "Strong analytical skills" },
    { subject: "Physical Science", ca: 25, exam: 38, total: 63, grade: "Credit", teacher: "Ms. T. Chancy", remarks: "Good progress" },
    { subject: "Geography", ca: 32, exam: 50, total: 82, grade: "Distinction", teacher: "Mr. H. Gondwe", remarks: "Deep understanding of concepts" },
    { subject: "Chichewa", ca: 35, exam: 55, total: 90, grade: "Distinction", teacher: "Mrs. E. Zimba", remarks: "Outstanding linguistic ability" },
    { subject: "Social & Religious Studies", ca: 22, exam: 40, total: 62, grade: "Pass", teacher: "Rev. S. Hara", remarks: "Requires more focus on theory" },
    { subject: "History", ca: 26, exam: 35, total: 61, grade: "Pass", teacher: "Mr. K. Nyirenda", remarks: "Satisfactory performance" },
    { subject: "Agriculture", ca: 29, exam: 42, total: 71, grade: "Credit", teacher: "Ms. B. Chimwaza", remarks: "Good practical application" }
  ];

  const materials = [
    { title: "CALCULUS_FUNDAMENTALS_MS4.pdf", subject: "Mathematics", date: "10/03/2025", type: "PDF", size: "1.2 MB" },
    { title: "PLANT_CELL_STRUCTURE_DIAG.jpg", subject: "Biology", date: "08/03/2025", type: "IMG", size: "4.5 MB" },
    { title: "TERM2_REVISION_PAPERS_2024.zip", subject: "General", date: "05/03/2025", type: "ZIP", size: "12.0 MB" },
    { title: "PERIODIC_TABLE_TRENDS_VOL1.pdf", subject: "Physical Science", date: "01/03/2025", type: "PDF", size: "0.8 MB" }
  ];

  const announcements = [
    { title: "End of Term 2 Academic Calendar", date: "18/03/2025", content: "School will close for Term 2 on April 4th, 2025. Official terminal reports will be processed and available via this portal from April 7th. All boarding students must vacate the premises by 10:00 AM.", category: "Academic Notice" },
    { title: "Compulsory Careers Guidance Seminar", date: "12/03/2025", content: "Form 4 students are required to attend the careers guidance seminar in the main hall this coming Friday. External speakers from University of Malawi will be present.", category: "Career Services" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'student' && password === 'student123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Authentication failed. Please verify your credentials.');
    }
  };

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 500);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F2F4F7] flex flex-col items-center justify-center p-4 font-sans">
        <div className="w-full max-w-[440px] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-[#002147] py-12 px-8 text-center border-b-4 border-[#C9A227]">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-xl">
               <ShieldCheck className="text-[#002147] w-14 h-14" />
            </div>
            <h1 className="text-white text-2xl font-black tracking-tight leading-tight uppercase">Alice Gwengwe</h1>
            <p className="text-[#C9A227] text-xs font-black uppercase tracking-[0.3em] mt-1">Secondary School Portal</p>
          </div>

          <form onSubmit={handleLogin} className="p-10 space-y-8">
            {loginError && (
              <div className="bg-red-50 border border-red-200 p-4 rounded flex items-start gap-3">
                <AlertCircle className="text-red-600 shrink-0" size={18} />
                <p className="text-xs text-red-800 font-bold">{loginError}</p>
              </div>
            )}

            <div className="space-y-3">
              <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Admission Number</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded focus:border-[#002147] focus:ring-0 transition-all outline-none text-sm font-bold text-[#002147]"
                  placeholder="Enter Admission No."
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Password</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded focus:border-[#002147] focus:ring-0 transition-all outline-none text-sm font-bold text-[#002147]"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#002147] text-white font-black py-5 rounded hover:bg-[#001835] transition-all shadow-md active:scale-[0.99] uppercase tracking-widest text-sm"
            >
              Secure Portal Login
            </button>
          </form>
          
          <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
              OFFICIAL STUDENT ACCESS GATEWAY
            </p>
          </div>
        </div>
        <p className="mt-8 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] italic text-center">
          Excellence in Service, Integrity in Leadership
        </p>
      </div>
    );
  }

  const NavLink = ({ icon: Icon, label, id }) => (
    <button 
      onClick={() => { setActiveTab(id); setIsMobileMenuOpen(false); }}
      className={`flex items-center gap-4 px-8 py-5 transition-all w-full border-r-4 text-left
        ${activeTab === id 
          ? 'bg-[#002147]/10 text-[#002147] border-[#002147] font-black' 
          : 'text-gray-500 border-transparent hover:bg-gray-50 hover:text-[#002147] font-bold'}`}
    >
      <Icon size={22} strokeWidth={activeTab === id ? 2.5 : 2} />
      <span className="text-sm uppercase tracking-tight">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-gray-900 overflow-x-hidden">
      {/* Official Top Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 print:hidden shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#002147] rounded flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-lg font-black text-[#002147] tracking-tighter hidden sm:block uppercase leading-none">Alice Gwengwe Secondary School</h1>
              <h1 className="text-lg font-black text-[#002147] sm:hidden">AGSS PORTAL</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Institutional Student Management System</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden xl:flex items-center gap-4 pl-6 border-l border-gray-200">
               <div className="text-right">
                  <p className="text-xs font-black text-[#002147] uppercase">{studentProfile.fullName}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{studentProfile.admissionNo}</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#002147] border-2 border-white shadow-sm">
                 <User size={20} />
               </div>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 text-red-700 hover:bg-red-50 px-4 py-2 rounded font-black text-[11px] uppercase tracking-widest transition-all"
            >
              <LogOut size={16} />
              <span className="hidden md:inline">End Session</span>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
              {isMobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-[1600px] mx-auto w-full relative">
        
        {/* Navigation Sidebar (Teachers Portal Style) */}
        <aside className={`
          fixed inset-0 top-24 bg-white z-40 lg:relative lg:top-0 lg:z-0 lg:w-80 lg:block border-r border-gray-200 shadow-xl lg:shadow-none
          ${isMobileMenuOpen ? 'block' : 'hidden'}
        `}>
          <div className="h-full flex flex-col py-8 overflow-y-auto">
            <div className="px-8 mb-8">
               <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 pb-2 border-b border-gray-100">Portal Navigation</p>
            </div>
            
            <nav className="flex-1">
              <NavLink icon={LayoutDashboard} label="Control Dashboard" id="dashboard" />
              <NavLink icon={FileText} label="Academic Performance" id="results" />
              <NavLink icon={ClipboardCheck} label="Attendance Records" id="attendance" />
              <NavLink icon={Download} label="Study Materials" id="materials" />
              <NavLink icon={Bell} label="Official Notices" id="notices" />
            </nav>

            <div className="mt-auto px-8 py-6">
               <div className="bg-[#002147] p-8 rounded border-b-4 border-[#C9A227] shadow-xl">
                  <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-3 opacity-60">Session Information</h4>
                  <div className="space-y-4">
                     <div>
                        <p className="text-white/40 text-[9px] font-black uppercase mb-1">Academic Cycle</p>
                        <p className="text-white text-base font-black uppercase">{studentProfile.academicYear}</p>
                     </div>
                     <div>
                        <p className="text-white/40 text-[9px] font-black uppercase mb-1">Enrollment Status</p>
                        <div className="inline-flex items-center gap-2 bg-[#C9A227] px-3 py-1 rounded-sm">
                           <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                           <span className="text-[#002147] text-[10px] font-black uppercase tracking-widest">{studentProfile.status}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </aside>

        {/* Primary Functional Content */}
        <main className="flex-1 min-w-0 p-6 lg:p-12 space-y-10">
          
          {/* Dashboard Module */}
          {activeTab === 'dashboard' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
              <section className="bg-white p-10 lg:p-14 rounded shadow-sm border border-gray-200 relative">
                 <div className="absolute top-0 right-0 p-6 opacity-5">
                    <ShieldCheck size={120} />
                 </div>
                 <h2 className="text-4xl font-black text-[#002147] mb-4 tracking-tighter">System Overview: Tiwonge G. Kumwenda</h2>
                 <p className="text-gray-500 font-bold max-w-2xl text-lg">Official access terminal for <span className="text-[#002147]">{studentProfile.form} {studentProfile.stream}</span> performance tracking and academic administrative services.</p>
              </section>

              {/* Core Analytics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
                {academicStats.map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded border border-gray-200 shadow-sm flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded flex items-center justify-center text-[#002147] mb-6 shadow-inner">
                      <stat.icon size={28} />
                    </div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-3 leading-none h-4">{stat.label}</p>
                    <p className="text-3xl font-black text-[#002147] leading-none">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                 <div className="xl:col-span-2 bg-white rounded border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-10 py-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                       <h3 className="font-black text-[#002147] flex items-center gap-3 uppercase text-xs tracking-[0.2em]"><BarChart3 size={20} className="text-[#C9A227]"/> Verified Subject Marks</h3>
                       <button onClick={() => setActiveTab('results')} className="text-[10px] font-black text-[#002147] uppercase border-b-2 border-[#C9A227] hover:text-[#C9A227] transition-colors">Access Full Grade Table</button>
                    </div>
                    <div className="p-0">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="bg-white text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                <th className="px-10 py-5">Subject Identifier</th>
                                <th className="px-10 py-5 text-center">Percentage</th>
                                <th className="px-10 py-5 text-center">Status</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                             {results.slice(0, 5).map((res, i) => (
                               <tr key={i} className="hover:bg-gray-50/50 transition-all">
                                  <td className="px-10 py-6">
                                     <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#002147] text-white flex items-center justify-center text-xs font-black rounded-sm">{res.subject.substring(0, 2).toUpperCase()}</div>
                                        <span className="text-sm font-black text-[#002147]">{res.subject}</span>
                                     </div>
                                  </td>
                                  <td className="px-10 py-6 text-center text-lg font-black text-[#002147]">{res.total}%</td>
                                  <td className="px-10 py-6 text-center">
                                     <span className={`text-[10px] font-black uppercase px-4 py-2 rounded-sm border ${res.total >= 75 ? 'bg-green-50 border-green-200 text-green-700' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
                                        {res.grade}
                                     </span>
                                  </td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>

                 <div className="space-y-8">
                    <div className="bg-[#002147] p-10 rounded border-b-8 border-[#C9A227] shadow-2xl text-white">
                       <h3 className="font-black text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-3"><Bell size={20} className="text-[#C9A227]"/> Bulletins</h3>
                       <div className="space-y-10">
                          {announcements.map((ann, i) => (
                            <div key={i} className="group cursor-pointer">
                               <p className="text-[10px] font-black text-[#C9A227] uppercase tracking-[0.2em] mb-2">{ann.date}</p>
                               <p className="text-sm font-black mb-2 group-hover:underline">{ann.title}</p>
                               <p className="text-xs text-white/50 leading-relaxed line-clamp-2">{ann.content}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                    
                    <div className="bg-white p-10 rounded border border-gray-200 shadow-sm">
                       <h3 className="font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-[#002147]"><GraduationCap size={20} className="text-[#C9A227]"/> Institutional Motto</h3>
                       <p className="text-sm font-bold text-gray-500 italic leading-relaxed">"Excellence in Service, Integrity in Leadership. We prepare our students not just for examinations, but for a life of purpose and contribution."</p>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {/* Performance Module */}
          {activeTab === 'results' && (
            <div className="animate-in slide-in-from-right-4 duration-700 space-y-10">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h2 className="text-3xl font-black text-[#002147] tracking-tight">Academic Performance Statement</h2>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Terminal Assessment Report • March 2025</p>
                  </div>
                  <button onClick={handlePrint} className="flex items-center gap-3 bg-[#002147] px-8 py-5 rounded text-xs font-black text-white hover:bg-[#001835] transition-all shadow-xl uppercase tracking-widest">
                    <Printer size={18} /> Generate Official Report Slip
                  </button>
               </div>

               <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-[#002147] text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="px-8 py-7 border-r border-white/10">Subject Descriptor</th>
                           <th className="px-8 py-7 text-center border-r border-white/10">CA (40)</th>
                           <th className="px-8 py-7 text-center border-r border-white/10">EXAM (60)</th>
                           <th className="px-8 py-7 text-center border-r border-white/10">AGGREGATE (%)</th>
                           <th className="px-8 py-7 text-center border-r border-white/10">GRADE</th>
                           <th className="px-8 py-7">TEACHER REMARKS</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                        {results.map((res, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="px-8 py-6 font-black text-[#002147] text-sm uppercase">{res.subject}</td>
                            <td className="px-8 py-6 text-center text-sm font-bold text-gray-600">{res.ca}</td>
                            <td className="px-8 py-6 text-center text-sm font-bold text-gray-600">{res.exam}</td>
                            <td className="px-8 py-6 text-center text-lg font-black text-[#002147]">{res.total}%</td>
                            <td className="px-8 py-6 text-center">
                               <span className={`text-[11px] font-black uppercase px-6 py-2 rounded-sm inline-block min-w-[120px] border
                                 ${res.total >= 75 ? 'bg-green-50 border-green-200 text-green-800' : 
                                   res.total >= 60 ? 'bg-blue-50 border-blue-200 text-blue-800' : 
                                   res.total >= 50 ? 'bg-amber-50 border-amber-200 text-amber-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                                 {res.grade}
                               </span>
                            </td>
                            <td className="px-8 py-6 text-xs font-bold text-gray-500 uppercase tracking-tight italic">"{res.remarks}"</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               <div className="p-10 bg-gray-50 border border-gray-200 rounded flex items-start gap-8 shadow-inner">
                  <ShieldCheck className="text-[#002147] shrink-0" size={32} />
                  <div>
                     <p className="text-xs font-black text-[#002147] mb-3 uppercase tracking-[0.2em]">Institutional Authentication</p>
                     <p className="text-sm text-gray-600 leading-relaxed font-bold">
                        The records displayed above are extracted directly from the Alice Gwengwe Secondary School Central Management Database. These scores are locked for student modification and serve as an official electronic record. Any discrepancies must be formally addressed to the Dean of Academics via the physical administrative office.
                     </p>
                  </div>
               </div>
            </div>
          )}

          {/* Materials Module */}
          {activeTab === 'materials' && (
            <div className="animate-in slide-in-from-right-4 duration-700 space-y-10">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h2 className="text-3xl font-black text-[#002147] tracking-tight uppercase">Academic Resource Library</h2>
                    <p className="text-sm text-gray-500 font-bold tracking-widest mt-1">Authorized Study Materials & Course Documents</p>
                  </div>
                  <div className="relative w-full md:w-96">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                     <input type="text" placeholder="Search by filename or subject code..." className="w-full pl-12 pr-6 py-5 text-sm bg-white border border-gray-300 rounded shadow-sm outline-none focus:border-[#002147]" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {materials.map((file, i) => (
                    <div key={i} className="bg-white p-10 rounded border border-gray-200 shadow-sm flex items-center justify-between hover:border-[#C9A227] transition-all group">
                       <div className="flex items-center gap-8">
                          <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded flex items-center justify-center text-[#002147] group-hover:bg-[#002147] group-hover:text-white transition-all">
                             <FileDown size={32} />
                          </div>
                          <div>
                             <h4 className="text-base font-black text-[#002147] mb-1 uppercase tracking-tight">{file.title}</h4>
                             <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{file.subject} • PUBLISHED: {file.date}</p>
                          </div>
                       </div>
                       <div className="flex flex-col items-end gap-3 pl-4">
                          <span className="text-[10px] font-black text-[#C9A227] uppercase bg-gray-50 border border-gray-100 px-3 py-1 rounded">{file.type} • {file.size}</span>
                          <button className="flex items-center gap-2 text-xs font-black text-[#002147] uppercase hover:underline">
                             Download <ChevronRight size={14} />
                          </button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {/* Attendance Module */}
          {activeTab === 'attendance' && (
            <div className="animate-in slide-in-from-right-4 duration-700 space-y-10">
               <h2 className="text-3xl font-black text-[#002147] tracking-tight">Verified Attendance Records</h2>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-10 rounded border border-gray-200 border-l-8 border-l-green-600 shadow-sm">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Total Sessions Present</p>
                     <p className="text-5xl font-black text-[#002147]">48 <span className="text-xs text-gray-300 font-bold uppercase">Days</span></p>
                  </div>
                  <div className="bg-white p-10 rounded border border-gray-200 border-l-8 border-l-[#002147] shadow-sm">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Official Absences</p>
                     <p className="text-5xl font-black text-[#002147]">02 <span className="text-xs text-gray-300 font-bold uppercase">Days</span></p>
                  </div>
                  <div className="bg-white p-10 rounded border border-gray-200 border-l-8 border-l-blue-600 shadow-sm">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Terminal Compliance</p>
                     <p className="text-5xl font-black text-[#002147]">96% <span className="text-xs text-gray-300 font-bold uppercase">Rate</span></p>
                  </div>
               </div>

               <div className="bg-white rounded border border-gray-200 shadow-sm p-12">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                       <Calendar className="text-[#C9A227]" size={28} />
                       <h3 className="text-xl font-black text-[#002147] uppercase tracking-[0.2em]">March 2025 Calendar Log</h3>
                    </div>
                    <div className="flex gap-8">
                       <div className="flex items-center gap-3 text-[11px] font-black text-gray-500 uppercase tracking-widest">
                          <div className="w-5 h-5 bg-green-600 rounded-sm shadow-sm"></div> Present
                       </div>
                       <div className="flex items-center gap-3 text-[11px] font-black text-gray-500 uppercase tracking-widest">
                          <div className="w-5 h-5 bg-red-600 rounded-sm shadow-sm"></div> Absent
                       </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-3">
                     {Array.from({length: 31}).map((_, i) => (
                       <div key={i} className={`h-24 flex flex-col items-center justify-center rounded border-2 transition-all
                         ${i+1 > 18 ? 'bg-gray-50 border-gray-100 text-gray-300' : 
                           [6, 7].includes(i+1) ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-800'}`}>
                         <span className="text-xs font-black mb-2">{i+1}</span>
                         {i+1 <= 18 && ![6, 7].includes(i+1) ? <CheckCircle2 size={18} /> : i+1 <= 18 ? <X size={18}/> : null}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          )}

          {/* Notices Module */}
          {activeTab === 'notices' && (
             <div className="animate-in slide-in-from-right-4 duration-700 space-y-10">
                <h2 className="text-3xl font-black text-[#002147] tracking-tight uppercase">Institutional Communication</h2>
                <div className="space-y-8">
                   {announcements.map((ann, i) => (
                     <div key={i} className="bg-white p-12 rounded border border-gray-200 shadow-sm relative overflow-hidden group hover:border-[#002147] transition-all">
                        <div className="absolute top-0 right-0 px-10 py-3 bg-[#002147] text-[11px] font-black text-[#C9A227] uppercase tracking-[0.3em]">
                           {ann.category}
                        </div>
                        <div className="flex items-start gap-10">
                           <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded flex items-center justify-center text-[#002147] group-hover:bg-[#002147] group-hover:text-white transition-all shadow-inner">
                              <Bell size={36} />
                           </div>
                           <div className="flex-1">
                              <h3 className="text-2xl font-black text-[#002147] mb-3 tracking-tight">{ann.title}</h3>
                              <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                                 <Calendar size={14} /> Issued on: {ann.date}
                              </p>
                              <p className="text-gray-700 leading-[1.8] font-bold text-lg border-l-8 border-gray-100 pl-10 py-4 italic">
                                "{ann.content}"
                              </p>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          )}

        </main>
      </div>

      {/* Official Result Slip Print Template */}
      {isPrinting && (
        <div className="fixed inset-0 bg-white z-[100] p-16 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="flex justify-between items-center border-b-4 border-[#002147] pb-12">
               <div className="flex gap-10 items-center">
                  <div className="w-24 h-24 bg-[#002147] rounded flex items-center justify-center text-white shadow-xl">
                     <ShieldCheck size={56} />
                  </div>
                  <div>
                    <h1 className="text-3xl font-black text-[#002147] leading-tight">ALICE GWENGWE SECONDARY SCHOOL</h1>
                    <p className="text-lg font-bold text-[#C9A227] uppercase tracking-[0.3em] mt-2">Official Terminal Progress Report</p>
                    <p className="text-sm font-bold text-gray-500 mt-2">Private Bag 42, Blantyre, Republic of Malawi • Tel: +265 1 234 567</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-6 bg-gray-50 p-10 rounded border border-gray-300">
               <div className="flex justify-between border-b-2 border-gray-200 py-2">
                  <span className="text-[11px] font-black text-gray-400 uppercase">Student Name:</span>
                  <span className="text-sm font-black text-[#002147] uppercase">{studentProfile.fullName}</span>
               </div>
               <div className="flex justify-between border-b-2 border-gray-200 py-2">
                  <span className="text-[11px] font-black text-gray-400 uppercase">Admission ID:</span>
                  <span className="text-sm font-black text-[#002147] uppercase">{studentProfile.admissionNo}</span>
               </div>
               <div className="flex justify-between border-b-2 border-gray-200 py-2">
                  <span className="text-[11px] font-black text-gray-400 uppercase">Class & Stream:</span>
                  <span className="text-sm font-black text-[#002147] uppercase">{studentProfile.form} {studentProfile.stream}</span>
               </div>
               <div className="flex justify-between border-b-2 border-gray-200 py-2">
                  <span className="text-[11px] font-black text-gray-400 uppercase">Academic Period:</span>
                  <span className="text-sm font-black text-[#002147] uppercase">{studentProfile.academicYear} / {studentProfile.term}</span>
               </div>
            </div>

            <table className="w-full border-collapse">
               <thead>
                  <tr className="bg-gray-100">
                     <th className="border-2 border-gray-300 px-6 py-4 text-left text-[11px] font-black uppercase tracking-widest">Subject Descriptor</th>
                     <th className="border-2 border-gray-300 px-6 py-4 text-center text-[11px] font-black uppercase tracking-widest">CA (40)</th>
                     <th className="border-2 border-gray-300 px-6 py-4 text-center text-[11px] font-black uppercase tracking-widest">Exam (60)</th>
                     <th className="border-2 border-gray-300 px-6 py-4 text-center text-[11px] font-black uppercase tracking-widest">Total (%)</th>
                     <th className="border-2 border-gray-300 px-6 py-4 text-center text-[11px] font-black uppercase tracking-widest">Grade</th>
                  </tr>
               </thead>
               <tbody>
                  {results.map((res, i) => (
                    <tr key={i}>
                       <td className="border-2 border-gray-300 px-6 py-4 text-sm font-black text-[#002147] uppercase">{res.subject}</td>
                       <td className="border-2 border-gray-300 px-6 py-4 text-center text-sm font-bold">{res.ca}</td>
                       <td className="border-2 border-gray-300 px-6 py-4 text-center text-sm font-bold">{res.exam}</td>
                       <td className="border-2 border-gray-300 px-6 py-4 text-center text-base font-black text-[#002147]">{res.total}%</td>
                       <td className="border-2 border-gray-300 px-6 py-4 text-center text-[11px] font-black uppercase">{res.grade}</td>
                    </tr>
                  ))}
               </tbody>
            </table>

            <div className="mt-24 grid grid-cols-2 gap-24 text-center">
               <div className="space-y-4">
                  <div className="h-[2px] bg-gray-400 w-full mb-2"></div>
                  <p className="text-[11px] font-black uppercase tracking-[0.3em]">Authorized Class Teacher</p>
               </div>
               <div className="space-y-4">
                  <div className="h-[2px] bg-gray-400 w-full mb-2"></div>
                  <p className="text-[11px] font-black uppercase tracking-[0.3em]">School Head / Official Stamp</p>
               </div>
            </div>

            <div className="pt-24 text-center">
               <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.5em]">Alice Gwengwe Secondary School • Integrated Management System Report</p>
               <p className="text-[9px] text-gray-300 font-bold uppercase mt-2 tracking-widest tracking-widest">Generated On: {new Date().toLocaleString()} • Reference: {studentProfile.admissionNo}/{new Date().getTime()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Official Footer */}
      <footer className="bg-white border-t border-gray-200 p-12 text-center print:hidden">
        <div className="flex flex-col items-center gap-6">
           <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-[#002147]/10 shadow-inner">
              <ShieldCheck size={32} />
           </div>
           <div>
              <p className="text-[11px] font-black text-[#002147] uppercase tracking-[0.4em] mb-3">
                 Alice Gwengwe Secondary School
              </p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] italic">
                "Excellence in Service, Integrity in Leadership"
              </p>
              <div className="mt-8 flex justify-center gap-12 text-[9px] font-black text-gray-300 uppercase tracking-widest">
                 <span>Security Policy</span>
                 <span>Data Transparency</span>
                 <span>Academic Integrity</span>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;