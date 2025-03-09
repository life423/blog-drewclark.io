"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// NavLink component for desktop navigation
const NavLink = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href}
      className={`relative px-1 py-2 text-lg font-medium transition-colors duration-200 ${
        isActive 
          ? 'text-brandGreen-600 dark:text-brandGreen-400' 
          : 'text-brandGray-800 dark:text-brandGray-200 hover:text-brandGreen-500 dark:hover:text-brandGreen-400'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brandGreen-500 dark:bg-brandGreen-400"></span>
      )}
    </Link>
  );
};

// MobileNavLink for the mobile menu
const MobileNavLink = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
        isActive 
          ? 'bg-brandGreen-100 dark:bg-brandGreen-900/30 text-brandGreen-700 dark:text-brandGreen-400' 
          : 'text-brandGray-800 dark:text-brandGray-200 hover:bg-brandGray-100 dark:hover:bg-brandGray-800'
      }`}
    >
      {label}
    </Link>
  );
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Listen for scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  const pathname = usePathname();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${
      scrolled ? 'shadow-md' : ''
    } bg-white dark:bg-brandGray-900 border-b border-brandGray-200 dark:border-brandGray-800`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-brandGreen-500 mr-2"></div>
              <span className="font-bold text-lg text-brandGray-800 dark:text-white">Drew Clark</span>
            </Link>
          </div>
          
          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Home" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/theme" label="Theme" />
            <NavLink href="/contact" label="Contact" />
            {/* Removed subscribe button that had no functionality */}
          </nav>
          
          {/* Mobile Menu Button - visible only on mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-md text-brandGray-700 dark:text-brandGray-300 hover:bg-brandGray-100 dark:hover:bg-brandGray-800 focus:outline-none"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg className={`h-6 w-6 transition duration-200 ease-in-out ${mobileMenuOpen ? 'hidden' : 'block'}`} 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor" 
                 aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* X icon */}
            <svg className={`h-6 w-6 transition duration-200 ease-in-out ${mobileMenuOpen ? 'block' : 'hidden'}`}
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor" 
                 aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - slides down when open */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-brandGray-900 shadow-inner">
          <MobileNavLink href="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/blog" label="Blog" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/theme" label="Theme" onClick={() => setMobileMenuOpen(false)} />
          <MobileNavLink href="/contact" label="Contact" onClick={() => setMobileMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
}
