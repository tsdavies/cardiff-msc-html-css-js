# Cardiff MSc Web Portfolio — Computational Thinking (HTML · CSS · JS)

A clean, static website built for ***Computational Thinking** (Cardiff University, MSc, 2025).  
It’s presented as a **portfolio piece** to demonstrate:

- practical front-end skills (semantic HTML, modular CSS, vanilla JS)
- application of **computational thinking** (decomposition, abstraction, pattern recognition, algorithmic design)
- **AI literacy** via a structured biography exercise (prompting, critique, and fact-checking)
- attention to accessibility, performance, and developer hygiene

**Live site:** https://tsdavies.github.io/cardiff-msc-html-css-js/  
**Repo:** https://github.com/tsdavies/cardiff-msc-html-css-js

---

## Why this exists

This site is intentionally simple and dependency-free so the focus stays on fundamentals.  
It acts as a **public, self-owned record of capability**:

1. **Decompose → Design → Implement** — break the brief into pages and stylesheets, model navigation, and ship a responsive layout.  
2. **Demonstrate HTML/CSS proficiency** — clear structure, semantic tags, readable CSS organisation.  
3. **Show AI competency** — generate and **critically evaluate** a biography of a computer scientist, including prompt transparency and fact-checking.  
4. **Reflect** — connect module learning to future study and work.

---

## What’s inside

### Pages
- **`index.html` — Computational Thinking**  
  Overview of CT with references to Palts & Pedaste (2020) and a discussion of how the module addresses 10 CT skills.

- **`biography.html` — GenAI Competency**  
  Presents the **prompt**, the **generated biography** (three paragraphs: facts, achievements, relevance), and a **critical review** (coherence, quality, fact-checks, source reliability).

- **`reflection.html` — Learning Reflection**  
  A concise reflection on what was learned, what could go deeper, and how this shapes future modules and career focus.

- **`references.html` — Sources**  
  Properly cited materials, including the CT paper and ALS/other resources.

- **`testing.html` — Experiments (optional)**  
  Small HTML/CSS/JS sandboxes used during development.

### Styles & assets

\`\`\`
css/
  article.css          # content layout & article typography
  fonts-and-text.css   # font stack (Google Questrial), sizes, rhythm
  media-queries.css    # responsive rules
  nav.css              # navigation styles
  style.css            # shared base styles
images/                # figures & diagrams (e.g., CT model)
scripts/               # progressive enhancements (kept minimal)
\`\`\`

---

## How to view

**Open directly:** double-click `index.html`  
**Or serve locally** (fonts/CORS friendly):

```bash
# Python 3
python3 -m http.server 8000

# or Node (if installed)
npx serve .

# then visit
http://localhost:8000
```

Deployed via **GitHub Pages** (Settings → Pages → *Deploy from a branch*, `main` / `(root)`).

---

## Learning outcomes

1) **Decompose problems & apply CT**  
   - Page structure mirrors CT stages; content explains and evaluates the 10 skills.  
   - Site architecture (pages, partial styles) shows decomposition and reuse.

2) **Complete fundamental programming tasks**  
   - Pure **HTML + CSS** with small, documented JS hooks (no frameworks).  
   - Responsive layout, appropriate landmarks, and accessible navigation.

3) **Use software development best practices**  
   - Semantic tags, focused stylesheets, relative URLs, case-correct file paths.  
   - Repo hygiene (no build step required; static-host ready; Pages deployment).

4) **Reflect on learning**  
   - Dedicated **Reflection** page connecting module content to next steps.

**GenAI competency (biography page)**  
- Transparent prompt, structured output, critique of style and coherence.  
- **Three fact-checks** with sources and reliability discussion.

---

## Quality checklist

- **Accessibility**: keyboard navigation, sensible headings, `alt` text, readable contrast.  
- **Performance**: no runtime framework; `preconnect` to Google Fonts; minimal CSS overhead.  
- **Validation**:  
  - HTML: https://validator.w3.org/  
  - CSS:  https://jigsaw.w3.org/css-validator/  
  - Lighthouse: Performance / Accessibility / Best Practices / SEO.

*(This repo is framework-free; no build or test runner required.)*

---

## Attribution

- **Typeface:** Questrial (Google Fonts).  
- **CT reference:** Palts, T., & Pedaste, M. (2020). *A model for developing computational thinking skills*. *Informatics in Education*, 19(1), 113–128.  
- Content © 2024–2025 Tammy Davies. Educational portfolio use.
