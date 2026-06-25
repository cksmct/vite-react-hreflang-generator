# 🌍 Vite/React Hreflang Generator for SEO

A lightweight Node.js post-build script for React Single Page Applications (SPAs). It takes your compiled `dist/index.html` and automatically generates physical sub-directories with dynamically injected `<link rel="alternate" hreflang="...">` tags for seamless global SEO indexing—**no SSR or backend required.**

## 🏆 Live Production Example

We developed this script to solve the international SEO challenges for our hardcore football draft game, the **[7-0 World Cup Simulator](https://7-0worldcup.org)**.

Because the game is purely client-side React logic dealing with RNG match simulations, we didn't want the overhead of Next.js or a Node backend. By running this script as a post-build step, **[7-0worldcup.org](https://7-0worldcup.org)** instantly generated fully SEO-compliant static entry points for 13 different languages. This allowed global football fans to discover our localized gameplay directly from Google search results.

## 🛠️ How to use

1. Add this script to your project root.
2. Update the `siteUrl` variable in `generate_i18n_pages.js` with your production domain.
3. Build your React/Vite app as usual (`npm run build`).
4. Run the post-build script:
   ```bash
   node generate_i18n_pages.js
5. Deploy your dist folder to your static host (Vercel, Netlify, Cloudflare Pages, etc.).
💡 Why not use React Helmet?
React Helmet injects metadata dynamically after the JavaScript bundle loads on the client. While Googlebot can execute JavaScript, relying on client-side rendering for critical hreflang tags is notoriously unreliable and slow to index. This script ensures your multi-language routes are hardcoded in the static HTML for immediate crawler discovery.

License
MIT
