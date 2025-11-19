# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing my work, skills, and professional experience.

## 🚀 Features

- **Profile Section**: Personal introduction with profile image, name, and quote
- **Social Links**: Quick access to GitHub and LinkedIn profiles
- **Tech Stack Display**: Showcase of technologies and skills
- **Certificates Section**: Display of professional certifications
- **Projects Showcase**: Portfolio of completed projects
- **Modern UI**: Clean, minimalist design with smooth animations
- **Responsive Design**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── img.jpg          # Profile image
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── navigation-menu.tsx
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── style.css        # Global styles
├── components.json       # shadcn/ui configuration
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Update Profile Information

Edit `src/App.tsx` to update:
- Profile image path
- Name and quote
- Social media links

### Styling

The project uses Tailwind CSS for styling. Customize colors, spacing, and other design tokens in:
- `tailwind.config.js` - Tailwind configuration
- `src/style.css` - Global CSS variables

### Adding Components

This project uses shadcn/ui components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Development

The project uses:
- **TypeScript** for type safety
- **Vite** for fast development and building
- **React Strict Mode** for additional development checks
- **Path aliases** (`@/`) for cleaner imports

## 📝 License

This project is private and personal.

## 👤 Author

**Matome Tjale**

- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

*"less is always more; it's all about simplicity."*

