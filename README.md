# Artem Ervits Portfolio

Static portfolio and resume website for Artem Ervits, inspired by `assets/Artem Ervits - Resume - 060326.pdf`.

## What This Site Covers

- AI-enabled product advisory through MERA Consulting, LLC
- Zone 2 Trainer project case study
- Personal assistant application project case study
- Data cloud architecture and solution engineering leadership
- Resume snapshot and downloadable PDF

## Local Preview

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Validation

```sh
npm run check
```

The check script verifies local asset links, anchor targets, image alt text, the `060326` resume reference, and simple CSS brace balance.

## Deployment

This repo is ready for GitHub Pages:

1. Merge the portfolio branch into `main`.
2. In GitHub, open Settings > Pages.
3. Choose deployment from the `main` branch root.
4. Confirm the public URL loads `index.html`.

## Editing Notes

- Keep the site static unless a GitHub issue explicitly changes the stack.
- Preserve `assets/Artem Ervits - Resume - 060326.pdf` as the source resume reference.
- Keep copy concise and useful for recruiters, consulting clients, and collaborators.
- Tie meaningful future work to GitHub issues.
