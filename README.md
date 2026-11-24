# Matrix Wellness storefront

A React, React Router, and Vite recreation of the Matrix Wellness storefront. The site uses client-side routes, reusable page components in `src/pages`, product data in `src/data/products.json`, and shared responsive styles in `src/App.css`.

## Run locally

```sh
npm install
npm run dev
```

Run `npm run lint` and `npm run build` to validate the app.

## Pages

- `/` — Home
- `/about-us-01/` — About Us
- `/shop-2/` — Shop and product search
- `/product/:slug/` — Product details
- `/contact-us/` — Contact
- `/cart-3/` — Shopping cart
- `/my-account/` — Account information
- `/privacy-policy-2/` — Privacy policy placeholder
- `/terms-and-conditions/` — Terms placeholder
- `/refund_returns-2/` — Refunds and returns placeholder

The cart is stored in the browser's local storage. Checkout, account services, and contact submissions are not connected to a backend. Product artwork is illustrative; replace it with verified product images before publishing. Official legal policy text was not available during this recreation and should be added by the business.
