import type { MetadataRoute } from "next";
import { posts, services } from "@/lib/data";

const SITE_URL = "https://garantia-zashchity.ru"; // мок-домен

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/o-sebe", "/uslugi", "/praktika", "/blog", "/kontakty"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const servicePages = services.map((s) => ({
    url: `${SITE_URL}/uslugi/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postPages = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...postPages];
}
