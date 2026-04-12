import path from "node:path"
import { fileURLToPath } from "node:url"

import type { NextConfig } from "next"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://chenlihua.lol").replace(/\/$/, "")
const apexUrl = siteUrl.replace("://www.", "://")
const apexHost = new URL(apexUrl).hostname
const wwwHost = `www.${apexHost.replace(/^www\./, "")}`

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: wwwHost,
          },
        ],
        destination: `${apexUrl}/:path*`,
        permanent: true,
      },
    ]
  },
}

export default nextConfig
