# Mr. Simboy Explorer — Portfolio Case Study

A single-page, branded case-study website that presents your work as a
**YouTube Growth Strategist & Content Producer** for the channel
**Mr. Simboy Explorer** (creator: Deepanjal).

It's designed to be dropped straight into your portfolio — either as a
standalone page or linked as a "case study" from your main site.

---

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | All content & sections (the case study) |
| `styles.css` | Branded styling (red + yellow channel identity), fully responsive |
| `script.js`  | Animated stat counters, scroll reveal, sticky nav, mobile menu |

## Page structure (the portfolio narrative)

1. **Hero** — headline result + your role, with animated key stats
2. **01 · The Client** — the creator, the channel, the flagship series
3. **02 · My Role** — the 5 pillars you owned
4. **03 · The Brief** — the challenge you were hired to solve
5. **04 · Content Strategy** — franchise format + product-selection filter
6. **05 · Scriptwriting** — the 5-phase hook-to-verdict template (timeline)
7. **06 · Video Editing** — the retention-driven edit workflow
8. **07 · Monetization** — the earnings funnel + 4 revenue streams
9. **08 · Results** — outcome stats + viral wins
10. **09 · Toolkit** — tools & platforms
11. **Contact / CTA** — your call to action

---

## How to view it

No build step needed — it's plain HTML/CSS/JS.

- **Quick way:** open `index.html` in any browser.
- **Recommended (so animations/counters behave):** run a tiny local server:

```bash
# from this folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Make it yours — quick customization checklist

Search-and-replace these placeholders before publishing:

- [ ] `[Your Name]` — appears in the CTA and footer (`index.html`)
- [ ] `your.email@example.com` — the "Email me" link in the Contact section
- [ ] `View more work` link `href="#"` — point it at your main portfolio
- [ ] Page `<title>` and `<meta name="description">` — add your name for SEO

### Adjust the story to match your real contribution

This case study is written so it reads as a strong portfolio piece. **Edit any
section so it honestly reflects what you actually did.** For example:

- If you focused only on **editing**, expand section 06 and soften the others.
- If you led **strategy + scripts**, keep those front and center.
- Reframe "I built / I owned" to "I supported / I contributed to" where that's
  more accurate. Portfolios are strongest when the claims are true and specific.

### Update the numbers

All animated stats use two attributes — change them in `index.html`:

```html
<span class="stat__num" data-count="2.54" data-suffix="M">0</span>
```

- `data-count` — the target number (decimals are respected, e.g. `441.9`)
- `data-suffix` — text after the number (e.g. `M`, `K/mo`, `+`)

### Change the brand colors

Edit the variables at the top of `styles.css`:

```css
:root {
  --red: #e21b22;     /* primary brand red */
  --yellow: #ffd60a;  /* accent yellow */
  --ink: #14110f;     /* near-black text */
}
```

### Add real media (recommended)

To make it pop, drop in:
- A channel screenshot or your headshot in the hero
- Thumbnails of the viral videos in section 08
- A short showreel embed (YouTube `<iframe>`) near the editing section

---

## Deploy (free options)

- **GitHub Pages** — push these files to a repo, enable Pages on the `main` branch.
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, done.

---

## Note on data

Channel statistics referenced (subscribers, views, revenue ranges, viral video
counts) are based on the research brief you provided. Treat estimate ranges
(e.g. revenue) as approximate, and keep figures current if you publish this
publicly.
