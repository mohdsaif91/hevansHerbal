import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'

export default function ShopPage({ products, onAdd }) {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const search = searchParams.get('search') || ''
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`.toLowerCase().includes(search.toLowerCase()),
  )

  function handleSearch(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = String(formData.get('search') || '').trim()
    navigate({ pathname: '/shop-2/', search: query ? `?search=${encodeURIComponent(query)}` : '' })
  }

  return (
    <main>
      <section className="page-banner shop-banner">
        <p className="eyebrow">THE MATRIX COLLECTION</p>
        <h1>Shop our <em>collection.</em></h1>
        <p>Explore devotional pieces and thoughtful accents for your home.</p>
      </section>
      <section className="section shop-section">
        <div className="shop-toolbar">
          <p>{search ? `${filteredProducts.length} results for “${search}”` : `${filteredProducts.length} products`}</p>
          <form onSubmit={handleSearch} role="search">
            <label className="sr-only" htmlFor="shop-search">Search products</label>
            <input id="shop-search" type="search" name="search" defaultValue={search} placeholder="Search products" />
            <button type="submit">Search</button>
          </form>
        </div>
        {filteredProducts.length ? (
          <div className="product-grid">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
          </div>
        ) : (
          <div className="empty-search">
            <h2>No products found</h2>
            <p>Try another search or browse the full collection.</p>
            <Link className="button button-dark" to="/shop-2/">View all products</Link>
          </div>
        )}
      </section>
    </main>
  )
}
