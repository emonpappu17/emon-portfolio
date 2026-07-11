import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://emon-howlader.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f1418" },
    { media: "(prefers-color-scheme: light)", color: "#20b2a6" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Emon Howlader | Full Stack Web Developer & MERN Specialist",
    template: "%s | Emon Howlader",
  },

  description:
    "Hi, I'm Emon Howlader — a Full Stack Web Developer from Bangladesh specializing in React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma, and MongoDB. I build scalable, performant web applications.",

  keywords: [
    "Emon Howlader",
    "Full Stack Developer",
    "Web Developer",
    "MERN Specialist",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express.js Developer",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Bangladesh Web Developer",
    "Dhaka Developer",
    "Software Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [{ name: "Emon Howlader", url: BASE_URL }],
  creator: "Emon Howlader",
  publisher: "Emon Howlader",

  applicationName: "Emon Howlader Portfolio",
  category: "Technology",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    title: "Emon Howlader | Full Stack Web Developer & MERN Specialist",
    description:
      "Full Stack Web Developer from Bangladesh specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. Building scalable, performant web applications.",
    url: BASE_URL,
    siteName: "Emon Howlader Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Emon Howlader — Full Stack Web Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emon Howlader | Full Stack Web Developer & MERN Specialist",
    description:
      "Full Stack Web Developer from Bangladesh specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. Building scalable, performant web applications.",
    images: ["/opengraph-image"],
    creator: "@emonhowlader",
  },

  verification: {
    // Replace with your actual Google Search Console verification code
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
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
        {/* <SkipToContent /> */}
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
