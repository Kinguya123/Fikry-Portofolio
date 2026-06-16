import { useEffect, useState } from "react";

// Daftar kata-kata yang akan muncul bergantian sebelum masuk ke portofolio
const words = ["Hello", "Architecting", "Developing","With","Precision"];

export const Preloader = ({ onComplete }) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Inject Google Font "Caveat" langsung agar tulisan tangannya bekerja
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  useEffect(() => {
    const currentFullWord = words[currentWordIdx];
    
    // Penentu kecepatan mengetik dan menghapus
    let typingSpeed = isDeleting ? 40 : 120;

    // Jika kata sudah selesai diketik penuh
    if (!isDeleting && displayedText === currentFullWord) {
      // Jika sudah mencapai kata terakhir, langsung trigger transisi keluar
      if (currentWordIdx === words.length - 1) {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800); // Waktu unmount komponen setelah slide up
        }, 800);
        return;
      }
      
      // Beri jeda sebentar sebelum menghapus kata (kecuali kata terakhir)
      typingSpeed = 1200; 
      setIsDeleting(true);
    } 
    // Jika kata sudah habis terhapus
    else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => prev + 1);
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return currentFullWord.substring(0, prev.length - 1);
        } else {
          return currentFullWord.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIdx, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f1418] transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="text-center space-y-4">
        {/* Teks utama statis di atas (opsional, bisa dihapus kalau mau mirip banget) */}
        <span className="text-muted-foreground/30 text-[11px] uppercase tracking-[0.4em] block font-mono">
          Fikry Azzam
        </span>

        {/* Efek Handwriting Text dengan Font Caveat */}
        <div className="h-20 flex items-center justify-center">
          <h1 
            className="text-5xl sm:text-6xl text-white select-none transition-all duration-300 relative"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            {displayedText}
            {/* Kursor Ketik Berkedip */}
            <span className="absolute -right-2 bottom-2 w-[2px] h-8 bg-primary animate-pulse opacity-80" />
          </h1>
        </div>
      </div>
    </div>
  );
};