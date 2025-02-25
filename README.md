# Product Designer Portfolio

A modern, responsive portfolio website built with Next.js App Router, Tailwind
CSS, and MDX for showcasing design case studies.

## Overview

This portfolio site is designed for a Product Designer to showcase case studies,
personal background, and design explorations. The site features a clean, modern
UI with a focus on presenting design work in an engaging manner.

### Key Features

- **Dynamic Case Studies**: Content managed through MDX files for easy updates
- **Responsive Design**: Optimized for all device sizes
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading with image optimization
- **SEO Friendly**: Proper metadata and OpenGraph tags

## Project Structure

```
my-portfolio/
├─ app/                        # Next.js App Router pages
│  ├─ page.tsx                 # Home page
│  ├─ case-studies/            # Case studies section
│  │  ├─ page.tsx              # Case studies listing
│  │  └─ [slug]/               # Dynamic case study routes
│  │     └─ page.tsx           # Individual case study page
│  └─ ...                      # Other pages (about, work, etc.)
│
├─ components/                 # Reusable UI components
│  ├─ ui/                      # Core UI components
│  │  ├─ header.tsx            # Site header
│  │  └─ footer.tsx            # Site footer
│  ├─ CaseStudyCard.tsx        # Card for case study previews
│  └─ project-grid.tsx         # Grid layout for projects
│
├─ content/                    # Content files
│  └─ case-studies/            # MDX files for case studies
│     ├─ payment-reports.mdx   # Payment Reports case study
│     └─ ui-exploration.mdx    # UI Exploration case study
│
├─ lib/                        # Utility functions
│  ├─ getCaseStudies.ts        # Function to get all case studies
│  └─ getCaseStudyBySlug.ts    # Function to get a specific case study
│
└─ public/                     # Static assets
   └─ images/                  # Image files
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/design-portfolio.git
   cd design-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see
   the result.

## Content Management

### Adding a New Case Study

1. Create a new MDX file in the `content/case-studies` directory
2. Add frontmatter with the following fields:
   ```yaml
   ---
   title: 'Your Case Study Title'
   company: 'Company Name'
   year: '2023'
   period: 'Q1 2023'
   team:
     - role: 'Your Role'
       name: 'Your Name'
   slug: 'unique-url-slug'
   excerpt: 'Brief description of the case study'
   coverImage: '/images/your-image.jpg'
   tags: ['UX/UI', 'Research', 'Category']
   featured: true # Optional, to feature on homepage
   ---
   ```
3. Add your case study content below the frontmatter using Markdown

## Current Status

The project is currently in active development. See
[Project Status](./instruction/project-status.md) for details on completed
features and next steps.

### Completed Features

- Basic portfolio structure with home page and case studies
- MDX-based case study system with frontmatter support
- Responsive design with Tailwind CSS
- Dynamic routing for case studies
- Project card grid on homepage

### In Progress

- Additional pages (About, Work, Playground, Contact)
- Theme toggle functionality
- Navigation improvements

## License

This project is licensed under the MIT License - see the LICENSE file for
details.

## Acknowledgments

- Design inspiration from various portfolio sites
- Built with [Next.js](https://nextjs.org/) and
  [Tailwind CSS](https://tailwindcss.com/)
- Content management with [MDX](https://mdxjs.com/)
