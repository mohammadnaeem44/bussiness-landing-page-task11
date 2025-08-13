# Business Landing Page

A modern, responsive business landing page built with React and Vite, featuring a clean design and smooth user experience.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional interface with smooth animations
- **Interactive Components**: 
  - Hero section with compelling call-to-action
  - Features showcase highlighting key benefits
  - Product showcase with visual demonstrations
  - Contact form for lead generation
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **SEO Ready**: Optimized meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS for utility-first styling
- **Build Tool**: Vite for fast development and optimized builds
- **Linting**: ESLint with modern configuration
- **Icons**: React ecosystem compatible

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd business-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Project Structure

```
business-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with CTA
│   │   ├── Features.jsx      # Features showcase
│   │   ├── ProductShowcase.jsx # Product demonstration
│   │   └── ContactForm.jsx   # Contact form component
│   ├── App.jsx              # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md
```

## 🎨 Customization

### Colors & Branding
- Update colors in `tailwind.config.js`
- Modify component styles using Tailwind classes
- Replace assets in the `public` folder

### Content Updates
- Edit text content directly in component files
- Update images by replacing files in the assets folder
- Modify form fields in `ContactForm.jsx`

### Contact Form Integration
- The contact form is ready for backend integration
- Currently logs form data to console on submission
- Add your API endpoint in `ContactForm.jsx` handleSubmit function

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

This project can be easily deployed to various platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for CI/CD

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support, email [your-email@domain.com] or join our Slack channel.
