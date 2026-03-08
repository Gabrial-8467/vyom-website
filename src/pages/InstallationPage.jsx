import { Download, Monitor, Play, CheckCircle, FileText, Github } from 'lucide-react'
import Button from '../components/Button'
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              📦 Installation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with Vyom by cloning the repository and installing the package.
            </p>
          </div>

          <div className="space-y-12">
            {/* Clone Repository Section */}
            <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30 animate-fadeInUp animate-delay-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-xl mr-4">
                    <Download className="text-orange-500" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Clone from GitHub</h2>
                    <p className="text-orange-400">Vyom v1.0.0</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg">
                  Clone the repository and install Vyom using pip for a complete development environment.
                </p>
                
                <div className="bg-gray-900 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
                  <h3 className="text-white font-semibold mb-4">Step 1: Clone the Repository</h3>
                  <div className="bg-black rounded-lg p-4 mb-4">
                    <pre className="text-green-400 text-sm font-mono">
                      <code>git clone https://github.com/Gabrial-8467/vyom.git
cd vyom</code>
                    </pre>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-4">Step 2: Set Up Virtual Environment</h3>
                  <div className="bg-black rounded-lg p-4 mb-4">
                    <pre className="text-green-400 text-sm font-mono">
                      <code>python -m venv myenv
# Windows
myenv\Scripts\activate
# macOS/Linux
source myenv/bin/activate</code>
                    </pre>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-4">Step 3: Install Vyom</h3>
                  <div className="bg-black rounded-lg p-4">
                    <pre className="text-green-400 text-sm font-mono">
                      <code>pip install -e .</code>
                    </pre>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/Gabrial-8467/vyom" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-300 hover-lift"
                >
                  <Github className="mr-2" size={24} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstallationPage
