import { useLang } from '../i18n.jsx'

export default function About() {
  const { t } = useLang()
  const { borders, group, ui } = t

  return (
    <>
      {/* Brand philosophy */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-3xl px-6">
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
          {borders.map((b, i) => (
            <div key={b.key} className="flex gap-6 bg-white p-7 transition hover:bg-mist">
              <span className="text-3xl font-bold text-red/40">0{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{b.body}</p>
              </div>
            </div>
          ))}
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

            {/* UNPLAN */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-baseline gap-3">
                <h3 className="text-2xl font-bold text-ink">{group.unplan.name}</h3>
                <span className="text-sm text-red-dark">{group.unplan.role}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{group.unplan.body}</p>
              <ul className="mt-5 space-y-2">
                {group.unplan.abilities.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* UNPLAN stores */}
          <h3 className="mt-14 text-lg font-semibold text-ink">{ui.unplanStoresTitle}</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {group.unplan.stores.map((s) => (
              <div key={s.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-semibold text-ink">{s.name}</h4>
                  <span className="text-xs font-semibold text-red-dark">{s.year}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">{ui.positioningEyebrow}</p>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-white md:text-3xl">
            {group.positioning.line}
          </p>
          <p className="mt-6 text-white/60">{group.positioning.body}</p>
        </div>
      </section>
    </>
  )
}
