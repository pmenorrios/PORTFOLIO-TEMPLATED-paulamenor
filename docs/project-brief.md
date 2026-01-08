# Project Brief

**Student:** Paula Menor Ríos
**Handle:** @pmenorrios 
**Course:** Web Design 2025 · Fall  
**Date:** Week 2

---

## Project Concept

### What are you building?

A production-ready portfolio template built with vanilla HTML, CSS, and JavaScript. This is not just a portfolio, but a reusable template that can be adapted for different creative professionals. The design emphasizes big typography for impactful visual hierarchy, smooth scrolling animations for engaging user experience, and a dark theme for modern, professional aesthetics.

### Who is it for?

The template is designed for creative professionals (graphic designers, web designers, artists, etc.) who need a clean, accessible, and easy-to-customize portfolio website. It's also intended as a learning project to demonstrate strong fundamentals in semantic HTML, CSS architecture, progressive enhancement, and accessibility best practices.

### Why does it matter?

This project demonstrates the importance of building websites that work without JavaScript first, then enhancing with progressive enhancement. It showcases clean code architecture, accessibility compliance (WCAG 2.1 AA), and responsive design principles. The template approach makes it valuable for others who want a solid foundation without framework dependencies.

---

## Technical Approach

### Core Technologies

- [x] HTML5 (semantic markup)
- [x] CSS3 (responsive design)
- [x] JavaScript (vanilla JS for progressive enhancement)
- [x] Other: Custom fonts (OTF via @font-face), CSS custom properties, Intersection Observer API

### Accessibility Goals

- [x] Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] Alt text for images (descriptive alt text for content images, empty alt for decorative)
- [x] Keyboard navigation support (Enter/Space to toggle, Escape to close, skip link)
- [x] Color contrast compliance (WCAG 2.1 AA: 12.6:1 for secondary text, 14.2:1 for hover states)
- [x] Screen reader compatibility (ARIA labels, aria-expanded, aria-hidden, role attributes)

### Responsive Design Strategy

- [x] Mobile-first approach (base styles for mobile, media queries for larger screens)
- [x] Flexible grid system (CSS Grid and Flexbox)
- [x] Scalable typography (rem units, fluid font sizes)
- [x] Optimized images (proper sizing, lazy loading ready)
- [x] Touch-friendly interactions (adequate spacing, hover states work on touch)

---

## Content Strategy

### Key Sections/Pages

1. **Home / Intro** - Hero section with large background image (parallax effect), animated scroll indicator with glitch text animation
2. **About** - Personal introduction and philosophy, right-aligned text with max-width constraint
3. **Projects** - Showcase of work with interactive hover effects (3D TYPES, POSTERS, 3D GAS projects with image galleries)
4. **Skills** - List of graphic design skills (Adobe Creative Suite, Figma, Typography, Branding, etc.), right-aligned
5. **Contact** - Contact information and social links, right-aligned with centered long text
6. **Footer** - Three-column layout (Socials, Reach Out, Development)

### Content Sources

- Personal project images from design work (3D renders, poster designs)
- Custom written content for About section
- Real skills and experience listed
- Social media links and contact information

### Multilingual Considerations

- Primary language: English
- Secondary language (optional): Spanish (for future expansion)
- Translation strategy: Currently English-only, but structure supports easy translation with semantic HTML and CSS variables for text sizing

---

## Design Direction

### Visual Style

Minimalist dark theme with bold typography and subtle interactions. The design emphasizes:
- **Pure black background** (#000000) for maximum contrast
- **Large, impactful typography** using custom display fonts
- **Right-aligned content** for visual interest and modern layout
- **Smooth animations** (glitch text effects, parallax scrolling, fade-in reveals)
- **Card-like image displays** with fan effect on hover (like playing cards)
- **Minimal margins** matching navigation bar width for consistency
- **Centered long-form text** (600px max-width) for readability

### Color Palette

- **Background Primary**: #000000 (pure black)
- **Background Secondary**: #0a0a0a (very dark gray)
- **Text Primary**: #ffffff (white)
- **Text Secondary**: #cccccc (light gray, WCAG AA compliant - 12.6:1 contrast)
- **Text Hover**: #e0e0e0 (lighter gray, WCAG AA compliant - 14.2:1 contrast)
- **Border**: #2a2a2a (dark gray)

### Typography

- **Display Font (Titles)**: Custom Title Font via OTF (`font-657a1ad6-fafc-4949-9df2-0d6f70c12c4f.otf`)
- **Body Font**: custom_120972 via OTF (`font-60a2144c-2133-4539-ba0f-8545a50d4bbc.otf`)
- **All text**: Uppercase with letter-spacing (0.05em for body, 0.15em for indicators)
- **Font sizes**: Fluid scale from 1rem (16px) base to 4.5rem (72px) for largest headings
- **Line height**: 1.6-1.8 for readability

### Inspiration/References

- [Isabel Moranta Portfolio](https://www.isabelmoranta.com/) - Big typography and dark theme
- [By Prism Studio](https://byprismmm.studio/) - Scrolling animations and modern layout
- Design trends: Big typographies, scrolling animations, dark themes

---

## Success Metrics

### Week 4 Goals

- [x] Functional homepage with parallax image and scroll indicator
- [x] Basic responsive layout (mobile-first approach)
- [x] Core content in place (Home, About, Projects, Skills, Contact)
- [x] Accessible markup (semantic HTML, ARIA labels, keyboard navigation)

### Final Project Goals

- [x] Fully responsive across devices (breakpoints at 768px and 480px)
- [x] Meets WCAG 2.1 AA standards (color contrast, keyboard navigation, screen reader support)
- [x] Fast loading performance (vanilla JS, no frameworks, optimized CSS)
- [x] Complete content (all sections filled with real content)
- [x] Polished visual design (smooth animations, hover effects, consistent spacing)

---

## Reflection Questions

### What excites you most about this project?

Building a complete, production-ready portfolio template from scratch using only vanilla technologies is exciting because it demonstrates mastery of fundamentals. The ability to create smooth animations, implement accessibility features, and build a responsive design without frameworks shows deep understanding of web technologies. The template approach also means it can be reused and adapted, making it valuable beyond just a portfolio piece.

### What challenges do you anticipate?

Key challenges include:
- **Accessibility compliance**: Ensuring WCAG 2.1 AA standards while maintaining the desired aesthetic
- **Cross-browser compatibility**: Making sure custom fonts and animations work consistently
- **Performance optimization**: Balancing visual effects with page load speed
- **Responsive design**: Adapting the right-aligned layout and large typography for mobile devices
- **JavaScript interactions**: Implementing hover effects and animations that work with both mouse and keyboard navigation

### How does this project connect to your learning goals?

This project directly addresses core web design principles:
- **Semantic HTML**: Understanding proper document structure and accessibility
- **CSS Architecture**: Learning to organize stylesheets (reset, base, layout, components)
- **Progressive Enhancement**: Building sites that work without JavaScript, then enhancing
- **Accessibility**: Implementing WCAG standards and keyboard navigation
- **Responsive Design**: Mobile-first approach with fluid typography and flexible layouts
- **Vanilla JavaScript**: Understanding DOM manipulation and event handling without frameworks
- **Typography**: Working with custom fonts and creating visual hierarchy
- **Animations**: CSS transitions, keyframes, and JavaScript-triggered animations

---

_This brief will evolve as your project develops. Update it as needed and reference it in your weekly commits._