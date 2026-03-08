import { Download, Monitor, CheckCircle, Shield, Zap, Package } from 'lucide-react'
import PageSEO from '../components/PageSEO'

const InstallationPage = () => {
  return (
    <>
      <PageSEO
        title="Installation - Get Started with Vyom Programming Language"
        description="Install Vyom programming language with git clone and pip install. Get the complete development environment with VM, interpreter, REPL, and comprehensive examples."
        keywords="Vyom installation, git clone Vyom, pip install Vyom, Vyom programming language setup, Vyom development environment, install Vyom CLI"
        canonicalUrl="/install"
      />
      <div className="min-h-screen bg-gray-900 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📦 Installation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with Vyom - the modern programming language designed for simplicity and power. Download the Windows installer for a quick and easy setup.
            </p>
          </div>

          <div className="space-y-12">
            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4">
                  <Zap className="text-orange-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Setup</h3>
                <p className="text-gray-400 text-sm">Get up and running in minutes with our streamlined installer</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4">
                  <Shield className="text-orange-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
                <p className="text-gray-400 text-sm">Digitally signed installer ensures safe and authentic installation</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4">
                  <Package className="text-orange-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Package</h3>
                <p className="text-gray-400 text-sm">Includes interpreter, REPL, and comprehensive examples</p>
              </div>
            </div>

            {/* Windows Installer Section */}
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30 animate-fadeInUp">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-xl mr-4">
                    <Monitor className="text-orange-500" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Windows Installer</h2>
                    <p className="text-orange-400">Vyom v1.0.0 - Easy Setup</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 text-lg">
                  Download the Windows installer for a quick and easy installation on Windows systems.
                </p>

                <div className="bg-gray-900 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h3 className="text-white font-semibold mb-4">System Requirements:</h3>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      Windows 10 or later (64-bit)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      2 GB RAM minimum (4 GB recommended)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      500 MB disk space
                    </li>
                  </ul>
                  <h3 className="text-white font-semibold mb-4">Installation Steps:</h3>
                  <ol className="text-gray-300 space-y-2">
                    <li>1. Download the Windows installer below</li>
                    <li>2. Run the downloaded <code className="bg-gray-800 px-2 py-1 rounded">vyom-setup-x64.exe</code> file</li>
                    <li>3. Follow the installation wizard</li>
                    <li>4. Vyom will be available in your command line</li>
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/vyom-setup-x64.exe"
                    download
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-300 hover-lift"
                  >
                    <Download className="mr-2" size={24} />
                    Download for Windows
                  </a>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">Version 1.0.0 • 45.2 MB</p>
                    <p className="text-gray-500 text-xs mt-1">Last updated: March 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default InstallationPage
