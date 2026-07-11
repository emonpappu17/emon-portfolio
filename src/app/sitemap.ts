import type { MetadataRoute } from "next";

const BASE_URL = "https://emon-howlader.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Future blog/project pages can be added here dynamically
    // Example for future blog pages:
    // ...blogPosts.map((post) => ({
    //   url: `${BASE_URL}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.7,
    // })),
  ];
}
