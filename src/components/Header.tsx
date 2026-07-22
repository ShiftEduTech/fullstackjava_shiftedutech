import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/shiftedutech-logo.png';
import { scrollToSection as scrollToSectionUtil } from '../utils/scrollToSection';

// Navigation items — defined once, shared between desktop and mobile menus
const NAV_ITEMS: { label: string; sectionId: string }[] = [
  { label: 'Home',     sectionId: 'home' },
  { label: 'Trainer',  sectionId: 'about' },
  { label: 'Courses',  sectionId: 'courses' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Success',  sectionId: 'testimonials' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /** Smooth-scroll to a named section and close the mobile menu. */
  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    // passive: true tells the browser this listener won't call preventDefault — improves scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-white/95 shadow-lg'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-20">

          {/* ── Logo ── */}
          <a
            href="#home"
            className="flex items-center cursor-pointer group py-2 bg-transparent border-0"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            aria-label="ShiftEduTech – Return to homepage"
          >
            <img
              src={logoImg}
              alt="ShiftEduTech logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              width={160}
              height={48}
            />
          </a>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map(({ label, sectionId }) => (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sectionId);
                }}
                className="text-gray-700 hover:text-orange-600 transition font-medium px-4 py-2 rounded-lg hover:bg-orange-50"
              >
                {label}
              </a>
            ))}
          </div>

          {/* ── Desktop CTA Button ── */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:shadow-xl hover:shadow-orange-200 transition font-semibold items-center space-x-2 group"
            aria-label="Book a free 3-day demo class"
          >
            <span>Book Demo</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" aria-hidden="true" />
          </button>

          {/* ── Mobile Hamburger Toggle ── */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-600 transition p-2 rounded-lg hover:bg-orange-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen
              ? <X className="h-6 w-6" aria-hidden="true" />
              : <Menu className="h-6 w-6" aria-hidden="true" />
            }
          </button>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t border-gray-200 py-4"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map(({ label, sectionId }) => (
                <a
                  key={sectionId}
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className="text-gray-700 hover:text-orange-600 transition text-left font-medium px-4 py-3 rounded-lg hover:bg-orange-50"
                  role="menuitem"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition font-semibold flex items-center justify-center space-x-2 mt-2"
                role="menuitem"
                aria-label="Book a free 3-day demo class"
              >
                <span>Book Demo Class</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
