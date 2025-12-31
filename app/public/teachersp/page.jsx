"use client";
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  GraduationCap, 
  ClipboardCheck, 
  FileUp, 
  Bell, 
  LogOut, 
  User, 
  Search, 
  Printer, 
  Menu,
  X,
  Lock,
  CheckCircle2,
  Calendar as CalendarIcon,
  ChevronRight,
  Download,
  Plus,
  Trash2,
  Eye,
  Clock,
  UserCheck,
  UserX,
  Settings,
  Shield,
  Save,
  Info,
  TrendingUp,
  Award,
  Users,
  CalendarDays,
  ChevronLeft,
  Filter,
  Check,
  Calendar,
  SaveAll,
  History,
  UserPlus
} from 'lucide-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  // State for Overlays
  const [showCalendar, setShowCalendar] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Attendance Session Details
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendanceSession, setAttendanceSession] = useState('Period 1 & 2');
  const [attendanceClass, setAttendanceClass] = useState('Form 4A');

  // New Student Addition State
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentId, setNewStudentId] = useState('');

  // Mock Data
  const [teacherProfile, setTeacherProfile] = useState({
    name: "Mr. Chimwemwe Phiri",
    id: "AGSS/STAFF/2024/042",
    email: "c.phiri@agss.edu.mw",
    phone: "+265 999 123 456",
    subjects: ["Mathematics", "Physics"],
    classes: ["Form 4A", "Form 4B", "Form 3C"]
  });

  const [studentMarks, setStudentMarks] = useState([
    { id: "ST-0012", name: "Blessings Banda", ca1: 15, ca2: 12, exam: 45 },
    { id: "ST-0045", name: "Memory Chisale", ca1: 18, ca2: 16, exam: 52 },
    { id: "ST-0021", name: "Innocent Malata", ca1: 12, ca2: 10, exam: 38 },
    { id: "ST-0089", name: "Tiwonge Kumwenda", ca1: 20, ca2: 19, exam: 58 },
    { id: "ST-0102", name: "Patience Phiri", ca1: 14, ca2: 13, exam: 42 },
  ]);

  const [attendanceList, setAttendanceList] = useState([
    { name: "Blessings Banda", id: "ST-0012", status: "Present", remark: "" },
    { name: "Memory Chisale", id: "ST-0045", status: "Present", remark: "" },
    { name: "Innocent Malata", id: "ST-0021", status: "Absent", remark: "" },
    { name: "Tiwonge Kumwenda", id: "ST-0089", status: "Present", remark: "" },
    { name: "Patience Phiri", id: "ST-0102", status: "Present", remark: "" },
    { name: "Gift Mwale", id: "ST-0115", status: "Present", remark: "" },
    { name: "Ephraim Chancy", id: "ST-0122", status: "Present", remark: "" },
    { name: "Loveness Jere", id: "ST-0130", status: "Present", remark: "" },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'teacher' && password === 'teacher123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Access denied.');
    }
  };

  const handleAction = (message) => {
    // Custom non-blocking message logic could go here, using standard UI for now
    console.log(`System Action: ${message}`);
  };

  const updateMark = (id, field, value) => {
    const numericValue = parseInt(value) || 0;
    setStudentMarks(prev => prev.map(s => s.id === id ? { ...s, [field]: numericValue } : s));
  };

  const updateAttendance = (id, status) => {
    setAttendanceList(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const addNewStudent = () => {
    if (!newStudentName || !newStudentId) return;
    
    const newEntry = {
      name: newStudentName,
      id: newStudentId.toUpperCase(),
      status: "Present",
      remark: ""
    };

    setAttendanceList(prev => [...prev, newEntry]);
    setNewStudentName('');
    setNewStudentId('');
    handleAction(`Added ${newStudentName} to the register`);
  };

  const removeStudent = (id) => {
    setAttendanceList(prev => prev.filter(s => s.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden font-sans">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-[#002147]/85 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-md p-8 animate-in fade-in zoom-in duration-700">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border border-white/20 mb-6 shadow-inner">
                <GraduationCap className="text-white w-12 h-12" />
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Alice Gwengwe</h1>
              <p className="text-[#00d1c1] text-[10px] uppercase tracking-[0.2em] font-black">Secondary School Portal</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {loginError && (
                <div className="bg-red-500/20 border border-red-500/50 p-3 rounded-xl text-red-200 text-xs text-center">
                  {loginError}
                </div>
              )}
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-white/60 uppercase ml-1">Staff Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00d1c1]/50 transition-all"
                  placeholder="teacher"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-white/60 uppercase ml-1">Secure Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00d1c1]/50 transition-all"
                  placeholder="teacher123"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-[#002147] font-bold py-4 rounded-xl hover:bg-[#00d1c1] hover:text-[#002147] transition-all shadow-lg active:scale-[0.98]"
              >
                Sign Into Portal
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
              <Lock size={12} /> Encrypted Session
            </div>
          </div>
          
          <p className="text-center mt-8 text-white/40 text-xs italic">
            "Excellence in Service, Integrity in Leadership"
          </p>
        </div>
      </div>
    );
  }

  const NavItem = ({ icon: Icon, label, id }) => (
    <button 
      onClick={() => {
        setActiveTab(id);
        setShowCalendar(false);
        setShowStats(false);
      }}
      className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${
        activeTab === id && !showCalendar && !showStats
        ? 'bg-white/10 text-white border-r-4 border-[#00d1c1]' 
        : 'text-white/60 hover:text-white hover:bg-white/5'
      }`}
    >
      <Icon size={20} />
      <span className={`${!sidebarOpen && 'hidden'}`}>{label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-[#f3f4f6] font-sans text-[#333]">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-[#002147] transition-all duration-300 flex flex-col fixed h-full z-50 shadow-2xl`}>
        <div className="p-8 flex items-center gap-4 border-b border-white/5">
          <div className="bg-white/10 p-2 rounded-xl border border-white/10">
            <GraduationCap className="text-[#00d1c1] w-6 h-6" />
          </div>
          {sidebarOpen && (
            <div>
              <span className="text-white font-black text-sm block tracking-tight">AGSS PORTAL</span>
              <span className="text-[#00d1c1] text-[9px] font-black uppercase">Staff Version</span>
            </div>
          )}
        </div>

        <nav className="mt-8 flex-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" id="dashboard" />
          <NavItem icon={GraduationCap} label="Results Management" id="results" />
          <NavItem icon={ClipboardCheck} label="Attendance Tracker" id="attendance" />
          <NavItem icon={FileUp} label="Learning Materials" id="materials" />
          <NavItem icon={Bell} label="Official Notices" id="notices" />
        </nav>

        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-4 px-6 py-8 text-white/40 hover:text-white transition-colors border-t border-white/5 group"
        >
          <LogOut size={20} className="group-hover:text-red-400" />
          {sidebarOpen && <span>Sign Out</span>}
        </button>
      </aside>

      <main className={`${sidebarOpen ? 'ml-72' : 'ml-20'} transition-all duration-300 flex-1 flex flex-col`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-40 px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-50 rounded-lg text-[#002147]">
              <Menu size={22} />
            </button>
            <div>
              <h2 className="text-xl font-black text-[#002147]">
                {showCalendar ? 'SCHOOL CALENDAR' : showStats ? 'ACADEMIC STATISTICS' : activeTab.toUpperCase()}
              </h2>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest">{teacherProfile.name} • {teacherProfile.id}</p>
            </div>
          </div>

          <button 
            onClick={() => setShowProfileModal(true)}
            className="flex items-center gap-4 group"
          >
             <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-[#002147] group-hover:text-[#00d1c1] transition-colors">Account Settings</p>
                <p className="text-[9px] font-black text-gray-400 uppercase">View Profile</p>
             </div>
             <div className="h-10 w-10 rounded-full bg-[#002147] flex items-center justify-center text-[#00d1c1] font-bold border-2 border-gray-100 group-hover:scale-105 transition-all">
               CP
             </div>
          </button>
        </header>

        <div className="p-10">
          
          {/* Calendar View Overlay */}
          {showCalendar && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8">
               <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#002147]">Term 2 Calendar</h3>
                    <p className="text-sm text-gray-400">Viewing March - May 2025 Cycle</p>
                  </div>
                  <button onClick={() => setShowCalendar(false)} className="px-6 py-2 bg-gray-100 text-gray-600 font-bold rounded-xl text-xs hover:bg-gray-200 transition-all">Back to Dashboard</button>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                      <h4 className="font-bold text-[#002147] flex items-center gap-2 text-lg"><CalendarDays className="text-[#00d1c1]" /> March 2025</h4>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-50 rounded-lg"><ChevronLeft size={18}/></button>
                        <button className="p-2 hover:bg-gray-50 rounded-lg"><ChevronRight size={18}/></button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <div key={day} className="text-center text-[10px] font-black uppercase text-gray-400 py-2">{day}</div>
                      ))}
                      {Array.from({length: 31}).map((_, i) => (
                        <div key={i} className={`h-16 rounded-xl border flex items-start p-2 text-xs font-bold transition-all relative group
                          ${[12, 24, 25].includes(i+1) ? 'bg-[#002147]/5 border-[#002147]/10' : 'bg-gray-50/50 border-gray-100 hover:border-[#00d1c1]'}
                          ${i+1 === 18 ? 'ring-2 ring-[#00d1c1] bg-white' : ''}
                        `}>
                          <span className={i+1 === 18 ? 'text-[#00d1c1]' : 'text-gray-400'}>{i+1}</span>
                          {[12].includes(i+1) && <div className="absolute bottom-2 left-2 right-2 h-1 bg-amber-400 rounded-full"></div>}
                          {[24, 25].includes(i+1) && <div className="absolute bottom-2 left-2 right-2 h-1 bg-red-400 rounded-full"></div>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#002147] rounded-3xl p-6 text-white shadow-xl">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#00d1c1] mb-4">Upcoming Deadlines</h4>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold">24</div>
                          <div>
                            <p className="font-bold text-sm">CA Marks Submission</p>
                            <p className="text-[10px] text-white/50">Deadline: 16:00 PM</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold">28</div>
                          <div>
                            <p className="font-bold text-sm">Staff Assessment Meet</p>
                            <p className="text-[10px] text-white/50">Conference Hall B</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          )}

          {/* Stats View Overlay */}
          {showStats && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8">
               <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#002147]">Performance Insights</h3>
                    <p className="text-sm text-gray-400">Academic Analytics for Mr. Chimwemwe Phiri</p>
                  </div>
                  <button onClick={() => setShowStats(false)} className="px-6 py-2 bg-gray-100 text-gray-600 font-bold rounded-xl text-xs hover:bg-gray-200 transition-all">Back to Dashboard</button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Overall Class Avg", val: "72.4%", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Pass Rate", val: "88.1%", icon: Award, color: "text-amber-600", bg: "bg-amber-50" },
                    { label: "Total Students", val: "142", icon: Users, color: "text-[#002147]", bg: "bg-gray-50" },
                    { label: "Attendance Avg", val: "94.0%", icon: ClipboardCheck, color: "text-green-600", bg: "bg-green-50" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                       <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                          <stat.icon size={24} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-wider">{stat.label}</p>
                          <p className="text-xl font-black text-[#002147]">{stat.val}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          )}
          
          {/* Main Content Views */}
          {!showCalendar && !showStats && (
            <>
              {/* Dashboard View */}
              {activeTab === 'dashboard' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="bg-[#002147] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="relative z-10">
                        <h1 className="text-3xl font-bold mb-2">Welcome back, {teacherProfile.name}</h1>
                        <p className="text-white/70 max-w-md font-medium">Academic Year 2025 • Term 2. Final exams commence in 24 days. Please ensure all student assessments are current.</p>
                      </div>
                      <div className="relative z-10 flex gap-4">
                        <button onClick={() => setShowStats(true)} className="px-6 py-3 bg-[#00d1c1] text-[#002147] font-bold rounded-xl text-sm shadow-xl shadow-black/20">Academic Stats</button>
                        <button onClick={() => setShowCalendar(true)} className="px-6 py-3 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-xl text-sm">Institution Calendar</button>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-[#002147] mb-6 flex items-center gap-2"><Clock className="text-[#00d1c1]" size={20}/> Active Classes</h3>
                        <div className="space-y-4">
                          {['Form 4A - Mathematics', 'Form 4B - Mathematics', 'Form 3C - Physics'].map((cls, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-[#00d1c1] transition-all">
                              <span className="font-bold text-[#002147]">{cls}</span>
                              <button onClick={() => setActiveTab('attendance')} className="text-[#00d1c1] p-2 hover:bg-[#002147] rounded-lg transition-all"><ChevronRight size={18}/></button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-lg font-bold text-[#002147] mb-6 flex items-center gap-2"><Bell className="text-[#00d1c1]" size={20}/> Priority Alerts</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-orange-50 border-l-4 border-amber-400 rounded-r-2xl">
                              <p className="text-xs font-black text-amber-800 uppercase tracking-widest">Late Submission</p>
                              <p className="text-sm text-amber-800/80">Physics Assignment for Form 3C is 2 days overdue for marking.</p>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              )}

              {/* Results Management View */}
              {activeTab === 'results' && (
                <div className="animate-in slide-in-from-bottom-6 duration-500 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#002147]">Continuous Assessment & Exams</h3>
                        <p className="text-sm text-gray-500">Currently Entering: <span className="font-bold text-[#00d1c1]">Form 4A • Mathematics</span></p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleAction("Exporting Results to CSV")} className="px-4 py-2 border border-gray-200 bg-white rounded-xl text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                          <Download size={16} /> Export Draft
                        </button>
                        <button onClick={() => handleAction("Locking Results")} className="px-4 py-2 bg-[#002147] text-white rounded-xl text-xs font-bold hover:bg-[#00d1c1] hover:text-[#002147] transition-all flex items-center gap-2">
                          <Lock size={16} /> Lock & Submit
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                      <table className="w-full text-left">
                        <thead className="bg-gray-50/50 border-b border-gray-100">
                          <tr className="text-[10px] font-black uppercase text-gray-400">
                            <th className="px-8 py-4">Student ID</th>
                            <th className="px-8 py-4">Student Name</th>
                            <th className="px-8 py-4 text-center">CA 1 (20)</th>
                            <th className="px-8 py-4 text-center">CA 2 (20)</th>
                            <th className="px-8 py-4 text-center">Exam (60)</th>
                            <th className="px-8 py-4 text-right">Total (%)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {studentMarks.map((std, i) => (
                            <tr key={i} className="hover:bg-gray-50/30 transition-colors group">
                              <td className="px-8 py-5 text-[10px] font-mono font-bold text-gray-400">{std.id}</td>
                              <td className="px-8 py-5 font-bold text-[#002147] text-sm">{std.name}</td>
                              <td className="px-8 py-5">
                                <input 
                                  type="number" 
                                  value={std.ca1} 
                                  onChange={(e) => updateMark(std.id, 'ca1', e.target.value)}
                                  className="w-16 mx-auto block bg-gray-50 border border-gray-100 rounded-lg p-2 text-center text-sm font-bold text-[#002147] focus:ring-1 focus:ring-[#00d1c1] outline-none" 
                                />
                              </td>
                              <td className="px-8 py-5">
                                <input 
                                  type="number" 
                                  value={std.ca2} 
                                  onChange={(e) => updateMark(std.id, 'ca2', e.target.value)}
                                  className="w-16 mx-auto block bg-gray-50 border border-gray-100 rounded-lg p-2 text-center text-sm font-bold text-[#002147] focus:ring-1 focus:ring-[#00d1c1] outline-none" 
                                />
                              </td>
                              <td className="px-8 py-5">
                                <input 
                                  type="number" 
                                  value={std.exam} 
                                  onChange={(e) => updateMark(std.id, 'exam', e.target.value)}
                                  className="w-20 mx-auto block bg-white border-2 border-gray-100 rounded-lg p-2 text-center text-sm font-bold text-[#002147] focus:ring-2 focus:ring-[#00d1c1] outline-none" 
                                />
                              </td>
                              <td className="px-8 py-5 text-right font-black text-[#002147]">
                                <span className={std.ca1+std.ca2+std.exam >= 50 ? 'text-green-600' : 'text-red-400'}>
                                  {std.ca1 + std.ca2 + std.exam}%
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                </div>
              )}

              {/* Attendance Tracker View */}
              {activeTab === 'attendance' && (
                <div className="animate-in slide-in-from-bottom-6 duration-500 space-y-6">
                  {/* Header Actions */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white p-8 rounded-t-[2rem] border-x border-t border-gray-100">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-[#002147] tracking-tight">ATTENDANCE REGISTER</h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Official Record • Academic Year 2025</p>
                    </div>
                    <div className="flex gap-2">
                       <button onClick={() => handleAction("Bulk enrollment mode")} className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs font-bold text-[#002147] hover:bg-gray-50 transition-all">
                          <UserPlus size={16}/> Bulk Add Students
                       </button>
                       <button onClick={() => handleAction("Saved")} className="flex items-center gap-2 px-6 py-3 border-2 border-gray-100 rounded-xl text-xs font-bold text-gray-500 hover:border-[#00d1c1] hover:text-[#00d1c1] transition-all"><SaveAll size={16}/> Save Draft</button>
                       <button onClick={() => handleAction("Finalized")} className="flex items-center gap-2 px-6 py-3 bg-[#002147] rounded-xl text-xs font-black text-white hover:bg-[#00d1c1] hover:text-[#002147] transition-all shadow-lg"><CheckCircle2 size={16}/> Finalize Register</button>
                    </div>
                  </div>

                  {/* Session Configurator (Tools) */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8 pb-8 bg-white border-x border-gray-100">
                    <div className="space-y-1.5">
                       <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-1.5"><Calendar size={10}/> Registry Date</label>
                       <input 
                         type="date" 
                         value={attendanceDate}
                         onChange={(e) => setAttendanceDate(e.target.value)}
                         className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm font-bold text-[#002147] focus:ring-1 focus:ring-[#00d1c1] outline-none"
                       />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-1.5"><Clock size={10}/> Subject Period</label>
                       <select 
                         value={attendanceSession}
                         onChange={(e) => setAttendanceSession(e.target.value)}
                         className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm font-bold text-[#002147] focus:ring-1 focus:ring-[#00d1c1] outline-none"
                       >
                         <option>Period 1 & 2</option>
                         <option>Period 3 & 4</option>
                         <option>Afternoon Session</option>
                       </select>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-1.5"><GraduationCap size={10}/> Target Class</label>
                       <select 
                         value={attendanceClass}
                         onChange={(e) => setAttendanceClass(e.target.value)}
                         className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm font-bold text-[#002147] focus:ring-1 focus:ring-[#00d1c1] outline-none"
                       >
                         {teacherProfile.classes.map(c => <option key={c} value={c}>{c}</option>)}
                       </select>
                    </div>
                    <div className="flex items-end gap-2">
                       <div className="flex-1 bg-[#00d1c1]/5 border border-[#00d1c1]/20 rounded-lg p-2 text-center">
                          <p className="text-[9px] font-bold text-[#002147]/60 uppercase">Present Count</p>
                          <p className="text-sm font-black text-[#002147]">{attendanceList.filter(s => s.status === 'Present').length} / {attendanceList.length}</p>
                       </div>
                    </div>
                  </div>

                  {/* Main Rollcall Tool */}
                  <div className="bg-white rounded-b-[2rem] border-x border-b border-gray-100 shadow-sm overflow-hidden">
                    <table className="w-full text-left table-fixed">
                      <thead className="bg-[#002147] text-white">
                        <tr className="text-[10px] font-black uppercase tracking-widest">
                          <th className="w-16 px-6 py-4 border-r border-white/5 text-center">#</th>
                          <th className="px-6 py-4">Student Name & ID</th>
                          <th className="w-64 px-6 py-4 text-center">Status Entry</th>
                          <th className="w-48 px-6 py-4">Remarks / Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {attendanceList.map((std, i) => (
                          <tr key={std.id} className={`transition-colors ${std.status === 'Absent' ? 'bg-red-50/30' : 'hover:bg-gray-50'}`}>
                            <td className="px-6 py-4 text-center text-xs font-bold text-gray-400 border-r border-gray-50">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-[#002147] leading-tight uppercase tracking-tight">{std.name}</span>
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">{std.id}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex border border-gray-200 rounded-lg overflow-hidden bg-white">
                                  <button 
                                    onClick={() => updateAttendance(std.id, 'Present')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase transition-all ${std.status === 'Present' ? 'bg-green-600 text-white' : 'text-gray-400 hover:bg-green-50'}`}
                                  >
                                    <UserCheck size={14}/> Present
                                  </button>
                                  <div className="w-[1px] bg-gray-200"></div>
                                  <button 
                                    onClick={() => updateAttendance(std.id, 'Absent')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase transition-all ${std.status === 'Absent' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-red-50'}`}
                                  >
                                    <UserX size={14}/> Absent
                                  </button>
                               </div>
                            </td>
                            <td className="px-6 py-4">
                               <div className="flex items-center gap-2">
                                  <input 
                                    type="text" 
                                    placeholder="Note..." 
                                    className="flex-1 bg-gray-50 border border-gray-100 rounded px-2 py-1.5 text-[11px] font-medium text-[#002147] focus:bg-white outline-none transition-all placeholder:italic"
                                  />
                                  <button 
                                    onClick={() => removeStudent(std.id)}
                                    className="p-1.5 text-gray-300 hover:text-red-500 transition-colors"
                                    title="Remove from temporary register"
                                  >
                                    <Trash2 size={14}/>
                                  </button>
                               </div>
                            </td>
                          </tr>
                        ))}

                        {/* Quick Add Row */}
                        <tr className="bg-gray-50/50 border-t-2 border-[#002147]/10">
                           <td className="px-6 py-4 text-center">
                              <Plus className="mx-auto text-[#00d1c1]" size={16}/>
                           </td>
                           <td className="px-6 py-4" colSpan={2}>
                              <div className="flex gap-4">
                                 <div className="flex-1 space-y-1">
                                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest ml-1">Student Full Name</p>
                                    <input 
                                      type="text"
                                      placeholder="e.g. John Doe"
                                      value={newStudentName}
                                      onChange={(e) => setNewStudentName(e.target.value)}
                                      className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs font-bold text-[#002147] outline-none focus:ring-1 focus:ring-[#00d1c1]"
                                    />
                                 </div>
                                 <div className="w-32 space-y-1">
                                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest ml-1">ID Number</p>
                                    <input 
                                      type="text"
                                      placeholder="ST-0000"
                                      value={newStudentId}
                                      onChange={(e) => setNewStudentId(e.target.value)}
                                      className="w-full bg-white border border-gray-200 rounded-lg p-2 text-xs font-bold text-[#002147] outline-none focus:ring-1 focus:ring-[#00d1c1]"
                                    />
                                 </div>
                              </div>
                           </td>
                           <td className="px-6 py-4">
                              <button 
                                onClick={addNewStudent}
                                disabled={!newStudentName || !newStudentId}
                                className="w-full py-3 bg-[#00d1c1] text-[#002147] rounded-xl text-[10px] font-black uppercase tracking-widest shadow-md hover:bg-[#002147] hover:text-white transition-all disabled:opacity-30 disabled:grayscale"
                              >
                                Register Student
                              </button>
                           </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 flex items-center gap-3">
                     <Info size={16} className="text-[#002147]" />
                     <p className="text-[11px] font-medium text-gray-600">You can add temporary student entries for visitors or transfer students. These entries will be verified by the admin upon registry submission.</p>
                  </div>
                </div>
              )}

              {/* Learning Materials View */}
              {activeTab === 'materials' && (
                <div className="animate-in slide-in-from-bottom-6 duration-500 space-y-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-[#002147]">Learning Materials</h3>
                    <button onClick={() => handleAction("Upload")} className="bg-[#002147] text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 hover:bg-amber-400 hover:text-[#002147] transition-all">
                      <Plus size={18} /> Upload New Material
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Differential Equations 101", type: "PDF", size: "2.4MB", date: "Mar 12, 2025", subject: "Mathematics" },
                      { title: "Wave Theory Diagrams", type: "IMAGE", size: "15MB", date: "Mar 10, 2025", subject: "Physics" },
                    ].map((file, i) => (
                      <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#002147] mb-4 group-hover:bg-[#00d1c1]/20 transition-colors">
                            <FileUp size={24} />
                        </div>
                        <h4 className="font-bold text-[#002147] mb-1 line-clamp-1">{file.title}</h4>
                        <p className="text-[10px] font-black text-[#00d1c1] uppercase mb-4 tracking-widest">{file.subject}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-4">
                            <span>{file.type} • {file.size}</span>
                            <div className="flex gap-2">
                              <button className="p-2 hover:text-[#002147] transition-colors"><Eye size={16}/></button>
                              <button className="p-2 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Notices View */}
              {activeTab === 'notices' && (
                <div className="animate-in slide-in-from-bottom-6 duration-500 space-y-8">
                  <h3 className="text-2xl font-bold text-[#002147]">Institutional Notices</h3>
                  <div className="space-y-6">
                    {[
                      { title: "End of Term Examination Guidelines", sender: "Head of Academics", date: "2 hours ago", urgent: true, body: "Please find the attached revised invigilation schedule for the Form 4 terminal exams." },
                    ].map((notice, i) => (
                      <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                          {notice.urgent && <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-black px-4 py-1 rounded-bl-xl tracking-widest uppercase">Urgent Action</div>}
                          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-[#002147] rounded-xl flex items-center justify-center text-white">
                              <Bell size={18} />
                            </div>
                            <div>
                              <h4 className="font-bold text-[#002147]">{notice.title}</h4>
                              <p className="text-xs text-gray-400 font-medium">{notice.sender} • {notice.date}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed mb-6">{notice.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>

      {/* Profile Modal */}
        {showProfileModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#002147]/60 backdrop-blur-sm animate-in fade-in duration-300">
             <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
                <div className="bg-[#002147] p-8 text-white relative">
                   <button onClick={() => setShowProfileModal(false)} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all">
                      <X size={20} />
                   </button>
                   <div className="flex items-center gap-6">
                      <div className="h-24 w-24 rounded-3xl bg-[#00d1c1] flex items-center justify-center text-3xl font-black text-[#002147] border-4 border-white/20 shadow-xl">
                        CP
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{teacherProfile.name}</h2>
                        <p className="text-white/60 text-sm font-medium">{teacherProfile.id}</p>
                        <div className="flex gap-2 mt-3">
                           <span className="text-[10px] font-black uppercase px-2 py-1 bg-white/10 rounded-lg tracking-widest">Senior Faculty</span>
                           <span className="text-[10px] font-black uppercase px-2 py-1 bg-[#00d1c1]/20 text-[#00d1c1] rounded-lg tracking-widest">Verified Account</span>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <User size={14} /> Personal Information
                      </h3>
                      <div>
                        <label className="text-[10px] font-bold text-[#002147] uppercase block mb-1">Official Email</label>
                        <input type="text" defaultValue={teacherProfile.email} className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-bold text-[#002147]" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-[#002147] uppercase block mb-1">Contact Phone</label>
                        <input type="text" defaultValue={teacherProfile.phone} className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm font-bold text-[#002147]" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <Shield size={14} /> Security Settings
                      </h3>
                      <button onClick={() => handleAction("Changing Password - Redirecting to Secure Auth")} className="w-full p-4 border-2 border-[#002147]/5 rounded-2xl text-left hover:bg-gray-50 transition-all flex items-center justify-between group">
                         <div>
                            <p className="text-xs font-bold text-[#002147]">Update Password</p>
                            <p className="text-[10px] text-gray-400">Last changed 4 months ago</p>
                         </div>
                         <ChevronRight size={18} className="text-gray-300 group-hover:text-[#00d1c1]" />
                      </button>
                      <button onClick={() => handleAction("2FA Security Enabled")} className="w-full p-4 border-2 border-[#002147]/5 rounded-2xl text-left hover:bg-gray-50 transition-all flex items-center justify-between group">
                         <div>
                            <p className="text-xs font-bold text-[#002147]">Two-Factor Auth</p>
                            <p className="text-[10px] text-green-500 font-bold uppercase">Status: Enabled</p>
                         </div>
                         <CheckCircle2 size={18} className="text-green-500" />
                      </button>
                   </div>
                </div>
                <div className="p-8 bg-gray-50 border-t border-gray-100 flex gap-3">
                   <button onClick={() => { setShowProfileModal(false); handleAction("Profile Updates Saved"); }} className="flex-1 bg-[#002147] text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#003366] transition-all flex items-center justify-center gap-2">
                     <Save size={18} /> Save All Changes
                   </button>
                   <button onClick={() => setShowProfileModal(false)} className="px-6 py-3 border border-gray-200 text-gray-400 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all">
                     Dismiss
                   </button>
                </div>
             </div>
          </div>
        )}


        {/* Footer */}
        <footer className="mt-auto p-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-gray-400 text-[9px] font-black uppercase tracking-[0.2em]">
           <div>© 2025 Alice Gwengwe Secondary School • Digital Services Unit</div>
           <div className="mt-4 md:mt-0 italic opacity-50">"Excellence in Service, Integrity in Leadership"</div>
        </footer>
      </main>
    </div>
  );
};

export default App;