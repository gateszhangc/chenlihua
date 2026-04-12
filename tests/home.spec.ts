import { expect, test } from "@playwright/test"

test("homepage exposes latest public timeline and SEO metadata", async ({ page, request }, testInfo) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/陈丽华最新消息/)
  await expect(page.getByRole("heading", { level: 1, name: "陈丽华最新消息" })).toBeVisible()
  const heroCta = page.getByRole("link", { name: "查看最新节点" })

  await expect(heroCta).toHaveAttribute(
    "href",
    "https://sbti-test.lat/"
  )
  await expect(heroCta).toHaveAttribute(
    "target",
    "_blank"
  )
  await expect(heroCta).toHaveAttribute(
    "rel",
    "noreferrer noopener"
  )
  await expect(page.locator("#latest")).toContainText("2026年4月5日")
  await expect(page.locator("#timeline")).toContainText("创办中国紫檀博物馆")
  await expect(page.locator("#sources")).toContainText("北京旅游网")
  await expect(page.locator("link[rel='canonical']")).toHaveAttribute("href", "https://chenlihua.lol")
  await expect(page.locator("meta[property='og:image']")).toHaveAttribute(
    "content",
    "https://chenlihua.lol/brand/chenlihua-hero.png"
  )
  const clarityScript = await page.locator("#microsoft-clarity").evaluate(
    (node) => node.textContent ?? ""
  )
  expect(clarityScript).toContain("waexonttkx")
  const structuredData = await page
    .locator("script[type='application/ld+json']")
    .evaluate((node) => node.textContent ?? "")
  expect(structuredData).toContain('"@type":"ProfilePage"')
  expect(structuredData).toContain('"@type":"FAQPage"')

  const heroImage = page.getByAltText("陈丽华最新消息站点主视觉海报")
  await expect(heroImage).toBeVisible()

  const heroImageSrc = await heroImage.getAttribute("src")
  expect(heroImageSrc).toBeTruthy()

  const heroImageResponse = await request.get(heroImageSrc!)
  expect(heroImageResponse.ok()).toBeTruthy()

  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    heroCta.click(),
  ])

  await popup.waitForLoadState("domcontentloaded")
  await expect
    .poll(() => popup.url())
    .toMatch(/^https:\/\/sbti-test\.lat\/?$/)
  await popup.close()

  await page.screenshot({
    path: testInfo.outputPath(`home-${testInfo.project.name}.png`),
    fullPage: true,
  })
})

test("seo endpoints and health route respond", async ({ request }) => {
  const robotsResponse = await request.get("/robots.txt")
  expect(robotsResponse.ok()).toBeTruthy()
  expect.soft(await robotsResponse.text()).toContain("Sitemap: https://chenlihua.lol/sitemap.xml")

  const sitemapResponse = await request.get("/sitemap.xml")
  expect(sitemapResponse.ok()).toBeTruthy()
  expect.soft(await sitemapResponse.text()).toContain("<loc>https://chenlihua.lol</loc>")

  const healthResponse = await request.get("/healthz")
  expect(healthResponse.ok()).toBeTruthy()
  expect.soft(await healthResponse.json()).toMatchObject({
    status: "ok",
    site: "https://chenlihua.lol",
    updatedAt: "2026-04-12",
  })
})
