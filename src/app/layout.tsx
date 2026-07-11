import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emon-portfolio-next.vercel.app"),
  title: "Emon Howlader | Web Developer & MERN Specialist",
  description: "Hi, I'm Emon Howlader — a web developer specializing in React, Next.js, Node.js and TypeScript. I build scalable, performant web applications that users love.",
  keywords: [
    "Emon Howlader",
    "Web Developer",
    "MERN Specialist",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Software Developer Portfolio",
    "Bangladesh Web Developer"
  ],
  authors: [{ name: "Emon Howlader" }],
  openGraph: {
    title: "Emon Howlader | Web Developer & MERN Specialist",
    description: "Web developer specializing in React, Next.js, Node.js and TypeScript. Building scalable, performant web applications.",
    url: "https://emon-portfolio-next.vercel.app",
    siteName: "Emon Howlader Portfolio",
    images: [
      {
        url: "/emon-photo.png",
        width: 800,
        height: 1000,
        alt: "Emon Howlader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emon Howlader | Web Developer & MERN Specialist",
    description: "Web developer specializing in React, Next.js, Node.js and TypeScript. Building scalable, performant web applications.",
    images: ["/emon-photo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
