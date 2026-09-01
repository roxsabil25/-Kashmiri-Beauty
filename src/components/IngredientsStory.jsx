function IngredientsStory() {
  return (
    <section id="ingredients" className="bg-[#0f4c0f] py-20 text-[#fdf8ed]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f5d76e]">Our secret</p>
          <h3 className="font-display mt-4 text-4xl sm:text-5xl">Rooted in saffron, goat milk, and nature’s care</h3>
          <p className="mt-6 text-base leading-8 text-[#f3f1e8]/80">
            KBJ blends the richness of saffron with the nourishing power of goat milk to create a deeply restorative skin ritual. Each formula is designed to brighten, hydrate, and soften while protecting your skin from everyday dryness and dullness.
          </p>
          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-[#f5d76e]/20 bg-white/5 p-4">
              <h4 className="font-display text-2xl text-[#f5d76e]">Saffron</h4>
              <p className="mt-2 text-sm leading-7 text-[#f3f1e8]/80">Known for its glow-boosting properties and luxurious, natural radiance.</p>
            </div>
            <div className="rounded-2xl border border-[#f5d76e]/20 bg-white/5 p-4">
              <h4 className="font-display text-2xl text-[#f5d76e]">Goat Milk</h4>
              <p className="mt-2 text-sm leading-7 text-[#f3f1e8]/80">A gentle moisturizer that supports softness, balance, and a healthy complexion.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-[#f5d76e]/20 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-[#d4a017]/20 blur-3xl" />
          <img src="/images/p5.jpg" alt="Kashmiri beauty ingredients" className="h-[500px] w-full rounded-[2rem] border border-[#f5d76e]/20 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.35)]" />
        </div>
      </div>
    </section>
  )
}

export default IngredientsStory
