import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HexRain } from "@/components/HexRain";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T Jay Arada — Senior Software Engineer" },
      {
        name: "description",
        content:
          "Senior full-stack engineer with close to a decade across e-commerce, fintech, digital health, and B2B SaaS. Open to U.S. remote.",
      },
      { property: "og:title", content: "T Jay Arada — Senior Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of T Jay Arada — senior engineer building reliable, fast, well-architected software products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <HexRain />
        <div className="relative z-10">
          <Navbar />
          <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
