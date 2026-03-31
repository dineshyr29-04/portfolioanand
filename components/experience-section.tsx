import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const experiences = [
    {
      period: "Feb 2026 — Present",
      title: "Software Development Engineer (SDE) Intern",
      company: "Bluestock Fintech",
      location: "Bengaluru, Karnataka // Remote",
      description:
        "Developing scalable fintech systems. Optimized SQL queries reducing load time by 40%, built 5+ responsive dashboard modules, and handled 10k+ financial data points daily.",
      icon: "/images/company.png",
      tags: ["Scale", "Fintech", "SQL Optimization"],
    },
    {
      period: "Dec 2025 — Present",
      title: "Project Manager",
      company: "ThinkNode",
      location: "Mangaluru, Karnataka // On-site",
      description:
        "Leading strategic product planning and cross-functional team coordination to deliver innovative user-centric solutions. Focused on high-level strategy and vision.",
      icon: "/images/startup.png",
      tags: ["Strategy", "Project Management", "Leadership"],
    },
    {
      period: "Oct 2025 — Present",
      title: "AI Systems Architect // Founder",
      company: "CardioNerve",
      location: "Karnataka, India // On-site",
      description:
        "Developing an AI-powered risk assessment platform analyzing patient vitals in real-time via predictive modeling. Reduced latency by 30% and achieved 99% uptime in pilot tests aimed at remote area diagnostics.",
      icon: "/images/startup.png",
      tags: ["AI/ML", "HealthTech", "Systems Design"],
    },
    {
      period: "Jul 2025 — Nov 2025",
      title: "Open Source Contributor (GSSoC)",
      company: "GirlScript Summer of Code",
      location: "India // Remote",
      description:
        "Contributed to multiple open-source repositories and AI-driven systems. Focused on high-quality code, peer-reviews, and community collaboration.",
      icon: "/images/agency.png",
      tags: ["Open Source", "Collaborative Dev", "Community"],
    },
    {
      period: "Aug 2025 — Oct 2025",
      title: "AI Intern",
      company: "LaunchED Global",
      location: "Bengaluru, Karnataka",
      description:
        "Worked on AI consulting projects. Developed 3 ML models for automated data labeling, improved classification accuracy by 15%, and processed 1M+ data rows.",
      icon: "/images/agency.png",
      tags: ["MLOps", "Python", "Data Processing"],
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Combining engineering expertise with strategic product thinking across AI/ML startup leadership, 
              fintech development, and specialized AI consulting.
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <FileText className="w-5 h-5" />
              See full resume
            </Button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon || "/placeholder.svg"}
                      alt={exp.title}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#6366F1] font-semibold text-base md:text-lg mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm md:text-base font-medium mb-3 italic">{exp.location}</p>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[28px] mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 border border-black rounded-lg text-sm font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
