import {
  SiJavascript, SiTypescript, SiNodedotjs, SiPython, SiRuby, SiRubyonrails,
  SiPhp, SiSharp, SiGo, SiPostgresql, SiReact, SiNextdotjs, SiNestjs, SiNuxt,
  SiDjango, SiDotnet, SiAngular, SiVuedotjs, SiTailwindcss, SiLaravel, SiGraphql,
  SiMysql, SiMongodb, SiSqlite, SiWordpress, SiGooglecloud, SiDocker,
  SiIonic, SiFlutter, SiGithub, SiSlack, SiJira, SiFigma, SiKubernetes, SiTerraform,
  SiNotion,
} from "react-icons/si";
import { FaJava, FaDatabase, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SectionHeader } from "./About";
import type { IconType } from "react-icons";

type Skill = { name: string; Icon: IconType; color: string };

const skills: Skill[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Ruby", Icon: SiRuby, color: "#CC342D" },
  { name: "Ruby on Rails", Icon: SiRubyonrails, color: "#D30001" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Java", Icon: FaJava, color: "#E76F00" },
  { name: "C#", Icon: SiSharp, color: "#239120" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "SQL", Icon: FaDatabase, color: "#4479A1" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#7B7B7B" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Nuxt.js", Icon: SiNuxt, color: "#00DC82" },
  { name: "Django", Icon: SiDjango, color: "#0C4B33" },
  { name: ".Net", Icon: SiDotnet, color: "#512BD4" },
  { name: "ASP.NET", Icon: SiDotnet, color: "#5C2D91" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Vue.js", Icon: SiVuedotjs, color: "#42B883" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Azure", Icon: VscAzure, color: "#0078D4" },
  { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  { name: "Ionic", Icon: SiIonic, color: "#3880FF" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Github", Icon: SiGithub, color: "#8B949E" },
  { name: "Slack", Icon: SiSlack, color: "#4A154B" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Notion", Icon: SiNotion, color: "#9CA3AF" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" title="Skills" />
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="group relative aspect-square">
              <div className="absolute inset-0 rounded-xl border border-border/60 bg-card/50 flex items-center justify-center hover:border-primary/60 hover:bg-card hover:-translate-y-1 transition-all duration-200">
                <s.Icon className="h-8 w-8 md:h-10 md:w-10" style={{ color: s.color }} />
              </div>
              <div className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-popover text-popover-foreground text-xs font-medium px-2.5 py-1.5 rounded-md border border-border shadow-lg">
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}