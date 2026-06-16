import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "https://kinguya123.github.io/Kickers-Ecommerce/",
    github: "https://github.com/Kinguya123/Kickers-Ecommerce.git",
  },
  {
    title: "Revolver Bali - Company Profile",
    description:
      "An interactive company profile website for a luxury resort in Bali.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://revolverbali.com/",
    github: "https://github.com/Kinguya123/RevolverBali.git",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Nu Rib's - Company Profile",
    description:
      "An Interactive Company Profile With CMS ( Content Management System ) for Ribs Restaurant In unjani, Bandung",
    image: "/projects/project5.png",
    tags: ["Next.js", "React.js", "MySQL", "Postman"],
    link: "https://company-profile-nu-ribs.vercel.app/",
    github: "https://github.com/Kinguya123/Company-profile-NuRibs.git",
  },
  {
    title: "Attendance System Pusdikhubad",
    description:
      "Presence management system for SMK PK Pusdikhubad. Implemented a micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    image: "/projects/project6.png",
    tags: ["PHP", "PostgreSQL", "Laravel"],
    link: "#",
    github: "https://github.com/Kinguya123/attendance-system-pusdikhubad.git",
  },
];

export const Projects = ({ isLoading = false }) => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mx-auto max-w-3xl mb-16 md:mb-24 transition-all duration-700 ${
          !isLoading ? "animate-fade-in" : "opacity-0 translate-y-4"
        }`}>
          <span className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-white">
            Projects that{" "}
            <span className="font-serif italic font-normal text-primary glow-text block sm:inline">
              make an impact.
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group glass rounded-2xl overflow-hidden border border-white/5 bg-surface/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 flex flex-col justify-between ${
                !isLoading ? "animate-fade-in" : "opacity-0 translate-y-4"
              }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Box Atas: Gambar & Deskripsi */}
              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1418]/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Info */}
                <div className="p-5 md:p-6 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Box Bawah: Tags & Action Buttons */}
              <div className="p-5 md:p-6 pt-0 space-y-5">
                {/* Tags List */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md bg-muted/40 text-[10px] md:text-xs font-medium border border-white/[0.02] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links (Sangat aman diakses lewat HP & Desktop) */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors group/btn"
                    >
                      Live Demo 
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-white transition-colors ml-auto group/git"
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover/git:text-white transition-colors" />
                      Repository
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-12 md:mt-16 ${!isLoading ? "animate-fade-in animation-delay-500" : "opacity-0"}`}>
          <AnimatedBorderButton onClick={() => window.open("https://github.com/Kinguya123", "_blank")}>
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </AnimatedBorderButton>
        </div>

      </div>
    </section>
  );
};