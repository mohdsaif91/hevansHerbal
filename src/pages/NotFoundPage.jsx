import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>Let’s find your way <em>back.</em></h1>
      <p>The page you’re looking for isn’t available here.</p>
      <Link className="button button-dark" to="/">Back to home <span aria-hidden="true">↗</span></Link>
    </main>
  )
}
