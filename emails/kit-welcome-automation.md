# Kit welcome automation — Bonus Report delivery

Paste-ready for Kit. Merge tags are Kit's own; `{{ subscriber.first_name | default: "there" }}` falls back gracefully when the name is blank.

## How to set it up in Kit (5 min)

1. **Automate → Visual Automations → New automation → Start from scratch**
2. Trigger: **Joins a form → "Africa's AI Moment waitlist"** (form 9844601 / uid b8e92fea6b)
3. Action: **Send email → New email** — paste the subject and body below. Set *Send* to **immediately**.
4. Optional but recommended: add a second step **Wait 3 days → Send email** with Email 2 (below), and a **Tag → "waitlist"** step so you can email the whole list on launch day with one broadcast.
5. **Settings → Email → Sending address:** `hippolyte@africaaimoment.com` (verified). **Reply-to:** `hippolyte@africaaimoment.com` — replies from readers come to you personally (forwarded to Hotmail). `info@africaaimoment.com` is for speaking and bulk-order inquiries only. Kit will ask you to verify the domain: add the DKIM/SPF records it shows to Vercel DNS (send them to me — I'll add them). Until the domain is verified, send from a verified personal address; Kit's deliverability from an unverified custom domain is poor.
6. **Form success message** (Kit → the form → Settings → *Show a success message*): paste — *Thanks! Your report is on its way — check your inbox. Join the live discussion: https://chat.whatsapp.com/GawLZsQnhshFeIbWQz5TuD* (the site already shows its own message; this covers anyone who reaches the form via Kit's hosted page.)
7. Turn the automation **Live**, then sign up on africaaimoment.com with a fresh address and confirm the email arrives with a working PDF link.

The form's **country** value lands in a custom field. Create it once: **Grow → Subscribers → Custom fields → Add → `country`**. Kit silently drops the value if the field doesn't exist yet.

---

## Email 1 — sent immediately

**Subject:** Your report: Africa vs the G7 on AI (0.34 vs 0.72)
**Preview text:** The 13-page audit plus the 2026–2035 plan. Page 3 is the one people forward.

---

Hi {{ subscriber.first_name | default: "there" }},

Here's your copy of **Africa–G7 AI Preparedness Gap: 2026 Digital Divide Audit**.

**→ Download the report (PDF)**
https://africaaimoment.com/assets/Africa-G7-AI-Preparedness-Gap-2026.pdf

A quick orientation so you get the most out of it:

- **Page 3** is the country-by-country scorecard — 10 African economies against all 7 G7 nations. Sub-Saharan Africa averages 0.34 on the IMF AI Preparedness Index. The G7 averages 0.72. South Africa, our best performer, sits at 0.50 — still behind Italy, the *lowest* G7 country.
- **Pages 7–11** cover the five investment bottlenecks, country-by-country priorities, and the 2026–2035 investment sequence — what governments, founders, universities, and the diaspora can each do starting now.

Want to see where your own country stands? The interactive checker covers all 54 African countries:
https://africaaimoment.com/#readiness

**Join the live discussion.** Readers, founders, and policymakers are comparing notes in the Africa AI Moment WhatsApp community:
https://chat.whatsapp.com/GawLZsQnhshFeIbWQz5TuD

I wrote this audit while finishing my book, *Africa's AI Moment: From Consumers of Technology to Creators of the Future*, and the numbers changed how I framed the whole argument. This isn't just an AI gap. If nothing changes, it becomes an income gap — one that compounds every year.

The report is the diagnosis. The book is the plan.

**You're on the pre-order waitlist.** The moment Amazon and Tellwell open ordering this fall, you'll be the first to know — with launch-week pricing and an early look at the first chapters.

One favour: after you read page 3, forward this to one person who should see the numbers. A student deciding what to study. A founder. A policymaker. The gap closes faster when more people can see it.

Thank you for being here.

Hippolyte Asah
AI Leader · Entrepreneur · Author · Speaker
Founder, JobsAI · Host, The Smart Office Podcast
hippolyte@africaaimoment.com | africaaimoment.com

P.S. Ordering for a university, organization, or reading group? Reply to this email with "bulk" and the quantity — I'll send pricing directly.

---

## Email 2 — 3 days later (optional)

**Subject:** Italy beats every African country. Here's why that matters.
**Preview text:** One number from the report, and what it says about the next five years.

---

Hi {{ subscriber.first_name | default: "there" }},

One number from the report keeps coming up in replies, so I want to sit with it for a minute.

**Italy: 0.62.** It is the lowest-scoring G7 country on the IMF AI Preparedness Index. It is also ahead of every single African economy — South Africa, the continent's leader, is at 0.50.

That isn't a talent gap. On human capital, Africa's ten economies reach about 65% of the G7 level — the strongest of the four pillars. The gap is in what surrounds the talent: digital infrastructure at 47% of G7, regulatory capacity at 50%.

In other words: Africa is producing people faster than it is producing the systems those people need. That is exactly the kind of gap that turns into brain drain if it isn't closed — and exactly the kind of gap that can be closed, because it's built, not born.

The book is about how. Five pillars — Build, Use, Invest, Lead, Develop — and seventeen chapters on what each one looks like in education, health, agriculture, jobs, and government.

You'll hear from me the day pre-orders open. Until then, if the report has been useful, the best thing you can do is send it to one person in a position to act on it.

Hippolyte
africaaimoment.com

---

## Launch-day broadcast (draft, send to tag "waitlist" when the link exists)

**Subject:** It's live: Africa's AI Moment is available now

Hi {{ subscriber.first_name | default: "there" }},

Pre-orders are open. Paperback and ebook:

**→ {{PREORDER_LINK}}**

Launch-week pricing runs until {{DATE}}. Bulk pricing for universities and organizations — reply with "bulk".

Thank you for being on the list before there was a book to buy.

Hippolyte
