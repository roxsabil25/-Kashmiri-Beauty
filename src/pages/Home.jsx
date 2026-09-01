import { useMemo, useState } from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import FeaturedProducts from '../components/FeaturedProducts'
import IngredientsStory from '../components/IngredientsStory'
import WhyKBJ from '../components/WhyKBJ'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import CartDrawer from '../components/CartDrawer'
import ProductModal from '../components/ProductModal'

const productCatalog = [
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

function Home() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toast, setToast] = useState('')

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const handleAddToCart = (product) => {
    const normalizedProduct = { ...product, quantity: 1 }
    setCartItems((items) => {
      const existing = items.find((item) => item.id === normalizedProduct.id)
      if (existing) {
        return items.map((item) =>
          item.id === normalizedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...items, normalizedProduct]
    })
    setToast(`${product.name} added to cart`)
    setIsCartOpen(true)
    setTimeout(() => setToast(''), 1800)
  }

  const openWhatsAppOrder = (product) => {
    const message = encodeURIComponent(
      `I want to order ${product.name}`,
    )
    window.open(`https://wa.me/8801757268235?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const openModal = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(false)
  }

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return
    const itemsText = cartItems
      .map((item) => `${item.name} x${item.quantity}`)
      .join(', ')
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const message = encodeURIComponent(
      `I want to order: ${itemsText}. Total: ৳${total}`,
    )
    window.open(`https://wa.me/8801757268235?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="top" className="bg-[#fdf8ed] text-[#0a0a0a]">
      <Header cartCount={cartCount} onOpenCart={openCart} />
      <Hero onViewCollection={scrollToProducts} onWhatsAppOrder={openWhatsAppOrder} />
      <TrustBadges />
      <FeaturedProducts
        onAddToCart={handleAddToCart}
        onOpenModal={openModal}
        onWhatsAppOrder={openWhatsAppOrder}
      />
      <div id="story">
        <IngredientsStory />
      </div>
      <WhyKBJ />
      <Testimonials />
      <Gallery />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <CartDrawer
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={closeCart}
        onWhatsAppCheckout={handleWhatsAppCheckout}
      />
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddToCart={handleAddToCart}
        onWhatsAppOrder={openWhatsAppOrder}
      />

      {toast && (
        <div className="fixed bottom-24 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-[#0f4c0f] px-5 py-2 text-sm font-medium text-[#fdf8ed] shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}

export default Home
