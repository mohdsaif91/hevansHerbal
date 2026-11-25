import { Link } from 'react-router-dom'
import { ProductArtwork } from '../components/ProductCard.jsx'

export default function ProductPage({ product, onAdd }) {
  return (
    <main>
      <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/shop-2/">Shop</Link><span>/</span><span>{product.name}</span></div>
      <section className="product-detail">
        {product.image != "" ?
          <img src={product.image} alt={product.name}
            style={{
              display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'
            }}
          />
          :
          <ProductArtwork product={product} />
        }
        <div className="product-detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>
          <button className="button button-dark" type="button" onClick={() => onAdd(product)}>Add to cart <span aria-hidden="true">+</span></button>
          <p className="detail-footnote">Product images and specifications were not available for this local recreation.</p>
        </div>
      </section>
    </main>
  )
}
