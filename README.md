# Lukren — High-Performance Tech Agency

**Lukren** is a premium tech agency portfolio designed for industry leaders who demand excellence in web architecture, artificial intelligence integration, cybersecurity, and cloud operations.

## ✨ B2B Enterprise Light Theme

The platform has been redesigned from a neon cyberpunk aesthetic to a **Tier-1 Corporate Light Theme** tailored for B2B enterprise clients. The new design focuses on extreme readability, trust, and premium finishing. 

### Key Visual Highlights
- **Corporate Palette**: Crisp `slate-50` backgrounds, high-contrast `slate-900` typography, and trust-inspiring `blue-600` accents.
- **Actionable Layouts**: Soft shadow boxes, pristine white cards, and smooth gradient transitions engineered for high conversion rates.
- **Interactive Particle Canvas**: A custom HTML5 Canvas particle network in the Hero section, providing a dynamic yet subdued technological backdrop.
- **Premium 3D Physics**: Friction-based 3D tilt interactions on Case Study cards using Framer Motion.

## 🚀 Technical Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd tech-agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/` - Global CSS, App Router layout, and the unified single-page entry point (`page.tsx`).
- `components/Sections/` - Core marketing content:
  - `Hero.tsx` - High-impact hero with Canvas background
  - `ExpandedServices.tsx` - Comprehensive capability grid
  - `Process.tsx` - Our structured methodology timeline
  - `CaseStudies.tsx` - 3D interactive proof-of-work cards
  - `DiscoveryForm.tsx` - Multi-step lead generation architecture
  - `Blog.tsx` - Engineering insights UI
  - `FAQ.tsx` - Enterprise-grade accordion list
  - `CTABanner.tsx` - High-conversion closing banner
- `components/layout/` - Global shells (`Navbar.tsx` & `Footer.tsx`).
- `components/ui/` - Abstracted interactive elements (`TrustTicker.tsx`, `SpotlightCard.tsx`, `CanvasBackground.tsx`).

## 📄 License

This repository is reserved for the private web infrastructure of Lukren. All rights reserved.
