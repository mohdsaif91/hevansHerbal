import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import './App.css'
import { products } from './data/products.js'
import AboutPage from './pages/AboutPage.jsx'
import AccountPage from './pages/AccountPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

const cartStorageKey = 'matrix-wellness-cart'
const pageTitles = {
  '/': 'Home',
  '/about-us-01': 'About Us',
  '/shop-2': 'Shop',
  '/contact-us': 'Contact Us',
  '/cart-3': 'Cart',
  '/my-account': 'My Account',
  '/privacy-policy-2': 'Privacy Policy',
  '/terms-and-conditions': 'Terms and Conditions',
  '/refund_returns-2': 'Refund and Returns',
}

function readCart() {
  let savedCart
  try {
    savedCart = window.localStorage.getItem(cartStorageKey)
  } catch (error) {
    console.error('Unable to access the saved shopping cart.', error)
    return {}
  }
  if (!savedCart) return {}

  try {
    const parsedCart = JSON.parse(savedCart)
    if (!parsedCart || typeof parsedCart !== 'object' || Array.isArray(parsedCart)) {
      throw new Error('Saved cart must be an object.')
    }

    return Object.fromEntries(
      Object.entries(parsedCart).filter(([id, quantity]) =>
        products.some((product) => product.id === id) &&
        Number.isInteger(quantity) &&
        quantity > 0,
      ),
    )
  } catch (error) {
    console.error('Unable to read the saved shopping cart.', error)
    return {}
  }
}

function SiteHeader({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function handleSearch(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = String(formData.get('search') || '').trim()
    navigate({ pathname: '/shop-2/', search: query ? `?search=${encodeURIComponent(query)}` : '' })
  }

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Matrix Wellness home">
        <span>Matrix</span> <strong>Wellness</strong>
      </Link>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about-us-01/" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/shop-2/" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/contact-us/" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>
      <form className="header-search" onSubmit={handleSearch} role="search">
        <label className="sr-only" htmlFor="store-search">Search products</label>
        <input id="store-search" type="search" name="search" placeholder="Search products" />
        <button type="submit" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
        </button>
      </form>
      <Link className="header-icon cart-link" to="/cart-3/" aria-label={`Cart, ${cartCount} items`}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.5L21 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
        <span className="cart-count">{cartCount}</span>
      </Link>
      <Link className="header-icon account-link" to="/my-account/" aria-label="My account">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="4" /><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2z" /></svg>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="wordmark footer-wordmark" to="/">Matrix <strong>Wellness</strong></Link>
          <p>Thoughtful finds for your home and everyday rituals.</p>
        </div>
        <div className="footer-links">
          <div>
            <h2>Explore</h2>
            <Link to="/">Home</Link>
            <Link to="/about-us-01/">About Us</Link>
            <Link to="/shop-2/">Shop</Link>
          </div>
          <div>
            <h2>Customer service</h2>
            <Link to="/contact-us/">Contact Us</Link>
            <Link to="/privacy-policy-2/">Privacy Policy</Link>
            <Link to="/terms-and-conditions/">Terms and Conditions</Link>
            <Link to="/refund_returns-2/">Refund and Returns</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Matrix Wellness LLC</span>
        <Link to="/contact-us/">Questions? Get in touch</Link>
      </div>
    </footer>
  )
}

function App() {
  const [cart, setCart] = useState(readCart)
  const location = useLocation()

  useEffect(() => {
    try {
      window.localStorage.setItem(cartStorageKey, JSON.stringify(cart))
    } catch (error) {
      console.error('Unable to save the shopping cart in this browser.', error)
    }
  }, [cart])

  function addToCart(product, quantity = 1) {
    setCart((currentCart) => ({
      ...currentCart,
      [product.id]: (currentCart[product.id] || 0) + quantity,
    }))
  }

  function updateQuantity(productId, quantity) {
    setCart((currentCart) => {
      if (quantity < 1) {
        const nextCart = { ...currentCart }
        delete nextCart[productId]
        return nextCart
      }
      return { ...currentCart, [productId]: quantity }
    })
  }

  const cartItems = products
    .filter((product) => cart[product.id])
    .map((product) => ({ ...product, quantity: cart[product.id] }))
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  useEffect(() => {
    const productSlug = location.pathname.match(/^\/product\/([^/]+)/)?.[1]
    const currentProduct = products.find((product) => product.slug === productSlug)
    const currentPath = location.pathname.replace(/\/+$/, '') || '/'
    document.title = `${pageTitles[currentPath] || currentProduct?.name || 'Page not found'} | Matrix Wellness`
  }, [location.pathname])

  return (
    <div className="site-shell">
      <SiteHeader cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage products={products} onAdd={addToCart} />} />
        <Route path="/about-us-01" element={<AboutPage />} />
        <Route path="/shop-2" element={<ShopPage products={products} onAdd={addToCart} />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/cart-3" element={<CartPage items={cartItems} onUpdateQuantity={updateQuantity} />} />
        <Route path="/my-account" element={<AccountPage />} />
        <Route path="/privacy-policy-2" element={<LegalPage path="/privacy-policy-2" />} />
        <Route path="/terms-and-conditions" element={<LegalPage path="/terms-and-conditions" />} />
        <Route path="/refund_returns-2" element={<LegalPage path="/refund_returns-2" />} />
        <Route path="/product/:slug" element={<ProductRoute onAdd={addToCart} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

function ProductRoute({ onAdd }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  return product ? <ProductPage product={product} onAdd={onAdd} /> : <NotFoundPage />
}

export default App
