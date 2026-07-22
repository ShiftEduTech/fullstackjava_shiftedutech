import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'How long is the Full Stack Java course at ShiftEduTech?',
    answer:
      'The Full Stack Java program is 4 months long and covers Core Java, frameworks, frontend skills, real-time projects, and interview preparation for placement.',
  },
  {
    question: 'Does ShiftEduTech provide placement support for Java students?',
    answer:
      'Yes. ShiftEduTech provides placement support including resume preparation, mock interviews, and guidance to help students pursue Java developer roles after the course.',
  },
  {
    question: 'What are the prerequisites for the Full Stack Java course?',
    answer:
      'No prior professional Java experience is required. The course is designed for beginners and career switchers who are ready to learn consistently for 4 months.',
  },
  {
    question: 'What are the fees for the Full Stack Java course in Hyderabad?',
    answer:
      'Course fees are shared during counseling after your free demo classes. You can attend 3 free demo sessions with no upfront payment before deciding to enroll.',
  },
  {
    question: 'Can I attend a free demo class before joining?',
    answer:
      'Yes. ShiftEduTech offers 3 free demo classes at its Hyderabad (Kondapur/KPHB) and Eluru locations. Book a demo online or call +91 96405 91713.',
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Common Questions
          </div>
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
          >
            Full Stack Java Course{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Quick answers about duration, placement, prerequisites, fees, and free demo classes.
          </p>
        </div>

        <div className="space-y-3" role="list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-orange-100 bg-orange-50/40 overflow-hidden"
                role="listitem"
              >
                <button
                  id={buttonId}
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-gray-900 hover:bg-orange-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-orange-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-4 text-gray-600 font-medium leading-relaxed"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
