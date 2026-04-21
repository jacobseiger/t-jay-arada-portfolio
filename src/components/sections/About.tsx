import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Layers, ClipboardList, Network, MessageSquare } from "lucide-react";

const softSkills = [
  { icon: Users, name: "Team Leadership", desc: "Mentors engineers, runs design discussions, and unblocks teammates across timezones." },
  { icon: Layers, name: "Architecture Design", desc: "Designs systems that stay maintainable as load and team size grow." },
  { icon: ClipboardList, name: "Project Management", desc: "Plans delivery in increments, ships behind flags, and keeps scope honest." },
  { icon: Network, name: "Cross-functional Collaboration", desc: "Pairs naturally with product, design, ops, and security to ship complete features." },
  { icon: MessageSquare, name: "Stakeholder Communication", desc: "Writes clearly enough that decisions get made async without losing a day." },
];

export function About() {
  const [tab, setTab] = useState<"about" | "education">("about");

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" title="About" />

        <div className="inline-flex p-1 rounded-lg bg-secondary/60 border border-border/60 mb-10">
          {(["about", "education"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 text-sm font-medium rounded-md capitalize transition-all ${
                tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {tab === "about" ? (
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12">
              <div className="space-y-5 text-[15px] leading-[1.85] text-muted-foreground max-w-prose">
                <p>
                  Senior full-stack engineer with close to a decade of hands-on production
                  work across e-commerce, fintech, digital health, and B2B SaaS.
                </p>
                <p>
                  Writes frontend code and backend code in the same week, owns the
                  deployment pipeline that ships both, and stays accountable when
                  something breaks in production at 2 AM.
                </p>
                <p>
                  Has built payment rails for one of the Philippines' leading digital banks,
                  scaled telemedicine infrastructure through a public health crisis,
                  modernized legacy enterprise systems for U.S. Fortune 500 clients, and
                  shipped workflow software used daily by accounting firms.
                </p>
                <p>
                  Works with U.S.-based teams across a 12-hour timezone gap and has learned
                  to make that distance a non-issue.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((s) => (
                  <div
                    key={s.name}
                    className="p-5 rounded-xl border border-border/60 bg-card/50 hover:border-primary/40 hover:bg-card transition-all"
                  >
                    <s.icon className="h-5 w-5 text-primary mb-3" />
                    <h3 className="font-semibold text-sm mb-1.5">{s.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl">
              <div className="p-8 rounded-2xl border border-border/60 bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-primary mb-1">Aug 2011 — May 2015</p>
                    <h3 className="text-xl font-bold mb-1">Bachelor of Science in Computer Science</h3>
                    <p className="text-base text-foreground/90">University of North Dakota</p>
                    <p className="text-sm text-muted-foreground">Grand Forks, North Dakota, USA</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-primary mb-2">{index}.</p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-4" />
    </div>
  );
}