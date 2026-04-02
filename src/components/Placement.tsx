import { Building2, FileCheck, Users, TrendingUp, CheckCircle, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────

interface PlacementService {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PlacementCommitment {
  text: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const PLACEMENT_SERVICES: PlacementService[] = [
  {
    icon: FileCheck,
    title: 'Resume Building',
    description:
      'Professional resume crafting highlighting your projects and skills to attract recruiters.',
  },
  {
    icon: Users,
    title: 'Mock Interviews',
    description:
      'Realistic interview simulations with feedback to build confidence and improve performance.',
  },
  {
    icon: TrendingUp,
    title: 'Interview Preparation',
    description:
      'Comprehensive coverage of common interview questions, coding challenges, and HR rounds.',
  },
  {
    icon: Building2,
    title: 'Company Referrals',
    description:
      'Direct referrals to our hiring partner companies and exclusive job opportunities.',
  },
];

const PLACEMENT_COMMITMENTS: PlacementCommitment[] = [
  { text: 'Unlimited interview preparation & support until you secure an offer' },
  { text: 'Personalized career counseling and actionable feedback' },
  { text: 'Exclusive job portal access and recruiter outreach' },
  {
    text: 'Lifetime mentorship support while you take responsibility for applications & interview performance',
  },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function Placement() {
  return (
    <section
      id="placement"
      aria-labelledby="placement-heading"
      className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-10 -right-20 w-96 h-96 bg-amber-200/30 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100/90 text-orange-800 ring-1 ring-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            100% Placement Assistance
          </div>
          <h2 id="placement-heading" className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-[1.05]">
            Career Support{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              That Gets Results
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide 100% placement assistance and coaching. You&apos;re responsible for your effort
            and performance, and we help you maximize your chances to secure interviews and offers.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PLACEMENT_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition transform-gpu">
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-lg shadow-orange-500/10 ring-1 ring-white/40">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.26),transparent_45%)]" aria-hidden="true" />
          <div className="absolute -top-20 -right-20 w-72 h-72 pointer-events-none bg-orange-300/20 blur-3xl rounded-full" aria-hidden="true" />

          <div className="relative flex flex-col md:flex-row items-start md:space-x-8 gap-y-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl flex-shrink-0 shadow-lg shadow-orange-500/20">
              <Award className="h-8 w-8 text-white drop-shadow-sm" aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
                Our Placement Commitment
              </h3>
              <p className="text-gray-700 font-semibold leading-relaxed mb-6">
                <span className="text-orange-700">100% placement assistance</span> with coaching &amp;
                support to help you perform. You&apos;re responsible for your effort to secure
                interviews and offers.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {PLACEMENT_COMMITMENTS.map((commitment) => (
                  <li
                    key={commitment.text}
                    className="group flex items-start space-x-3 rounded-xl px-3 py-2 hover:bg-white/70 transition"
                  >
                    <CheckCircle
                      className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5 transition group-hover:scale-105"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-medium leading-relaxed group-hover:text-orange-700 transition">
                      {commitment.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
