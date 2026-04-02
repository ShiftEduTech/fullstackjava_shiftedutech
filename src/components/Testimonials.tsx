import { useEffect } from 'react';

// Elfsight widget app ID — change this if the widget ever regenerates
const ELFSIGHT_APP_ID = 'elfsight-app-f570c807-818f-408f-a96c-19426a43e8d1';
const ELFSIGHT_SCRIPT_SRC = 'https://elfsightcdn.com/platform.js';

export default function Testimonials() {
  useEffect(() => {
    // Inject the Elfsight script only once (guard against hot-reload double injection)
    if (!document.querySelector(`script[src="${ELFSIGHT_SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = ELFSIGHT_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-5 py-2.5 rounded-full text-sm font-bold mb-4 shadow-sm border border-orange-200">
            Success Stories
          </div>
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            1650+ Students{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Transformed
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            From aspirants to industry professionals at top companies
          </p>
        </div>

        {/* Elfsight Google Reviews Widget
            Uses dangerouslySetInnerHTML to prevent React from crashing when
            Elfsight mutates the DOM tree after mount. */}
        <div className="mb-20 min-h-[400px]" aria-label="Google Reviews from ShiftEduTech students">
          <div
            dangerouslySetInnerHTML={{
              __html: `<div class="${ELFSIGHT_APP_ID}" data-elfsight-app-lazy="true"></div>`,
            }}
          />
        </div>

      </div>
    </section>
  );
}
