import React from 'react';
import { Copy, Check, Terminal, Download, Play } from 'lucide-react';
import { useState } from 'react';

const Installation = () => {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(id);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const installSteps = [
    {
      title: 'Clone the Repository',
      description: 'Get the Falcon source code from GitHub',
      commands: [
        'git clone https://github.com/Gabrial-8467/falcon.git',
        'cd falcon'
      ]
    },
    {
      title: 'Set Up Environment',
      description: 'Create and activate a virtual environment',
      commands: [
        '# Create virtual environment',
        'python -m venv myenv',
        '',
        '# Activate on Windows',
        'myenv\\Scripts\\activate',
        '',
        '# Or activate on Unix/macOS',
        'source myenv/bin/activate'
      ]
    },
    {
      title: 'Install Dependencies',
      description: 'Install the required Python packages',
      commands: [
        'pip install -r requirements.txt'
      ]
    },
    {
      title: 'Install Falcon',
      description: 'Install Falcon in development mode',
      commands: [
        'pip install -e .'
      ]
    }
  ];

  const usageExamples = [
    {
      title: 'Start the REPL',
      description: 'Interactive development environment',
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
      description: 'Execute a .fn file',
      command: 'python -m falcon.runner examples/hello.fn',
      output: `Compiled module: examples/hello.fn
[VM] Running...
Hello, Falcon!`
    },
    {
      title: 'Using the Package Entry Point',
      description: 'Direct command after installation',
      command: 'falcon examples/hello.fn',
      output: `Compiled module: examples/hello.fn
[VM] Running...
Hello, Falcon!`
    }
  ];

  const CommandBlock = ({ command, id, showOutput = false, output = '' }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400 font-mono">Terminal</span>
        </div>
        <button
          onClick={() => copyToClipboard(command, id)}
          className="flex items-center space-x-1 text-gray-400 hover:text-falcon-400 transition-colors duration-200 text-sm"
        >
          {copiedCommand === id ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4">
        <pre className="text-green-400 font-mono text-sm">
          <code>{command}</code>
        </pre>
        {showOutput && output && (
          <>
            <div className="border-t border-gray-700 my-3"></div>
            <pre className="text-gray-300 font-mono text-sm">
              <code>{output}</code>
            </pre>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section id="installation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📦 <span className="gradient-text">Installation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get Falcon up and running on your system in just a few minutes. 
            Follow these simple steps to install and start using Falcon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {installSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-falcon-100 rounded-full flex items-center justify-center">
                  <span className="text-falcon-600 font-semibold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <CommandBlock 
                command={step.commands.join('\n')} 
                id={`install-${index}`} 
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎨 Passive Built-in Formatter
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-6 text-center">
              Falcon includes a <strong>passive AST-based formatter</strong> that automatically normalizes 
              code structure during execution. No manual commands required.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Input Code</h4>
                <div className="code-block">
                  <pre>
                    <code>
{`function add(a,b){return a+b}
var x:=5
var y:=10
show(add(x,y))`}
                    </code>
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Automatically Normalized</h4>
                <div className="code-block">
                  <pre>
                    <code>
{`function add(a, b) {
    return a + b
}

var x := 5
var y := 10
show(add(x, y))`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-falcon-50 rounded-lg border border-falcon-200">
              <p className="text-sm text-falcon-700">
                <strong>Key Features:</strong> Automatic execution • Memory-only • Deterministic • Graceful fallback
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ▶ <span className="gradient-text">Running Falcon</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {usageExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Play className="w-5 h-5 text-falcon-600" />
                  <h4 className="font-semibold text-gray-900">{example.title}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                <CommandBlock 
                  command={example.command} 
                  id={`usage-${index}`}
                  showOutput={true}
                  output={example.output}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-falcon-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Ready to Start Building?
            </h3>
            <p className="text-falcon-50 mb-6 max-w-2xl mx-auto">
              Now that you have Falcon installed, check out the examples above or dive into the 
              comprehensive documentation to start building amazing projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#examples"
                className="inline-flex items-center justify-center bg-white text-falcon-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold"
              >
                <Play className="mr-2 w-4 h-4" />
                View Examples
              </a>
              <a
                href="https://github.com/Gabrial-8467/falcon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-falcon-700 text-white px-6 py-3 rounded-lg hover:bg-falcon-800 transition-all duration-200 font-semibold"
              >
                <Download className="mr-2 w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
