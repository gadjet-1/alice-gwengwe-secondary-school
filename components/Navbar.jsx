'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Note: Using standard <a> tags instead of 'next/link' for compatibility
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>{children}</a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Academics',
      href: '#',
      dropdown: [
        { label: 'Subjects', href: '/subjects' },
        { label: 'Departments & Staff', href: '/deptstaff' },
        { label: 'Academic Calendar', href: '/academics' },
      ],
    },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Results', href: '/results' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact us' },
    {
      name: 'Login',
      href: '#',
      dropdown: [
        { label: 'Teachers Portal', href: '/teachersp' },
        { label: 'Students portal', href: '/student portal' },
      ],
    },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-[100] bg-white border-b border-gray-100 py-3 md:py-4 shadow-sm`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Branding Area: Logo + Text */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#002147] rounded-full flex items-center justify-center text-white overflow-hidden shrink-0 shadow-sm transition-transform group-hover:scale-105">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
             </svg>
          </div>
          
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-serif font-bold tracking-tight whitespace-nowrap text-[#002147]">
              ALICE GWENGWE<span className="text-[#800000]">.</span>
            </span>
            <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-[#800000]">
              Secondary School
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.href === '#' ? (
                <button className="flex items-center gap-1 text-[11px] xl:text-[12px] font-bold uppercase tracking-widest text-[#002147] hover:text-[#800000] py-2 transition-colors">
                  {link.name}
                  {link.dropdown && <ChevronDown size={12} className="opacity-50" />}
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-[11px] xl:text-[12px] font-bold uppercase tracking-widest text-[#002147] hover:text-[#800000] py-2 transition-colors"
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 py-3 rounded-b-lg z-[110]"
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:bg-gray-50 hover:text-[#800000] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden relative z-[110] p-2 transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-[#002147]'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-[#002147] shadow-2xl lg:hidden z-[105] overflow-y-auto"
            >
              <div className="flex flex-col gap-5 px-8 pt-28 pb-10">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/10 pb-2">
                    {link.href !== '#' ? (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-xs font-bold uppercase tracking-widest text-white hover:text-[#800000] transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name
                          )
                        }
                        className="flex justify-between items-center w-full text-xs font-bold uppercase tracking-widest text-white"
                      >
                        {link.name}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}

                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-3 ml-2 flex flex-col gap-3 border-l-2 border-[#800000] pl-4"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[10px] uppercase tracking-widest text-gray-300 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;