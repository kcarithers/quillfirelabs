import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/portfolio", "/about", "/contact", "/privacy", "/terms"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: r === "" || r === "/portfolio" ? "monthly" : "yearly",
    priority: r === "" ? 1 : r === "/portfolio" ? 0.9 : 0.5,
  }));
}
