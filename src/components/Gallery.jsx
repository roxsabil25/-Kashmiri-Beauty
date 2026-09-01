const images = ['/images/p4.jpg', '/images/p5.jpg', '/images/p2.jpeg', '/images/p1.jpeg']

function Gallery() {
  return (
    <section className="bg-[#fdf8ed] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a017]">Gallery</p>
          <h3 className="font-display mt-3 text-4xl text-[#0f4c0f] sm:text-5xl">A closer look at the ritual</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={image} className="group overflow-hidden rounded-[1.75rem] shadow-xl shadow-[#0f4c0f]/10">
              <img
                src={image}
                alt={`Beauty gallery sample ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
