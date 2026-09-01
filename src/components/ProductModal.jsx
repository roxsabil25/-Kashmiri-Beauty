function ProductModal({ product, isOpen, onClose, onAddToCart, onWhatsAppOrder }) {
  if (!product || !isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0a0a0a]/65 p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[#fdf8ed] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0a0a0a]/70 text-lg text-[#fdf8ed]"
        >
          ✕
        </button>

        <div className="grid gap-0 lg:grid-cols-2">
          <div className="bg-[#f3ead1] p-4">
            <img src={product.image} alt={product.name} className="h-full min-h-[340px] w-full rounded-[1.5rem] object-cover" />
          </div>

          <div className="p-7 sm:p-8">
            <span className="inline-block rounded-full bg-[#d4a017] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a]">
              {product.badge}
            </span>
            <h3 className="font-display mt-5 text-4xl text-[#0f4c0f]">{product.name}</h3>
            <div className="mt-4 text-[#d4a017]">★★★★★</div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl font-bold text-[#0f4c0f]">৳{product.price}</span>
              {product.oldPrice && <span className="text-base text-[#0a0a0a]/45 line-through">৳{product.oldPrice}</span>}
            </div>
            <p className="mt-6 text-base leading-8 text-[#1b1b1b]/75">
              A premium skincare ritual infused with saffron and natural botanicals for brighter, softer, and more radiant skin.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="flex-1 rounded-full bg-gradient-to-r from-[#0f4c0f] to-[#1a5a1a] px-5 py-3 text-sm font-semibold text-[#fdf8ed] shadow-lg shadow-[#0f4c0f]/20"
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={() => onWhatsAppOrder(product)}
                className="rounded-full border border-[#d4a017]/60 bg-[#fffaf0] px-5 py-3 text-sm font-semibold text-[#0f4c0f]"
              >
                WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
