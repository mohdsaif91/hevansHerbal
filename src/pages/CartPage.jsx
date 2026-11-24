import { Link } from 'react-router-dom'

function formatPrice(price) {
  return `$${price.toFixed(2)}`
}

export default function CartPage({ items, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main>
      <section className="page-banner compact-banner">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping <em>cart.</em></h1>
      </section>
      <section className="section cart-section">
        {!items.length ? (
          <div className="empty-cart">
            <div className="empty-cart-mark" aria-hidden="true">✳</div>
            <h2>Your cart is waiting for something good.</h2>
            <p>Browse the collection and add an item to get started.</p>
            <Link className="button button-dark" to="/shop-2/">Continue shopping <span aria-hidden="true">↗</span></Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <Link className="cart-thumb" to={`/product/${item.slug}/`}><span aria-hidden="true">{item.symbol}</span></Link>
                  <div className="cart-item-detail">
                    <Link to={`/product/${item.slug}/`}>{item.name}</Link>
                    <span>{formatPrice(item.price)}</span>
                    <button className="remove-link" type="button" onClick={() => onUpdateQuantity(item.id, 0)}>Remove</button>
                  </div>
                  <label className="quantity-control">
                    <span className="sr-only">Quantity for {item.name}</span>
                    <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}>−</button>
                    <input type="number" min="1" max="99" value={item.quantity} onChange={(event) => onUpdateQuantity(item.id, Math.min(99, Math.max(1, Number(event.target.value) || 1)))} />
                    <button type="button" onClick={() => onUpdateQuantity(item.id, Math.min(99, item.quantity + 1))} aria-label={`Increase ${item.name} quantity`}>+</button>
                  </label>
                  <strong className="cart-line-total">{formatPrice(item.price * item.quantity)}</strong>
                </article>
              ))}
            </div>
            <aside className="cart-summary">
              <h2>Order summary</h2>
              <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
              <p>Shipping and taxes are calculated at checkout.</p>
              <button type="button" className="button button-dark checkout-button" disabled>Checkout unavailable in demo</button>
              <Link className="text-link" to="/shop-2/">Continue shopping</Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  )
}
