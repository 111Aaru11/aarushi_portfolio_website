# Personal Portfolio Website

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark professional theme with smooth animations, perfect for showcasing your work as a Data Science & AI enthusiast.

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Modern UI**: Dark professional theme with smooth animations and transitions
- **Multiple Sections**:
  - Hero section with social links
  - About section with professional introduction
  - Skills showcase with attractive badges
  - Projects section with detailed cards
  - Education timeline
  - Training & workshops
  - Certifications
  - Achievements
  - Social work & experience
  - Contact form
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive cards and buttons
- **Professional Design**: Suitable for sharing with professors and recruiters

## Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icon library

## Local Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Updating Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update your name
   - Change social media links (GitHub, LinkedIn, Email)
   - Modify tagline

2. **About Section** (`src/components/About.tsx`):
   - Add your photograph (replace the placeholder icon)
   - Update professional introduction
   - Customize your interests and goals

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add or remove skills
   - Organize skills into categories

4. **Projects Section** (`src/components/Projects.tsx`):
   - Update project details
   - Add GitHub and demo links
   - Change project descriptions and technologies

5. **Education Section** (`src/components/Education.tsx`):
   - Update degree information
   - Add your university details
   - Modify years and descriptions

6. **Training Section** (`src/components/Training.tsx`):
   - Add your training programs
   - Update organizations and durations

7. **Certificates Section** (`src/components/Certificates.tsx`):
   - Add your certifications
   - Update issuing organizations
   - Add credential links

8. **Achievements Section** (`src/components/Achievements.tsx`):
   - Showcase your accomplishments
   - Update dates and descriptions

9. **Experience Section** (`src/components/Experience.tsx`):
   - Add work experience
   - Update social work details
   - Modify contributions

10. **Contact Section** (`src/components/Contact.tsx`):
    - Update email address
    - Change social media links

11. **Footer** (`src/components/Footer.tsx`):
    - Update copyright name

### Adding Your Photo

Replace the placeholder icon in the About section with your actual photo:

```tsx
// In src/components/About.tsx, replace:
<User size={200} className="text-white opacity-50" />

// With:
<img
  src="/path-to-your-photo.jpg"
  alt="Your Name"
  className="w-full h-full object-cover rounded-2xl"
/>
```

### Color Customization

The portfolio uses a blue and slate color scheme. To change colors, update the Tailwind classes:

- Primary color: `blue-600`, `blue-700`, `blue-800`
- Background: `slate-800`, `slate-900`
- Text: `white`, `gray-300`, `gray-400`

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Environment Variables

No environment variables are required for basic deployment. If you add features requiring API keys, add them in Vercel's dashboard under:
Project Settings → Environment Variables

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Training.tsx
│   │   ├── Certificates.tsx
│   │   ├── Achievements.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Performance Optimizations

- Lazy loading for images
- Optimized animations using CSS transforms
- Minimal dependencies
- Tree-shaking with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For any questions or suggestions, feel free to reach out via the contact form on the website or through social media links.

---

Built with ❤️ using React and Tailwind CSS
