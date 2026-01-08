# Portfolio Template

A production-ready portfolio template built with vanilla HTML, CSS, and JavaScript. This template demonstrates strong fundamentals, clean structure, and professional standards while maintaining simplicity and accessibility.

**Live Demo:** [https://pmenorrios.github.io/PORTFOLIO-TEMPLATED-paulamenor/](https://pmenorrios.github.io/PORTFOLIO-TEMPLATED-paulamenor/)

> By @pmenorrios

## Project Description

This is not just a portfolio, but a reusable template that can be adapted for different creative professionals. The design emphasizes:

- **Big typography** for impactful visual hierarchy
- **Smooth scrolling animations** for engaging user experience
- **Dark theme** for modern, professional aesthetics
- **Clean, semantic code** that's easy to maintain and understand

## Tech Stack

- **HTML5** - Semantic markup with proper structure
- **CSS3** - Custom properties, Flexbox, Grid, and animations
- **Vanilla JavaScript** - Progressive enhancement, no frameworks
- **Web Fonts** - Inter and Space Grotesk via Google Fonts

## Project Structure

```
PORTFOLIO-TEMPLATED-paulamenor/
├── index.html              # Main HTML structure
├── assets/
│   ├── css/
│   │   ├── reset.css       # CSS reset (Meyer reset)
│   │   ├── base.css        # CSS variables, typography, base styles
│   │   ├── layout.css      # Container, sections, responsive layout
│   │   ├── components.css  # Navigation, cards, buttons, etc.
│   │   └── index.css       # Main CSS file (imports all)
│   └── js/
│       └── main.js         # Navigation toggle, scroll animations
├── docs/
│   ├── plan.md             # Project plan and guidelines
│   ├── project-brief.md    # Project brief template
│   └── project-inspiration.md # Design inspiration
└── README.md               # This file
```

## Features

### ✨ Design Features

- **Dark Theme** - Modern dark color palette with high contrast
- **Big Typography** - Large, impactful headings using Space Grotesk
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Scroll-triggered animations and transitions

### ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels and attributes for navigation
- Keyboard navigation support (Escape key closes menu)
- Focus states for all interactive elements
- High color contrast for readability

### 📱 Responsive Design

- Mobile-first CSS approach
- Flexible Grid and Flexbox layouts
- Fluid typography using rem units
- Breakpoints at 768px and 480px
- Touch-friendly interactive elements

### 🎯 Progressive Enhancement

- Site works without JavaScript
- JavaScript enhances user experience
- Graceful degradation for older browsers
- No external dependencies (except web fonts)

## Sections

1. **Home / Intro** - Hero section with animated title and call-to-action
2. **About** - Personal introduction and philosophy
3. **Projects** - Showcase of work with project cards
4. **Skills** - Organized list of technical and design skills
5. **Contact** - Contact information and social links

## CSS Architecture

The CSS is organized into logical modules:

- **reset.css** - Normalizes browser defaults
- **base.css** - CSS variables, typography, and base styles
- **layout.css** - Container, sections, and responsive rules
- **components.css** - Reusable component styles

### CSS Variables

All design tokens are defined as CSS variables in `:root`:

- Colors (dark theme palette)
- Typography (font families and sizes)
- Spacing (consistent spacing scale)
- Transitions (animation timings)
- Z-index (layer management)

## JavaScript Features

The JavaScript file (`main.js`) handles:

- **Navigation Menu Toggle** - Mobile menu open/close with accessibility
- **Scroll Animations** - Intersection Observer API for reveal animations
- **Smooth Scrolling** - Enhanced anchor link navigation
- **Header Background** - Dynamic header on scroll
- **Keyboard Support** - Escape key to close menu

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement ensures basic functionality in older browsers

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. Customize the content, colors, and fonts to match your needs

### Customization

1. **Content**: Edit `index.html` to update text and links
2. **Colors**: Modify CSS variables in `assets/css/base.css`
3. **Typography**: Change font imports and variables in `base.css`
4. **Sections**: Add or remove sections as needed

## Development Principles

This project follows these key principles:

1. **Simple but well-crafted** - Clean code without unnecessary complexity
2. **Accessible and semantic** - WCAG 2.1 AA compliance
3. **Responsive by default** - Mobile-first, works everywhere
4. **Easy to maintain** - Clear structure, commented code

## Performance

- No external JavaScript frameworks
- Minimal dependencies (only web fonts)
- Optimized CSS with efficient selectors
- Lazy loading ready (can be added for images)

## What I Learned

Building this portfolio template reinforced:

- The importance of semantic HTML for accessibility
- CSS architecture and organization best practices
- Progressive enhancement philosophy
- Mobile-first responsive design
- Intersection Observer API for scroll animations
- Accessibility considerations (ARIA, keyboard navigation)

## Future Enhancements

Potential improvements for future versions:

- Image optimization and lazy loading
- More animation options
- Light/dark theme toggle
- Additional section templates
- Blog or case study pages

## License

See LICENSE file for details.

## Credits

- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) by Google Fonts
- **CSS Reset**: [Meyer Reset](https://meyerweb.com/eric/tools/css/reset/)
- **Inspiration**: Modern portfolio designs with big typography and dark themes

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript.
