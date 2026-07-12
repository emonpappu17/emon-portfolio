interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Pre-built Schema Generators ──────────────────────────────────────────────

const BASE_URL = "https://emon-howlader.vercel.app";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emon Howlader",
    url: BASE_URL,
    image: `${BASE_URL}/emon-photo.png`,
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, and MongoDB. Based in Dhaka, Bangladesh.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    email: "mailto:emonbafsd@gmail.com",
    telephone: "+8801648383606",
    sameAs: [
      "https://github.com/emonpappu17",
      "https://www.linkedin.com/in/emonhowlader17",
      "https://www.facebook.com/emon.meh.5",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Redux",
      "Tailwind CSS",
      "Docker",
      "Git",
      "REST API",
      "Full Stack Development",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Emon Howlader Portfolio",
    url: BASE_URL,
    description:
      "Portfolio website of Emon Howlader — a Full Stack Web Developer from Bangladesh specializing in React, Next.js, TypeScript, and Node.js.",
    author: {
      "@type": "Person",
      name: "Emon Howlader",
    },
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Emon Howlader — Full Stack Web Developer Portfolio",
    description:
      "Explore the portfolio of Emon Howlader, a Full Stack Developer building scalable web applications with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    url: BASE_URL,
    mainEntity: {
      "@type": "Person",
      name: "Emon Howlader",
      url: BASE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
      ],
    },
  };
}

export function getCollectionPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Emon Howlader",
    description:
      "A collection of web development projects built by Emon Howlader, including full-stack applications using React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    url: `${BASE_URL}/#projects`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Khelaghor – Sports Field Booking Platform",
          url: "https://khelaghor-client.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Digital Wallet App (PayWave)",
          url: "https://digital-wallet-system-frontend-xi.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MediBazaar – Multi-Vendor Medicine E-commerce Platform",
          url: "https://medi-bazaar-client-ass.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "TripSync – Travel Buddy & Meetup Platform",
          url: "https://trip-sync-client.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Personal Portfolio Website",
          url: "https://portfolio-client-liard.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Minimal Library Management System",
          url: "https://library-management-frontend.vercel.app",
        },
      ],
    },
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  };
}
