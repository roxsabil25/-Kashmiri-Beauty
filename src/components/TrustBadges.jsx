const badges = [
  '100% Natural',
  'Ayurvedic Certified',
  'Handmade',
  'Cash on Delivery',
]

function TrustBadges() {
  return (
    <section className="bg-[#0f4c0f] py-6 text-[#fdf8ed] shadow-[inset_0_1px_0_rgba(245,215,110,0.14)]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {badges.map((badge) => (
          <div
            key={badge}
            className="flex items-center justify-center gap-3 rounded-2xl border border-[#f5d76e]/20 bg-white/5 px-4 py-3 text-sm font-semibold shadow-sm"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f5d76e] text-[#0f4c0f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="h-3.5 w-3.5">
                <path d="M5 12.5 9.4 17l9.6-10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {badge}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges
