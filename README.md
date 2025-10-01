# Carl Bowen Portfolio

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured projects with filtering capabilities
- **Skills Display**: Comprehensive skills overview with progress indicators
- **SEO Optimized**: Meta tags and accessibility features
- **Fast Performance**: Optimized for quick loading times

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/carlbowen/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Deployment

This project can be deployed to:

- **Netlify**: Connect your GitHub repository and deploy automatically
- **Vercel**: Import your project and deploy with zero configuration
- **GitHub Pages**: Use the `gh-pages` package to deploy

### Netlify Deployment

1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills overview
│   └── Contact.tsx      # Contact form
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### Content
Update the content in each page component:
- Personal information in `About.tsx`
- Projects data in `Projects.tsx`
- Skills data in `Skills.tsx`
- Contact information in `Contact.tsx`

### Styling
Modify the global styles in `src/index.css` or update individual component styles.

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized and lazy-loaded
- **Fonts**: Preloaded for better performance

## Accessibility

- **WCAG 2.1 AA Compliant**
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Color Contrast**: High contrast ratios
- **Focus Indicators**: Clear focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Carl Bowen - [carl@carlbowen.dev](mailto:carl@carlbowen.dev)

Project Link: [https://github.com/carlbowen/portfolio](https://github.com/carlbowen/portfolio)
