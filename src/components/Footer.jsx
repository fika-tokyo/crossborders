import { Link } from 'react-router-dom'
import { LogoEmblem, Wordmark } from './Logo.jsx'
import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()
  const { site, nav, ui } = t

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <LogoEmblem className="h-9 w-10" />
            </span>
            <Wordmark className="text-base" onDark />
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            {site.tagline}{site.taglineEn ? ` · ${site.taglineEn}` : ''}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">{ui.footerNav}</h4>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-white/80 transition hover:text-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">{ui.footerContact}</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><a href={`mailto:${site.email}`} className="transition hover:text-red">{site.email}</a></li>
            <li>{site.phone}</li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.brandFull} {ui.footerRights}</span>
          <span>{site.tagline}{site.taglineEn ? ` · ${site.taglineEn}` : ''}</span>
        </div>
      </div>
    </footer>
  )
}
