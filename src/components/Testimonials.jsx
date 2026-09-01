const testimonials = [
  {
    name: 'Nusrat S.',
    city: 'Dhaka',
    quote: 'My skin became softer and brighter within weeks. The saffron glow is real, and the cream smells divine without being too heavy.',
  },
  {
    name: 'Shabnam A.',
    city: 'Chittagong',
    quote: 'The goat milk soap is my holy grail. It leaves my skin silky and refreshed, and I love how natural it feels every day.',
  },
  {
    name: 'Jannat R.',
    city: 'Sylhet',
    quote: 'I ordered the night cream and it quickly became part of my nightly routine. It feels luxurious, calming, and truly nourishing.',
  },
]

function Testimonials() {
  return (
    <section id="reviews" className="bg-[#f1efe7] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a017]">Testimonials</p>
          <h3 className="font-display mt-3 text-4xl text-[#0f4c0f] sm:text-5xl">What women are saying</h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-[#d4a017]/20 bg-white p-7 shadow-xl shadow-[#0f4c0f]/5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0f4c0f] to-[#1a5a1a] text-sm font-bold text-[#fdf8ed]">
                    {item.name.split(' ').map((word) => word[0]).slice(0,2).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0a0a0a]">{item.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[#0f4c0f]/70">{item.city}</div>
                  </div>
                </div>
                <div className="text-[#d4a017]">★★★★★</div>
              </div>

              <p className="text-base leading-8 text-[#1b1b1b]/75">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
