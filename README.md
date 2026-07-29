# Work Showcase Site

A simple static site that links out to your YouTube guides, podcast episodes,
and published writing — with search and tag filtering. No build step, no
database, free to host.

## Files

- `index.html` — page structure
- `styles.css` — all styling
- `data.js` — **your content lives here.** Edit this file to add real entries.
- `script.js` — search/filter logic (you shouldn't need to touch this)

## Adding your real content

Open `data.js`. It's a plain array of objects. Each item looks like this:

```js
{
  type: "youtube",              // "youtube" | "podcast" | "writing" | "press" | "newsletter"
  title: "My Video Title",
  url: "https://youtube.com/watch?v=...",
  description: "One or two sentences about it.",
  tags: ["tutorial", "beginner"],
  date: "2026-05-02"
}
```

To add a new entry, copy one of the existing objects, paste it into the
`ITEMS` array, and fill in your real title, link, description, tags, and
date. Delete the placeholder entries once you've replaced them with your own.

Tags are freeform — use whatever words make sense for your content
(topic, series name, skill level, etc.). They automatically show up in the
tag filter row and are searchable.

Also update `SOCIAL_LINKS` near the top of `data.js` (`youtube`, `podcast`,
`linkedin`, `newsletter`) to point to your real channel, podcast, LinkedIn,
and newsletter homepage — these drive both the header links and the side
menu icons automatically.

### Press — media mentions

The "Press" section is for articles, interviews, or podcasts on *other*
sites where you're quoted or featured. It works exactly like the
YouTube/Podcast/Writing sections — just link out with `type: "press"`:

```js
{
  type: "press",
  title: "Headline of the article",
  url: "https://example.com/the-article",
  description: "One sentence on what it's about and your role in it.",
  tags: ["press", "topic"],
  date: "2026-06-04"
}
```

### Newsletter — articles from your newsletter

Same idea as Press, but for issues/posts from your newsletter (Kit,
Substack, etc.). Link out with `type: "newsletter"`:

```js
{
  type: "newsletter",
  title: "Issue title",
  url: "https://your-newsletter.example.com/posts/issue-title",
  description: "One or two sentences on what the issue covers.",
  tags: ["newsletter", "topic"],
  date: "2026-07-27"
}
```

## Previewing locally

From this folder, run:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Hosting for free — GitHub Pages

1. Create a free GitHub account at github.com if you don't have one.
2. Create a new public repository (e.g. `my-work`).
3. Upload these files (`index.html`, `styles.css`, `data.js`,
   `script.js`) to the repository — either via the
   "Add file → Upload files" button on github.com, or via git:
   ```
   git init
   git add index.html styles.css data.js script.js README.md
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-work.git
   git push -u origin main
   ```
4. In the repository, go to **Settings → Pages**.
5. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch `main`, folder `/ (root)`. Save.
6. Wait a minute, then your site will be live at:
   `https://YOUR-USERNAME.github.io/my-work/`

Every time you edit `data.js` and push the change, the live site updates
automatically within a minute or two.

### Alternative: Netlify

If you'd rather not use GitHub, drag-and-drop this folder onto
[app.netlify.com/drop](https://app.netlify.com/drop) — Netlify's free tier
will host it instantly at a `*.netlify.app` URL, no account setup for
initial deploy (an account is needed for future edits).

## Search behavior

The search box matches against title, description, tags, and content type
simultaneously. The type buttons (All / Writing / Press / YouTube /
Podcast / Newsletter) and the tag chips can be combined with the search
box — everything narrows the same result set.
