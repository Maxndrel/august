# Augustine Ojumah Portfolio

A professional portfolio website for Augustine Ojumah, Civil Engineer and Project Manager based in Calgary, Alberta.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GSAP (GreenSock Animation Platform)
- Google Fonts (Nunito, DM Sans)

## Folder Structure

```
augustine-ojumah-portfolio/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   │   └── og-image.jpg
│   ├── icons/
│   │   └── favicon.svg
│   └── resume/
│       └── augustine-ojumah-resume.pdf
├── css/
│   ├── main.css
│   ├── base/
│   │   ├── reset.css
│   │   ├── tokens.css
│   │   └── typography.css
│   ├── components/
│   │   ├── nav.css
│   │   ├── cursor.css
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   └── scroll-bar.css
│   ├── sections/
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── certifications.css
│   │   └── contact.css
│   └── responsive/
│       ├── desktop.css
│       ├── tablet.css
│       └── mobile.css
├── js/
│   ├── main.js
│   └── modules/
│       ├── cursor.js
│       ├── nav.js
│       ├── scroll-bar.js
│       ├── animations.js
│       ├── counter.js
│       └── reveal.js
└── data/
    └── portfolio.js
```

## How to Run

Simply open `index.html` in any modern web browser. No build step, no installation, and no server required.

## How to Update Content

All content is driven from a single data file. To update any content on the site:

1. Open `data/portfolio.js`
2. Edit the relevant data fields
3. Save the file — changes will appear automatically on refresh

## How to Update Styles

To modify the visual design:

- Section-specific styles: Edit the relevant file in `css/sections/`
- Component styles: Edit the relevant file in `css/components/`
- Global styles: Edit `css/main.css` or `css/base/tokens.css`

## How to Add a New Project

1. Open `data/portfolio.js`
2. Add a new object to the `projects` array with the following structure:
   ```javascript
   {
       id: 5,
       title: "Project Name",
       role: "Your Role",
       company: "Company Name",
       description: "Project description",
       tags: ["Tag1", "Tag2", "Tag3"]
   }
   ```
3. Save the file

## Browser Support

All modern browsers are supported:
- Chrome
- Firefox
- Safari
- Edge

## Credits

Augustine Ojumah portfolio — designed and built 2025