import Image from "next/image"
import {
  ArrowUpRight,
  BookOpenText,
  CalendarDays,
  GanttChartSquare,
  Landmark,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"

const heroHighlights = [
  {
    label: "最新公开消息",
    value: "04.09",
    detail: "八宝山举行告别仪式，是当前最晚的公开节点。",
  },
  {
    label: "核心人物标签",
    value: "企业家 / 馆长",
    detail: "富华国际集团与中国紫檀博物馆构成长期检索主轴。",
  },
  {
    label: "核心搜索词",
    value: "逝世 / 紫檀博物馆",
    detail: "首页同时覆盖新闻意图与人物背景意图。",
  },
] as const

const latestUpdates = [
  {
    date: "2026年4月5日",
    title: "北京逝世，享年 85 岁",
    description:
      "公开讣告显示，陈丽华于 2026 年 4 月 5 日在北京因病逝世。这是所有后续报道的确认起点。",
    sourceLabel: "中国新闻网转引讣告",
    sourceUrl: "https://news.sina.cn/2026-04-07/detail-inhtrumc5274524.d.html",
  },
  {
    date: "2026年4月7日",
    title: "富华国际集团发布讣告",
    description:
      "讣告强调她在富华国际集团、北京侨商会与中国紫檀博物馆中的核心身份，也为公众提供了最权威的公开时间点。",
    sourceLabel: "胡润百富 / 新浪财经",
    sourceUrl: "https://finance.sina.cn/2026-04-07/detail-inhtsmie2273013.d.html",
  },
  {
    date: "2026年4月9日",
    title: "八宝山举行告别仪式",
    description:
      "北京日报消息称，八宝山殡仪馆东礼堂举行遗体告别仪式，各界群众冒雨送别，也成为目前可检索到的最新公开节点之一。",
    sourceLabel: "北京日报 / 搜狐转引",
    sourceUrl: "https://m.sohu.com/a/1007165968_163278",
  },
] as const

const legacyPillars = [
  {
    icon: Landmark,
    title: "企业版图",
    body:
      "陈丽华长期以地产投资与城市商业开发闻名。围绕富华国际集团建立的业务版图，让她在中国商界保持极高辨识度。",
  },
  {
    icon: BookOpenText,
    title: "紫檀文化",
    body:
      "北京旅游网信息显示，她在 1999 年斥资 2 亿元创办中国紫檀博物馆，并长期以馆长身份推动紫檀艺术保护与展示。",
  },
  {
    icon: ShieldCheck,
    title: "关键词价值",
    body:
      "围绕“陈丽华最新消息”“陈丽华逝世”“陈丽华紫檀博物馆”布局内容，可以同时覆盖新闻查询、人物百科与文化传承三类搜索意图。",
  },
] as const

const timelineItems = [
  {
    date: "1999",
    title: "创办中国紫檀博物馆",
    description:
      "北京旅游网提到，陈丽华于 1999 年斥资 2 亿元创办中国紫檀博物馆，成为其文化身份最稳定的公众符号。",
  },
  {
    date: "2026.04.05",
    title: "公开讣告确认逝世",
    description:
      "中国新闻网相关消息写明：陈丽华于 2026 年 4 月 5 日在北京逝世，享年 85 岁。",
  },
  {
    date: "2026.04.08",
    title: "北京民众献花悼念",
    description:
      "中新网视频显示，4 月 8 日已有市民在北京自发献花悼念，说明消息已从商界扩散到更广泛的公众层面。",
  },
  {
    date: "2026.04.09",
    title: "举行告别仪式",
    description:
      "北京日报转引消息称，4 月 9 日八宝山殡仪馆东礼堂举行告别仪式，各界人士与群众到场送别。",
  },
] as const

const faqItems = [
  {
    question: "陈丽华最新消息是什么？",
    answer:
      "截至 2026 年 4 月 12 日，公开可检索的核心信息是：富华国际集团 4 月 7 日发布讣告，确认陈丽华于 2026 年 4 月 5 日在北京逝世；4 月 9 日在北京八宝山举行告别仪式。",
  },
  {
    question: "陈丽华是谁？",
    answer:
      "公开报道通常将她描述为富华国际集团荣誉主席、中国紫檀博物馆馆长，也是中国商界和紫檀文化保护领域具有代表性的人物。",
  },
  {
    question: "中国紫檀博物馆和她是什么关系？",
    answer:
      "北京旅游网资料显示，她于 1999 年斥资 2 亿元创办中国紫檀博物馆，并长期以馆长身份参与其收藏、研究和展示体系建设。",
  },
  {
    question: "为什么这个页面坚持写绝对日期？",
    answer:
      "因为“今天”“最近”“刚刚”等相对说法会很快过时。对关键词站来说，明确写出 2026 年 4 月 5 日、4 月 7 日、4 月 9 日，既利于读者判断，也更利于搜索引擎理解内容时效。",
  },
] as const

const sources = [
  {
    title: "陈丽华逝世",
    source: "中国新闻网 / 新浪新闻",
    url: "https://news.sina.cn/2026-04-07/detail-inhtrumc5274524.d.html",
    note: "确认 2026 年 4 月 5 日逝世与 4 月 7 日讣告发布时间。",
  },
  {
    title: "陈丽华女士逝世，胡润百富榜 25 年同行者",
    source: "胡润百富 / 新浪财经",
    url: "https://finance.sina.cn/2026-04-07/detail-inhtsmie2273013.d.html",
    note: "补充富华国际集团业务背景与长期公众认知。",
  },
  {
    title: "北京民众献花悼念陈丽华",
    source: "中新网视频",
    url: "https://www.chinanews.com.cn/sh/shipin/cns-d/2026/04-08/news1050982.shtml",
    note: "补充 4 月 8 日民众献花这一公开悼念节点。",
  },
  {
    title: "群众冒雨自发送别陈丽华，白岩松参加告别仪式",
    source: "北京日报 / 搜狐转引",
    url: "https://m.sohu.com/a/1007165968_163278",
    note: "确认 2026 年 4 月 9 日八宝山告别仪式。",
  },
  {
    title: "打卡中国紫檀博物馆",
    source: "北京旅游网",
    url: "https://s.visitbeijing.com.cn/gallery/23654",
    note: "确认 1999 年创馆、2 亿元投入及博物馆背景信息。",
  },
] as const

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.domain}/#website`,
      name: siteConfig.name,
      url: siteConfig.domain,
      inLanguage: "zh-CN",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.domain}/#profile`,
      name: siteConfig.title,
      url: siteConfig.domain,
      description: siteConfig.description,
      dateModified: siteConfig.updatedAt,
      isPartOf: {
        "@id": `${siteConfig.domain}/#website`,
      },
      mainEntity: {
        "@id": `${siteConfig.domain}/#chen-lihua`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.domain}/#chen-lihua`,
      name: "陈丽华",
      description:
        "公开资料通常将陈丽华描述为富华国际集团荣誉主席、中国紫檀博物馆馆长，也是中国商界与紫檀文化保护领域具有代表性的人物。",
      knowsAbout: ["富华国际集团", "中国紫檀博物馆", "紫檀文化", "陈丽华最新消息"],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.domain}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5 lg:px-10">
            <div className="flex items-center gap-4">
              <Image
                src={siteConfig.logoImage}
                alt="陈丽华关键词站 logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg border border-white/10 bg-black/30 object-cover"
                priority
              />
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.32em] text-[#8fa89c]">
                  Chen Lihua / Latest
                </p>
                <p className="font-heading text-xl text-white">{siteConfig.name}</p>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#b9c3bd]">
              <a className="transition hover:text-white" href="#latest">
                最新进展
              </a>
              <a className="transition hover:text-white" href="#timeline">
                时间线
              </a>
              <a className="transition hover:text-white" href="#faq">
                常见问题
              </a>
              <a className="transition hover:text-white" href="#sources">
                信息来源
              </a>
            </nav>
          </div>
        </header>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-18 pt-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(340px,0.94fr)] lg:px-10 lg:pt-16">
            <div className="space-y-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="border border-[#33584d] bg-[#16342d] px-3 py-1 text-[#d8efe5]">
                  关键词站
                </Badge>
                <Badge variant="outline" className="border-white/12 bg-white/4 px-3 py-1 text-[#d9e1dc]">
                  最后整理：{siteConfig.updatedAt}
                </Badge>
              </div>

              <div className="space-y-5">
                <p className="font-display text-sm tracking-[0.42em] text-[#90a89d] uppercase">
                  Absolute dates, public sources, stable context
                </p>
                <h1 className="max-w-4xl font-heading text-[clamp(2.8rem,7vw,5.8rem)] leading-[1.03] text-white">
                  陈丽华最新消息
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#c8d0cb]">
                  截至 2026 年 4 月 12 日，公开报道显示：陈丽华于{" "}
                  <strong className="text-white">2026 年 4 月 5 日</strong> 在北京逝世，
                  <strong className="text-white">4 月 7 日</strong> 发布讣告，
                  <strong className="text-white">4 月 9 日</strong> 举行告别仪式。这个页面把新闻节点、人物背景与紫檀博物馆信息合并成一个可直接检索的中文入口。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://sbti-test.lat/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 border border-[#b94750] bg-[#b94750] px-5 text-white hover:bg-[#cb5560]"
                  )}
                >
                  查看最新节点
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#sources"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 border-white/14 bg-white/4 px-5 text-white hover:bg-white/8"
                  )}
                >
                  浏览公开来源
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroHighlights.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/4 px-4 py-5">
                    <p className="font-display text-xs tracking-[0.28em] text-[#90a89d] uppercase">
                      {item.label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#bcc5bf]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/20">
                <Image
                  src={siteConfig.heroImage}
                  alt="陈丽华最新消息站点主视觉海报"
                  width={1400}
                  height={1800}
                  priority
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 bg-gradient-to-t from-[#0b100f] via-[#0b100fd8] to-transparent px-5 py-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#92ab9f]">Public timeline</p>
                    <p className="mt-2 text-lg font-medium text-white">从讣告到告别仪式的公开信息整理</p>
                  </div>
                  <p className="font-display text-lg tracking-[0.2em] text-[#d1c293]">APR 2026</p>
                </div>
              </div>
              <p className="max-w-lg text-sm leading-6 text-[#aab3ae]">
                视觉方向采用“漆玉铭刻”：用墨黑、玉绿、朱红和金属线条，把新闻时效与文化传承放在同一张海报语言里。
              </p>
            </div>
          </div>
        </section>

        <section id="latest" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="max-w-3xl space-y-3">
              <p className="font-display text-xs uppercase tracking-[0.34em] text-[#9ab0a5]">
                Latest updates
              </p>
              <h2 className="font-heading text-4xl leading-tight text-white">最新公开节点</h2>
              <p className="text-base leading-7 text-[#bfcbc4]">
                这部分直接服务“陈丽华最新消息”搜索需求，先给最新时间线，再给更稳的背景信息。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {latestUpdates.map((item) => (
                <Card
                  key={item.date}
                  className="border border-white/10 bg-white/5 py-0 text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-5">
                    <Badge variant="outline" className="w-fit border-[#345a4f] bg-[#16342d] text-[#d8efe5]">
                      {item.date}
                    </Badge>
                    <CardTitle className="font-heading text-2xl text-white">{item.title}</CardTitle>
                    <CardDescription className="text-sm leading-6 text-[#b8c3bd]">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-white/10 bg-transparent px-5 py-4">
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#d1c293] transition hover:text-[#ead9a2]"
                    >
                      {item.sourceLabel}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#cad5cf] bg-[#edf3ef] text-[#111514]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-10">
            <div className="space-y-5">
              <p className="font-display text-xs uppercase tracking-[0.34em] text-[#47695e]">
                Person & relevance
              </p>
              <h2 className="font-heading text-4xl leading-tight">
                一个可被搜索引擎理解，也能被读者迅速扫懂的人物入口
              </h2>
              <p className="text-base leading-8 text-[#32423c]">
                如果只做一条悼念新闻，这个站会很快失去检索价值。更稳的做法是把“最新消息”
                和“为什么这个名字重要”放在同一页里：让新闻流量与人物长期搜索意图互相支撑。
              </p>
              <div className="rounded-lg border border-[#c5d4cc] bg-white/80 p-5">
                <p className="font-display text-xs uppercase tracking-[0.28em] text-[#47695e]">
                  Core framing
                </p>
                <p className="mt-3 text-lg leading-8 text-[#13201b]">
                  公开身份可以收束成三条主线：<strong>企业家</strong>、<strong>中国紫檀博物馆馆长</strong>、
                  <strong>文化传承推动者</strong>。这三条主线既解释新闻热度，也解释持续搜索量。
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {legacyPillars.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="flex h-full flex-col justify-between rounded-lg border border-[#c7d7cf] bg-white px-5 py-5 shadow-[0_18px_50px_rgba(17,21,20,0.06)]"
                  >
                    <div className="space-y-4">
                      <div className="inline-flex rounded-lg border border-[#c7d7cf] bg-[#eef5f0] p-2">
                        <Icon className="size-5 text-[#18493d]" />
                      </div>
                      <h3 className="font-heading text-2xl text-[#13201b]">{item.title}</h3>
                      <p className="text-sm leading-7 text-[#455651]">{item.body}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="timeline" className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="max-w-3xl space-y-3">
              <p className="font-display text-xs uppercase tracking-[0.34em] text-[#9ab0a5]">Timeline</p>
              <h2 className="font-heading text-4xl leading-tight text-white">时间线与关键词延展</h2>
              <p className="text-base leading-7 text-[#bfcbc4]">
                这一段既承接新闻，又补充长期背景，让首页不只回答“发生了什么”，还回答“为什么值得继续搜”。
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {timelineItems.map((item, index) => (
                <div
                  key={item.date}
                  className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] px-5 py-5 lg:grid-cols-[180px_1fr]"
                >
                  <div className="flex items-start gap-3 lg:block">
                    <div className="inline-flex rounded-lg border border-[#33584d] bg-[#17342d] px-3 py-2 text-sm text-[#d7eee4]">
                      {item.date}
                    </div>
                    {index < timelineItems.length - 1 ? (
                      <div className="hidden h-full min-h-12 w-px translate-x-[20px] bg-linear-to-b from-[#5b786e] to-transparent lg:block" />
                    ) : null}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <GanttChartSquare className="size-5 text-[#cfbc87]" />
                      <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                    </div>
                    <p className="max-w-4xl text-sm leading-7 text-[#c2cbc6]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-b border-[#cad5cf] bg-[#f4f6f2] text-[#111514]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:px-10">
            <div className="space-y-4">
              <p className="font-display text-xs uppercase tracking-[0.34em] text-[#47695e]">FAQ</p>
              <h2 className="font-heading text-4xl leading-tight">常见问题</h2>
              <p className="text-base leading-8 text-[#34453e]">
                FAQ 既是读者真正会问的问题，也是在 SEO 里最容易吃到长尾查询的一层。
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-lg border border-[#cad8d0] bg-white px-5 py-4 open:bg-[#fbfcfa]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-heading text-xl text-[#13201b]">
                    {item.question}
                    <CalendarDays className="size-5 shrink-0 text-[#47695e] transition group-open:rotate-45" />
                  </summary>
                  <p className="pt-4 text-sm leading-7 text-[#445650]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="sources" className="bg-[#edf3ef] text-[#111514]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="max-w-3xl space-y-3">
              <p className="font-display text-xs uppercase tracking-[0.34em] text-[#47695e]">Sources</p>
              <h2 className="font-heading text-4xl leading-tight">信息来源</h2>
              <p className="text-base leading-7 text-[#34453e]">
                这里全部用绝对日期与公开链接，便于后续继续补充，也便于后续把站点扩展成更完整的关键词集群。
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {sources.map((item) => (
                <article
                  key={item.url}
                  className="rounded-lg border border-[#cad8d0] bg-white px-5 py-5 shadow-[0_18px_50px_rgba(17,21,20,0.06)]"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-[#547568]">{item.source}</p>
                  <h3 className="mt-3 font-heading text-2xl leading-tight text-[#13201b]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#445650]">{item.note}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-[#16493d] transition hover:text-[#0d3128]"
                  >
                    打开来源
                    <ArrowUpRight className="size-4" />
                  </a>
                </article>
              ))}
            </div>

            <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#cad8d0] pt-6 text-sm text-[#50655d]">
              <p>页面更新时间：{siteConfig.updatedAt}</p>
              <p>站点关键词：陈丽华最新消息 / 陈丽华逝世 / 中国紫檀博物馆</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  )
}
