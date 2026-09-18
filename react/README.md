# Sandeep Sahani — Portfolio (React + Vite)

Single-page developer portfolio. Same design as the published page, split into
reusable React components with the content kept in data files.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure

```
index.html                 title, meta description, Open Graph tags, fonts
src/
  main.jsx                 entry point
  App.jsx                  layout, scroll-spy, resume link
  styles.css               design tokens + all styles
  hooks/useReveal.js       scroll-reveal observer (respects prefers-reduced-motion)
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx  Experience.jsx
    Projects.jsx  Education.jsx  Contact.jsx  Footer.jsx  Icon.jsx
  data/
    skills.js  experience.js  education.js  projects.js
```

## Things to update

| What | Where |
| --- | --- |
| Resume PDF | put the file in `/public`, set `RESUME_URL` in `App.jsx` |
| GitHub / LinkedIn links | `social` object at the top of `components/Contact.jsx` |
| Projects, skills, jobs, education | the matching file in `src/data/` |
| Colours, spacing, radius | the `:root` tokens at the top of `styles.css` |
| Open Graph image and URL | `index.html` (`og:url`, `og:image`) |

## Contact form

The form validates in the browser and opens the visitor's email app with the
message prefilled. To deliver messages without an email client, point the submit
handler in `Contact.jsx` at a form service (Formspree, Web3Forms) or your own
Express endpoint.
