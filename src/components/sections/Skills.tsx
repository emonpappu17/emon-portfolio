import React from "react";
import { Server, Wrench } from "lucide-react";
import { DiReact } from "react-icons/di";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiRender,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }> | IconType;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: DiReact,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn ui", icon: SiShadcnui },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden" aria-label="Skills and Technologies">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technologies I{" "}
            <span className="font-serif italic font-normal text-white">
              work with
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 animate-fade-in animation-delay-200">
            A curated set of technologies I use to build modern, scalable, and
            high-performance web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={idx}
                className="glass rounded-3xl p-8 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CategoryIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl
                          bg-surface hover:bg-primary/10 transition-colors duration-300 group"
                      >
                        <SkillIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
