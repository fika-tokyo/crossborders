import { Link } from 'react-router-dom'
import { hero, purpose, borders, valueChain } from '../content.js'
import { LogoEmblem } from '../components/Logo.jsx'

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-red/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-red/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div>
            <p className="animate-rise text-sm font-semibold uppercase tracking-[0.2em] text-red">
              {hero.eyebrow}
            </p>
            <h1 className="animate-rise delay-1 mt-6 whitespace-pre-line text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {hero.title}
            </h1>
            <p className="animate-rise delay-2 mt-4 text-lg font-medium tracking-wide text-red/90 md:text-xl">
              {hero.titleEn}
            </p>
            <p className="animate-rise delay-3 mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              {hero.subtitle}
            </p>
            <div className="animate-rise delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                to={hero.primaryCta.to}
                className="rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.to}
                className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-red hover:text-red"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Brand emblem badge */}
          <div className="animate-rise delay-2 hidden justify-center md:flex">
            <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl bg-white p-10 shadow-2xl">
              <LogoEmblem className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Purpose / 存在意义 ---------------- */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-2xl font-medium leading-relaxed text-ink md:text-3xl">
          “{purpose.quote}”
        </p>
        <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
          {purpose.needs.map((n) => (
            <div key={n.who} className="rounded-2xl bg-mist p-6">
              <span className="text-sm font-semibold text-red-dark">{n.who}想要</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{n.want}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 五道边界 ---------------- */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            我们要跨越的五道边界
          </h2>
          <p className="mt-3 text-ink-soft">日本的不动产行业，仍被五道无形的「边界」所阻隔。</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {borders.map((b, i) => (
              <div
                key={b.key}
                className="animate-rise rounded-2xl border border-line bg-white p-6 transition hover:border-red hover:shadow-lg"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="text-3xl font-bold text-red/40">0{i + 1}</span>
                <h3 className="mt-3 text-base font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 价值链 teaser ---------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              资产生命周期的全程价值管理
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              从 Discover 到 Exit，我们陪伴客户走完每一步——这就是「Cross the Borders」在业务层面的真正含义。
            </p>
          </div>
          <Link to="/value" className="shrink-0 text-sm font-semibold text-red-dark hover:underline">
            查看完整价值链 →
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-stretch gap-3">
          {valueChain.map((v, i) => (
            <div key={v.en} className="flex flex-1 items-center gap-3 min-w-[160px]">
              <div className="flex-1 rounded-2xl bg-navy p-5 text-white">
                <span className="text-xs font-semibold tracking-widest text-red">{v.en}</span>
                <p className="mt-2 text-sm font-medium">{v.title}</p>
              </div>
              {i < valueChain.length - 1 && (
                <span className="hidden text-red lg:inline">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            让我们一起跨越边界
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            无论您是地主、投资家，还是寻求合作的伙伴——告诉我们您的需求。
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
          >
            预约咨询
          </Link>
        </div>
      </section>
    </>
  )
}
