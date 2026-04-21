import { useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import banking from "@/assets/proj-banking.jpg";
import telemed from "@/assets/proj-telemed.jpg";
import karbon from "@/assets/proj-karbon.jpg";
import dxc from "@/assets/proj-dxc-insurance.jpg";
import cloud from "@/assets/proj-cloud.jpg";
import lazada from "@/assets/proj-lazada.jpg";
import inventory from "@/assets/proj-inventory.jpg";
import health from "@/assets/proj-health.jpg";
import wallet from "@/assets/proj-wallet.jpg";

type Project = {
  owner: string; title: string; url: string; img: string;
  desc: string; tag: "fintech" | "healthcare" | "saas" | "enterprise" | "ecommerce";
};

const projects: Project[] = [
  // Karbon
  { owner: "Karbon", title: "Work Item Detail View", url: "https://karbonhq.com",
    img: karbon, tag: "saas",
    desc: "Built optimistic update model cutting perceived update latency from ~800ms to instant." },
  { owner: "Karbon", title: "Email-to-Workflow Pipeline", url: "https://karbonhq.com",
    img: inventory, tag: "saas",
    desc: "Rebuilt webhook ingestion with FIFO queues, eliminating duplicate work-item creation." },
  // DXC
  { owner: "DXC Technology", title: "Insurance Workflow Modernization", url: "https://dxc.com",
    img: dxc, tag: "enterprise",
    desc: "Replaced legacy JSP screens with React, validated in shadow mode within 1% baseline error." },
  { owner: "DXC Technology", title: "SOC 2 / HIPAA Cloud Modules", url: "https://dxc.com",
    img: cloud, tag: "enterprise",
    desc: "Authored hardened infrastructure modules with peer-reviewed override workflow." },
  // White Cloak / UnionBank
  { owner: "UnionBank PH", title: "Idempotent Payment Rail", url: "https://www.unionbankph.com",
    img: banking, tag: "fintech",
    desc: "Designed payment layer where every transfer is idempotent from the first line of processing." },
  { owner: "UnionBank PH", title: "Six-State Transaction Status", url: "https://www.unionbankph.com",
    img: wallet, tag: "fintech",
    desc: "Redesigned status screen with backoff polling, cutting duplicate submission tickets in half." },
  // Telemed
  { owner: "White Cloak", title: "Telemedicine Realtime Migration", url: "https://www.whitecloak.com",
    img: telemed, tag: "healthcare",
    desc: "Migrated signalling layer in 72 hours during COVID surge without dropping a single session." },
  { owner: "White Cloak", title: "TURN Server Fleet", url: "https://www.whitecloak.com",
    img: health, tag: "healthcare",
    desc: "Provisioned three-node TURN fleet in 48 hours, restoring WebRTC quality on mobile carriers." },
  // Lazada
  { owner: "Lazada", title: "Flash Sale Inventory Engine", url: "https://www.lazada.com.ph",
    img: lazada, tag: "ecommerce",
    desc: "Rewrote reservation path to atomic decrements, closing the 11.11 oversell race condition." },
];

const filters = [
  { id: "all", label: "All" },
  { id: "fintech", label: "Fintech" },
  { id: "healthcare", label: "Healthcare" },
  { id: "saas", label: "SaaS" },
  { id: "enterprise", label: "Enterprise" },
  { id: "ecommerce", label: "E-commerce" },
] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.tag === filter);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" title="Projects" />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => { setFilter(f.id); setShowAll(false); }}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                filter === f.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/60 text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <motion.a
              key={p.title + i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group rounded-xl overflow-hidden border border-border/60 bg-card/50 hover:border-primary/50 hover:bg-card transition-all"
            >
              <div className="aspect-video overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-mono text-primary mb-2">{p.owner}</p>
                <h3 className="font-semibold mb-2 flex items-center gap-1.5">
                  {p.title}
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:text-primary transition" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border/60 text-sm hover:border-primary hover:text-primary transition"
            >
              <Plus className={`h-4 w-4 transition-transform ${showAll ? "rotate-45" : ""}`} />
              {showAll ? "Show less" : "View more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}