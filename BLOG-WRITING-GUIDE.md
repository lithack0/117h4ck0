# LitHack Blog — Editing Guide

## Add a new article

1. Copy `blogs/_template.html`.
2. Rename it, for example `blogs/xss.html`.
3. Edit:
   - `<title>`
   - meta description
   - `.article-meta`
   - `<h1>`
   - `.article-subtitle`
   - everything inside `.article-content`
4. If you need images, create:
   `assets/images/xss/`
5. Add your article card to:
   - `index.html` (if it should appear on the homepage)
   - `blogs/index.html` (for the full archive)
6. Upload the whole folder.

## Useful article HTML

### Heading
<h2>Your heading</h2>

### Paragraph
<p>Your paragraph...</p>

### Inline code
<code>curl -I https://example.com</code>

### Code block
<div class="code-block">
  <button class="copy-code" type="button">COPY</button>
  <pre><code>your code here</code></pre>
</div>

### Image
<figure class="article-image">
  <img src="../assets/images/xss/diagram.webp" alt="Description">
  <figcaption>Short image caption.</figcaption>
</figure>

### Link
<a href="https://example.com" target="_blank" rel="noopener">Read more</a>

## Do not edit for normal blog writing

You normally do not need to change:
- `assets/css/style.css`
- `assets/css/article.css`
- `assets/js/main.js`
- `assets/js/article.js`

Those are shared by all pages.
