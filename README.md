# africaaimoment.com — landing page

Static site, no build step. Upload the whole `website/` folder to any host
(Netlify Drop, Cloudflare Pages, GoDaddy, Vercel) and point africaaimoment.com at it.
Redirect africaaimoment.africa → africaaimoment.com at your registrar.

## Before going live — find-and-replace in `index.html` / `thank-you.html`

| What | Where |
|---|---|
| Amazon / Tellwell pre-order link | every `href="https://www.amazon.com/"` (hero button + final CTA + thank-you page) |
| Author photo | drop your blue-blazer photo at `assets/hippolyte.jpg` (square crop, ≥600px) |
| Bonus Report PDF (manuscript pp. 213–219) | `assets/Africa-G7-AI-Preparedness-Gap-2026.pdf` |
| Email capture | replace the `<form>` in the "Free Bonus Report" card with your ConvertKit / Mailchimp embed, or set its `action` to their endpoint and redirect to `thank-you.html` |
| Podcast link | footer `The Smart Office Podcast` `href="#"` |
| Praise section | swap the two placeholder blurbs for real ones — or delete the section until you have two |
| Launch date | badge on the cover says `Fall 2026` |
| Price | `$27.99` appears in the hero button and on the thank-you page |

## Email sequence (set up in ConvertKit/Mailchimp)

1. **Instant** — "Your report is inside" + PDF attachment/link, one-line ask to reply with the country they care about most.
2. **Day 3** — the South Africa vs Italy stat, one paragraph, link to pre-order.
3. **Launch day** — "It's live" + bulk-order line for universities.
