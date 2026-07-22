# João Pedro Domingues — Portfolio Site

A static site (plain HTML/CSS/JS, no build step) built to host on **GitHub Pages** for free.

## What's here
```
index.html      → the whole site (single page, sections linked by nav)
styles.css       → all styling
script.js        → mobile nav + case-study accordions
resume/          → downloadable PDF résumé (linked from the nav and footer)
```

## Deploy it in 5 minutes (GitHub Pages)

1. **Create a new repository** on GitHub.
   - If you want the URL `https://<your-username>.github.io` (no extra path), name the repo exactly `<your-username>.github.io`.
   - Otherwise any repo name works — your site will live at `https://<your-username>.github.io/<repo-name>/`.
2. **Upload these files** to the repo — either drag-and-drop them in the GitHub web UI ("Add file → Upload files"), or if you're comfortable with git:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. Wait ~1 minute, then visit the URL GitHub shows you on that same Pages settings screen.

That link is what you put in your LinkedIn "Featured" section, your CV header, and in job applications.

## Before you share the link — checklist

- [ ] Replace the **five placeholder outcomes** (marked in amber italics, one per course project) with real results once you've rebuilt those projects. Search `case-grid` in `index.html` — each placeholder is a `<dd class="placeholder">`.
- [ ] Swap `resume/Joao_Pedro_Domingues_CV.pdf` for your latest résumé if it changes (keep the filename, or update the two links in `index.html` that point to it).
- [ ] Double-check the LinkedIn and phone links in the contact section still match your current details.
- [ ] Optional: add a custom domain later via Settings → Pages → Custom domain, if you buy one.

## Editing later

Every section is commented and grouped in `index.html` (`<!-- ===== PROJECTS ===== -->` etc.) — you can edit text directly without touching the CSS. Each project case study is one `<article class="project-card">` block; copy one to add a new project.
