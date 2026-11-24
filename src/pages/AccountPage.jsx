import { Link } from 'react-router-dom'

export default function AccountPage() {
  return (
    <main>
      <section className="page-banner compact-banner">
        <p className="eyebrow">MATRIX WELLNESS</p>
        <h1>Your <em>account.</em></h1>
      </section>
      <section className="section account-section">
        <div className="account-card">
          <span className="account-mark" aria-hidden="true">◎</span>
          <h2>Account services</h2>
          <p>Sign-in and account features are not connected in this local website recreation.</p>
          <Link className="button button-dark" to="/shop-2/">Continue shopping <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  )
}
