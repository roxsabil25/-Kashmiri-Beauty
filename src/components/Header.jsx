import { useState } from 'react'

const navItems = [
  { label: 'Shop', href: '#products' },
  { label: 'Story', href: '#story' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Reviews', href: '#reviews' },
]

function Header({ cartCount = 0, onOpenCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#d4a017]/20 bg-[#fdf8ed]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Kashmiri Beauty By Jiniath home">
          <img src="/images/logo.jpg" alt="Kashmiri Beauty By Jiniath logo" className="h-12 w-12 rounded-full border border-[#d4a017]/40 object-cover shadow-md" />
          <div>
            <p className="font-display text-lg font-bold tracking-[0.18em] text-[#0f4c0f] uppercase">KBJ</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#1a5a1a]/70">Kashmiri Beauty</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#0f4c0f] transition hover:text-[#d4a017]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            className="relative rounded-full border border-[#d4a017]/70 bg-white p-2.5 text-[#0f4c0f] shadow-md transition hover:scale-105"
            aria-label="Open cart"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M3 4h2l2.2 9.2a1 1 0 0 0 1 .8h7.8a1 1 0 0 0 1-.8L17 7H6.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="17.5" r="1.5" />
              <circle cx="17" cy="17.5" r="1.5" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d4a017] px-1 text-[10px] font-bold text-[#0a0a0a]">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/8801757268235"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-[#0f4c0f] to-[#1a5a1a] px-5 py-2.5 text-sm font-semibold text-[#fdf8ed] shadow-lg shadow-[#0f4c0f]/30 transition hover:scale-[1.02] sm:inline-flex"
          >
            WhatsApp Order
          </a>

          <button
            type="button"
            className="inline-flex rounded-full border border-[#0f4c0f]/20 bg-white p-2.5 text-[#0f4c0f] md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#d4a017]/20 bg-[#fdf8ed] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#0f4c0f]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/8801757268235"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex rounded-full bg-gradient-to-r from-[#0f4c0f] to-[#1a5a1a] px-4 py-2.5 text-sm font-semibold text-[#fdf8ed]"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
