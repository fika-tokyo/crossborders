import { Languages, Globe, Layers, Clock, Building2 } from 'lucide-react'
import { useLang } from '../i18n.jsx'

const borderIcons = {
  language: Languages,
  nation: Globe,
  expertise: Layers,
  time: Clock,
  industry: Building2,
}

export default function About() {
  const { t } = useLang()
  const { borders, group, ui } = t

  return (
    <>
      {/* Brand philosophy */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.aboutEyebrow1}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {ui.aboutTitle1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{ui.aboutIntro1}</p>
        </div>
      </section>

      {/* Five borders */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-px overflow-hidden rounded-2xl border border-line">
          {borders.map((b) => {
            const Icon = borderIcons[b.key]
            return (
              <div key={b.key} className="flex gap-6 bg-white p-7 transition hover:bg-mist">
                {Icon && <Icon className="h-7 w-7 shrink-0 text-red" strokeWidth={1.75} />}
                <div>
                  <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{b.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Group foundation */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.aboutEyebrow2}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {ui.aboutTitle2}
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">{group.intro}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* FIKA */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl font-bold text-ink">{group.fika.name}</h3>
                <span className="text-sm text-red-dark">{group.fika.role}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{group.fika.body}</p>
              <ul className="mt-5 space-y-2">
                {group.fika.scope.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Group capabilities */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-ink">{group.capabilities.title}</h3>
              <ul className="mt-5 space-y-2">
                {group.capabilities.items.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.positioningEyebrow}</p>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-ink md:text-3xl">
            {group.positioning.line}
          </p>
          <p className="mt-6 text-ink-soft">{group.positioning.body}</p>
        </div>
      </section>
    </>
  )
}
