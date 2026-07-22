import { useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { useLoadScriptWhenVisible } from '../utils/useLoadScriptWhenVisible';

// ── Constants ──────────────────────────────────────────────────────────────

const YOUFORM_SCRIPT_SRC = 'https://app.youform.com/embed.js';

const DEMO_BENEFITS = [
  'Experience our teaching methodology firsthand',
  'Get complete curriculum and career roadmap',
  'Understand placement process and opportunities',
  'Clear all your doubts about the course',
  'Get exclusive early bird discount offer',
] as const;

// ── Contact info items ─────────────────────────────────────────────────────

const CONTACT_ITEMS = [
  {
    id: 'phone',
    href: 'tel:+919640591713',
    label: 'Call Us at +91 96405 91713',
    icon: Phone,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconHoverBg: 'group-hover:bg-orange-500',
    iconBorder: 'border-orange-200',
    arrowHoverColor: 'group-hover:text-orange-600',
    tag: 'Call Us',
    value: '+91 96405 91713',
    valueClass: 'text-lg font-black text-gray-900',
  },
  {
    id: 'support-email',
    href: 'mailto:support@melmaa.com',
    label: 'Email support at support@melmaa.com',
    icon: Mail,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconHoverBg: 'group-hover:bg-blue-600',
    iconBorder: 'border-blue-200',
    arrowHoverColor: 'group-hover:text-blue-600',
    tag: 'Support Email',
    value: 'support@melmaa.com',
    valueClass: 'text-sm font-black text-gray-900 truncate',
  },
  {
    id: 'hr-email',
    href: 'mailto:hr.shiftedutech@gmail.com',
    label: 'Email HR at hr.shiftedutech@gmail.com',
    icon: Mail,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    iconHoverBg: 'group-hover:bg-pink-500',
    iconBorder: 'border-pink-200',
    arrowHoverColor: 'group-hover:text-pink-600',
    tag: 'HR Email',
    value: 'hr.shiftedutech@gmail.com',
    valueClass: 'text-sm font-black text-gray-900 truncate',
  },
  {
    id: 'location',
    href: 'https://share.google/AoRNyJz3Xge8wSQ73',
    label: 'View ShiftEduTech location on Google Maps',
    icon: MapPin,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconHoverBg: 'group-hover:bg-emerald-500',
    iconBorder: 'border-emerald-200',
    arrowHoverColor: 'group-hover:text-emerald-600',
    tag: 'Visit Us',
    value: 'KPHB – Hyderabad & Eluru – AP',
    valueClass: 'text-sm font-black text-gray-900',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
] as const;

// ── Component ──────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);
  useLoadScriptWhenVisible(formRef, YOUFORM_SCRIPT_SRC, { async: true });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full mix-blend-multiply blur-[80px] opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply blur-[80px] opacity-70 pointer-events-none" aria-hidden="true" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-orange-800 ring-1 ring-orange-200 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
            </span>
            3 Days Free Demo Classes
          </div>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Book a Free{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Full Stack Java Demo Class
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Experience our teaching quality firsthand. For the first 3 days, you don&apos;t pay a
            single rupee. If you love the curriculum and trainer, then we proceed!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

          {/* ── Left Column: Why Demo & Contact Info ── */}
          <div className="lg:col-span-5 space-y-8">

            {/* Why Demo Card */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[2rem] p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <Star className="h-6 w-6 text-orange-500 fill-orange-500" aria-hidden="true" />
                Why Attend Demo Class?
              </h3>
              <ul className="space-y-4">
                {DEMO_BENEFITS.map((text) => (
                  <li key={text} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 font-semibold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Links */}
            <div className="space-y-3" role="list" aria-label="Contact details">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const isExternal = 'target' in item;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    {...(isExternal
                      ? { target: item.target, rel: item.rel }
                      : {})}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 hover:bg-white/80 transition-all shadow-sm hover:shadow-md group"
                    role="listitem"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconColor} ${item.iconHoverBg} group-hover:text-white transition-colors border ${item.iconBorder} flex-shrink-0`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">
                        {item.tag}
                      </div>
                      <div className={item.valueClass}>{item.value}</div>
                    </div>
                    <ArrowRight className={`h-5 w-5 text-gray-400 ${item.arrowHoverColor} transition-colors flex-shrink-0`} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* ── Right Column: Booking Form ── */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 mb-10">
                <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
                  Book Your Demo Class
                </h3>
                <p className="text-gray-600 font-medium text-lg">
                  Fill out the quick form and our team will schedule your 3 free demo sessions.
                </p>
              </div>

              {/* Youform embed — script loads when section approaches viewport; min-h reserves CLS space */}
              <div ref={formRef} className="relative z-10 w-full mb-6 min-h-[700px]">
                <div
                  data-youform-embed
                  data-form="0k4b6301"
                  data-base-url="https://app.youform.com"
                  data-width="100%"
                  data-height="700"
                  aria-label="Book a free demo class form"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
