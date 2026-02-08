

# Developer Portfolio Website

A high-end, animated personal portfolio with a coding/GitHub-inspired aesthetic. Dark mode by default with light mode toggle. Uses the screenshot as inspiration but with a more unique, creative layout.

---

## Design & Style
- **Dark-first** theme with smooth light/dark toggle (saved to localStorage)
- GitHub / VS Code inspired aesthetic — monospace fonts, subtle grid backgrounds, glowing accent borders
- Color palette: deep navy/charcoal background, blue/cyan accents, soft grays for light mode
- Smooth scroll-based reveal animations, hover glow effects, and animated section transitions

---

## Sections

### 1. Hero Section
- Full-screen intro with animated typing effect: "Hi, I'm [Name]" / "Software Engineer | Full Stack Developer"
- Terminal/code-editor styled container
- CTA buttons: "View Projects" and "Download CV"
- Animated background with subtle floating code symbols or gradient

### 2. About Me
- README.md-style card layout with personal summary
- Highlights: key strengths (problem solving, clean architecture, scalable systems)
- Timeline of experience entries on the right side
- Stats counters (years of experience, projects completed, etc.)

### 3. Skills / Technical Proficiency
- Categorized grid: Frontend, Backend, Databases, DevOps/Tools
- Tech badges with icons styled like dev tool icons
- Proficiency level indicators with animated progress bars
- Hover to reveal extra details

### 4. Featured Projects
- Filterable project cards (Frontend / Backend / Full Stack)
- Each card: screenshot placeholder, tech stack badges, description
- Hover effects: glow border, slide-up description overlay
- GitHub & Live demo link buttons

### 5. Experience Timeline
- Vertical animated timeline with scroll-triggered reveals
- Company, role, duration, and brief description per entry
- Smooth connecting line animation

### 6. GitHub / Coding Stats
- GitHub-style contribution graph (placeholder data)
- Code activity visualizations using Recharts

### 7. Contact Section (Working Form)
- Elegant contact form with animated input focus effects
- Sends messages via a Supabase Edge Function + Resend email service
- Contact info cards (email, location, social links)
- Social links with hover animations
- Footer styled like a terminal: `$ Thanks for visiting`

### 8. Navigation
- Sticky top navbar with backdrop blur
- Smooth scroll to sections
- Theme toggle button
- Mobile hamburger menu

---

## Backend (Lovable Cloud)
- **Edge Function** to handle contact form submissions via Resend API
- Will need `RESEND_API_KEY` secret configured

