import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Examples', href: '/examples' },
    { name: 'Installation', href: '/install' },
  ]

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 animate-slideInFromTop">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center animate-fadeInLeft">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/vyom.png" 
                alt="Vyom Programming Language Logo" 
                className="h-16 w-auto mr-3 rounded-lg transition-all duration-300" 
              />
              <a href="/" className="text-2xl font-bold text-white hover:text-orange-500 transition-colors">
                Vyom
              </a>
            </div>
          </div>

          <div className="hidden md:block animate-fadeInRight">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover-lift animate-fadeInUp animate-delay-${index * 100}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden animate-fadeInRight">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-orange-500 p-2 transition-colors duration-300 hover-lift"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 animate-fadeInUp">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-300 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover-lift animate-fadeInLeft animate-delay-${index * 50}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
