import {
  CheckCircle, Clock, BookOpen, Award, Star,
  MonitorPlay, Rocket, ClipboardList, Terminal,
  MessageCircleQuestion, Target, Laptop, FileText,
  Users, Mic, Briefcase, Linkedin, Server, Layout,
  Database, Wrench, Bot, Layers,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

// ── Types ──────────────────────────────────────────────────────────────────

interface CourseModule {
  title: string;
  duration: string;
  icon: LucideIcon;
  gradient: string;
  shadowColor: string;
  tagColor: string;
  topics: string[];
}

interface CourseBenefit {
  text: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const COURSE_MODULES: CourseModule[] = [
  {
    title: 'Backend & Frameworks',
    duration: 'Core Engine',
    icon: Server,
    gradient: 'from-blue-500 to-indigo-600',
    shadowColor: 'hover:shadow-blue-200/50',
    tagColor: 'bg-blue-100 text-blue-700',
    topics: [
      'CORE JAVA & Advanced JAVA',
      'Swings & AWT for GUI',
      'Servlets & JSP',
      'Spring Framework',
      'Spring Boot Applications',
      'REST API Development',
    ],
  },
  {
    title: 'Frontend (UI)',
    duration: 'Foundation',
    icon: Layout,
    gradient: 'from-pink-500 to-rose-500',
    shadowColor: 'hover:shadow-pink-200/50',
    tagColor: 'bg-pink-100 text-pink-700',
    topics: [
      'HTML5 & Modern Web Structure',
      'CSS3, Styling & Responsive Design',
      'Basics of JavaScript',
      'UI/UX Fundamentals',
    ],
  },
  {
    title: 'Database Technologies',
    duration: 'Data Storage',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500',
    shadowColor: 'hover:shadow-emerald-200/50',
    tagColor: 'bg-emerald-100 text-emerald-700',
    topics: [
      'Relational Database Design',
      'MySQL Database',
      'Oracle Database',
      'Supabase Database',
      'SQL Queries & Joins',
    ],
  },
  {
    title: 'Developer Tools & Setup',
    duration: 'Industry Standard',
    icon: Wrench,
    gradient: 'from-amber-500 to-orange-500',
    shadowColor: 'hover:shadow-amber-200/50',
    tagColor: 'bg-amber-100 text-amber-700',
    topics: [
      'Git & GitHub Version Control',
      'IDE Mastery (JDK, Eclipse, VS, STS)',
      'Apache Tomcat Server Configuration',
      'Build Tools (Maven, Gradle)',
      'Debugging & Testing',
      'Agile Workflow Basics',
    ],
  },
  {
    title: 'AI Tools & Productivity',
    duration: 'Modern Edge',
    icon: Bot,
    gradient: 'from-violet-500 to-fuchsia-500',
    shadowColor: 'hover:shadow-violet-200/50',
    tagColor: 'bg-violet-100 text-violet-700',
    topics: [
      'Next-Gen AI assisted coding',
      'Cursor & Antigravity IDEs',
      'Lovable & Bolt.new Prototyping',
      'Vercel & Cloud Deployments',
      'Prompt Engineering for Devs',
      'AI bug fixing & analysis',
    ],
  },
  {
    title: '4+ Realtime Projects',
    duration: 'Hands-On',
    icon: Layers,
    gradient: 'from-cyan-500 to-blue-500',
    shadowColor: 'hover:shadow-cyan-200/50',
    tagColor: 'bg-cyan-100 text-cyan-700',
    topics: [
      '2 Standalone Projects (CLI & GUI using Swings)',
      'Static Web Application (Portfolio & Landing Page)',
      'Dynamic Web Application',
      'Full Stack Integration',
      'Code Reviews & Best Practices',
      'Live Deployment to Cloud',
    ],
  },
];

const COURSE_BENEFITS: CourseBenefit[] = [
  { text: 'Live Classes (Online & Offline)', icon: MonitorPlay, color: 'text-blue-600', bg: 'bg-blue-100' },
  { text: '4+ Realtime Projects', icon: Rocket, color: 'text-purple-600', bg: 'bg-purple-100' },
  { text: 'Daily Tasks & Assignments', icon: ClipboardList, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { text: 'Hands-On Practice', icon: Terminal, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { text: 'Doubts Clarification', icon: MessageCircleQuestion, color: 'text-pink-600', bg: 'bg-pink-100' },
  { text: 'Topic Based Assessments', icon: Target, color: 'text-red-600', bg: 'bg-red-100' },
  { text: 'Online Exams', icon: Laptop, color: 'text-indigo-600', bg: 'bg-indigo-100' },
  { text: 'Resume Building', icon: FileText, color: 'text-cyan-600', bg: 'bg-cyan-100' },
  { text: 'Mock Interviews', icon: Users, color: 'text-orange-600', bg: 'bg-orange-100' },
  { text: 'Communication Skills', icon: Mic, color: 'text-teal-600', bg: 'bg-teal-100' },
  { text: 'Interview Preparation', icon: BookOpen, color: 'text-fuchsia-600', bg: 'bg-fuchsia-100' },
  { text: '100% Placement Assistance', icon: Briefcase, color: 'text-green-600', bg: 'bg-green-100' },
  { text: 'LinkedIn Profile Optimization', icon: Linkedin, color: 'text-sky-600', bg: 'bg-sky-100' },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function Courses() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Complete Curriculum
          </div>
          <h2 id="courses-heading" className="text-5xl font-black text-gray-900 mb-4">
            Full Stack Java Curriculum{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Built for Placement
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Become a Full Stack Java developer in 4 months — even as a beginner. Build 4+ real-world projects with placement support.
          </p>
        </div>

        {/* ── Quick Info Cards ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Clock,
              title: 'Duration',
              value: '4 Months (Monday to Saturday)',
              note: '2+ Hours Per Day Intensive Training',
            },
            {
              icon: BookOpen,
              title: 'Learning Mode',
              value: 'Classroom & Online Training',
              note: 'Flexible for all schedules',
            },
          ].map(({ icon: Icon, title, value, note }) => (
            <div key={title} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 w-fit rounded-xl mb-4 group-hover:scale-110 transition">
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-lg font-semibold">{value}</p>
              <p className="text-sm text-gray-500 mt-2">{note}</p>
            </div>
          ))}
        </div>

        {/* ── Course Modules Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {COURSE_MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className={`relative group bg-white rounded-3xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-500 border border-gray-100 shadow-xl ${module.shadowColor} overflow-hidden`}
              >
                {/* Top gradient accent bar */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${module.gradient}`} aria-hidden="true" />

                {/* Glowing blob on hover */}
                <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${module.gradient} rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} aria-hidden="true" />

                <div className="flex items-center justify-between mb-6 sm:mb-8 relative z-10">
                  <div className={`bg-gradient-to-br ${module.gradient} p-4 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" aria-hidden="true" />
                  </div>
                  <span className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold ${module.tagColor}`}>
                    {module.duration}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6 relative z-10 group-hover:text-gray-800 transition-colors">
                  {module.title}
                </h3>

                <ul className="space-y-3 sm:space-y-4 relative z-10">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start group/item">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-3 flex-shrink-0 mt-0.5 text-gray-400 group-hover/item:text-gray-900 transition-colors duration-200" aria-hidden="true" />
                      <span className="text-sm sm:text-base text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors duration-200">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* ── Roadmap CTA ── */}
        <div className="flex justify-center mb-16">
          <a
            href="/ShiftEduTech_Full_Stack_Java_RoadMap_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 px-8 py-4 font-extrabold text-white shadow-lg shadow-orange-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            aria-label="Download the Full Stack Java Roadmap 2026 PDF"
          >
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            <FileText className="relative z-10 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span className="relative z-10 tracking-wide">Explore Roadmap</span>
          </a>
        </div>

        {/* ── Benefits Section ── */}
        <div className="relative mb-16 overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-white/60 via-orange-50/70 to-amber-100/50 shadow-[0_20px_60px_-20px_rgba(249,115,22,0.45)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-orange-300/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            <div className="mb-10 flex items-center">
              <div className="mr-4 rounded-2xl border border-white/70 bg-white/50 p-3.5 shadow-lg backdrop-blur-md">
                <Star className="h-8 w-8 text-orange-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600/90">Why learners choose us</p>
                <h3 className="text-3xl font-black text-gray-900">ShiftEduTech Course Benefits</h3>
              </div>
            </div>

            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {COURSE_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <li
                    key={benefit.text}
                    className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/45 p-4 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-200/80 hover:bg-white/65 hover:shadow-xl"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" aria-hidden="true" />
                    <div className="flex items-center">
                      <div className={`${benefit.bg} ${benefit.color} mr-4 rounded-xl p-3 shadow-sm ring-1 ring-white/50 transition duration-300 group-hover:scale-110`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="font-semibold text-gray-800">{benefit.text}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ── Certification Banner ── */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-8 md:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -ml-48 -mb-48 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 space-y-4 mb-8 md:mb-0 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-2">
              <Award className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-semibold">Certification Process</span>
            </div>
            <h3 className="text-4xl font-black">Internship &amp; Certifications</h3>
            <div className="space-y-2 mt-4">
              {[
                'Receive your Internship Offer Letter upon enrollment.',
                'Earn your full INTERNSHIP Certificate upon course completion.',
              ].map((step, i) => (
                <div key={i} className="flex items-center text-lg">
                  <span className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <span><strong>Step {i + 1}:</strong> {step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-orange-600 px-10 py-5 rounded-xl hover:shadow-2xl transition font-black text-lg inline-block hover:scale-105"
              aria-label="Enroll now in the Full Stack Java Internship"
            >
              Enroll Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
