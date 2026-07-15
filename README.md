# Adia - Luxury Jewelry E-Commerce Platform

A bespoke, high-end luxury jewelry e-commerce platform built with Next.js App Router and Tailwind CSS.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About
Adia is a conceptual high-end luxury jewelry brand that marries the timeless art of fine jewelry with cutting-edge web architecture. Designed to showcase exquisite craftsmanship through an immersive, editorial-style user experience, the platform mirrors the white-glove service found in the world's most exclusive boutiques.

What began as a passionate hobby project to build a stunning landing page has rapidly evolved into Adia: a fully-fledged e-commerce platform. It emphasizes:
- **Aesthetic Excellence:** A highly curated, minimalist design language using sophisticated typography (Cormorant Garamond and Inter) and a refined color palette to let the jewelry speak for itself.
- **Generational Heirlooms:** A focus on bespoke commissions, rare ethically sourced gemstones, and master artisanship that outlasts trends.
- **Performant Luxury:** Utilizing Next.js Server Components, dynamic routing, and robust state management to ensure the digital browsing experience is as seamless and weightless as the physical jewelry. 

## Features
- **Editorial Landing Experience:**
  - **Hero Section:** Full-screen portrait with elegant typography and staggered CSS keyframe entrance animations.
  - **Story & Lookbook:** Editorial layouts and horizontal scroll collages showcasing signature pieces.
  - **Gemologist's Ledger:** Interactive accordion index revealing detailed gem information alongside a gorgeous image collage.
- **E-Commerce Catalog (`/collections`):**
  - **Dynamic Routing:** Individual product pages rendered dynamically based on selected gemstones (`[stone]`).
  - **Interactive Search:** Real-time collection searching powered by `CollectionsSearch` and managed globally via Context API.
  - **Advanced Filtering & Sorting:** Modular `FilterBar`, `FilterPanel`, and `SortPanel` components allow users to refine their discovery experience.
  - **Pagination & Display:** Dedicated `Pagination` component for browsing extensive catalogs and `ProductGrid`/`ProductCard` components for graceful mock data rendering.
- **Modern Architecture:** Clean organization using Next.js Route Groups (e.g., `(informational)` for static pages) to keep the application shell uncluttered.

## Tech Stack
- **Framework:** [Next.js 16.x](https://nextjs.org/) (App Router, Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Utilizing the new `@theme inline` block for custom design tokens)
- **State Management:** React Hooks and Context API
- **Typography:** Cormorant Garamond (Serif), Dancing Script (Script) optimized via `next/font/google`

## Installation
To run this project locally, ensure you have Node.js installed, then clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/adia.git

# Navigate into the project directory
cd adia

# Install dependencies
npm install
```

## Usage
Start the development server to preview the application:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can navigate through the landing page, explore the `/collections` catalog, and interact with the search and filtering modules.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.
