import { useState } from 'react'
import { Copy, Check, Download, Terminal, Github, Package } from 'lucide-react'

const InstallationPage = () => {
  const [copiedCommand, setCopiedCommand] = useState(null)

  const copyToClipboard = (command, commandId) => {
    navigator.clipboard.writeText(command)
    setCopiedCommand(commandId)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  const installationSteps = [
    {
      title: 'Clone the Repository',
      description: 'Get the latest Falcon source code from GitHub',
      commands: [
        'git clone https://github.com/Gabrial-8467/falcon.git',
        'cd falcon'
      ],
      icon: <Github size={20} />
    },
    {
      title: 'Set Up Environment',
      description: 'Create and activate a Python virtual environment',
      commands: [
        'python -m venv myenv',
        '# Windows',
        'myenv\\Scripts\\activate',
        '# Linux/Mac',
        'source myenv/bin/activate'
      ],
      icon: <Terminal size={20} />
    },
    {
      title: 'Install Dependencies',
      description: 'Install required Python packages (optional but recommended)',
      commands: [
        'pip install -r requirements.txt'
      ],
      icon: <Package size={20} />
    },
    {
      title: 'Install Falcon',
      description: 'Install Falcon in development mode',
      commands: [
        'pip install -e .'
      ],
      icon: <Download size={20} />
    }
  ]

  const usageExamples = [
    {
      title: 'Start the REPL',
      description: 'Interactive Falcon development environment',
      command: 'python -m falcon.repl',
      output: `Falcon REPL — v1.0.0  
falcon> var x := 5;
falcon> x * 2
10
falcon> function greet(name) { show("Hello, " + name + "!"); }
falcon> greet("Falcon")
Hello, Falcon!
falcon> .quit`
    },
    {
      title: 'Run a Falcon Program',
      description: 'Execute .fn files using the runner',
      commands: [
        '# Using Python module',
        'python -m falcon.runner examples/hello.fn',
        '',
        '# Using the package entry point',
        'falcon examples/hello.fn'
      ],
      output: `Compiled module: examples/hello.fn
[VM] Running...
Hello, Falcon!`
    }
  ]

  const systemRequirements = [
    { os: 'Windows', versions: ['Windows 10', 'Windows 11'], python: '3.8+' },
    { os: 'macOS', versions: ['macOS 10.15+', 'macOS 11+', 'macOS 12+'], python: '3.8+' },
    { os: 'Linux', versions: ['Ubuntu 20.04+', 'Debian 11+', 'Fedora 35+', 'Arch Linux'], python: '3.8+' }
  ]

  return (
    <section id="install" className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Installation Guide</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get Falcon up and running on your system in just a few minutes
          </p>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemRequirements.map((system, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{system.os}</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400 text-sm">Supported Versions:</span>
                    <ul className="text-gray-300 text-sm mt-1">
                      {system.versions.map((version, i) => (
                        <li key={i} className="ml-2">• {version}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Python Version:</span>
                    <p className="text-gray-300 text-sm mt-1">{system.python}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Installation Steps</h2>
          <div className="space-y-6">
            {installationSteps.map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-lg mr-3">
                      <span className="text-orange-500">{step.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {step.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="mb-3 last:mb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-400">
                          {command.startsWith('#') ? 'Comment' : 'Command'}
                        </span>
                        {!command.startsWith('#') && (
                          <button
                            onClick={() => copyToClipboard(command, `step-${index}-${cmdIndex}`)}
                            className="flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                          >
                            {copiedCommand === `step-${index}-${cmdIndex}` ? (
                              <Check className="text-green-500" size={16} />
                            ) : (
                              <Copy size={16} />
                            )}
                          </button>
                        )}
                      </div>
                      <div className={`rounded-lg p-3 border font-mono text-sm ${
                        command.startsWith('#') 
                          ? 'bg-gray-900 border-gray-700 text-gray-400 italic'
                          : 'bg-gray-950 border-gray-800 text-green-400'
                      }`}>
                        {command}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Getting Started</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {usageExamples.map((example, index) => (
              <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>
                  <p className="text-gray-300">{example.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-400">Command</span>
                      <button
                        onClick={() => copyToClipboard(example.command, `usage-${index}`)}
                        className="flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                      >
                        {copiedCommand === `usage-${index}` ? (
                          <Check className="text-green-500" size={16} />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                      <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                        <code>{example.command}</code>
                      </pre>
                    </div>
                  </div>
                  
                  {example.commands && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-400">Alternative Commands</span>
                      </div>
                      {example.commands.map((cmd, cmdIndex) => (
                        <div key={cmdIndex} className="mb-2 last:mb-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500">
                              {cmd.startsWith('#') ? 'Comment' : 'Option'}
                            </span>
                            {!cmd.startsWith('#') && (
                              <button
                                onClick={() => copyToClipboard(cmd, `alt-${index}-${cmdIndex}`)}
                                className="flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                              >
                                {copiedCommand === `alt-${index}-${cmdIndex}` ? (
                                  <Check className="text-green-500" size={14} />
                                ) : (
                                  <Copy size={14} />
                                )}
                              </button>
                            )}
                          </div>
                          <div className={`rounded p-2 border text-xs font-mono ${
                            cmd.startsWith('#') 
                              ? 'bg-gray-900 border-gray-700 text-gray-400 italic'
                              : 'bg-gray-950 border-gray-800 text-green-400'
                          }`}>
                            {cmd}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-gray-400">Output</span>
                    </div>
                    <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                      <pre className="text-blue-400 text-sm font-mono">
                        {example.output}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Quick Start</h2>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 mb-4">Once installed, you can immediately start using Falcon:</p>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">1. Create your first Falcon program:</h4>
                <div className="bg-gray-950 rounded-lg p-3 border border-gray-800">
                  <pre className="text-green-400 text-sm font-mono">
                    <code>{`// hello.fn
show("Hello, Falcon!");
function greet(name) {
    return "Hello, " + name + "!";
}
show(greet("World"));`}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">2. Run your program:</h4>
                <div className="bg-gray-950 rounded-lg p-3 border border-gray-800">
                  <pre className="text-green-400 text-sm font-mono">
                    <code>falcon hello.fn</code>
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">3. Start experimenting in the REPL:</h4>
                <div className="bg-gray-950 rounded-lg p-3 border border-gray-800">
                  <pre className="text-green-400 text-sm font-mono">
                    <code>python -m falcon.repl</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Troubleshooting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Common Issues</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>Module not found:</strong> Ensure you activated the virtual environment before running Falcon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>Permission denied:</strong> Use administrator privileges or install in user directory with <code className="bg-gray-700 px-1 rounded">--user</code></span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>Python version:</strong> Falcon requires Python 3.8 or higher</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Getting Help</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Check the <strong>GitHub Issues</strong> for known problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Join our <strong>Discord Community</strong> for live support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Review the <strong>examples/</strong> directory for working code samples</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstallationPage
