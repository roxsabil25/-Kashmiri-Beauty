function ProductCard({ product, onAddToCart, onOpenModal, onWhatsAppOrder }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#d4a017]/20 bg-white p-3 shadow-lg shadow-[#0f4c0f]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden rounded-[1.5rem]">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#d4a017] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0a0a0a]">
          {product.badge}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-[#d4a017]">★★★★★</div>
          <div className="text-xs font-medium text-[#0f4c0f]">{product.rating} ({product.reviews})</div>
        </div>

        <button type="button" onClick={() => onOpenModal(product)} className="mt-4 block text-left">
          <h4 className="font-display text-[1.6rem] leading-tight text-[#0f4c0f] transition group-hover:text-[#1a5a1a]">
            {product.name}
          </h4>
        </button>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl font-bold text-[#0f4c0f]">৳{product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-[#0a0a0a]/45 line-through">৳{product.oldPrice}</span>
          )}
        </div>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex-1 rounded-full bg-gradient-to-r from-[#0f4c0f] to-[#1a5a1a] px-4 py-3 text-sm font-semibold text-[#fdf8ed] shadow-lg shadow-[#0f4c0f]/20 transition hover:scale-[1.02]"
          >
            Add to Cart
          </button>
          <button
            type="button"
            onClick={() => onWhatsAppOrder(product)}
            className="rounded-full border border-[#d4a017]/60 bg-[#fffaf0] px-4 py-3 text-sm font-semibold text-[#0f4c0f] transition hover:scale-[1.02]"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
