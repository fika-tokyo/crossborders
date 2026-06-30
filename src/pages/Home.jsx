import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import heroBg from '../assets/hero-tokyo.jpg'
import imgAbout from '../assets/cross-partner.jpg'
import imgValue from '../assets/cross-value.jpg'
import imgPartner from '../assets/cross-borders.jpg'

export default function Home() {
  const { t } = useLang()
  const { hero, valueChain, ui } = t

  const portals = [
    { to: '/about', title: ui.portalAbout, img: imgAbout, cta: ui.portalAboutCta },
    { to: '/value', title: ui.portalValue, img: imgValue, cta: ui.portalValueCta },
    { to: '/partnership', title: ui.portalPartner, img: imgPartner, cta: ui.portalPartnerCta },
  ]

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
          <div className="max-w-2xl md:ml-auto md:text-right">
            <h1 className="animate-rise delay-1 mt-10 whitespace-pre-line text-5xl font-bold leading-[1.05] tracking-tight [text-shadow:0_2px_12px_rgba(11,20,30,0.45)] md:text-7xl">
              {hero.title}
            </h1>
            {hero.titleEn && (
              <p className="animate-rise delay-2 mt-4 text-lg font-medium tracking-wide text-red drop-shadow md:text-xl">
                {hero.titleEn}
              </p>
            )}
            <p className="animate-rise delay-3 mt-8 whitespace-pre-line text-lg leading-relaxed text-white [text-shadow:0_1px_8px_rgba(11,20,30,0.55)]">
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

      {/* ---------------- One-line positioning ---------------- */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <p className="whitespace-pre-line text-2xl font-medium leading-relaxed text-ink md:text-3xl">
          {ui.homePositioning}
        </p>
      </section>

      {/* ---------------- Value chain — enlarged, above the cards ---------------- */}
      <section className="mx-auto max-w-5xl px-6 pb-16 text-center md:pb-20">
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-5">
          {valueChain.map((v, i) => (
            <Fragment key={v.en}>
              <div className="px-2">
                <span className="text-sm font-semibold tracking-widest text-red-dark">{v.en}</span>
                <p className="mt-1 text-xl font-bold text-ink md:text-2xl">{v.cn || v.en}</p>
              </div>
              {i < valueChain.length - 1 && (
                <span className="self-center text-2xl font-bold text-red md:text-3xl">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              )}
            </Fragment>
          ))}
        </div>
        <Link to="/value" className="mt-10 inline-block text-base font-semibold text-red-dark hover:underline">
          {ui.valueTeaserLink}
        </Link>
      </section>

      {/* ---------------- Three portal cards ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {portals.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-navy/35" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug text-ink">{c.title}</h3>
                <span className="mt-4 inline-block text-sm font-semibold text-red-dark group-hover:underline">
                  {c.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </>
  )
}
