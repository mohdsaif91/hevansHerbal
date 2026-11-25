import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'

export default function HomePage({ products, onAdd }) {
  const featuredProducts = [
    'radha-krishna',
    'durga-maa',
    'hanuman',
    'tirupati-balaji',
    'kamdhenu-cow',
    'shiva-puja-kit',
  ]

  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="hero-kicker">Herbal heaven</p>
          <h1>Flat 25% off for grocery order</h1>
          <p className="hero-description">
            Herbal heaven has been delivering results since we opened in 2023.
            Our goal is to provide both a superior customer experience and tremendous value
            for our customers.
          </p>
          <Link className="button button-dark" to="/shop-2/">Shop our collection <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-still-life" role="img" aria-label="A trio of colorful botanical body mists">
          <div className="mist-bottle mist-one"><span>BOTANICAL<br />BODY MIST</span></div>
          <div className="mist-bottle mist-two"><span>BOTANICAL<br />BODY MIST</span></div>
          <div className="mist-bottle mist-three"><span>BOTANICAL<br />BODY MIST</span></div>
          <span className="hero-sparkle sparkle-a">✳</span>
          <span className="hero-sparkle sparkle-b">✦</span>
        </div>
      </section>

      <section className="store-promise">
        <span>Thoughtful finds</span><i />
        <span>Everyday value</span><i />
        <span>Personal service</span>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW CUSTOMER FAVORITES</p>
            <h2>Find something meaningful.</h2>
          </div>
          <Link className="text-link" to="/shop-2/">Shop all products <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((id) => {
            const product = products.find((item) => item.id === id)
            return product ? <ProductCard key={product.id} product={product} onAdd={onAdd} /> : null
          })}
        </div>
      </section>

      <section className="about-teaser">
        <div className="about-seal"><span>MW</span><i>✳</i></div>
        <div>
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>Good finds. A more thoughtful way to shop.</h2>
          <p>Herbal heaven has been serving customers since 2023, with a focus on a helpful experience and everyday value.</p>
          <Link className="text-link" to="/about-us-01/">Get to know us <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  )
}
