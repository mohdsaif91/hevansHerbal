import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main>
      <section className="page-banner">
        <p className="eyebrow">ABOUT HERBAL HEAVEN</p>
        <h1>Thoughtful finds.<br /><em>Helpful service.</em></h1>
        <p>We’re Herbal Heaven, a customer-focused business that has been delivering results since 2023.</p>
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
      <section className="about-story section">
        <div className="prose">
          <p className="eyebrow">MEET THE FOUNDER</p>
          <h2>Dattatray Maruti Pawar</h2>
          <p>Dattatray Maruti Pawar is the founder of Herbal Heaven. He holds an MBA in Marketing and previously worked as a marketing manager with a large corporation, where he gained deep experience in understanding customers and building lasting relationships.</p>
          <p>A deeply religious man, he brings the same faith, sincerity and care to Herbal Heaven, offering products and service that customers can trust.</p>
        </div>
      </section>
    </main>
  )
}
