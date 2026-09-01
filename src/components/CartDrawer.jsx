function CartDrawer({ cartItems, isOpen, onClose, onWhatsAppCheckout }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-[#0a0a0a]/45 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#fdf8ed] shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#d4a017]/20 px-5 py-4">
          <h3 className="font-display text-3xl text-[#0f4c0f]">Your Cart</h3>
          <button type="button" onClick={onClose} className="text-xl text-[#0f4c0f]">✕</button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="rounded-[1.5rem] border border-dashed border-[#0f4c0f]/25 bg-white p-6 text-center text-[#0f4c0f]">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-[1.5rem] border border-[#d4a017]/20 bg-white p-3 shadow-sm">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#0f4c0f]">{item.name}</h4>
                    <p className="mt-1 text-xs text-[#0a0a0a]/60">Qty: {item.quantity}</p>
                  </div>
                  <div className="mt-2 text-base font-bold text-[#0f4c0f]">৳{item.price * item.quantity}</div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-[#d4a017]/20 bg-white p-5">
          <div className="mb-4 flex items-center justify-between text-lg font-semibold text-[#0f4c0f]">
            <span>Total</span>
            <span>৳{subtotal}</span>
          </div>
          <button
            type="button"
            onClick={onWhatsAppCheckout}
            className="w-full rounded-full bg-gradient-to-r from-[#0f4c0f] to-[#1a5a1a] px-5 py-3 text-sm font-semibold text-[#fdf8ed] shadow-lg shadow-[#0f4c0f]/25 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={cartItems.length === 0}
          >
            WhatsApp Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
