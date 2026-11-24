import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="page-banner">
        <p className="eyebrow">WE’RE HERE TO HELP</p>
        <h1>Get in <em>touch.</em></h1>
        <p>Have a question about the collection? Send us a note and we’ll be happy to help.</p>
      </section>
      <section className="section contact-section">
        <div className="contact-intro">
          <p className="eyebrow">CONTACT MATRIX WELLNESS</p>
          <h2>What can we help you find?</h2>
          <p>Use the form to share a question about an item or your shopping experience.</p>
          <p className="notice">This demonstration form is not connected to the business and does not send your message.</p>
        </div>
        {submitted ? (
          <div className="form-success" role="status">
            <span>Thank you for your message.</span>
            <p>This demo form does not transmit submissions. Please use the business’s verified contact details for a real inquiry.</p>
            <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Send another message ↗</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your name<input name="name" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            <label>Subject<input name="subject" required /></label>
            <label>Your message<textarea name="message" rows="5" required /></label>
            <button className="button button-dark" type="submit">Send message <span aria-hidden="true">↗</span></button>
            <p className="form-footnote">Demo only — your information is not sent or stored.</p>
          </form>
        )}
      </section>
    </main>
  )
}
