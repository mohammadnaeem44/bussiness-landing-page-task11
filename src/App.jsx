import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ProductShowcase />
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  )
}

export default App
