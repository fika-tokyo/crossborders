import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import heroBg from '../assets/hero-tokyo.jpg'
import ctaBg from '../assets/cta-ocean.jpg'

export default function Home() {
  const { t } = useLang()
  const { hero, purpose, borders, valueChain, ui } = t

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden text-white">
        {/* Tokyo skyline background */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Light overlay — heavier on the right (where the text sits) so the
            Tokyo Tower on the left stays clearly visible. */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/10 via-navy/25 to-navy/75" />

        <div className="relative mx-auto flex max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-xl md:ml-auto md:text-right">
            <p className="animate-rise text-sm font-semibold uppercase tracking-[0.2em] text-red drop-shadow">
              {hero.eyebrow}
            </p>
            <h1 className="animate-rise delay-1 mt-6 whitespace-pre-line text-5xl font-bold leading-[1.05] tracking-tight [text-shadow:0_2px_12px_rgba(11,20,30,0.45)] md:text-7xl">
              {hero.title}
            </h1>
            {hero.titleEn && (
              <p className="animate-rise delay-2 mt-4 text-lg font-medium tracking-wide text-red drop-shadow md:text-xl">
                {hero.titleEn}
              </p>
            )}
            <p className="animate-rise delay-3 mt-8 text-lg leading-relaxed text-white [text-shadow:0_1px_8px_rgba(11,20,30,0.55)] md:ml-auto md:max-w-md">
              {hero.subtitle}
            </p>
            <div className="animate-rise delay-3 mt-10 flex flex-wrap gap-4 md:justify-end">
              <Link
                to={hero.primaryCta.to}
                className="rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-white hover:text-navy"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                to={hero.secondaryCta.to}
                className="rounded-full border border-white/60 bg-navy/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-red hover:text-red"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Purpose ---------------- */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-2xl font-medium leading-relaxed text-ink md:text-3xl">
          “{purpose.quote}”
        </p>
        <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
          {purpose.needs.map((n) => (
            <div key={n.who} className="rounded-2xl bg-mist p-6">
              <span className="text-sm font-semibold text-red-dark">{n.who}{ui.needSuffix}</span>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{n.want}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Five borders ---------------- */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {ui.bordersTitle}
          </h2>
          <p className="mt-3 text-ink-soft">{ui.bordersSubtitle}</p>
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

      {/* ---------------- Value chain teaser ---------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {ui.valueTeaserTitle}
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">{ui.valueTeaserSubtitle}</p>
          </div>
          <Link to="/value" className="shrink-0 text-sm font-semibold text-red-dark hover:underline">
            {ui.valueTeaserLink}
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
      <section className="relative overflow-hidden py-28 text-white">
        {/* Ocean & rocks background (sea / horizon — the brand's motif) */}
        <img
          src={ctaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/65 to-navy/85" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_12px_rgba(11,20,30,0.5)] md:text-4xl">
            {ui.homeCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/85 [text-shadow:0_1px_8px_rgba(11,20,30,0.55)]">{ui.homeCtaSubtitle}</p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-white hover:text-navy"
          >
            {ui.homeCtaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
