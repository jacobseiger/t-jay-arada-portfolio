import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
            Senior Software Engineer
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-medium leading-[0.95] mb-8 tracking-tight">
            T Jay <span className="italic text-gradient-luxe">Arada</span>
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-accent to-transparent mb-8" />
          <p className="text-xl md:text-2xl text-foreground/85 mb-6 font-light max-w-3xl leading-relaxed">
            Building reliable, fast, and well architected software products with the calm of someone who has shipped them at 2 AM.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mb-10 leading-[1.8]">
            Close to a decade of production work across e commerce, fintech, digital health, and B2B SaaS. Based in the Philippines, working remotely with U.S. teams.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm tracking-wide"
            >
              Get in touch <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/amnweb"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-border/80 hover:border-accent hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/t-jay-arada"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-border/80 hover:border-accent hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:t.arada.karbon@outlook.com"
              className="p-3.5 rounded-full border border-border/80 hover:border-accent hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}