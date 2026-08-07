import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fenalt.com";

  const routes = [
    "",
    "/capabilities",
    "/operations",
    "/mission",
    "/intake",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/intake" || route === "/contact" ? 0.8 : 0.5,
  }));
}
