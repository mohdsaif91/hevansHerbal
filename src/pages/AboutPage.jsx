import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main>
      <section className="page-banner">
        <p className="eyebrow">ABOUT MATRIX WELLNESS</p>
        <h1>Thoughtful finds.<br /><em>Helpful service.</em></h1>
        <p>We’re Matrix Service Enterprises, a customer-focused business that has been delivering results since 2023.</p>
      </section>
      <section className="about-story section">
        <div className="about-story-art"><span>Since</span><strong>2023</strong><i>✳</i></div>
        <div className="prose">
          <p className="eyebrow">OUR STORY</p>
          <h2>Making your experience matter.</h2>
          <p>Our goal is to provide a superior customer experience and tremendous value for our customers. We believe a good shopping experience starts with listening and making it easy to find what you need.</p>
          <p>Explore the collection or get in touch if you have a question. We’re glad you’re here.</p>
          <Link className="button button-dark" to="/shop-2/">Browse the shop <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  )
}
