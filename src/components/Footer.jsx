import { Link } from 'react-router-dom'
import { LogoEmblem, Wordmark } from './Logo.jsx'
import { useLang } from '../i18n.jsx'
import footerBg from '../assets/cta-ocean.jpg'

export default function Footer() {
  const { t } = useLang()
  const { site, ui } = t

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Single ocean background for the whole bottom block (CTA + footer),
          so it reads as one continuous image. */}
      <img
        src={footerBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy/95" />

      <div className="relative">
        {/* CTA banner */}
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight [text-shadow:0_2px_12px_rgba(11,20,30,0.5)] md:text-4xl">
            {ui.homeCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/85 [text-shadow:0_1px_8px_rgba(11,20,30,0.5)]">
            {ui.homeCtaSubtitle}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-white hover:text-navy"
          >
            {ui.homeCtaButton}
          </Link>
        </div>

        {/* Slim info row: brand (left) + contact (right) */}
        <div className="mx-auto flex max-w-6xl flex-col gap-8 border-t border-white/15 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <LogoEmblem className="h-8 w-9" />
              </span>
              <Wordmark className="text-base" onDark />
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              {site.tagline}{site.taglineEn ? ` · ${site.taglineEn}` : ''}
            </p>
          </div>

          <ul className="space-y-1.5 text-sm text-white/80 md:text-right">
            <li><a href={`mailto:${site.email}`} className="transition hover:text-red">{site.email}</a></li>
            <li>{site.phone}</li>
            <li>{site.address}</li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} {site.brandFull} {ui.footerRights}</span>
            <span>{site.tagline}{site.taglineEn ? ` · ${site.taglineEn}` : ''}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
