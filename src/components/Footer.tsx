import { scrollToSection } from '../utils/scrollToSection';

// Footer navigation links — mirrors the main Header nav for consistency
const FOOTER_LINKS = [
  { label: 'Home', sectionId: 'home' },
  { label: 'Curriculum', sectionId: 'courses' },
  { label: 'Contact', sectionId: 'contact' },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gray-900 border-t border-gray-800 py-16 relative overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-orange-500/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Brand tagline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <blockquote>
            <p className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              &ldquo;We Don&rsquo;T Just Teach Java&hellip;<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                We Build Industry-Ready Developers.&rdquo;
              </span>
            </p>
            <cite className="mt-4 block text-sm text-gray-400 font-medium not-italic">— ShiftEduTech</cite>
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-8" aria-hidden="true" />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm font-medium gap-4">
          <p>© {currentYear} ShiftEduTech. All rights reserved.</p>

          <nav aria-label="Footer navigation">
            <ul className="flex space-x-6">
              {FOOTER_LINKS.map(({ label, sectionId }) => (
                <li key={sectionId}>
                  <button
                    onClick={() => scrollToSection(sectionId)}
                    className="hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </footer>
  );
}
