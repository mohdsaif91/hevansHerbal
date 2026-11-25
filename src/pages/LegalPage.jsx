import { Link } from 'react-router-dom'

const policyContent = {
  '/privacy-policy-2': {
    title: <>Privacy <em>policy.</em></>,
    intro: 'We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or purchase our products.',
    sections: [
      ['1. Information We Collect', 'We may collect your name, email address, billing/shipping address, payment details (processed securely by our payment provider), and browsing data.'],
      ['2. How We Use Your Data', 'To process orders, deliver products, provide customer support, send service updates, and comply with legal obligations.'],
      ['3. Sharing Your Data', 'We share data only with trusted service providers (payment gateways, shipping companies) who comply with security standards.'],
      ['4. Data Protection', 'We use encryption, firewalls, and PCI DSS-compliant processors to safeguard data.'],
      ['5. Your Rights', 'Depending on your location, you may have rights under PIPEDA, CCPA, or GDPR to access, correct, delete, or restrict processing of your data.'],
      ['6. Contact Us', 'For questions or data requests, contact Matrix Wellness LLC, 601 Laurel Wood Circle, Winchester, Virginia 22601, dattapawar@myyahoo.com.'],
    ],
  },
  '/terms-and-conditions': {
    title: <>Terms and <em>conditions.</em></>,
    intro: 'Terms that apply to purchases and use of the store should be confirmed with Matrix Wellness LLC.',
    note: 'Official terms were not available during this recreation. Please confirm the current terms with the business before making a purchase.',
  },
  '/refund_returns-2': {
    title: <>Refunds and <em>returns.</em></>,
    intro: 'We want you to be satisfied with your purchase. This Refund Policy outlines the terms for refunds and returns.',
    sections: [
      ['1. Returns', 'Products may be returned within 30 days of delivery if unused and in original packaging.'],
      ['2. Refunds', 'Refunds will be issued to the original payment method within 30 days after approval of return.'],
      ['3. Non-Refundable Items', 'Certain items (e.g., digital products, perishable goods) may not be eligible for return/refund.'],
      ['4. Shipping Costs', 'Customers are responsible for return shipping unless the product was defective or incorrect.'],
      ['5. Contact Us', 'To request a return/refund, email dattapawar@myyahoo.com.'],
    ],
  },
}

export default function LegalPage({ path }) {
  const content = policyContent[path]

  return (
    <main>
      <section className="page-banner compact-banner">
        <p className="eyebrow">CUSTOMER INFORMATION</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </section>
      <section className="section legal-section">
        {content.note && (
          <div className="legal-notice">
            <span aria-hidden="true">i</span>
            <p>{content.note}</p>
          </div>
        )}
        {content.sections?.map(([heading, text]) => (
          <div key={heading} className="legal-block">
            <h2>{heading}</h2>
            <p>{text}</p>
          </div>
        ))}
        <Link className="text-link" to="/contact-us/">Contact Herbal heaven <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}
