import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.domain,
      lastModified: siteConfig.updatedAt,
      changeFrequency: "daily",
      priority: 1,
    },
  ]
}
