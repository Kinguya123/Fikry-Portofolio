import { useState } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Instagram,
  Send
} from "lucide-react"; 
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { Preloader } from "../components/Preloader.jsx"

const skills = [
  /* ... array data skills kamu tetap sama ... */
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Framer Motion", icon: "https://w7.pngwing.com/pngs/837/781/png-transparent-framer-logo-tech-companies.png" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name : "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "golang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"},
  { name: "kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "pycharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"},
  { name: "eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg"},
  { name: "android-studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"}
];

export const Hero = () => {
  // 2. GANTI DEFAULT MOUNTED MENJADI FALSE
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 3. TAMPILKAN PRELOADER JIKA MASIH LOADING */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Hero section dibungkus div transisi agar muncul halus setelah loading selesai */}
      <div className={`transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-x-hidden py-12 md:py-20 bg-background">
          
          {/* Latar Belakang Utama */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/hero-bg.jpg"
              alt="Hero image"
              className="w-full h-full object-cover opacity-30 md:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
          </div>

          {/* BINTIK HIJAU BANYAK & BERGERAK */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(75)].map((_, i) => {
              const size = i % 3 === 0 ? "w-1 h-1" : i % 5 === 0 ? "w-2 h-2" : "w-1.5 h-1.5";
              const opacity = i % 2 === 0 ? "opacity-30" : "opacity-50";
              
              return (
                <div
                  key={i}
                  className={`absolute rounded-full ${size} ${opacity}`}
                  style={{
                    backgroundColor: "#20B2A6",
                    left: `${(i * 3.7) % 100}%`,
                    top: `${(i * 5.9) % 100}%`,
                    animation: `slow-drift ${18 + (i % 7) * 4}s ease-in-out infinite`,
                    animationDelay: `${i * -350}ms`,
                  }}
                />
              );
            })}
          </div>

          {/* Konten Utama */}
          <div className="container mx-auto px-4 sm:px-6 pt-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              
              {/* Kolom Kiri - Teks Konten & Aksi */}
              <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
                {/* Gunakan class animasi bawaan kamu yang akan ter-trigger begitu opacity div utama menjadi 100 */}
                <div className={!isLoading ? "animate-fade-in" : "opacity-0"}>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass text-xs md:text-sm text-primary">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Software Engineer • Fullstack Developer
                  </span>
                </div>

                {/* Headline */}
                <div className="space-y-4 w-full">
                  <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight ${!isLoading ? "animate-fade-in animation-delay-100" : "opacity-0"}`}>
                    Crafting <span className="text-primary glow-text">digital</span>
                    <br className="hidden sm:inline" /> experiences with
                    <br className="hidden sm:inline" />
                    <span className="font-serif italic font-normal text-white block sm:inline">
                      {" "}precision.
                    </span>
                  </h1>
                  <p className={`text-sm md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 ${!isLoading ? "animate-fade-in animation-delay-200" : "opacity-0"}`}>
                    Hi, I'm Fikry Azzam — a software engineer specializing in
                    React, Next.js, TypeScript, AI Large Language Models, Laravel, Python, and Node.js. I build scalable, performant web and mobile
                    applications that users Need and Love.
                  </p>
                </div>

                {/* Tombol CTAs */}
                <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start ${!isLoading ? "animate-fade-in animation-delay-300" : "opacity-0"}`}>
                  <Button size="lg" className="w-full sm:w-auto justify-center" onClick={() => window.open("https://wa.me/628388979386", "_blank")}>
                    Contact Me <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <div className="w-full sm:w-auto flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/1wfkHWh5zLQOp3gdCKbWlHmBXp3JhOd9K/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-block"
                    >
                      <AnimatedBorderButton className="w-full sm:w-auto justify-center">
                        <Download className="w-5 h-5" />
                        Download CV
                      </AnimatedBorderButton>
                    </a>
                  </div>
                </div>

                {/* Sosmed dengan Teks Keterangan */}
                <div className={`flex flex-col gap-3 w-full ${!isLoading ? "animate-fade-in animation-delay-400" : "opacity-0"}`}>
                  <span className="text-xs md:text-sm text-muted-foreground">Follow me: </span>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
                    {[
                      { icon: Github, href: "https://github.com/Kinguya123", label: "GitHub" },
                      { icon: Instagram, href: "https://www.instagram.com/fikry__0998/", label: "Instagram" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/fikry-azzam-9904833a5/", label: "LinkedIn" },
                      { icon: Send, href: "https://t.me/Kinguya123", label: "Telegram" },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                      >
                        <social.icon className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-[10px] md:text-xs font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kolom Kanan - Foto Profil */}
              <div className={`relative order-1 lg:order-2 w-full max-w-[260px] sm:max-w-md mx-auto ${!isLoading ? "animate-fade-in animation-delay-300" : "opacity-0"}`}>
                <div className="relative">
                  <div
                    className="absolute inset-0 
                    rounded-3xl bg-gradient-to-br 
                    from-primary/20 via-transparent 
                    to-primary/10 blur-xl md:blur-2xl animate-pulse"
                  />
                  <div className="relative glass rounded-3xl p-2 glow-border">
                    <img
                      src="/Foto-Fikry.jpeg"
                      alt="Fikry Azzam"
                      className="w-full aspect-[4/5] object-cover rounded-2xl"
                    />

                    {/* Status Kerja */}
                    <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                          Available for work
                        </span>
                      </div>
                    </div>
                    {/* Lencana Pengalaman */}
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float animation-delay-500">
                      <div className="text-lg sm:text-2xl font-bold text-primary">2+</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                        Years Exp.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Posisi Scroll di Atas Skill */}
            <div className={`mt-12 md:mt-16 flex justify-center ${!isLoading ? "animate-fade-in animation-delay-500" : "opacity-0"}`}>
              <a
                href="#skills-section"
                className="flex flex-col items-center gap-1 md:gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-[10px] md:text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
              </a>
            </div>

            {/* SKILLS SECTION */}
            <div id="skills-section" className="mt-12 md:mt-16 border-t border-white/5 pt-12 md:pt-16">
              <div className="text-center mb-8 md:mb-12 space-y-2 px-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Technical | <span className="text-muted-foreground font-normal">Mastery</span>
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground/80 max-w-md mx-auto leading-relaxed">
                  A meticulously honed suite of technologies weaponized to transform intricate logic into seamless digital architecture.
                </p>
              </div>

              {/* Grid Flex Horizontal */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-12 md:gap-y-10 max-w-5xl mx-auto px-2 md:px-4 overflow-hidden">
                {skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center gap-2 md:gap-3 group cursor-pointer transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                    style={{
                      // 4. MENGGUNAKAN STATE !ISLOADING UNTUK ANIMASI STAGGERED SKILLS
                      opacity: !isLoading ? 1 : 0,
                      transform: !isLoading ? "translateY(0px) scale(1)" : "translateY(40px) scale(0.9)",
                      transitionDelay: `${idx * 25}ms`, 
                    }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(32,178,166,0.4)]">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="w-full h-full object-contain grayscale opacity-40 brightness-200 contrast-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg";
                        }}
                      />
                    </div>
                    <span className="text-[9px] md:text-xs font-semibold tracking-widest text-muted-foreground/40 uppercase transition-colors duration-300 group-hover:text-primary">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};