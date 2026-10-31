# Yijun Li’s academic website

Source files for Yijun Li’s academic website, built with [Quarto](https://quarto.org/).

**Publication status:** The source files have been uploaded. GitHub Pages and automatic publishing have not been enabled yet.

## Editing

| File | Content |
| --- | --- |
| `index.qmd` | Home page, biography, research interests, and contact links |
| `research.qmd` | Research directions, figures, and captions |
| `publications.qmd` | Selected publications and preprints |
| `teaching.qmd` | Teaching and mentoring experience |
| `assets/CV_Yijun_Li.pdf` | Downloadable CV; replace using the same filename |
| `_quarto.yml` | Navigation and site settings |
| `theme.scss`, `styles.css` | Colors, typography, and layout |

Open a page file on GitHub and click the pencil icon to edit it. Choose **Commit changes** to save the update.

Images live in `assets/`. The home page portrait toggles to the illustration when clicked, tapped, or activated with Enter or Space.

## Preview locally

Install [Quarto 1.10.19](https://quarto.org/docs/get-started/) and run `quarto preview` from this folder. To build without a preview server, run `quarto render`; the generated website appears in `dist/`.
