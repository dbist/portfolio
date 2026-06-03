# Artem Portfolio Agent Guide

This repository is the static portfolio website for Artem Ervits. The current site is inspired by `assets/Artem Ervits - Resume - 060326.pdf` and should present Artem as a technical leader across AI-enabled products, data cloud strategy, distributed databases, and solution engineering.

## Project Shape

- Static, dependency-light website:
  - `index.html`
  - `assets/pdf-preview.png`
  - `assets/Artem Ervits - Resume - 060326.pdf`
- Local preview:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Design Direction

- Preserve the resume PDF's compact, high-signal editorial feel:
  - strong monochrome typography
  - clear section rules and hierarchy
  - generous whitespace
  - concise proof points
- Translate the resume into a web-native portfolio rather than copying the PDF page-for-page.
- Keep the site focused on hiring-manager and consulting-buyer clarity.

## Content Priorities

Emphasize:

- MERA Consulting and AI-enabled consumer/productivity applications
- Zone 2 Trainer and personal assistant product work
- data cloud architecture and strategy
- distributed database systems
- generative AI security and governance
- solution engineering leadership and measurable enterprise outcomes
- open-source/community credibility

Keep a direct download link to the `060326` resume PDF.

## Implementation Guidelines

- Keep the site static unless an issue explicitly changes the stack.
- Prefer semantic HTML and CSS over JavaScript.
- Use stable responsive dimensions for hero media, proof metrics, cards, and buttons.
- Avoid decorative complexity that weakens the professional signal.
- Preserve user-provided files and source PDFs.
- Make small, traceable changes tied to GitHub issues when possible.

## Verification

Run:

```sh
npm run check
```

This validates local links, anchor targets, image alt text, and simple HTML/CSS sanity checks.

For visual changes, also preview in the browser and check:

- hero section on desktop and mobile widths
- resume PDF link
- contact links
- project and experience sections

If validation is limited, state exactly what was and was not checked.

## GitHub Workflow

- Repository: `dbist/portfolio`
- Track meaningful future work as GitHub issues before or alongside implementation.
- Verify the target repo before mutating issues or PRs.
- Do not close issues until the corresponding work is implemented and verified.
