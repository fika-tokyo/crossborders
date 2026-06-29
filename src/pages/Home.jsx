import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import heroBg from '../assets/hero-tokyo.jpg'
import imgBorders from '../assets/cross-borders.jpg'
import imgValue from '../assets/cross-value.jpg'
import imgPartner from '../assets/cross-partner.jpg'

export default function Home() {
  const { t } = useLang()
  const { hero, purpose, borders, valueChain, partnership, ui } = t

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

      {/* ---------------- Five borders (image left) ---------------- */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg md:aspect-auto">
            <img src={imgBorders} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {ui.bordersTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{ui.bordersSubtitle}</p>
            <ul className="mt-8 space-y-5">
              {borders.map((b, i) => (
                <li key={b.key} className="flex gap-4">
                  <span className="text-xl font-bold text-red/50">0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-ink">{b.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Value chain teaser (image right) ---------------- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg md:order-2 md:aspect-auto">
            <img src={imgValue} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center md:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {ui.valueTeaserTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{ui.valueTeaserSubtitle}</p>
            <ul className="mt-8 space-y-3">
              {valueChain.map((v) => (
                <li key={v.en} className="rounded-xl border border-navy/20 bg-white p-4">
                  <span className="text-xs font-semibold tracking-widest text-red-dark">{v.en}</span>
                  <p className="mt-1 text-sm font-medium text-ink">{v.title}</p>
                </li>
              ))}
            </ul>
            <Link to="/value" className="mt-6 inline-block text-sm font-semibold text-red-dark hover:underline">
              {ui.valueTeaserLink}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Partnership teaser (image left) ---------------- */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg md:aspect-auto">
            <img src={imgPartner} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {ui.homePartnerTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{ui.homePartnerSubtitle}</p>
            <ul className="mt-8 space-y-4">
              {partnership.types.map((type) => (
                <li key={type.title} className="border-l-2 border-red/40 pl-4">
                  <h3 className="font-semibold text-ink">{type.title}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{type.target}</p>
                </li>
              ))}
            </ul>
            <Link to="/partnership" className="mt-6 inline-block text-sm font-semibold text-red-dark hover:underline">
              {ui.homePartnerLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
