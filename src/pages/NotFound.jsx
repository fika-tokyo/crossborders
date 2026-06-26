import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="text-6xl font-bold text-red/30">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">页面未找到</h1>
        <p className="mt-2 text-ink-soft">您访问的页面不存在或已被移动。</p>
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
