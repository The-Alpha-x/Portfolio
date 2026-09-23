"use client";

import { useState } from "react";
import VantaBackground from "@/components/VantaBackground";
import ProjectCard from "@/components/ProjectCard";
import { Mail, Rocket, Phone, Menu, X } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Cubicle Kitchens (USA)",
      description: "A full-stack platform designed to streamline restaurant daily workflows, automated operations, and e-commerce integrations.",
      tags: ["Next.js", "Google Cloud Functions", "Tailwind CSS", "Firebase"],
      link: "https://cubiclekitchens.com/",
      images: [
        "./cubicle1.png",
        "./cubicle2.png",
        "./cubicle3.png",
        "./cubicle4.png"
      ]
    },
    {
      title: "Sweatmate",
      description: "Sports facility booking platform with reservation management and automated workflows integrated with waitlist allocation, analytics dashboards, commission tracking, and financial reporting.",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Firebase", "Mailchimp"],
      link: "#",
      images: [
        "./Sweatmate1.png",
        "./Sweatmate2.png",
        "./Sweatmate3.png",
        "./Sweatmate4.png"
      ]
    },
    {
      title: "Riyapuhunuwa (රියපුහුණුව)",
      description: "Multi-branch driving school management system for student, instructor, lesson, examination, and payment management, SMS notification, dashboards and automation functions..",
      tags: ["React.js", "Laravel", "MySQL", "SMS-Integration"],
      link: "#",
      images: [
        "./project-placeholder1.png",
        "./project-placeholder1.png",
        "./project-placeholder1.png"
      ]
    },
    {
      title: "Pulse",
      description: "Slack-integrated workflow automation platform with customizable questionnaires, scheduling and Slack-bot automation.",
      tags: ["React.js", "SlackAPI", "Slack Workflow Automation", "Firebase", "Payment Gateway Integration"],
      link: "#",
      images: [
        "./pulse1.png",
        "./pulse2.png",
        "./pulse3.png"
      ]
    },
    {
      title: "Grocery E-Commerce Platforms",
      description: "Web and mobile grocery shopping applications with responsive interfaces integrated with cart management, checkout workflows, and LankaPay payment processing.",
      tags: ["React.js", "React Native", "Firebase", "Payment Gateway Integration"],
      link: "#",
      images: [
        "./project-placeholder1.png",
        "./project-placeholder1.png",
        "./project-placeholder1.png"
      ]
    }
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filterTabs = [
    { id: "all", label: "All Stack" },
    { id: "frontend", label: "Front-End" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "other", label: "Other / Tools" }
  ];

  const techItems = [
    // Front-End
    { name: "React", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "UI Library" },
    { name: "Next.js", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", desc: "React Framework", invert: true },
    { name: "TypeScript", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", desc: "Typed JS" },
    { name: "Tailwind CSS", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", desc: "Utility CSS" },
    { name: "HTML5 / CSS3", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", desc: "Web Standard" },
    { name: "JavaScript", category: "frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", desc: "ES6+ Logic" },

    // Backend
    { name: "Node.js", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", desc: "Runtime Environment" },
    { name: "Express", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", desc: "Web Server", invert: true },
    { name: "PostgreSQL", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", desc: "Relational DB" },
    { name: "MongoDB", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", desc: "NoSQL Database" },
    { name: "REST APIs", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", desc: "Web Services" },
    { name: "Google Cloud", category: "backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", desc: "Cloud & AI Functions" },

    // Mobile
    { name: "React Native", category: "mobile", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", desc: "Cross Platform" },
    { name: "Flutter", category: "mobile", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", desc: "Dart UI Kit" },
    { name: "Expo", category: "mobile", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg", desc: "Mobile Workflow", invert: true },

    // Other & Tools
    { name: "Slack", category: "other", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", desc: "Team Chat" },
    { name: "GitHub", category: "other", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Code Hosting", invert: true },
    { name: "Git", category: "other", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", desc: "Version Control" },
    { name: "VS Code", category: "other", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", desc: "IDE / Editor" },
    { name: "Figma", category: "other", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", desc: "UI Design" }
  ];

  const filteredItems = activeFilter === "all"
    ? techItems
    : techItems.filter((item) => item.category === activeFilter);

  return (
    <VantaBackground>
      <div className="flex flex-col min-h-screen bg-black/70 overflow-x-hidden">
        {/* Navigation */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0c051b]/80 border-b border-cyan-500/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-pulse" />
              <span className="font-bold text-lg sm:text-xl tracking-wider text-white">NIRMAL AMANDA</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/80 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <nav className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-[#0c051b]/95 border-b border-cyan-500/20 backdrop-blur-xl animate-fadeIn">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 transition-all"
              >
                About
              </a>
              <a
                href="#stack"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 transition-all"
              >
                Tech Stack
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 transition-all"
              >
                Contact
              </a>
            </nav>
          )}
        </header>

        {/* Hero Section */}
        <section id="about" className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-8 sm:py-12 w-full mx-auto max-w-7xl">

          <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 lg:gap-2 xl:gap-4">
            {/* Front End Section */}
            <div className="flex justify-center lg:justify-end items-center w-full flex-1">
              <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right space-y-2 sm:space-y-4 p-2 sm:p-4 rounded-2xl group/frontend">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-wide leading-tight transition-all duration-300 transform group-hover/frontend:scale-105 cursor-pointer">
                  <span className="inline-block transition-transform duration-300 group-hover/frontend:-translate-y-1 hover:text-slate-100">Front End</span> <br />
                  <span className="text-cyan-400 inline-block transition-all duration-300 group-hover/frontend:scale-105 group-hover/frontend:drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]">Engineering</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xs leading-relaxed font-light transition-colors group-hover/frontend:text-slate-100">
                  Crafting pixel-perfect, responsive user interfaces & high-performance web applications.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-end pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-slate-950 cursor-pointer">React / Next.js</span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-slate-950 cursor-pointer">TypeScript</span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-cyan-950/80 border border-cyan-700/50 text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-slate-950 cursor-pointer">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Cyborg Hero Image - Automatically Responsive */}
            <div className="flex justify-center items-center w-full max-w-[240px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[360px] xl:max-w-[440px] shrink-0 my-2 lg:my-0">
              <img
                src="./portfolioHero.png"
                alt="Hero Background"
                className="w-full h-auto object-contain max-h-[35vh] sm:max-h-[50vh] transform transition-transform duration-300 hover:scale-105 filter hover:drop-shadow-[0_0_30px_rgba(63,209,255,0.4)]"
              />
            </div>

            {/* Back End Section */}
            <div className="flex justify-center lg:justify-start items-center w-full flex-1">
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 sm:space-y-4 p-2 sm:p-4 rounded-2xl group/backend">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-wide leading-tight transition-all duration-300 transform group-hover/backend:scale-105 cursor-pointer">
                  <span className="inline-block transition-transform duration-300 group-hover/backend:-translate-y-1 hover:text-slate-100">Back End</span> <br />
                  <span className="text-indigo-400 inline-block transition-all duration-300 group-hover/backend:scale-105 group-hover/backend:drop-shadow-[0_0_25px_rgba(129,140,248,0.8)]">Engineering</span>
                </h2>
                <p className="text-xs sm:text-sm lg:text-md text-slate-300 max-w-xs leading-relaxed font-light transition-colors group-hover/backend:text-slate-100">
                  Architecting robust REST APIs, cloud infrastructure & scalable databases.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start pt-2">
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-slate-950 cursor-pointer">Node.js / Express</span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-slate-950 cursor-pointer">PostgreSQL / MongoDB</span>
                  <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-slate-950 cursor-pointer">REST API</span>
                </div>
              </div>
            </div>

          </div>


          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-red-500/30 text-red-400 text-xs sm:text-sm font-mono mt-6 mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Hello, I'm <strong className="text-white font-semibold">Nirmal Amanda</strong></span>
          </div>

          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2 mb-4 leading-tight">
            Building Next-Gen <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-light px-2">
            Creative Full-Stack Developer specializing in high-performance web applications and modern interactive user interfaces.
          </p>


          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 text-white font-semibold backdrop-blur-md transition-all"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="stack" className="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Tech Stack</h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-300 ${isActive
                    ? "bg-cyan-500 border-cyan-400 text-slate-950 font-semibold shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-105"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800/80"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Square Cards Container (Responsive Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 min-h-[220px]">
            {filteredItems.map((item) => {
              return (
                <div
                  key={item.name}
                  className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:bg-slate-900/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] cursor-pointer text-center aspect-square"
                >
                  <div className="p-2.5 sm:p-3 mb-1.5 sm:mb-2 rounded-xl bg-slate-800/60 group-hover:bg-cyan-500/20 transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className={`w-6 h-6 sm:w-8 sm:h-8 object-contain transition-all duration-300 ${item.invert ? "invert opacity-90 group-hover:opacity-100" : ""
                        }`}
                    />
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-100 group-hover:text-white transition-colors truncate max-w-full px-1">
                    {item.name}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5 sm:mt-1 group-hover:text-cyan-300 transition-colors truncate max-w-full px-1">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto w-full">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Featured Projects</h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto w-full text-center">
          <div className="p-5 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-950/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Let's Connect</h2>
            <p className="text-slate-300 text-xs sm:text-base mb-8 max-w-xl mx-auto font-light">
              Interested in collaborating, hiring, or discussing a project? Reach out directly or follow me on my socials.
            </p>

            {/* Direct Contact Details (Mobile & Email) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10 w-full">
              {/* Mobile Phone Link */}
              <a
                href="tel:+94704081881"
                className="group flex items-center space-x-3 px-4 sm:px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-400/60 hover:bg-slate-800/90 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500 group-hover:text-slate-950 text-cyan-400 transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">Phone</span>
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors block truncate">
                    +94 70 408 1881
                  </span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href="mailto:nirmalamanda1998@gmail.com"
                className="group flex items-center space-x-3 px-4 sm:px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-400/60 hover:bg-slate-800/90 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500 group-hover:text-slate-950 text-cyan-400 transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors block break-all">
                    nirmalamanda1998@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Social Links Divider & Header */}
            <div className="relative flex items-center justify-center mb-6">
              <div className="w-full border-t border-slate-800/80" />
              <span className="absolute bg-[#0b0819] px-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
                Social Profiles
              </span>
            </div>

            {/* Social Icon Links Below */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nirmal-amanda-47b720315/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 sm:p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-[#0077b5]/30 flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.7-1.93 1.63-1.93.9 0 1.37.66 1.37 1.93v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/nirmal.amanda.35/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 sm:p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-[#1877f2]/30 flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/The-Alpha-x"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 sm:p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 sm:py-8 border-t border-slate-800/60 text-center text-slate-500 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Nirmal Amanda. All rights reserved.</p>
        </footer>
      </div>
    </VantaBackground>
  );
}

