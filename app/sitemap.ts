import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lestudiodesign.fr";
  const lastModified = new Date();

  const urls: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },

    { path: "/services/audit-cro", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/refonte-ux-ui", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/optimisation-cro", changeFrequency: "monthly", priority: 0.9 },

    { path: "/e-commerce", changeFrequency: "monthly", priority: 0.85 },
    { path: "/audit-ux-design", changeFrequency: "monthly", priority: 0.85 },
    { path: "/audit-site-e-commerce", changeFrequency: "monthly", priority: 0.85 },
    { path: "/refonte-site-e-commerce", changeFrequency: "monthly", priority: 0.85 },
    { path: "/audit-cro", changeFrequency: "monthly", priority: 0.85 },

    { path: "/cas-etudes", changeFrequency: "weekly", priority: 0.8 },
    { path: "/cas-etudes/cuure", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cas-etudes/caalme", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cas-etudes/juliette-has-a-gun", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cas-etudes/apoticaria", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cas-etudes/riviera-club", changeFrequency: "monthly", priority: 0.8 },
    { path: "/cas-etudes/yves-rocher", changeFrequency: "monthly", priority: 0.8 },

    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/blog/audit-cro-ecommerce-guide-complet", changeFrequency: "monthly", priority: 0.8 },

    { path: "/agence", changeFrequency: "monthly", priority: 0.6 },
  ];

  return urls.map((u) => ({
    url: u.path === "/" ? baseUrl : `${baseUrl}${u.path}`,
    lastModified,
    changeFrequency: u.changeFrequency,
    priority: u.priority,
  }));
}
