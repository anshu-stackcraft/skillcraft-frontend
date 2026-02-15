import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "Modern personal portfolio with smooth animations and responsive layout.",
    tech: ["React", "Tailwind", "Django", "API"],
    type: "Full-Stack",
  },
  {
    id: 2,
    title: "E-Commerce App",
    desc: "Complete shopping experience with cart, checkout and product API.",
    tech: ["React", "API", "Stripe"],
    type: "Full-Stack",
  },
  {
    id: 3,
    title: "School Management App",
    desc: "Manage students, teachers, fees, attendance & results.",
    tech: ["React", "Django", "PostgreSQL", "API"],
    type: "Full-Stack",
  },
  {
    id: 4,
    title: "Auth System",
    desc: "Secure login & register system using JWT authentication.",
    tech: ["Django", "React", "JWT"],
    type: "Backend",
  },
  {
    id: 5,
    title: "Landing Page",
    desc: "High-conversion landing page with modern UI and animations.",
    tech: ["HTML", "Tailwind", "JS"],
    type: "Frontend",
  },
  {
    id: 6,
    title: "Admin Dashboard",
    desc: "Clean dashboard UI with cards, tables and analytics.",
    tech: ["React", "Tailwind"],
    type: "Frontend",
  },
  {
    id: 7,
    title: "Blog Platform",
    desc: "Create, edit & publish blog posts with user authentication.",
    tech: ["Django", "REST API"],
    type: "Backend",
  },
  {
    id: 8,
    title: "Weather App",
    desc: "Live weather forecast using OpenWeather API.",
    tech: ["React", "API"],
    type: "Frontend",
  },
  {
    id: 9,
    title: "Task Management System",
    desc: "Create, assign, update and track tasks efficiently.",
    tech: ["React", "Django"],
    type: "Full-Stack",
  },
];

function Projects() {

  // scroll reveal animation
  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-card");
    const onScroll = () => {
      cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          card.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-16 text-white">

      {/* ===== Heading ===== */}
      <div className="text-center ">
        <h1 className="text-4xl md:text-5xl mt-10 font-extrabold text-orange-500">
          My Projects
        </h1>
        <p className="text-zinc-400 mt-4 text-sm md:text-lg">
          Frontend • Backend • Full-Stack Development Work
        </p>
      </div>

      {/* ===== Projects Grid ===== */}kw
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{ transitionDelay: `${index * 100}ms` }}
            className="
              reveal-card opacity-0 translate-y-10 transition-all duration-700
              group relative bg-zinc-900/80 backdrop-blur
              border border-orange-500/20 rounded-2xl p-7
               hover:border-orange-500
              hover:shadow-2xl hover:shadow-orange-500/20
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                            bg-gradient-to-br from-orange-500/10 to-transparent transition" />

            {/* Type Badge */}
            <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                             bg-orange-500/20 text-orange-400 border border-orange-500/40">
              {project.type}
            </span>

            {/* Content */}
            <h2 className="text-xl font-semibold text-orange-400 mb-3 relative z-10">
              {project.title}
            </h2>

            <p className="text-sm text-zinc-400 mb-5 relative z-10">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-orange-500/10 
                             text-orange-400 border border-orange-500/30"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 relative z-10">
              <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
                                 bg-orange-500 text-black hover:bg-orange-600 transition">
                <FaExternalLinkAlt size={14} />
                Live
              </button>

              <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg 
                                 border border-zinc-600 hover:border-orange-500 transition">
                <FaGithub size={16} />
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
