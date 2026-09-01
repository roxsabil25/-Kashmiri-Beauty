function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fdf8ed]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="KBJ logo" className="h-12 w-12 rounded-full border border-[#d4a017]/40 object-cover" />
            <div>
              <p className="font-display text-lg font-bold tracking-[0.18em] text-[#f5d76e] uppercase">KBJ</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#fdf8ed]/70">Kashmiri Beauty</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#fdf8ed]/75">
            Kashmiri Beauty By Jiniath creates handcrafted natural skincare inspired by the purity of saffron, goat milk, and the rich traditions of Kashmiri beauty rituals.
          </p>
        </div>

        <div>
          <h4 className="font-display text-2xl text-[#f5d76e]">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-[#fdf8ed]/75">
            <li><a href="#products" className="transition hover:text-[#f5d76e]">Shop</a></li>
            <li><a href="#story" className="transition hover:text-[#f5d76e]">Story</a></li>
            <li><a href="#ingredients" className="transition hover:text-[#f5d76e]">Ingredients</a></li>
            <li><a href="#reviews" className="transition hover:text-[#f5d76e]">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-2xl text-[#f5d76e]">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-[#fdf8ed]/75">
            <li>WhatsApp: 01757-268235</li>
            <li>Email: kashmiribeautykb@gmail.com</li>
            <li>Facebook: facebook.com/salsabil.rahman.90</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-2xl text-[#f5d76e]">Social</h4>
          <div className="mt-5 flex gap-3">
            <a href="https://wa.me/8801757268235" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5d76e]/30 bg-white/5 text-[#f5d76e] transition hover:bg-[#f5d76e] hover:text-[#0a0a0a]">WA</a>
            <a href="https://www.facebook.com/salsabil.rahman.90" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5d76e]/30 bg-white/5 text-[#f5d76e] transition hover:bg-[#f5d76e] hover:text-[#0a0a0a]">FB</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0a0a0a] py-5">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-[#fdf8ed]/65 sm:px-6 lg:px-8">
          <p>Developed with love by Rox Sabil | WhatsApp +8801749935208 | FB: facebook.com/salsabil.rahman.90</p>
          <p className="mt-2">© 2024 Kashmiri Beauty By Jiniath - Stay Beautiful With Nature</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
