# Yijun Li’s academic website

Personal website at https://codingpoppy.github.io/, built with [Quarto](https://quarto.org/).

## Edit on GitHub

1. Open the page file listed below and click the pencil icon.
2. Edit the text, then choose **Commit changes** to save it to `main`.
3. The **Publish website** workflow rebuilds and publishes the site automatically. Follow its progress in the **Actions** tab; the website address stays the same.

| File | Content |
| --- | --- |
| `index.qmd` | Home page, biography, research interests, and contact links |
| `research.qmd` | Research directions, figures, and captions |
| `publications.qmd` | Selected publications and preprints |
| `teaching.qmd` | Teaching and mentoring experience |
| `assets/CV_Yijun_Li.pdf` | Downloadable CV; replace using the same filename |
| `_quarto.yml` | Navigation and site settings |
| `theme.scss`, `styles.css` | Colors, typography, and layout |

Images live in `assets/`. The home page portrait toggles to the illustration when clicked, tapped, or activated with Enter or Space.

## Preview locally

Install [Quarto 1.10.19](https://quarto.org/docs/get-started/) and run `quarto preview` from this folder. To build without a preview server, run `quarto render`; the generated website appears in `dist/`.

## Publishing setup

In **Settings → Pages → Build and deployment**, select **GitHub Actions**. The workflow in `.github/workflows/publish.yml` runs on every update to `main` and can also be started manually from the Actions tab. Generated files are deployed as a Pages artifact and are not committed to the source repository.
