import { Github, Twitter, Mail, ExternalLink, Users, BookOpen, Code } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gabrial-8467/vyom', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/', icon: ExternalLink },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Examples', href: '/examples', icon: Code },
    { name: 'Installation', href: '/install', icon: ExternalLink }
  ]

  const resources = [
    { name: 'GitHub Repository', href: 'https://github.com/Gabrial-8467/vyom', icon: Github },
    { name: 'API Reference', href: '/docs', icon: BookOpen },
    { name: 'Examples', href: '/examples', icon: Code },
    { name: 'Installation', href: '/install', icon: ExternalLink }
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800 border-t border-gray-700/50 relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fb923c' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 animate-fadeInUp">
            <div className="flex items-center mb-6">
              <img 
                src="/vyom.png" 
                alt="Vyom Logo" 
                className="h-14 w-auto" 
              />
              <div className="ml-4">
                <h3 className="text-3xl font-bold text-gradient-animate">Vyom</h3>
                <p className="text-sm text-gray-400">
                  Vyom Programming Language Features (v1.0.0) with &hearts; by Gabrial Deora.
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover why Vyom is the perfect modern programming language for your next project. Vyom is a modern, production-ready programming language designed to be easy to learn, with hybrid execution, and modular architecture.
              <br />
              <span className="text-orange-400 font-semibold">Expressive. Hackable. Built for experiments and real projects.</span>
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`group relative p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover-lift animate-fadeInLeft animate-delay-${index * 100}`}
                  aria-label={social.label}
                >
                  <social.icon className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300" size={20} />
                  <div className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp animate-delay-200">
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`flex items-center text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1 group animate-fadeInRight animate-delay-${(index + 1) * 50}`}
                  >
                    <link.icon className="mr-2 text-gray-500 group-hover:text-orange-500 transition-colors duration-300" size={16} />
                    <span className="group-hover:font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fadeInUp animate-delay-300">
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className={`flex items-center text-gray-300 hover:text-orange-500 transition-all duration-300 hover:translate-x-1 group animate-fadeInRight animate-delay-${(index + 1) * 50}`}
                  >
                    <resource.icon className="mr-2 text-gray-500 group-hover:text-orange-500 transition-colors duration-300" size={16} />
                    <span className="group-hover:font-medium">{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0 animate-fadeInLeft">
              <p className="text-gray-400 text-sm">
                © {currentYear} Vyom Programming Language. 
                <span className="text-orange-400 font-medium"> Licensed under Apache License 2.0.</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with ❤️ for the developer community
              </p>
            </div>
            
            <div className="flex items-center space-x-6 animate-fadeInRight">
              <div className="flex items-center text-gray-400 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span>v1.0.0</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                <span>Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
