import React, { useState, useEffect, useRef } from "react";

const experiences = [
  {
    period: "2026 — Present",
    role: "Full Stack Engineer",
    company: "PT. Kompas Gramedia",
    description:
      "Working at the most leading digital media in Indonesia with 30m+ visitors. I am working at the digital technology division, developing and maintaining media and digital products from various media brands under Kompas Gramedia.",
    technologies: ["Next.js", "Tailwind css", "GraphQL", "PostgreSQL", "React.js"],
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "Full Stack Engineer",
    company: "SMK PK Pusdikhubad",
    description:
      "Leading Backend and support frontend architecture for SMK Pusdikhubad School Project. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "Backend Engineer and UI/UX Designer",
    company: "Kreatif Digital Studio",
    description:
      "Built and maintained multiple React applications with Express.js for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2024 ",
    role: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2023 — 2024",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = ({ isLoading = false }) => {
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Menghitung seberapa jauh section experience sudah masuk ke viewport layar
      const startTrigger = rect.top - windowHeight / 2;
      const totalHeight = rect.height;

      if (startTrigger < 0) {
        // Ambil nilai absolute jarak scroll internal di dalam section
        const scrolledDistance = Math.abs(startTrigger);
        // Konversi ke persentase (0% - 100%)
        const progress = Math.min((scrolledDistance / (totalHeight - windowHeight / 2)) * 100, 100);
        setLineHeight(progress);
      } else {
        setLineHeight(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Jalankan sekali saat mount untuk inisialisasi posisi awal
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 md:mb-24 text-center md:text-left transition-all duration-700 ${
          !isLoading ? "animate-fade-in" : "opacity-0 translate-y-4"
        }`}>
          <span className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-white">
            Experience that{" "}
            <span className="font-serif italic font-normal text-primary glow-text">
              speaks volumes.
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            A timeline of my professional growth, from curious beginner to full-stack engineer building products at scale.
          </p>
        </div>

        {/* Timeline Container dengan Ref */}
        <div className="relative" ref={containerRef}>
          
          {/* TRACK GARIS UTAMA (Background Garis Gelap / Transparan) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-0 pointer-events-none" />

          {/* GARIS AKTIF BERGERAK KEBAWAH (Mengikuti Scroll Layar) */}
          <div 
            className="timeline-glow absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-primary to-primary/40 -translate-x-1/2 z-10 pointer-events-none origin-top transition-all duration-150 ease-out shadow-[0_0_20px_#20b2a6]"
            style={{ height: `${lineHeight}%` }}
          />

          {/* List Items */}
          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, idx) => {
              // Hitung perkiraan persentase posisi kartu ini di timeline
              const itemProgressThreshold = (idx / experiences.length) * 100;
              // Jika garis scroll sudah melewati batas posisi kartu, maka dot akan menyala hijau cerah
              const isPassed = lineHeight >= itemProgressThreshold;

              return (
                <div
                  key={idx}
                  className={`relative grid md:grid-cols-2 gap-4 md:gap-8 transition-all duration-700 ${
                    !isLoading ? "animate-fade-in" : "opacity-0 translate-y-4"
                  }`}
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Penanda Titik (Dot Timeline) */}
                  <div 
                    className={`absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1/2 ring-4 ring-background transition-all duration-500 z-20 ${
                      isPassed ? "bg-primary shadow-[0_0_12px_#20b2a6]" : "bg-[#1f2830]"
                    }`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Bungkus Konten Kartu */}
                  <div
                    className={`pl-10 md:pl-0 w-full ${
                      idx % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="glass p-5 md:p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 group relative hover:-translate-y-1 bg-surface/40 backdrop-blur-md">
                      <span className="text-xs md:text-sm text-primary font-medium tracking-wider">
                        {exp.period}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold mt-2 text-white group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-xs md:text-sm font-medium text-muted-foreground/80 mt-0.5">
                        {exp.company}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div
                        className={`flex flex-wrap gap-1.5 md:gap-2 mt-5 ${
                          idx % 2 === 0 ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2.5 py-1 bg-muted/60 text-[10px] md:text-xs rounded-md text-muted-foreground border border-white/[0.02]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};