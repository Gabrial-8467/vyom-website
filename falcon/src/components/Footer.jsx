import React from 'react';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Examples', href: '#examples' },
      { label: 'Installation', href: '#installation' },
      { label: 'Documentation', href: 'https://github.com/Gabrial-8467/falcon' },
    ],
    resources: [
      { label: 'GitHub Repository', href: 'https://github.com/Gabrial-8467/falcon' },
      { label: 'Examples', href: 'https://github.com/Gabrial-8467/falcon/tree/main/examples' },
      { label: 'Language Design', href: 'https://github.com/Gabrial-8467/falcon/blob/main/CHARTER.md' },
      { label: 'License', href: 'https://github.com/Gabrial-8467/falcon/blob/main/LICENSE' },
    ],
    community: [
      { label: 'Contributing', href: 'https://github.com/Gabrial-8467/falcon#contributing' },
      { label: 'Issues', href: 'https://github.com/Gabrial-8467/falcon/issues' },
      { label: 'Discussions', href: 'https://github.com/Gabrial-8467/falcon/discussions' },
      { label: 'Releases', href: 'https://github.com/Gabrial-8467/falcon/releases' },
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gabrial-8467/falcon', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-falcon-400 to-falcon-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl">Falcon</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A modern, production-ready programming language designed to be easy to learn, 
              hackable, and built for experiments and real projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-falcon-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-falcon-400 transition-colors duration-200"
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-falcon-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-falcon-400 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Falcon Programming Language. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="https://github.com/Gabrial-8467/falcon/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-falcon-400 transition-colors duration-200"
              >
                Apache License 2.0
              </a>
              <div className="flex items-center text-gray-400">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for the community
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-gray-800 rounded-lg px-4 py-2">
            <span className="text-falcon-400 font-mono text-sm">v1.0.0</span>
            <span className="text-gray-500 mx-2">•</span>
            <span className="text-gray-400 text-sm">Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
