import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary mb-4">$ whoami</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            T Jay <span className="text-gradient">Arada</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
            Senior Software Engineer building reliable, fast, and well-architected products.
          </p>
          <p className="text-base text-muted-foreground/90 max-w-xl mb-8 leading-relaxed">
            Close to a decade shipping production systems across e-commerce, fintech,
            digital health, and B2B SaaS. Based in the Philippines, working remotely
            with U.S. teams.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition glow-border"
            >
              Get in touch <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/amnweb"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-md border border-border hover:border-primary hover:text-primary transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/t-jay-arada"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-md border border-border hover:border-primary hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:t.arada.karbon@outlook.com"
              className="p-3 rounded-md border border-border hover:border-primary hover:text-primary transition"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative justify-self-center"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
          <img
            src={portrait}
            alt="T Jay Arada portrait illustration"
            width={400}
            height={400}
            className="relative rounded-3xl border border-border/60 w-72 h-72 md:w-80 md:h-80 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}