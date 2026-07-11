import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Emon Howlader — Full Stack Web Developer Portfolio",
    short_name: "Emon Portfolio",
    description:
      "Portfolio of Emon Howlader, a Full Stack Web Developer specializing in React, Next.js, TypeScript, and Node.js from Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1418",
    theme_color: "#20b2a6",
    orientation: "portrait-primary",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
