function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a0a0a]">
      <img src="/images/p3.jpeg" alt="Final skincare call to action" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-[#0a0a0a]/65" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center text-[#fdf8ed] sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5d76e]">Glow routine</p>
        <h3 className="font-display mt-4 text-4xl text-[#fdf8ed] sm:text-5xl">Ready for Kashmiri Glow?</h3>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#f3f1e8]/80">
          Bring home the natural radiance your skin deserves with handcrafted formulas made for a brighter, softer you.
        </p>
        <a
          href="https://wa.me/8801757268235"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f5d76e] to-[#d4a017] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a0a0a] shadow-xl shadow-[#d4a017]/35 transition hover:scale-[1.02]"
        >
          WhatsApp Now
        </a>
      </div>
    </section>
  )
}

export default FinalCTA
