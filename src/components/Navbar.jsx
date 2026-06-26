import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site, nav } from '../content.js'
import { LogoEmblem, Wordmark } from './Logo.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoEmblem className="h-10 w-12 shrink-0" />
          <Wordmark className="text-base" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            开始咨询
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-white px-6 py-4 md:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-base font-medium ${isActive ? 'text-ink' : 'text-ink-soft'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
