import { useState } from "react";
import { Award, X, ExternalLink, Calendar } from "lucide-react";

// Data sertifikat yang sudah dirapikan ID, warna, dan struktur propertinya
const certificateFolders = [
  {
    id: "alibaba-cloud",
    title: "Alibaba Cloud Certification",
    issuer: "Alibaba Cloud",
    iconColor: "text-amber-500 bg-amber-500/10",
    badgeText: "10 CERTIFICATES",
    items: [
      {
        title: "Dive Into Generative AI",
        serialNumber: "ACFW252251000228397",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali1.jpeg",
        link: "#"
      },
      {
        title: "The Large World of Language Models",
        serialNumber: "ACFW247251000228445",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali2.jpeg",
        link: "#"
      },
      {
        title: "Using Generative AI Ethically & Responsibly",
        serialNumber: "ACFW249251000228606",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali3.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Course 3",
        serialNumber: "ACFW250251000228580",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali4.jpeg",
        link: "#"
      },
      {
        title: "Prompt Engineering Fundamentals",
        serialNumber: "ACFW250251000228580",
        validUntil: "Oct 24, 2027",   
        image: "/certificates/ali5.jpeg",
        link: "#"
      },
      {
        title: "The Inner Workings of Generative AI",  
        serialNumber: "ACFW295251000228503",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali6.jpeg",
        link: "#"
      },
      {
        title: "GPU-accelerated ECS",
        serialNumber: "ACFW385251000228470",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali7.jpeg",
        link: "#"
      },
      {
        title: "Alibaba Cloud Platform for AI ( PAI )",
        serialNumber: "ACFW61251000228620",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali8.jpeg",
        link: "#"
      },
      {
        title: "Model Studio Fundamentals",
        serialNumber: "ACFW290251000228646",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali9.jpeg",
        link: "#"
      },
      {
        title: "Getting to know generative AI and its Concepts",
        serialNumber: "ACFW420257000228671",
        validUntil: "Oct 24, 2027",
        image: "/certificates/ali10.jpeg",
        link: "#"
      },
    ]
  },
  {
    id: "ioe-microsoft",
    title: "IOE x Microsoft Integration",
    issuer: "Microsoft & IOE",
    iconColor: "text-blue-500 bg-blue-500/10",
    badgeText: "10 CERTIFICATES",
    items: [
      {
        title: "AI Fluency Training",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe1.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Course 1",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe2.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Course 2",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe4.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Course 3",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe7.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Course 4",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe3.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Course 5",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe8.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Course 6",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe9.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Development 1",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe6.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Development 2",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe5.jpeg",
        link: "#"
      },
      {
        title: "AI Fluency Training - Developmet 3",
        serialNumber: "MS-IOE-99281",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoftxioe10.jpeg",
        link: "#"
      },
    ]
  },
  {
    id: "dicoding",
    title: "Dicoding Certification",
    issuer: "AWS Academy",
    iconColor: "text-orange-500 bg-orange-500/10", // Diubah dari brown ke orange agar valid
    badgeText: "1 CERTIFICATES",
    items: [
      {
        title: "Memulai Pemograman dengan Haskell",
        serialNumber: "EXY4Q5EQWPDL",
        validUntil: "Dec 12, 2028",
        image: "/certificates/dicoding1.jpg",
        link: "#"
      }
    ]
  },
  {
    id: "microsoft-cert", // ID unik
    title: "Microsoft Certification",
    issuer: "Microsoft Award",
    iconColor: "text-yellow-500 bg-yellow-500/10", // Perbaikan sintaks warna gold/yellow
    badgeText: "1 CERTIFICATES",
    items: [
      {
        title: "Microsoft Innovate Play Competition 2025",
        serialNumber: "MS-INV-11-2025",
        validUntil: "Dec 12, 2028",
        image: "/certificates/microsoft1.jpg",
        link: "#"
      }
    ]
  },
  {
    id: "telkom",
    title: "Telkom Certification",
    issuer: "Telkom Indonesia",
    iconColor: "text-red-600 bg-red-600/10",
    badgeText: "5 CERTIFICATES",
    items: [
      {
        title: "National AI Talent Development Program by Alibaba Cloud - Bandung",
        serialNumber: "5391358789257909",
        validUntil: "Dec 12, 2028",
        image: "/certificates/certificate-telkom1.jpeg",
        link: "#"
      },
      {
        title: "AI Connect - Data Scientist 101",
        serialNumber: "B-86e58148-5e1e-4364-a0c8-8a3535126e51",
        validUntil: "Dec 12, 2028",
        image: "/certificates/telkom2.jpg",
        link: "#"
      },
      {
        title: "AI Connect - Build Your First AI App",
        serialNumber: "B-f2e50d1f-2dfa-400b-935a-d6ef2088709f",
        validUntil: "Dec 12, 2028",
        image: "/certificates/telkom3.jpg",
        link: "#"
      },
      {
        title: "AI Connect - Jalan Ninja Jadi AI Engineer",
        serialNumber: "B-316f7951-286f-49c5-9dfa-3b94b59c3ae0",
        validUntil: "Dec 12, 2028",
        image: "/certificates/telkom4.jpg",
        link: "#"
      },
      {
        title: "Gig Economy for Content Creator - From Skill to sustainable income",
        serialNumber: "B-d598714e-4488-4e6e-9637-083c2439f40b",
        validUntil: "Dec 12, 2028",
        image: "/certificates/telkom5.jpg",
        link: "#"
      }
    ]
  },
  {
    id: "industry",
    title: "Industry Certification",
    issuer: "Experience on Industry",
    iconColor: "text-emerald-500 bg-emerald-500/10",
    badgeText: "1 CERTIFICATES",
    items: [
      {
        title: "Kunjungan Industri Ke TVRI Jawa Barat",
        serialNumber: "PSK-004-009",
        validUntil: "Dec 12, 2030",
        image: "/certificates/sertifikat Kunjungan Industri_Fikry Azzam.jpg",
        link: "#"
      }
    ]
  },
  {
    id: "champions",
    title: "achievement Certification",
    issuer: "Academic Achievement",
    iconColor: "text-cyan-500 bg-cyan-500/10",
    badgeText: "2 CERTIFICATES",
    items: [
      {
        title: "2nd National Competition Of Sains Champion",
        serialNumber: "KSN-0090-2024",
        validUntil: "December 2030",
        image: "/certificates/champs-osn.jpeg",
        link: "https://www.hanapibani.com/2024/07/pengumuman-hasil-ksm-2024.html"
      },
      {
        title: "National Seminar Speak With Confidence",
        serialNumber: "No.030/DPD-GRAPENSI/JBR/III/2025",
        validUntil: "December 2028",
        image: "/certificates/speak-with-confidence.jpeg",
        link: "#"
      }
    ]
  }
];

export const Certificates = () => {
  const [openFolder, setOpenFolder] = useState(null);

  return (
    <section id="certificates" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Licenses &{" "}
            <span className="font-serif italic font-normal text-white">
              Certifications.
            </span>
          </h2>
        </div>

        {/* Grid Folder Kategori */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificateFolders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => setOpenFolder(folder)}
              className="glass p-8 rounded-3xl border border-border/40 hover:border-primary/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-8 min-h-[220px]"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${folder.iconColor}`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {folder.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{folder.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase bg-surface px-3 py-1.5 rounded-xl border border-border/40">
                  {folder.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL OVERLAY - Menggunakan z-[9999] agar aman di tumpukan paling atas */}
        {openFolder && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in">
            {/* Modal Box */}
            <div className="relative w-full max-w-2xl bg-card border border-border/60 rounded-[32px] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">

              {/* Modal Header */}
              <div className="p-8 text-center border-b border-border/40 sticky top-0 bg-card/90 backdrop-blur-sm z-10">
                <button
                  onClick={() => setOpenFolder(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-surface hover:bg-border transition-colors cursor-pointer text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-2xl font-bold text-foreground pr-8 capitalize">{openFolder.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {openFolder.issuer} — {openFolder.items.length} Certificates
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto space-y-8 flex-1 scrollbar-thin">
                {openFolder.items.map((cert, index) => (
                  <div key={index} className="flex flex-col items-center bg-surface/30 border border-border/40 rounded-2xl p-4 space-y-4">
                    {/* Frame Gambar Sertifikat */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface group/img">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-102"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop";
                        }}
                      />
                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          Verify Credential <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Info Sertifikat Tekstual */}
                    <div className="w-full text-left px-2 space-y-1">
                      <h4 className="text-lg font-bold text-foreground">{cert.title}</h4>
                      <div className="flex flex-wrap items-center justify-between text-xs text-muted-foreground pt-1">
                        <span className="font-mono">SN: {cert.serialNumber}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> Valid Until: {cert.validUntil}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};