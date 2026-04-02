import { Users, Briefcase, GraduationCap, Linkedin, Instagram } from 'lucide-react';
import trainerImg from '../../assets/Trainer_rama chandra rao.png';

// Stat cards data — avoids repetition of card markup
const STATS = [
  {
    icon: Briefcase,
    value: '7+',
    label: 'Years Experience',
    iconBg: 'bg-orange-300/20',
    iconColor: 'text-orange-200',
  },
  {
    icon: Users,
    value: '1650+',
    label: 'Students Trained',
    iconBg: 'bg-blue-300/20',
    iconColor: 'text-blue-200',
  },
  {
    icon: GraduationCap,
    value: '20+',
    label: 'College Workshops',
    iconBg: 'bg-emerald-300/20',
    iconColor: 'text-emerald-200',
  },
] as const;

const TRAINER_BADGES = [
  'EdTech Entrepreneur',
  'Senior Full Stack Java Developer',
  'Full Stack Java Trainer',
  'Web Development Expert',
  'Career Strategist',
] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 lg:py-24"
    >
      {/* ── Decorative background glows ── */}
      <div className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-14 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-orange-300 backdrop-blur-md">
            Founding Mentor
          </span>
          <h2 id="about-heading" className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Rama Chandra Rao Polamarasetti
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ── Left: Trainer profile card ── */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="group relative flex flex-grow flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-400/20 via-white/10 to-indigo-300/20" aria-hidden="true" />

              <div className="relative z-10 flex flex-col items-center w-full">
                {/* Trainer photo with animated ring */}
                <div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
                  <div
                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 opacity-75 blur-md transition-opacity duration-500 group-hover:opacity-100 animate-[spin_5s_linear_infinite]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 z-10 rounded-full bg-white p-2 shadow-lg">
                    <img
                      src={trainerImg}
                      alt="Rama Chandra Rao Polamarasetti – Founder and Lead Trainer at ShiftEduTech"
                      className="w-full h-full object-cover object-top rounded-full"
                      width={256}
                      height={256}
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="mb-1 text-center text-2xl font-extrabold tracking-tight text-white">
                  Rama Chandra Rao
                </h3>
                <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-orange-300">
                  Founder &amp; Lead Trainer
                </p>

                {/* Social links */}
                <div className="flex w-full justify-center space-x-4 border-t border-white/20 pt-6">
                  <a
                    href="https://linkedin.com/in/ramachandraraop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/30 bg-white/10 p-3 text-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white"
                    aria-label="Rama Chandra Rao on LinkedIn (opens in new tab)"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/ramesh7._/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-white/30 bg-white/10 p-3 text-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#C13584] hover:text-white"
                    aria-label="Rama Chandra Rao on Instagram (opens in new tab)"
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Bio, stats, and social connect ── */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Bio card */}
            <div className="rounded-[2rem] border border-white/25 bg-white/10 p-8 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.8)] backdrop-blur-xl md:p-10">
              {/* Role badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TRAINER_BADGES.map((badge) => (
                  <span key={badge} className="rounded-xl border border-white/25 bg-white/15 px-4 py-2 text-sm font-bold text-orange-100">
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="mb-4 text-2xl font-black tracking-tight text-white">
                Building &amp; Scaling ShiftEduTech
              </h3>
              <p className="text-lg font-medium leading-relaxed text-slate-200">
                I am a dedicated Mentor to Aspiring Software Engineers. With extensive experience in
                enterprise-grade software development and corporate training, my mission is to transform
                driven learners into highly capable, job-ready professionals equipped to solve modern
                technical challenges.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STATS.map(({ icon: Icon, value, label, iconBg, iconColor }) => (
                <div
                  key={label}
                  className="group flex flex-col justify-between rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-md backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} ${iconColor}`}>
                    <Icon className="h-6 w-6 transition group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="mb-2 text-4xl font-black tracking-tight text-white">{value}</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-slate-300">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social connect banner */}
            <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/25 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-8 shadow-lg backdrop-blur-xl sm:flex-row">
              <div>
                <h4 className="mb-1 text-xl font-bold tracking-tight text-white">
                  Connect with ShiftEduTech
                </h4>
                <p className="text-sm font-medium text-slate-300">
                  Follow our official channels for the latest updates.
                </p>
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <a
                  href="https://www.linkedin.com/company/ShiftEduTech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white transition-all hover:-translate-y-0.5 hover:bg-[#0A66C2] sm:flex-none"
                  aria-label="ShiftEduTech on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="h-5 w-5 sm:mr-2" aria-hidden="true" />
                  <span className="hidden sm:inline font-bold text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/ShiftEduTech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white transition-all hover:-translate-y-0.5 hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#C13584] sm:flex-none"
                  aria-label="ShiftEduTech on Instagram (opens in new tab)"
                >
                  <Instagram className="h-5 w-5 sm:mr-2" aria-hidden="true" />
                  <span className="hidden sm:inline font-bold text-sm">Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
