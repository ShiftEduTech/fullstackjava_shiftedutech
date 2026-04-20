import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export default function Hero() {
  /** Scroll to the contact/demo booking section. */
  const scrollToContact = () => {
    scrollToSection('contact');
  };

  /** Scroll to the courses/curriculum section. */
  const scrollToCourses = () => {
    scrollToSection('courses');
  };

  return (
    <section
      id="home"
      aria-label="ShiftEduTech Full Stack Java Internship – Hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white"
    >
      {/* ── Decorative Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[70%] bg-gradient-to-b from-orange-100/60 to-orange-50/10 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[60%] bg-gradient-to-t from-orange-50/80 to-transparent rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy & CTAs ── */}
          <div className="space-y-10 text-center lg:text-left">

            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md text-orange-800 px-4 py-2 rounded-full ring-1 ring-orange-500/30 shadow-sm cursor-default hover:ring-orange-500/50 transition-all duration-300">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-inner">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold tracking-wide pr-1">7+ Years | 1650+ Success Stories</span>
            </div>

            {/* Headline — single H1 per page for SEO */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-black text-gray-900 leading-[1.1] tracking-tight">
                Full Stack Java Course <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                  with Placement
                </span>
                <br /> in Hyderabad
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Master industry-ready skills with expert guidance. Get placed in top IT companies
                through our intensive 4-month professional program.
              </p>
              {/* Trendy Demo Offer Badge */}
              <div className="flex items-center gap-4 p-1 pr-4 w-fit bg-orange-50/50 backdrop-blur-sm border border-orange-100 rounded-2xl group cursor-default hover:bg-orange-100/50 transition-colors duration-300 mx-auto lg:mx-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 text-white shadow-lg shadow-orange-500/20">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600/80">Special Offer</span>
                  <span className="text-sm font-black text-gray-900">Attend 3 Free Demo Classes</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl hover:from-orange-500 hover:to-orange-400 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 overflow-hidden ring-1 ring-orange-500/50"
                aria-label="Join the free 3-day demo class"
              >
                <span className="relative flex items-center gap-2">
                  Join Demo Class
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </span>
              </button>

              <button
                onClick={scrollToCourses}
                className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 transition-all duration-300 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl hover:border-orange-500 hover:text-orange-600 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="View the full course curriculum"
              >
                View Curriculum
              </button>
            </div>
          </div>

          {/* ── Right: Hero Image ── */}
          <div className="relative mt-12 lg:mt-0 max-w-lg mx-auto lg:max-w-none group">

            {/* Soft glow behind image */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
              aria-hidden="true"
            />

            {/* Image wrapper */}
            <div className="relative rounded-[2.5rem] p-2 sm:p-3 bg-white/60 backdrop-blur-md ring-1 ring-gray-900/5 shadow-2xl transition-transform duration-700 hover:-translate-y-1">
              <div className="rounded-[2rem] overflow-hidden relative border border-white/40">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10 pointer-events-none" aria-hidden="true" />
                {/* LCP hero image — loaded eagerly and prioritised for best Core Web Vitals */}
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students attending Full Stack Java training class at ShiftEduTech"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                  fetchPriority="high"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
