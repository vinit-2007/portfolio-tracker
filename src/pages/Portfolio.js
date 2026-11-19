import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "SapnaKalaa Sarees E-Commerce",
    category: "FULL-STACK",
    filterKey: "Full-Stack",
    description:
      "A production-ready ethnic wear e-commerce platform featuring an admin inventory dashboard, Cloudinary media pipelines, Auth.js authentication, and Razorpay checkout integration.",
    tags: ["Next.js", "TypeScript", "MongoDB Atlas", "Tailwind CSS", "Razorpay"],
    liveLink: "https://sapnakalaasarees.bbroot.com",
    repoLink: "https://github.com/vinitnehe",
    accent: "from-pink-500 to-rose-600",
    glow: "group-hover:shadow-pink-500/15",
    icon: "🛍️",
  },
  {
    number: "02",
    title: "JARVIS v1.6 Desktop Assistant",
    category: "AI & AUTOMATION",
    filterKey: "AI & Automation",
    description:
      "An open-source Windows 11 desktop automation assistant built in Python and Batch, engineered for natural voice/text commands, OS-level system controls, app launching, and browser workflow orchestration.",
    tags: ["Python", "Batch Scripting", "Speech Recognition", "Windows API"],
    liveLink: "#jarvis-demo",
    repoLink: "https://github.com/vinitnehe",
    accent: "from-cyan-400 to-blue-600",
    glow: "group-hover:shadow-cyan-500/15",
    icon: "🎙️",
  },
  {
    number: "03",
    title: "Smart Campus Navigator",
    category: "AI PATHFINDING",
    filterKey: "AI & Automation",
    description:
      "An intelligent campus route planner powered by the A* search algorithm with custom state-space pathfinding constraints, heuristic optimization, and an interactive Flask web interface.",
    tags: ["Python", "Flask", "A* Algorithm", "State-Space Search"],
    liveLink: "#campus-navigator",
    repoLink: "https://github.com/vinitnehe",
    accent: "from-emerald-400 to-teal-600",
    glow: "group-hover:shadow-emerald-500/15",
    icon: "🧭",
  },
  {
    number: "04",
    title: "ShaktiPath Web Platform",
    category: "FULL-STACK",
    filterKey: "Full-Stack",
    description:
      "A full-stack education and women empowerment portal featuring role-based authentication, dual user/admin dashboards, CRUD resource management, and interactive community surveys.",
    tags: ["Python Flask", "MongoDB Atlas", "JavaScript", "HTML/CSS"],
    liveLink: "#shaktipath",
    repoLink: "https://github.com/vinitnehe",
    accent: "from-violet-400 to-purple-600",
    glow: "group-hover:shadow-purple-500/15",
    icon: "✨",
  },
  {
    number: "05",
    title: "Containerized Microservice Cluster",
    category: "CLOUD & DEVOPS",
    filterKey: "Cloud & Systems",
    description:
      "A fault-tolerant microservice architecture deployed with Docker containers, an Nginx reverse-proxy load balancer, and real-time container health monitoring.",
    tags: ["Docker", "Nginx", "Linux (Ubuntu)", "Microservices"],
    liveLink: "#cloud-architecture",
    repoLink: "https://github.com/vinitnehe",
    accent: "from-amber-400 to-orange-600",
    glow: "group-hover:shadow-amber-500/15",
    icon: "🐳",
  },
];

const categories = ["All", "Full-Stack", "AI & Automation", "Cloud & Systems"];

const coreStack = [
  "Python",
  "Next.js",
  "React",
  "TypeScript",
  "Flask",
  "MongoDB",
  "Docker",
  "Linux",
  "Tailwind CSS",
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filterKey === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#080b14] text-white overflow-hidden selection:bg-cyan-400 selection:text-gray-950">
      {/* AMBIENT BACKGROUND LIGHTING */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-[10%] w-[520px] h-[520px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[35%] right-[-200px] w-[520px] h-[520px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[30%] w-[520px] h-[520px] bg-cyan-600/10 rounded-full blur-[150px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-20 md:py-28">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.3em] text-gray-400 font-semibold uppercase">
              VINIT NEHE · COMPUTER ENGINEERING · SELECTED WORKS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05]">
            Engineering ideas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              into real systems.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              Third-year Computer Engineering student at{" "}
              <span className="text-gray-200 font-medium">
                Savitribai Phule Pune University
              </span>
              . I build full-stack web platforms, AI-driven pathfinding & desktop
              automation tools, and containerized cloud deployments.
            </p>

            <div className="text-gray-500 text-sm tracking-widest shrink-0">
              <span className="text-white text-3xl font-bold">
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
              <span className="ml-3">
                {activeFilter === "All" ? "FEATURED BUILDS" : "FILTERED BUILDS"}
              </span>
            </div>
          </div>

          {/* TECH STACK STRIP */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-2.5">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 mr-2">
              Core Stack:
            </span>
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-cyan-300/90 bg-cyan-400/[0.06] border border-cyan-400/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* FILTER TABS */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-white text-gray-950 border-white shadow-lg shadow-white/10"
                    : "bg-white/[0.03] text-gray-400 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* PROJECTS */}
        <motion.section layout className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 sm:p-10 md:p-12 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl ${project.glow}`}
              >
                {/* CARD BACKGROUND GLOW */}
                <div
                  className={`absolute -right-20 -top-24 w-72 h-72 rounded-full bg-gradient-to-br ${project.accent} opacity-[0.07] blur-[90px] group-hover:opacity-20 transition duration-700`}
                />

                <div className="relative z-10 grid md:grid-cols-[1fr_220px] gap-10 items-center">
                  {/* PROJECT INFO */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-mono text-gray-500">
                        / {project.number}
                      </span>

                      <span className="h-px w-10 bg-gray-700" />

                      <span className="text-xs tracking-[0.2em] text-cyan-400/90 font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-2xl mb-8">
                      {project.description}
                    </p>

                    {/* TECHNOLOGIES */}
                    <div className="flex flex-wrap gap-2 mb-9">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full text-xs text-gray-300 bg-white/[0.05] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* ACTION LINKS */}
                    <div className="flex flex-wrap items-center gap-6">
                      <a
                        href={project.liveLink}
                        target={
                          project.liveLink.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          project.liveLink.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2.5 text-sm font-semibold text-white group/link"
                      >
                        <span className="border-b border-white/30 pb-1 group-hover/link:border-cyan-400 transition">
                          {project.liveLink.startsWith("http")
                            ? "Live Deployment"
                            : "Explore Project"}
                        </span>
                        <span className="text-lg group-hover/link:translate-x-1.5 group-hover/link:-translate-y-0.5 transition-transform">
                          ↗
                        </span>
                      </a>

                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition"
                      >
                        <span>Source Code</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>

                  {/* VISUAL BADGE */}
                  <div className="hidden md:flex items-center justify-center">
                    <div
                      className={`relative w-44 h-44 rounded-[2rem] bg-gradient-to-br ${project.accent} p-[1px] group-hover:rotate-6 group-hover:scale-105 transition-all duration-700`}
                    >
                      <div className="w-full h-full rounded-[2rem] bg-[#0d1220] flex items-center justify-center">
                        <span className="text-7xl opacity-90">
                          {project.icon}
                        </span>
                      </div>

                      <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xl">
                        ↗
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.section>

        {/* RESUME & CONTACT SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#151d31] to-[#101321] p-8 sm:p-12 md:p-16">
            {/* DECORATIVE LIGHT */}
            <div className="absolute -right-20 -top-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div>
                <span className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase">
                  EDUCATION & EXPERIENCE
                </span>

                <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-5">
                  A little more
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    about my journey.
                  </span>
                </h2>

                <p className="text-gray-400 max-w-xl leading-relaxed">
                  Pursuing B.E. in Computer Engineering (SPPU) while managing
                  digital branding & e-commerce operations. Download my resume
                  for full details on coursework, technical skills, and builds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-gray-950 font-bold hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl whitespace-nowrap"
                >
                  Download Resume
                  <span className="text-xl">↓</span>
                </a>

                <a
                  href="https://github.com/vinit-2007"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.06] border border-white/15 text-white font-semibold hover:bg-white/[0.12] transition-all duration-300 whitespace-nowrap"
                >
                  GitHub Profile
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>Designed & engineered by Vinit Nehe · Pune, India.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/vinit-2007"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vinit-nehe-b368673ba/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
            <span>© {new Date().getFullYear()} · All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Portfolio;