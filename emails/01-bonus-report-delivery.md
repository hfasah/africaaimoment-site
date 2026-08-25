# Email 1 — Bonus Report delivery (sent instantly on signup)

**From:** Hippolyte Asah <hippolyte@africaaimoment.com>
**Subject:** Your report: Africa vs the G7 on AI (0.34 vs 0.72)
**Preview text:** The 13-page audit plus the 2026–2035 plan. Page 3 is the one people forward.

---

Hi {{first_name | default: "there"}},

Here's your copy of **Africa–G7 AI Preparedness Gap: 2026 Digital Divide Audit**.

**→ Download the report (PDF)**
https://africaaimoment.com/assets/Africa-G7-AI-Preparedness-Gap-2026.pdf

A quick orientation so you get the most out of it:

- **Page 3** is the country-by-country scorecard — 10 African economies against all 7 G7 nations. Sub-Saharan Africa averages 0.34 on the IMF AI Preparedness Index. The G7 averages 0.72. South Africa, our best performer, sits at 0.50 — still behind Italy, the *lowest* G7 country.
- **Pages 7–11** cover the five investment bottlenecks, country-by-country priorities, and the 2026–2035 investment sequence — what governments, founders, universities, and the diaspora can each do starting now.

I wrote this audit while finishing my book, *Africa's AI Moment: From Consumers of Technology to Creators of the Future*, and the numbers changed how I framed the whole argument. This isn't just an AI gap. If nothing changes, it becomes an income gap — one that compounds every year.

The report is the diagnosis. The book is the plan.

**You're on the pre-order waitlist.** The moment Amazon and Tellwell open ordering this fall, you'll be the first to know — with launch-week pricing.

{{preorder_link — add the Amazon/Tellwell link here once live}}

You're now on the launch list, which means you'll get launch-week pricing and an early look at the first chapters before the paperback ships this fall. I'll email a handful of times before then — never more than that.

One favour: after you read page 3, forward this to one person who should see the numbers. A student deciding what to study. A founder. A policymaker. The gap closes faster when more people can see it.

Thank you for being here.

Hippolyte Asah
AI Leader · Entrepreneur · Author · Speaker
Founder, JobsAI · Host, The Smart Office Podcast
hippolyte@africaaimoment.com | africaaimoment.com

---

P.S. Ordering for a university, organization, or reading group? Reply to this email with "bulk" and the quantity — I'll send pricing directly.

---

*You're receiving this because you requested the Bonus Report at africaaimoment.com. {{unsubscribe_link}}*

---

## Setup notes (not part of the email)

- **Merge tags:** ConvertKit uses `{{ subscriber.first_name }}`; Mailchimp uses `*|FNAME|*`. Swap the `{{first_name}}` placeholder to match. Same for the unsubscribe tag (`{{ unsubscribe_url }}` / `*|UNSUB|*`).
- **The PDF is built** at `assets/Africa-G7-AI-Preparedness-Gap-2026.pdf` (source: `report/bonus-report.html`, rendered with Playwright) — it uploads with the site. Prefer a link over an attachment: better deliverability, and you can update the file without re-sending.
- **Trigger:** "Subscriber joins form: Bonus Report" → send immediately.
- **Sender reputation:** send from `hippolyte@africaaimoment.com`, and add the SPF/DKIM records ConvertKit/Mailchimp gives you in cPanel → **Zone Editor**. Without them, this lands in spam.
- **Test it:** sign up yourself with a Gmail and a Hotmail address and confirm the PDF link opens on a phone.
- Email 2 (day 3) and Email 3 (launch day) outlines are in `README.md`.
