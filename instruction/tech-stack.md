---

## 1. **Project Setup**

1. **Initialize Next.js Project**  
   - **Action**: Run `npx create-next-app@latest --experimental-app` (or the recommended command for the App Router version you want).  
   - **Why**: Sets up the core Next.js framework with the App Router directory structure.  
   - **Check**: Confirm `app/` folder is created with `layout.tsx` and `page.tsx`.

2. **Install Tailwind CSS**  
   - **Action**:  
     1. `npm install -D tailwindcss postcss autoprefixer`  
     2. Initialize config with `npx tailwindcss init -p`.  
     3. Add Tailwind directives to your `globals.css` (e.g., `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`).  
   - **Why**: Tailwind simplifies styling with utility classes.  
   - **Check**: Confirm that Tailwind is applied (e.g., test a simple `<div className="bg-red-500 p-4">` in `page.tsx`).

3. **Install Motion**   (react-motion library)
   - **Action**: `npm install motion`.  
   - **Why**: For adding smooth animations/transitions.  
   - **Check**: Import from `framer-motion` in a test component to ensure it’s working.

---

## 2. **File Architecture**

1. **Recommended Folder Structure**
   - **Action**: Create directories:  
      ``` Design-portfolio/ ├─ .gitignore ├─ package.json ├─ tsconfig.json ├─
     next.config.js ├─ tailwind.config.js ├─ postcss.config.js ├─ README.md

├─ public/ │ └─ images/ │ └─ logo.png # Example image asset

├─ content/ │ └─ case-studies/ │ ├─ example-project.mdx │ ├─ second-project.mdx
│ └─ ... │ ├─ lib/ │ ├─ getCaseStudies.ts # Example utility to fetch/parse all
MDX files │ ├─ getCaseStudyBySlug.ts # Example utility to get a single MDX by
slug │ └─ utils.ts # General helper functions

├─ components/ │ ├─ Header.tsx # Header / navbar │ ├─ Footer.tsx # Footer │ ├─
ThemeToggle.tsx # Dark/light mode toggle │ ├─ PlaygroundCard.tsx # to show
personal projects card component │ ├─ CaseStudyCard.tsx # A specialized card for
case studies │ └─ ui/...

└─ app/ ├─ globals.css # Tailwind & global styles ├─ layout.tsx # Root layout
(wraps the entire app) ├─ not-found.tsx # Custom 404/NotFound page (optional)

├─ (site)/ # (Optional) Route group for main site pages │ ├─ page.tsx # Home
page │ ├─ about/ │ │ └─ page.tsx # About page │ ├─ work/ │ │ └─ page.tsx #
Work/Portfolio index page │ ├─ playground/ │ │ └─ page.tsx # Playground page │
├─ contact/ │ │ └─ page.tsx # Contact page (form, etc.)

│ ├─ case-studies/ │ │ ├─ page.tsx # All case studies listing page │ │ └─
[slug]/ │ │ └─ page.tsx # Individual case study detail page (dynamic route)

└─ ...other potential route groups or pages... ```

- **Why**: Keeping components, utilities, and content separate ensures better
  organization and maintainability.
- **Check**: Make sure the `app/` directory structure aligns with Next.js’ App
  Router best practices.

2. **Why This Matters**
   - **Explanation**:
     - `app/` for routing and page structures
     - `components/` for shared UI logic (buttons, cards, etc.)
     - `content/` for MDX/case studies or a dedicated CMS approach

---

## 3. **Add shadcn/ui Components**

1. **Install**

   - **Action**: Follow the official [shadcn/ui](https://ui.shadcn.com/)
     installation steps. Typically:
     1. `npx shadcn-ui init` or a similar CLI command.
     2. Select the components you want to import (e.g., button, card, dropdown,
        etc.).
   - **Why**: Provides a set of accessible, styled components leveraging
     Tailwind, saving design time.
   - **Check**: Verify you can import `Button` from `shadcn/ui` and render it
     without errors.

2. **Usage**
   - **Action**: Start replacing or adding UI elements in your pages with
     shadcn/ui.
   - **Check**: Confirm consistent styling and no className collisions with your
     custom Tailwind classes.

---

## 4. **Add Dark Theme**

1. **Theme Provider Setup**

   - **Action**:
     1. Create a `ThemeProvider` component (often placed in `app/layout.tsx` or
        `components/ThemeProvider.tsx`).
     2. Use something like `next-themes` or a custom context to handle
        light/dark toggling.
   - **Why**: Ensures a global theme state.
   - **Check**: Toggle button changes the class on `<html />` or `<body />` to
     `dark`, updating styles accordingly.

2. **Testing the Toggle**
   - **Action**: Use a small “Toggle Theme” button in the navbar or footer.
   - **Check**: Confirm your Tailwind config has `darkMode: 'class'`, and test
     the toggle in dev mode.

---

## 5. **Application Shell**

1. **Layout & Navigation**

   - **Action**:
     1. In `app/layout.tsx`, define a header/nav and footer that wraps all
        pages.
     2. Ensure consistent navigation links: Home, Work, About, Playground,
        Contact, etc.
   - **Why**: Provides a consistent skeleton for all pages.
   - **Check**: Make sure navigation works across the site and the layout is
     responsive.

2. **Global Styles**
   - **Action**: Define global CSS or placeholders in `globals.css`.
   - **Check**: Confirm that styles (typography, color variables) are consistent
     sitewide.

---

## 6. **Add Intro Section (Home Page)**

1. **Create a Hero / Intro Component**

   - **Action**: In your `app/(site)/page.tsx` (or `HomePage.tsx`), add a hero
     section with a brief introduction.
   - **Why**: This is the first impression of your portfolio.
   - **Check**: Confirm it looks good on mobile and desktop.

2. **Framer Motion Animations (Optional)**
   - **Action**: Wrap text or images in Framer Motion `<motion.div>` for
     fade/slide effects.
   - **Check**: Smooth transitions without performance issues.

---

## 7. **Add MDX**

1. **Install & Configure MDX**

   - **Action**:
     1. `npm install @mdx-js/loader @mdx-js/react`.
     2. Create a configuration or use Next.js MDX plugin.
     3. In `next.config.js` or `app/` configuration, set up MDX support.
   - **Why**: Allows writing content (like case studies) in Markdown + JSX.
   - **Check**: Confirm that a simple `example.mdx` file can be imported and
     rendered in a page.

2. **Decide on File Structure for MDX**
   - **Action**:
     - Keep `.mdx` files in `content/case-studies/`.
     - Alternatively, use a subfolder approach:
       `content/case-studies/project1.mdx`.
   - **Check**: Ensure you can access the file path at build or runtime.

---

## 8. **Dynamic Post Page**

1. **Routing with App Router**

   - **Action**:
     1. Create a `[slug]` folder within `app/case-studies/`.
     2. In `[slug]/page.tsx`, fetch the MDX file matching the slug and render
        it.
   - **Why**: This automatically sets up dynamic routes:
     `/case-studies/my-project`.
   - **Check**: Access a test MDX file by navigating to
     `/case-studies/test-project`.

2. **Slug Generation**
   - **Action**: Write a helper function to get all `slugs` from your
     `content/case-studies` folder, then pass them to `generateStaticParams()`
     in Next 13.
   - **Check**: Confirm that all case studies generate pages statically at build
     time (or fallback if you want on-demand rendering).

---

## 9. **Styling MDX Content**

1. **Define MDX Styles**
   - **Action**:
     - Create a `.mdx-styles` class or a custom MDX provider that wraps
       headings, paragraphs, images, etc.
     - Use Tailwind typography plugin (e.g., `@tailwindcss/typography`).
   - **Why**: Ensures consistent typography, spacing, and styling for
     MDX-rendered content.
   - **Check**: Headings, lists, and images display as intended.

---

## 10. **Adding Custom Components**

1. **MDX Custom Components**

   - **Action**:
     1. In your MDX provider, map `<CustomImage/>`, `<VideoPlayer/>`, etc. to
        MDX elements.
     2. E.g., `mdxComponents = { img: CustomImage }`.
   - **Why**: Allows you to control how images, videos, or interactive content
     appear inside MDX.
   - **Check**: Insert custom components in MDX and confirm they render
     properly.

2. **Reusability**
   - **Action**: Keep these components in `components/` directory for easy
     import.
   - **Check**: They can be used inside or outside MDX if needed.

---

## 11. **Add All Case Studies Page**

1. **Case Studies Index**

   - **Action**:
     1. Create `app/case-studies/page.tsx` to list all case studies.
     2. Fetch or read all MDX files in `content/case-studies` to build a card
        list (title, thumbnail, short description).
   - **Why**: Provides a single place to see all projects.
   - **Check**: Cards link to the dynamic `[slug]` pages.

2. **Sorting / Filtering (Optional)**
   - **Action**: Add filters if you have multiple categories or tags.
   - **Check**: Confirm filtering logic matches your design preference.

---

## 12. **Add Option for Password to Some Case Studies**

1. **Private Case Study Flow**

   - **Action**:
     1. Decide on a method: simple client-side password prompt or server-based
        authentication.
     2. Add logic to `[slug]/page.tsx` to check if the file is “private.”
   - **Why**: Some projects may be under NDA or need a password.
   - **Check**: If user enters the correct password, content is revealed;
     otherwise, show a fallback message.

2. **Implementation**
   - **Action**: Store the password in environment variables or a simple hashed
     approach.
   - **Check**: Ensure no sensitive data is exposed on the client side.

---

## 13. **Playground Page**

1. **Create a Dedicated Page**

   - **Action**: `app/playground/page.tsx`.
   - **Why**: Show personal experiments, micro-interactions, or video demos.
   - **Check**: Videos or embedded prototypes load quickly and responsibly.

2. **Layout and Organization**
   - **Action**: Possibly use a grid or card layout to highlight each
     experiment.
   - **Check**: Make sure it fits within the overall design system.

---

## 14. **Add Search and Context Menu**

1. **Search**

   - **Action**:
     1. Implement a search bar to filter case studies.
     2. Use client-side state or a small server action to filter content.
   - **Why**: Allows quick lookup for a specific case study.
   - **Check**: Searching for a keyword (e.g., “UI design”) yields correct
     results.

2. **Context Menu**
   - **Action**: If needed, implement a custom right-click context menu or quick
     nav. Possibly use a library or build from scratch.
   - **Check**: Confirm it doesn’t conflict with default browser context unless
     you want to override that.

---

## 15. **Generate Static Pages**

1. **Static Generation Setup**
   - **Action**:
     1. Use Next.js’ `generateStaticParams` or `generateMetadata` for each route
        with MDX.
     2. Build the entire site statically.
   - **Why**: Faster performance and better SEO for portfolio sites.
   - **Check**: Pages generate at build time without errors.

---

## 16. **Recent Project Component**

1. **Home Page Component**
   - **Action**: Create a “Recent Projects” section on the Home or Work page
     that automatically picks the latest 3–4 case studies.
   - **Why**: Helps surface the newest or most relevant content quickly.
   - **Check**: Sort by publish date (or a “featured” field) and display in a
     horizontally scrollable or grid layout.

---

## 17. **Add Projects Page**

1. **If Separate from Case Studies**
   - **Action**: If you want a distinct “Projects” section beyond “Case
     Studies,” create a new route: `app/projects/page.tsx`.
   - **Why**: Could be an alternate categorization or an overview of
     personal/professional projects.
   - **Check**: Confirm it doesn’t duplicate content unnecessarily.

---

## 18. **Custom 404 Page**

1. **Create a Not Found Page**
   - **Action**: In Next.js App Router, add a `not-found.tsx` in the root `app/`
     or inside specific routes if you want a custom 404 for them.
   - **Why**: Provide a branded and helpful 404 message.
   - **Check**: Navigating to a non-existent page triggers your custom 404
     component.

---

## 19. **Add Contact Page**

1. **Form Setup**

   - **Action**:
     - `app/contact/page.tsx` with a form for name, email, message.
   - **Why**: Allows visitors or recruiters to reach out easily.
   - **Check**: Confirm fields are validated (client or server side).

2. **Server Action for Submissions**
   - **Action**: Next.js 13+ allows **Server Actions**. Handle form submissions
     in a server action function that processes or sends the data.
   - **Why**: Keeps secret keys off the client and integrates easily with
     Next.js back-end.
   - **Check**: Form successfully sends data; confirm errors or success
     messages.

---

## 20. **Add SEO Adjustments and Maximize Best Practices**

1. **Metadata & Head**

   - **Action**:
     1. In `layout.tsx` or per page, add dynamic `<title>` and `<meta>` tags.
     2. Use `generateMetadata()` in Next.js to customize each route’s SEO.
   - **Why**: Improves discoverability, sharing, and ranking.
   - **Check**: Use a tool like Lighthouse or any SEO analyzer to confirm best
     practices.

2. **Open Graph & Twitter Cards**
   - **Action**: Add `og:title`, `og:image`, `og:description` in your metadata.
   - **Check**: Link previews appear correctly on social platforms.

---

## 21. **Resend Package (Optional)**

1. **Email Handling**
   - **Action**: If you plan to send emails (like a contact form
     auto-responder), install and configure [Resend](https://resend.com/) or any
     email-sending library.
   - **Why**: Ensures reliable email delivery for contact or password-protected
     case studies.
   - **Check**: Test sending an email from the contact form to confirm
     deliverability.

---

## 22. **Quality Check: Fix Bugs & Clean Code**

1. **Code Review**

   - **Action**:
     1. Eliminate unused imports and console logs.
     2. Add comments explaining tricky logic.
   - **Why**: Makes the codebase more readable and maintainable.
   - **Check**: Linting passes, minimal warnings in console.

2. **Refactor for Simplicity**
   - **Action**: If any component or page is too complex, break it down.
   - **Check**: Components do one job well, easy to read or re-use.

---

## 23. **Deploy to Vercel**

1. **Connect to GitHub / GitLab**

   - **Action**: Push your repo to GitHub, then connect Vercel to your
     repository.
   - **Why**: Automatic deployments on push.
   - **Check**: Confirm the site builds successfully, no build errors,
     environment variables are set.

2. **Environment Variables**
   - **Action**: If using private case study passwords or an email API key, add
     them in Vercel’s project settings.
   - **Check**: Next.js picks them up at build or run time.

---

## 24. **Deploy with Custom Domain**

1. **Domain Settings**
   - **Action**:
     - Purchase or use an existing domain.
     - Add DNS records (CNAME or A) pointing to Vercel.
     - Configure domain in Vercel project settings.
   - **Why**: Branding and professionalism (e.g., `www.yourdomain.com`).
   - **Check**: Domain resolves properly, SSL is active, site is live on custom
     domain.

---

### Final Notes

- **Iterate & Expand**: This checklist can be revisited with each new feature or
  iteration.
- **Version Control**: Keep track of each step in Git commits so you can revert
  if needed.
- **Testing & Analytics**: Consider adding unit tests, integration tests, or
  analytics tools (Google Analytics, Plausible, etc.) for user insights.

By following these steps in order, you’ll have a well-structured, user-friendly,
and easy-to-maintain product designer portfolio with Next.js App Router. Good
luck!
