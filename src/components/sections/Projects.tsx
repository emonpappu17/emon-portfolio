"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/ui/AnimatedBorderButton";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Digital Wallet App",
    description:
      "PayWave is a secure, responsive single-page application that mirrors real-world digital wallet functionality (like bKash/Nagad). It supports three roles (User, Agent, Admin) and integrates with a RESTful backend for authentication and wallet operations",
    image: "/projects/wallet.png",
    tags: ["React", "Typescript", "Redux Toolkit", "RTK Query", "ExpressJS"],
    link: "https://digital-wallet-system-frontend-xi.vercel.app",
    github: "https://github.com/emonpappu17/digital-wallet-system-frontend",
  },
  {
    title: "TripSync - Travel Buddy & Meetup Platform",
    description:
      "A modern web platform connecting travelers worldwide, enabling them to find compatible companions for upcoming trips and create meaningful travel experiences together.",
    image: "/projects/trip-sync.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Express.js", "Prisma", "Tailwind", "Cloudinary"],
    link: "https://trip-sync-client.vercel.app",
    github: "https://github.com/emonpappu17/TripSync-client",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "The project features both public and private sections, with secure authentication for the portfolio owner, dynamic blog and project management, and optimized performance using ISR/SSG rendering strategies.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ExpressJs", "Prisma ORM", "React Quill"],
    link: "https://portfolio-client-liard.vercel.app",
    github: "https://github.com/emonpappu17/portfolio-client",
  },
  {
    title: "Minimal Library Management System",
    description:
      "A modern and minimal library management system focused on core functionality and clean UI. It allows users to manage books, track availability, and borrow books with quantity and due-date validation—without authentication or payment complexity.",
    image: "/projects/library.png",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://library-management-frontend.vercel.app",
    github: "https://github.com/emonpappu17/library-management-system",
  },
  {
    title: "Community Food Sharing & Surplus Reduction Platform",
    description:
      "A full-stack community-driven platform aimed at reducing food waste by enabling users to share surplus food. It features secure authentication, protected routes, real-time data updates, dark mode UI, and responsive design to promote sustainability and community engagement.",
    image: "/projects/food-sharing.png",
    tags: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Mamba UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "TanStack Query",
    ],
    link: "https://community-food-sharing-platform.vercel.app",
    github: "https://github.com/emonpappu17/community-food-sharing-platform",
  },
  {
    title: "Travel Guru – Interactive Travel Booking UI",
    description:
      "A modern travel-themed web application built with React and Vite, featuring an interactive home page with Swiper-based destination sliders, dynamic navigation using React Router, and Firebase authentication. The project focuses on responsive UI design, smooth user experience, and clean component structure inspired by real-world travel booking platforms.",
    image: "/projects/travel-guru.png",
    tags: [
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Swiper.js",
      "Firebase Authentication",
      "Responsive Design",
    ],
    link: "https://67398d9f9ac3c455f7b85f52--magical-raindrop-442107.netlify.app",
    github: "https://github.com/emonpappu17/react-travel-guru",
  },
  {
    title: "Fruit Burst – Responsive E-Commerce UI",
    description:
      "A fully responsive e-commerce landing page UI for a fruit store built using HTML, Tailwind CSS, and DaisyUI. The project features a dynamic navbar, carousel hero section, product cards with modals, deal countdown timer, team showcase, and multiple content sections—focused on clean layout, responsiveness, and modern UI practices without JavaScript frameworks.",
    image: "/projects/fruit-burst.png",
    tags: [
      "HTML",
      "Tailwind CSS",
      "DaisyUI",
      "Responsive Design",
      "UI Design",
      "Font Awesome",
    ],
    link: "https://emonpappu17.github.io/fruit-brust-website",
    github: "https://github.com/emonpappu17/fruit-brust-website",
  },
  {
    title: "Tea House – Responsive UI Landing Page",
    description:
      "A modern and visually appealing tea house landing page built using pure HTML, Tailwind CSS, and DaisyUI. This project focuses on responsive layouts, component-based UI design, gradients, typography, and real-world landing page sections such as featured products, testimonials, and newsletters.",
    image: "/projects/tea-css.png",
    tags: [
      "HTML",
      "Tailwind CSS",
      "DaisyUI",
      "Font Awesome",
      "Responsive Design",
    ],
    link: "https://emonpappu17.github.io/tea-house-with-daisy-ui",
    github: "https://github.com/emonpappu17/tea-house-with-daisy-ui",
  }
];

const VISIBLE_COUNT = 4;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, VISIBLE_COUNT);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" aria-label="Web Development Projects Showcase">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <article
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  alt={`${project.title} — Web Application Interface Preview Screenshot`}
                  width={600}
                  height={337}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60 pointer-events-none"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`Live Demo of ${project.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={`GitHub Repository of ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        {projects.length > VISIBLE_COUNT && (
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "View All Projects"}
              <ArrowUpRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </AnimatedBorderButton>
          </div>
        )}
      </div>
    </section>
  );
};
