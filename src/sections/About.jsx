import React from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri - Cerita & Pendekatan */}
          <div className="space-y-6 md:space-y-8">
            <div className="animate-fade-in text-center lg:text-left">
              <span className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white text-center lg:text-left animate-fade-in animation-delay-100">
              Building the future,{" "}
              <span className="font-serif italic font-normal text-primary glow-text block sm:inline">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground text-justify lg:text-left animate-fade-in animation-delay-200 leading-relaxed">
              <p>
                I'm a high school student who is passionate about software engineering and experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in React, Next.js, TypeScript, AI Large Language Models, Laravel, Python, and Node.js, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Quote Block Premium */}
            <div className="glass rounded-2xl p-5 md:p-6 glow-border animate-fade-in animation-delay-300 bg-surface/30 backdrop-blur-md border-white/5 relative group hover:border-primary/20 transition-colors duration-300">
              <p className="text-base md:text-lg font-medium italic text-foreground leading-snug">
                "My Passion is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Kolom Kanan - Grid Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-white/5 bg-surface/20 backdrop-blur-md animate-fade-in transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/30 hover:bg-surface/40 group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Icon Wrapper dengan Pijaran Toska */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(32,178,166,0.6)]">
                  <item.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};