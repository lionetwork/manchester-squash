# Manchester Squash

Rebuild of manchestersquash.co.uk. The old WordPress (Avada) site was broken and its server is being decommissioned; all content and images were rescued from the live site on 8 July 2026 before switch-off.

## Structure

- `site/` — the new static site (plain HTML/CSS/JS, no build step). Deploy this directory.
- `legacy/` — full rescue of the old site: page HTML, extracted text (`pages/*.txt`), and every image from `wp-content/uploads` (`images/`). Keep as archive; two files (`Summer-Camps-Document.jpg`, `squash2.png`) were already 404 on the old server and could not be recovered.

## Pages

index, about, coaching (with pricing), juniors, camps, massage (MSSports Massage & Rehab), testimonials, contact.

## Local preview

```
python3 -m http.server 4380 --directory site
```

(Also configured as `squash-static` in `~/.claude/launch.json`.)

## Deploy

Static site, Vercel-ready: set the project root/output directory to `site/`.

## Business details (from legacy site)

- Coach: Mas (Masambo) Selisho, 07941 778 466, manchestersquash@gmail.com
- Base: Wilmslow Leisure Centre, Station Rd, Wilmslow SK9 1BU
- Camps: Grove Park Squash Club; Massage: Cheadle Hulme & Stanley Green
