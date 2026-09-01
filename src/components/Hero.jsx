function Hero({ onViewCollection, onWhatsAppOrder }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(245,215,110,0.18),_transparent_28%),linear-gradient(135deg,#fdf8ed_0%,#f4ebd3_45%,#ebf6ee_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(15,76,15,0.12),transparent_28%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-16">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a017]/40 bg-[#fffaf0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4c0f] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#d4a017]" />
            100% Natural & Ayurvedic
          </div>

          <h1 className="font-display text-5xl leading-none text-[#0a0a0a] sm:text-6xl lg:text-7xl">
            <span className="block text-[#0f4c0f]">Saffron &</span>
            <span className="gold-gradient-text block">Goat Milk Magic</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-[#1a5a1a] sm:text-3xl">
            The Secret of Kashmiri Glow
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-[#1b1b1b]/75 sm:text-lg">
            Aromatherapy-infused skincare crafted with saffron, goat milk, and time-honored Kashmiri botanicals to reveal a naturally luminous complexion.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/8801757268235"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0f4c0f] to-[#1a5a1a] px-6 py-3.5 text-sm font-semibold text-[#fdf8ed] shadow-xl shadow-[#0f4c0f]/25 transition hover:scale-[1.02]"
            >
              Shop Now - WhatsApp Order
            </a>
            <button
              type="button"
              onClick={onViewCollection}
              className="inline-flex items-center justify-center rounded-full border border-[#d4a017]/70 bg-[#fffaf0] px-6 py-3.5 text-sm font-semibold text-[#0f4c0f] shadow-md transition hover:scale-[1.02]"
            >
              View Collection
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div className="rounded-2xl border border-[#d4a017]/20 bg-white/60 p-4 shadow-md backdrop-blur-sm">
              <p className="font-display text-3xl font-bold text-[#0f4c0f]">5000+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#1a5a1a]/80">Happy Customers</p>
            </div>
            <div className="rounded-2xl border border-[#d4a017]/20 bg-white/60 p-4 shadow-md backdrop-blur-sm">
              <p className="font-display text-3xl font-bold text-[#0f4c0f]">4.9/5</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#1a5a1a]/80">Average Rating</p>
            </div>
            <div className="rounded-2xl border border-[#d4a017]/20 bg-white/60 p-4 shadow-md backdrop-blur-sm">
              <p className="font-display text-3xl font-bold text-[#0f4c0f]">7 days</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#1a5a1a]/80">Glow Results</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#d4a017]/25 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-[#0f4c0f]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#d4a017]/30 bg-gradient-to-br from-[#0f4c0f] via-[#0d3d0d] to-[#050d05] p-3 shadow-[0_30px_80px_rgba(15,76,15,0.3)]">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/p5.jpg"
                alt="Saffron and goat milk skincare product"
                className="h-[560px] w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="absolute -left-2 bottom-8 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-[#fdf8ed] shadow-xl backdrop-blur-md">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#f5d76e]">Saffron</div>
            <div className="mt-1 text-lg font-semibold">Natural Glow</div>
          </div>

          <div className="absolute -right-2 top-10 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-[#fdf8ed] shadow-xl backdrop-blur-md">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#f5d76e]">Goat Milk</div>
            <div className="mt-1 text-lg font-semibold">Soft Hydration</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
