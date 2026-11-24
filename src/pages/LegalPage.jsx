import { Link } from 'react-router-dom'

const policyContent = {
  '/privacy-policy-2': {
    title: <>Privacy <em>policy.</em></>,
    intro: 'Information about how customer data is handled should be confirmed with Matrix Wellness LLC.',
    note: 'Official privacy policy text was not available during this recreation. This page is a placeholder and should not be treated as the business’s published privacy notice.',
  },
  '/terms-and-conditions': {
    title: <>Terms and <em>conditions.</em></>,
    intro: 'Terms that apply to purchases and use of the store should be confirmed with Matrix Wellness LLC.',
    note: 'Official terms were not available during this recreation. Please confirm the current terms with the business before making a purchase.',
  },
  '/refund_returns-2': {
    title: <>Refunds and <em>returns.</em></>,
    intro: 'Please confirm current return and refund terms with Matrix Wellness LLC before ordering.',
    note: 'Official refund and returns policy text was not available during this recreation. No return window, eligibility, or refund conditions are represented here.',
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
        <div className="legal-notice">
          <span aria-hidden="true">i</span>
          <p>{content.note}</p>
        </div>
        <Link className="text-link" to="/contact-us/">Contact Matrix Wellness <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}
