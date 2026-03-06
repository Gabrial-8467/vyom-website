import { Download, Monitor, Play, CheckCircle, FileText } from 'lucide-react'
import Button from '../components/Button'
import PageSEO from '../components/PageSEO'

const InstallationPage = () => {
  return (
    <>
      <PageSEO
        title="Installation - Download Vyom Programming Language"
        description="Download and install Vyom programming language on Windows. Get the official installer with compiler, VM, REPL, and development tools. Start coding in minutes."
        keywords="Vyom installation, download Vyom programming language, Vyom compiler, Vyom VM, install Vyom Windows, programming language download"
        canonicalUrl="/install"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            📦 Installation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started with Vyom in seconds. Simply download the installer and run it.
          </p>
        </div>

        <div className="space-y-12">
          {/* Main Download Section */}
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30 animate-fadeInUp animate-delay-200">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-xl mr-4">
                  <Monitor className="text-orange-500" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Windows Installer</h2>
                  <p className="text-orange-400">Vyom v1.0.0</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg">
                Download the official Windows installer (.exe) and install Vyom with just a few clicks.
              </p>
              
              <a 
                href="/vyom-setup-x64.exe" 
                download
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-300 hover-lift"
              >
                <Download className="mr-2" size={24} />
                Download Vyom Installer
              </a>
              
              <p className="text-gray-400 text-sm mt-4">
                ✅ Compatible with Windows 10/11
              </p>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 animate-fadeInUp animate-delay-300">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4">
                <Play className="text-orange-500" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-white">Installation Steps</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Download the Installer</h3>
                  <p className="text-gray-300">Click the download button above to get the Vyom installer (.exe file).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Run the Installer</h3>
                  <p className="text-gray-300">Double-click the downloaded .exe file and follow the installation wizard.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Start Using Vyom</h3>
                  <p className="text-gray-300">Launch Vyom from your Start Menu or run <code className="bg-gray-700 px-2 py-1 rounded">vyom</code> in your terminal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Included */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 animate-fadeInUp animate-delay-400">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4">
                <CheckCircle className="text-orange-500" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-white">What's Included</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span className="text-gray-300">Vyom Compiler & VM</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span className="text-gray-300">Interactive REPL</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span className="text-gray-300">Command-line Tools</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span className="text-gray-300">Example Programs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span className="text-gray-300">Built-in Functions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span className="text-gray-300">Error Handling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 animate-fadeInUp animate-delay-500">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4">
                <Play className="text-orange-500" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-white">Quick Start</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Start the REPL</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                  <pre className="text-green-400 font-mono">
                    <code>vyom</code>
                  </pre>
                </div>
                <p className="text-gray-400 text-sm mt-2">Opens the interactive Vyom development environment</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Run a Vyom Program</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                  <pre className="text-green-400 font-mono">
                    <code>vyom program.vn</code>
                  </pre>
                </div>
                <p className="text-gray-400 text-sm mt-2">Execute any .vn file with Vyom</p>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 animate-fadeInUp animate-delay-600">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mr-4">
                <Monitor className="text-orange-500" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-white">System Requirements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-medium mb-3">Operating System</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Windows 10 (version 1903 or later)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Windows 11 (all versions)
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3">Hardware</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    64-bit processor (x64)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    100 MB free disk space
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center animate-fadeInUp animate-delay-700">
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚀 Ready to Start Coding?
              </h3>
              <p className="text-gray-300 mb-6">
                Now that you have Vyom installed, explore the documentation and examples to start building amazing programs!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="/docs" className="hover-lift">
                  <FileText className="mr-2" size={20} />
                  View Documentation
                </Button>
                <Button variant="outline" size="lg" href="/examples" className="hover-lift">
                  Browse Examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default InstallationPage
