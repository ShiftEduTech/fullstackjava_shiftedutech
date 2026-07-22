import { Terminal, Monitor, Layout, ShoppingCart, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import cliImg from '../assets/projects/cli-project.webp';
import guiImg from '../assets/projects/gui-project.webp';
import staticWebImg from '../assets/projects/static-web-project.webp';
import dynamicWebImg from '../assets/projects/dynamic-web-project.webp';

// ── Types ──────────────────────────────────────────────────────────────────

interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  color: string;
  tagColor: string;
  technologies: string[];
}

// ── Data ───────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 'cli-app',
    title: 'Command Line Application (CLI)',
    type: 'Project 1',
    description:
      'Master Core Java fundamentals by logically structuring a robust CLI application. Learn input management, file handling, and algorithms without UI distractions.',
    image: cliImg,
    imageAlt: 'Screenshot of a Command Line Interface Java project built at ShiftEduTech',
    icon: Terminal,
    color: 'from-green-500 to-emerald-600',
    tagColor: 'text-emerald-700',
    technologies: ['OOPs', 'Core Java', 'Data Structures', 'Exception Handling', 'File I/O'],
  },
  {
    id: 'desktop-app',
    title: 'Desktop App (Java Swings & JavaFX)',
    type: 'Project 2',
    description:
      'Take your logic to the next level by building a visual Desktop Application. Understand event-driven programming, GUI components, and complex state management.',
    image: guiImg,
    imageAlt: 'Screenshot of a Java Swings desktop GUI application project built at ShiftEduTech',
    icon: Monitor,
    color: 'from-blue-500 to-indigo-600',
    tagColor: 'text-blue-700',
    technologies: ['Advanced Java', 'JDBC', 'DataBase', 'Java Swings', 'JavaFX', 'Events'],
  },
  {
    id: 'static-web',
    title: 'Static Web Application',
    type: 'Project 3',
    description:
      'Build your own professional Portfolio or Landing Page. Master the art of modern responsive web design using structural components and styling logic.',
    image: staticWebImg,
    imageAlt: 'Screenshot of a static portfolio website project built at ShiftEduTech',
    icon: Layout,
    color: 'from-pink-500 to-rose-600',
    tagColor: 'text-pink-700',
    technologies: ['HTML5', 'CSS3', 'UI/UX', 'Responsive Design'],
  },
  {
    id: 'dynamic-web-ecommerce',
    title: 'Dynamic Web App (E-Commerce)',
    type: 'Project 4',
    description:
      'The ultimate Full Stack Capstone. Build a complete dynamic application like an E-commerce platform connecting a React frontend with a Spring Boot backend and database.',
    image: dynamicWebImg,
    imageAlt: 'Screenshot of a full stack e-commerce dynamic web application project built at ShiftEduTech',
    icon: ShoppingCart,
    color: 'from-orange-500 to-amber-600',
    tagColor: 'text-orange-700',
    technologies: ['Servlets', 'JSP', 'Spring', 'Spring Boot', 'MySQL', 'REST APIs'],
  },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 z-0 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 z-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-sm border border-orange-200">
            <Code className="h-4 w-4" aria-hidden="true" />
            <span>Hands-On Building Experience</span>
          </div>
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Your Commitment:<br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Build 4+ Real-World Projects with us.
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            No boring theory — get complete hands-on support while creating four industry-level
            applications from scratch and deploying them like a professional.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                aria-label={`${project.type}: ${project.title}`}
              >
                {/* Image & overlay */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-multiply`}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" aria-hidden="true" />
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    width={640}
                    height={288}
                  />

                  {/* Project type badge */}
                  <div className="absolute top-5 right-5 z-20">
                    <span className={`px-4 py-2 rounded-xl text-xs font-black shadow-lg bg-white/95 backdrop-blur-md ${project.tagColor} border border-white/50`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Tech stack pills */}
                  <div className="absolute bottom-5 left-5 z-20">
                    <ul className="flex gap-2 flex-wrap" aria-label="Technologies used">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="px-3 py-1.5 bg-white/20 border border-white/30 backdrop-blur-md rounded-lg text-white text-xs font-bold shadow-sm"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start mb-4">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mr-5 text-gray-700 group-hover:scale-110 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200 transition-all duration-300">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight tracking-tight pt-1">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
