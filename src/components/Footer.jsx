import { useLang } from '../i18n.jsx'
import footerBg from '../assets/cta-ocean.jpg'

export default function Footer() {
  const { t } = useLang()
  const { site, ui } = t

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Single ocean background for the whole bottom block. */}
      <img
        src={footerBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy/95" />

      <div className="relative">
        {/* CTA banner */}
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight [text-shadow:0_2px_12px_rgba(11,20,30,0.5)] md:text-4xl">
            {ui.homeCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/85 [text-shadow:0_1px_8px_rgba(11,20,30,0.5)]">
            {ui.homeCtaSubtitle}
          </p>
        </div>

        {/* Tagline (left) + contact (right) */}
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">{site.tagline}</p>
            {site.taglineEn && (
              <p className="mt-1 text-sm text-white/70">{site.taglineEn}</p>
            )}
          </div>

          <ul className="space-y-1.5 text-sm text-white/80 md:text-right">
            <li><a href={`mailto:${site.email}`} className="transition hover:text-red">{site.email}</a></li>
            <li>{site.phone}</li>
            <li>{site.address}</li>
          </ul>
        </div>

        {/* Bottom legal bar */}
        <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-white/50">
          © {new Date().getFullYear()} {site.brandFull} {ui.footerRights}
        </div>
      </div>
    </footer>
  )
}
