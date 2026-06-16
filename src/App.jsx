import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certificates } from "@/sections/Certificates";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Preloader } from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Preloader tetap merender dirinya sendiri sampai fungsi onComplete dipanggil */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Konten Utama langsung stand-by di bawah tirai preloader */}
      <div className="min-h-screen overflow-x-hidden bg-background">
        <Navbar />
        <main>
          <Hero isLoading={isLoading} />
          <About />
          <Projects />
          <Certificates />
          <Experience isLoading={isLoading} />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;