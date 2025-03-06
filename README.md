# Drew Clark's Blog

A simple, modern blog built with Next.js, React, and Tailwind CSS. This project showcases a markdown-based blog system with clean design and responsive UI.

## Features

- 📝 Markdown-based content management
- 🗂️ Organized blog posts with frontmatter support
- 🔄 Dynamic routing for blog posts
- 🎨 Clean, responsive design with Tailwind CSS
- 📱 Mobile-friendly layout
- ⚡ Fast page loads with Next.js App Router

## Project Structure

```
├── posts/                 # Markdown blog posts
├── public/                # Static assets
└── src/
    ├── app/              # Next.js App Router pages
    │   ├── blog/         # Blog routes
    │   │   └── [slug]/   # Individual post routes
    ├── components/       # React components
    └── lib/              # Utility functions
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating Blog Posts

Blog posts are written in Markdown and stored in the `posts` directory. Each post should include frontmatter with the following format:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
---

# Your markdown content here
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **gray-matter** - Frontmatter parser
- **marked** - Markdown to HTML converter

## Development

- Edit components in `src/components/`
- Modify pages in `src/app/`
- Add utility functions in `src/lib/`
- Create or edit blog posts in `posts/`

## Deployment

This blog can be easily deployed on [Vercel](https://vercel.com/) or any other Next.js-compatible hosting platform.

```bash
npm run build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
