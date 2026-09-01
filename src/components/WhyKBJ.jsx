const features = [
  {
    title: 'Aromatherapy',
    description: 'Lavender, saffron, and floral notes that calm the skin and soothe the senses.',
    icon: '✦',
  },
  {
    title: 'Ayurvedic Formula',
    description: 'Time-tested ingredients that support healthy skin from the very first use.',
    icon: '☘',
  },
  {
    title: 'Natural Handmade',
    description: 'Every batch is carefully prepared for purity, softness, and a skin-loving finish.',
    icon: '❋',
  },
  {
    title: 'Visible Glow in 7 Days',
    description: 'Expect brighter, fresher skin with nourishment that feels luxurious and gentle.',
    icon: '✧',
  },
]

function WhyKBJ() {
  return (
    <section className="bg-[#fdf8ed] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a017]">Why KBJ</p>
          <h3 className="font-display mt-3 text-4xl text-[#0f4c0f] sm:text-5xl">Kashmiri care, naturally empowered</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.75rem] border border-[#d4a017]/20 bg-white p-7 shadow-lg shadow-[#0f4c0f]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5d76e] to-[#d4a017] text-2xl text-[#0f4c0f] shadow-md">
                {feature.icon}
              </div>
              <h4 className="font-display text-2xl text-[#0f4c0f]">{feature.title}</h4>
              <p className="mt-3 text-sm leading-7 text-[#1b1b1b]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyKBJ
