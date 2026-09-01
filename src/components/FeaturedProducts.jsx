import ProductCard from './ProductCard'

const products = [
  {
    id: 'id1',
    name: 'Saffron Goat Milk Soap Bar',
    price: 650,
    oldPrice: 850,
    image: '/images/p2.jpeg',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 'id2',
    name: 'Brightening Supreme+ Advanced Lightening Cream 50gm',
    price: 1250,
    oldPrice: null,
    image: '/images/p3.jpeg',
    badge: 'New Arrival',
    rating: 5.0,
    reviews: 89,
  },
  {
    id: 'id3',
    name: 'Premium Saffron Night Cream',
    price: 950,
    oldPrice: 1180,
    image: '/images/p1.jpeg',
    badge: '20% Off',
    rating: 4.8,
    reviews: 203,
  },
]

function FeaturedProducts({ onAddToCart, onOpenModal, onWhatsAppOrder }) {
  return (
    <section id="products" className="bg-[#fdf8ed] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d4a017]">Bestsellers</p>
          <h3 className="font-display mt-3 text-4xl text-[#0f4c0f] sm:text-5xl">Bestsellers of KBJ</h3>
          <p className="mt-4 text-lg text-[#1b1b1b]/75">Most loved by 5000+ women</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onOpenModal={onOpenModal}
              onWhatsAppOrder={onWhatsAppOrder}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
