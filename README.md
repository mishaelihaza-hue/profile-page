# Portfolio Website

A clean, responsive portfolio site built with HTML, CSS, Bootstrap, and a small amount of JavaScript. It features a hero carousel, skill progress bars, project cards, and dedicated About and Contact pages.

## Highlights

- Responsive layout with Bootstrap 5
- Hero carousel with overlay content and call-to-action buttons
- Skill progress bars (including JavaScript at 45%)
- Project cards with image cropping for smaller screens
- About page with profile image and description panel
- Contact page with clickable WhatsApp, phone, and address plus embedded map
- Social icon links in the footer on all pages

## Pages

- `index.html`: Home page with hero carousel, skills, and projects
- `about.html`: About section with profile image and description
- `contact.html`: Contact form, contact details, and map

## Tech Stack

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Bootstrap Icons (CDN)

## Project Structure

```
.
|-- index.html
|-- about.html
|-- contact.html
|-- css/
|   |-- style.css
|-- js/
|   |-- script.js
|-- images/
|   |-- (optional local assets)
```

## Running Locally

Open `index.html` in your browser. No build step required.

## Customization

- **Hero images**: update the `src` URLs in `index.html` to your own images.
- **Profile photo**: replace `images/share_pdf_exportpage2.png` in `about.html`.
- **Skills**: edit the progress bars in `index.html`.
- **Contact details**: update the links and address in `contact.html`.
- **Branding**: change colors in `css/style.css` under `:root` variables.

## Notes

- External images are currently linked from Unsplash.
- The map uses a Google Maps embed link and requires an internet connection.

## Credits

Image sources are attributed in the footer section of `index.html`.
