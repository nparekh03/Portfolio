# Nirali Parekh - Product Manager Portfolio

A modern, interactive portfolio website showcasing product management work, case studies, and frameworks. Built with Next.js 15, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, minimalist design with glassmorphism effects and gradients
- 🌓 **Dark/Light Mode**: Smooth theme transitions with system preference detection
- 🎯 **Gamification**: Achievement badges and interactive metrics
- 📱 **Fully Responsive**: Mobile-first design optimized for all devices
- ⚡ **Performance**: Optimized for Lighthouse score 95+
- 🚀 **CI/CD**: Automated deployment to GitHub Pages via GitHub Actions

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/niraliparekh/niraliparekh.github.io.git
cd niraliparekh.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out` directory.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage/Hero section
│   ├── about/              # About/Journey page
│   ├── work/               # Work section with case studies
│   ├── frameworks/         # Frameworks & Thinking page
│   └── contact/            # Contact page
├── components/
│   ├── Navigation.tsx      # Main navigation with mobile menu
│   ├── StatsCounter.tsx    # Animated stats counter
│   ├── AchievementSystem.tsx # Gamification badges
│   ├── Footer.tsx          # Footer component
│   └── ThemeProvider.tsx   # Dark mode provider
├── lib/
│   └── tracking.ts         # Page view tracking
└── public/
    └── images/             # Static images
```

## Customization

### Update Content

1. **Personal Information**: Update contact details in `app/contact/page.tsx`
2. **Case Studies**: Modify case study content in `app/work/[project]/page.tsx`
3. **Stats**: Update stats in `app/page.tsx` StatsCounter component
4. **Social Links**: Update links in Footer and Contact components

### Add Images

Place images in `public/images/` and reference them as `/images/filename.jpg`

### SEO

Update metadata in `app/layout.tsx`:
- Title
- Description
- Open Graph tags
- Twitter cards

## Deployment

### GitHub Pages

The site is configured for automatic deployment via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions will build and deploy automatically
3. Site will be available at `https://niraliparekh.github.io`

### Manual Deployment

1. Build the site: `npm run build`
2. The `out` directory contains the static files
3. Deploy the `out` directory to your hosting provider

## Performance Optimization

- Static site generation (SSG)
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization with next/font
- CSS optimization with Tailwind

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus indicators
- Semantic HTML structure

## License

© 2024 Nirali Parekh. All rights reserved.

## Contact

- Email: niraliparekh03@gmail.com
- LinkedIn: [linkedin.com/in/niraliparekh0303](https://www.linkedin.com/in/niraliparekh0303)
- GitHub: [github.com/niraliparekh](https://github.com/niraliparekh)
