import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Placement from './components/Placement';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Root application component.
 * Single-page layout — all sections render on one scrollable page.
 * Section order mirrors the Header navigation for UX consistency.
 */
export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-orange-600 focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Courses />
        <Projects />
        <Testimonials />
        <Placement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
