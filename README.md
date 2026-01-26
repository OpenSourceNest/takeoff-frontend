# TAKEOFF - Open Source Nest's Flagship Event

TAKEOFF is Open Source Nest's flagship annual event; celebrating real community impact, spotlighting emerging contributors, and setting the direction for the year ahead in open source.

## 🚀 Features

- **Mobile-First Responsive Design**
- **Smooth Animations**
- **Accessibility Compliant**
- **Performance Optimized**
- **Modern UI**

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Material-UI Icons, Iconify
- **Forms**: Custom form handling with validation
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
takeoff-open-souce-nest/
├── app/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── CTAContainer.tsx
│   │   │   ├── CustomSelect.tsx
│   │   │   ├── SectionBackground.tsx
│   │   │   └── SectionPill.tsx
│   │   ├── AboutSection.tsx
│   │   ├── AudienceSection.tsx
│   │   ├── ConnectModal.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ImpactSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── RegisterForm.tsx
│   │   └── SponsorsSection.tsx
│   ├── globals.css            # Global styles and Tailwind config
│   ├── layout.tsx             # Root layout with metadata
│   ├── not-found.tsx          # 404 page
│   ├── page.tsx               # Home page
│   ├── register/              # Registration page
│   └── store/                 # State management
│       ├── useModalStore.ts
│       └── useRegisterStore.ts
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🏗 Architecture

### Component Architecture
- **Layout Components**: Navbar, Footer, ConnectModal for consistent navigation
- **Section Components**: Modular sections (Hero, About, Impact, etc.) for easy maintenance
- **UI Components**: Reusable elements like Button, CTAContainer for consistency
- **Form Components**: RegisterForm with validation and state management

### State Management
- **Zustand Stores**: useModalStore for modal states, useRegisterStore for form data
- **Local State**: React hooks for component-specific state

### Styling Approach
- **Tailwind CSS**: Utility-first CSS with custom theme colors
- **Responsive Design**: Mobile-first approach with sm/md/lg breakpoints
- **Dark Theme**: Consistent dark color scheme with accent colors

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd takeoff-open-souce-nest
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

```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- Primary: Dark theme with cream/beige accents
- Accent: Orange (#A9500C) for highlights
- Text: White on dark backgrounds

### Typography
- Font: Montserrat (weights 400-800)
- Responsive sizing: Smaller on mobile, larger on desktop

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered animations
- Interactive hover effects

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interactions
- Optimized text sizes and spacing
- Fast loading on mobile networks

## 🚀 Performance

- Next.js Image optimization
- Code splitting and lazy loading
- Compressed assets
- Efficient bundling with SWC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is part of Open Source Nest's initiatives.

## 📞 Contact

For questions or support, contact the Open Source Nest team at info@opensourcenest.org

---

Built for the open source community
