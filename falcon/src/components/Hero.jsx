import React from 'react';
import { ArrowRight, Play, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center bg-falcon-100 text-falcon-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-falcon-500 rounded-full mr-2 animate-pulse"></span>
              v1.0.0 - Production Ready
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="gradient-text">Falcon</span>
              <br />
              A Modern Lightweight
              <br />
              Programming Language
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expressive. Hackable. Built for experiments and real projects.
              <br />
              <span className="text-lg text-gray-500">
                Easy to learn syntax with hybrid Compiler + VM + Interpreter execution model
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#installation"
              className="inline-flex items-center justify-center bg-falcon-600 text-white px-8 py-4 rounded-lg hover:bg-falcon-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <a
              href="#examples"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-falcon-300 hover:bg-falcon-50 transition-all duration-200 font-semibold text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              View Examples
            </a>
            
            <a
              href="https://github.com/Gabrial-8467/falcon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 font-semibold text-lg"
            >
              <Github className="mr-2 w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500 font-mono">hello.fn</span>
            </div>
            
            <div className="text-left bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono">
                <code>
{`// Basic "Hello, World!" program
show("Hello, Falcon!");

// Simple function
function greet(name) {
    return "Hello, " + name + "!";
}

show(greet("World"));`}
                </code>
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-falcon-600 mb-2">🧠</div>
              <h3 className="font-semibold text-gray-900 mb-1">Easy to Learn</h3>
              <p className="text-gray-600 text-sm">Clean syntax with predictable semantics</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-falcon-600 mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-1">Hybrid Execution</h3>
              <p className="text-gray-600 text-sm">Compiler + VM + Interpreter model</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-falcon-600 mb-2">🧱</div>
              <h3 className="font-semibold text-gray-900 mb-1">Modular & Extensible</h3>
              <p className="text-gray-600 text-sm">Clean compiler architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
