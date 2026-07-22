import { blogPosts, navItems, site } from "@/lib/data";

export default function sitemap() {
  const staticRoutes = [
    "/",
    ...navItems.map((item) => item.href).filter((href) => href !== "/"),
    "/personal-training",
    "/transformations",
    "/blog",
    "/inquiry",
    "/privacy",
    "/terms"
  ];

  const routes = [...new Set(staticRoutes)].map((route) => ({
    url: `${site.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.75
  }));

  const articles = blogPosts.map((post) => ({
    url: `${site.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65
  }));

  return [...routes, ...articles];
}
