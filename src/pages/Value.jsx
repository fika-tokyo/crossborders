import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function Value() {
  const { t } = useLang()
  const { valueChain, matrix, strengths, contactTopics, ui } = t

  return (
    <>
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.valueEyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {ui.valueTitle}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{ui.valueIntro}</p>
        </div>
      </section>

      {/* Value chain */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-5">
          {valueChain.map((v) => (
            <div
              key={v.en}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 transition hover:border-red hover:shadow-lg md:flex-row md:items-center"
            >
              <div className="flex items-center gap-4 md:w-64 md:shrink-0">
                <span className="text-4xl font-bold text-red/40">{v.n}</span>
                <div>
                  <p className="text-sm font-bold tracking-widest text-red-dark">{v.en}</p>
                  {v.cn && <p className="text-xs text-ink-soft">{v.cn}</p>}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation matrix */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{ui.matrixTitle}</h2>
          <p className="mt-3 text-ink-soft">{ui.matrixSubtitle}</p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="p-4 text-left font-semibold text-ink">{ui.matrixCapHeader}</th>
                  {matrix.columns.map((c) => (
                    <th
                      key={c}
                      className={`p-4 text-center font-semibold ${
                        c === 'CROSSBORDERS' ? 'bg-navy text-white' : 'text-ink-soft'
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.rows.map((r) => (
                  <tr key={r.cap} className="border-b border-line last:border-0">
                    <td className="p-4 font-medium text-ink">{r.cap}</td>
                    {r.vals.map((val, i) => (
                      <td
                        key={i}
                        className={`p-4 text-center text-lg ${
                          matrix.columns[i] === 'CROSSBORDERS'
                            ? 'bg-red/5 font-bold text-red-dark'
                            : 'text-ink-soft'
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-soft">{matrix.legend}</p>
        </div>
      </section>

      {/* Four core strengths */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{ui.strengthsTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {strengths.map((s) => (
            <div key={s.n} className="rounded-2xl border border-line bg-white p-8 transition hover:border-red hover:shadow-lg">
              <span className="text-2xl font-bold text-red/40">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-red-dark">{s.en}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            state={{ topic: contactTopics[3] }}
            className="inline-block rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            {ui.valueCtaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
