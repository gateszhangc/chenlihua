const fallbackSiteUrl = "https://chenlihua.lol"
const defaultClarityProjectId = process.env.NODE_ENV === "production" ? "waexonttkx" : ""

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, "")

export const siteConfig = {
  name: "陈丽华最新消息",
  title: "陈丽华最新消息 | 2026年公开时间线、人物简介与来源汇总",
  description:
    "围绕“陈丽华最新消息”整理的中文信息页，聚合截至 2026 年 4 月 12 日可公开检索的时间线、人物背景、紫檀博物馆信息与来源链接。",
  domain: siteUrl,
  heroImage: "/brand/chenlihua-hero.png",
  logoImage: "/brand/chenlihua-mark.png",
  heroImageUrl: `${siteUrl}/brand/chenlihua-hero.png`,
  logoImageUrl: `${siteUrl}/brand/chenlihua-mark.png`,
  keywords: [
    "陈丽华最新消息",
    "陈丽华",
    "陈丽华逝世",
    "陈丽华紫檀博物馆",
    "富华国际集团",
  ],
  clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? defaultClarityProjectId,
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",
  updatedAt: "2026-04-12",
} as const
