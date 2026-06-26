import { Link } from 'react-router-dom'
import { partnership } from '../content.js'

export default function Partnership() {
  return (
    <>
      {/* 合作哲学 */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">05 · 合作哲学</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {partnership.philosophy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {partnership.philosophy.body}
          </p>
        </div>
      </section>

      {/* 三种合作 */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">三种合作可能</h2>
        <p className="mt-3 text-ink-soft">我们与不同领域的伙伴，可以创造不同形式的价值。</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {partnership.types.map((t) => (
            <div key={t.title} className="flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:border-red hover:shadow-lg">
              <h3 className="text-xl font-bold text-ink">{t.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-red-dark">{t.en}</p>
              <p className="mt-4 inline-block self-start rounded-full bg-cloud px-3 py-1 text-xs font-medium text-ink-soft">
                对象：{t.target}
              </p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-ink">服务内容</p>
                  <p className="mt-1 text-ink-soft">{t.service}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">对您的价值</p>
                  <p className="mt-1 text-ink-soft">{t.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            探讨合作
          </Link>
        </div>
      </section>
    </>
  )
}
