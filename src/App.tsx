import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const Courses = lazy(() => import('./components/Courses'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Placement = lazy(() => import('./components/Placement'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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
        <Suspense
          fallback={
            <div className="min-h-[50vh] p-8 text-center text-gray-500" role="status" aria-live="polite">
              Loading sections...
            </div>
          }
        >
          <Courses />
          <Projects />
          <Testimonials />
          <Placement />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense
        fallback={
          <div className="min-h-24 p-8 text-center text-gray-500" role="status" aria-live="polite">
            Loading footer...
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}
