import React from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

interface Highlight {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden" aria-label="About Emon Howlader">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                My journey into programming began with a deep curiosity about how websites
                work behind the scenes. What started as experimenting with simple HTML and
                CSS gradually evolved into building full-stack web applications using modern
                JavaScript frameworks. Over the past year, I have dedicated my portfolio to
                continuously learning, practicing, and refining my skills as a professional
                Full Stack Developer in Bangladesh.
              </p>

              <p>
                I truly enjoy building clean, scalable, and user-focused applications.
                Whether it&apos;s crafting interactive user interfaces as a React Developer and Next.js Developer,
                or designing efficient backend logic as a Node.js Developer and Express.js Developer with TypeScript,
                I love turning ideas into real, usable digital products. I&apos;m especially passionate
                about database design with PostgreSQL and MongoDB, using Prisma ORM, and writing code that is
                easy to maintain and extend.
              </p>

              <p>
                Outside of programming, I enjoy exploring new technologies, reading about
                product design, and staying up-to-date with the tech community. In my free
                time, I also like listening to music, watching tech talks, and occasionally
                playing outdoor games to stay active. These interests help me stay creative,
                balanced, and motivated in my work.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &ldquo;I believe great software is built at the intersection of logic, creativity,
                and empathy. My goal is to create digital experiences that feel intuitive to
                users and rewarding for developers to work on.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
