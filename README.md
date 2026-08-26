# africaaimoment.com — landing page

Static site, no build step. Hosted on **Vercel** (auto-deploys from `main`); `vercel.json` handles
www/.africa → africaaimoment.com redirects, clean URLs (`/thank-you`) and caching.
`.htaccess` is kept only for cPanel-style hosts and is ignored by Vercel.

## Before going live — find-and-replace in `index.html` / `thank-you.html`

| What | Where |
|---|---|
| Amazon / Tellwell pre-order link | not yet live: all pre-order buttons say "Join Waitlist" and point to `#signup`. When the link arrives, change the hero button, final CTA, sticky mobile bar, explorer CTA, and the thank-you upsell |
| Author photo | drop your blue-blazer photo at `assets/hippolyte.jpg` (square crop, ≥600px) |
| Bonus Report PDF | already built at `assets/Africa-G7-AI-Preparedness-Gap-2026.pdf`; edit `report/bonus-report.html` and re-render to change |
| Email capture | **Connected to Kit** form 9844601 (uid `b8e92fea6b`). The page POSTs `email_address`, `first_name`, `fields[country]` to `https://app.kit.com/forms/9844601/subscriptions`. Welcome automation copy: `emails/kit-welcome-automation.md` |
| Praise section | swap the two placeholder blurbs for real ones — or delete the section until you have two |
| Launch date | badge on the cover says `Fall 2026` |
| Explorer data | `assets/ai-data.js` — Oxford Insights Government AI Readiness Index 2025 (six pillars ÷100, official rank) + 2024 rank for trend; sources in the file header. Replace with the final audit; keep field names |

## Email sequence (set up in ConvertKit/Mailchimp)

1. **Instant** — "Your report is inside" + PDF attachment/link, one-line ask to reply with the country they care about most.
2. **Day 3** — the South Africa vs Italy stat, one paragraph, link to pre-order.
3. **Launch day** — "It's live" + bulk-order line for universities.

## Updating the explorer data
After editing `assets/ai-data.js`, bump the `?v=` query string on its `<script>` tag in `index.html` (any new value) so browsers fetch the new file.
