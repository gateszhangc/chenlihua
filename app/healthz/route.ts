import { NextResponse } from "next/server"

import { siteConfig } from "@/lib/site"

export function GET() {
  return NextResponse.json({
    status: "ok",
    site: siteConfig.domain,
    updatedAt: siteConfig.updatedAt,
  })
}
