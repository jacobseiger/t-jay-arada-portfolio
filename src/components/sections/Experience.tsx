import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./About";

const jobs = [
  {
    company: "Karbon", url: "https://karbonhq.com",
    title: "Senior Software Engineer", period: "Oct 2024 — Present",
    location: "Remote",
    blurbs: [
      "Owns the work item detail view and state machine end to end, treating data correctness as a product requirement rather than a preference.",
      "Rebuilt the email-to-workflow ingestion pipeline so duplicate work-item creation across thousands of daily webhook events dropped to zero.",
    ],
  },
  {
    company: "DXC Technology Philippines", url: "https://dxc.com",
    title: "Senior Software Engineer", period: "Jul 2022 — Aug 2024",
    location: "Manila, Philippines",
    blurbs: [
      "Led strangler-fig decomposition of decade-old Java monoliths for U.S. Fortune 500 clients, with feature-flag traffic shifting and clean rollbacks.",
      "Operated across a 12 to 15 hour timezone gap, front-loading written decisions so American teams could act in their first morning hour.",
    ],
  },
  {
    company: "White Cloak Technologies", url: "https://www.whitecloak.com",
    title: "Software Engineer", period: "Jan 2019 — May 2022",
    location: "Manila, Philippines",
    blurbs: [
      "Designed UnionBank's payment transaction layer to be idempotent from the first line of processing, protecting against retries on the PESONet and InstaPay rails.",
      "Migrated a telemedicine signalling layer in 72 hours during the COVID surge without dropping a single in-flight consultation.",
    ],
  },
  {
    company: "Lazada Philippines", url: "https://www.lazada.com.ph",
    title: "Software Engineer", period: "Oct 2015 — Dec 2018",
    location: "Manila, Philippines",
    blurbs: [
      "Rewrote the inventory reservation path to atomic Redis decrements, closing the oversell race condition flagged in the 11.11 post-mortem.",
      "Hardened the checkout pipeline with timeout budgets and async queues so flash sale traffic spikes stopped exhausting the worker pool.",
    ],
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader index="04" title="Experience" />

        <div ref={ref} className="relative pl-8 md:pl-12">
          {/* base line */}
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-border/40" />
          {/* animated line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-2 md:left-4 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent shadow-[0_0_12px_var(--color-primary)]"
          />

          <div className="space-y-12">
            {jobs.map((j, i) => (
              <motion.div
                key={j.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[27px] md:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_12px_var(--color-primary)]" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-lg md:text-xl font-semibold">{j.title}</h3>
                  <span className="text-muted-foreground">at</span>
                  <a
                    href={j.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline underline-offset-4 font-medium"
                  >
                    {j.company}
                  </a>
                </div>
                <p className="text-xs font-mono text-muted-foreground mb-4">
                  {j.period} · {j.location}
                </p>
                <div className="space-y-2.5 text-[15px] leading-relaxed text-muted-foreground max-w-3xl">
                  {j.blurbs.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}