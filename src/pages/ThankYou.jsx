import { Link, useLocation } from 'react-router-dom'

export default function ThankYou() {
  const { state } = useLocation()
  const name = state?.name

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-mist px-6 py-20">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red/15">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-red-dark" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink">
          {name ? `谢谢您，${name}！` : '谢谢您！'}
        </h1>
        <p className="mt-4 text-ink-soft">
          我们已收到您的咨询，团队会在一个工作日内与您联系。
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
        >
          返回首页
        </Link>
      </div>
    </section>
  )
}
