import React from "react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
  current?: boolean;
}

const education: EducationItem[] = [
  {
    degree: "B.S.S (Hons) in Political Science",
    institution: "Government Titumir College, Dhaka",
    period: "2024 – Running",
    description:
      "Currently pursuing undergraduate studies with a strong focus on critical thinking, research, and analytical skills.",
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Humanities",
    institution: "BAF Shaheen College, Dhaka",
    period: "Completed: 2023",
    gpa: "GPA: 4.33 / 5.00",
    description:
      "Completed higher secondary education with strong academic performance and active participation in academic activities.",
  },
  {
    degree: "Secondary School Certificate (SSC) – Humanities",
    institution: "BAF Shaheen College, Dhaka",
    period: "Completed: 2021",
    gpa: "GPA: 4.39 / 5.00",
    description:
      "Built a solid academic foundation while developing discipline, consistency, and a passion for learning.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden" aria-label="Education and Academic Journey">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6
            animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              shaped my thinking.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A summary of my academic background and the foundations that support
            my professional growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5
            bg-linear-to-b from-primary/70 via-primary/30 to-transparent
            md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] pointer-events-none"
          />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {edu.degree}
                    </h3>

                    <p className="text-muted-foreground">
                      {edu.institution}
                    </p>

                    {edu.gpa && (
                      <p className="text-sm text-primary mt-2">
                        {edu.gpa}
                      </p>
                    )}

                    <p className="text-sm text-muted-foreground mt-4">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
