# Javad Pakzad — Academic Website

A responsive, multi-page academic website built with plain HTML, CSS, and JavaScript for GitHub Pages. It has no build step and does not depend on external frameworks.

## Pages

- `index.html` — Home and academic introduction
- `research.html` — Research interests and current research direction
- `projects.html` — Research and computational project themes
- `teaching.html` — Mathematics teaching profile
- `cv.html` — Editable academic CV page, with browser print / Save as PDF
- `contact.html` — Contact information and GitHub profile
- `interests.html` — Redirect from the previous Interests page to Research

## Publish to GitHub Pages

1. Download and extract the ZIP file. The archive contains the website files directly (there is no extra enclosing folder).
2. Open your repository: <https://github.com/Javad-Pakzad/javad-pakzad.github.io>.
3. Upload all extracted files and folders to the repository root.
4. Allow GitHub to replace the existing `index.html`, `interests.html`, and other files when prompted.
5. Commit the changes to the `main` branch.
6. In **Settings → Pages**, confirm that the site is deployed from `main` and `/(root)`.
7. Open <https://javad-pakzad.github.io/> and check each page.

## Personalize before sharing as a formal academic CV

Some personal details were not available, so they are intentionally not invented. Search the files for `[University`, `[School`, `add your academic email`, and `[Years]`, then replace those placeholders with accurate information.

In particular:

- Add your university name and actual degree dates to `cv.html`.
- Add your bachelor's degree details, institution, and dates in `cv.html`.
- Add your school / institution and teaching dates in `cv.html`.
- Add a public academic email address in `contact.html` and `cv.html`.
- Only add publications, awards, or completed projects that are real and verifiable.
- The CV page can be printed to PDF using its **Print / Save as PDF** button. Review the exported PDF before sharing it.

## Notes

- The theme toggle (light / dark) stores the preference locally in the visitor's browser.
- The mobile menu is keyboard accessible.
- `interests.html` is retained so that the old Interests URL continues to lead visitors to the new Research page.
- No profile photograph is included, as requested. A photo can be added later if desired.
