import { Github, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/src/assets/minfnlogo.png" alt="Falcon Logo" className="h-12 w-auto mr-3" />
              <h3 className="text-2xl font-bold text-orange-500">Falcon</h3>
            </div>
            <p className="text-gray-400 mb-4">
              A modern, lightweight programming language designed for experiments and real projects.
              Expressive. Hackable. Built for developers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/docs" className="text-gray-400 hover:text-orange-500 transition-colors">Documentation</Link></li>
              <li><Link to="/examples" className="text-gray-400 hover:text-orange-500 transition-colors">Examples</Link></li>
              <li><Link to="/install" className="text-gray-400 hover:text-orange-500 transition-colors">Installation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contributing</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Falcon Programming Language. Released under Apache License 2.0.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
