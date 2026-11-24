import { Link } from 'react-router-dom'

export function ProductArtwork({ product, compact = false }) {
  return (
    <div className={`product-art art-${product.art}${compact ? ' compact' : ''}`} aria-hidden="true">
      <span className="art-halo" />
      <span className="art-symbol">{product.symbol}</span>
      <span className="art-sheen" />
    </div>
  )
}

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/product/${product.slug}/`} aria-label={`View ${product.name}`}>
        <ProductArtwork product={product} />
      </Link>
      <div className="product-card-info">
        <span className="product-category">{product.category}</span>
        <h3><Link to={`/product/${product.slug}/`}>{product.name}</Link></h3>
        <div className="product-card-bottom">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button type="button" className="add-button" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>
            Add to cart <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  )
}
