import { ArrowRight, Code, Zap, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <img src="/src/assets/minfnlogo.png" alt="Falcon Logo" className="h-48 w-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Falcon
          </h1>
          <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
            A Modern Lightweight Programming Language
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Expressive. Hackable. Built for experiments and real projects.
            <br />
            Experience the power of a hybrid Compiler + VM + Interpreter execution model.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="primary" size="lg" href="/install">
            Get Started <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button variant="outline" size="lg" href="/docs">
            View Documentation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Code className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Easy to Learn</h3>
            <p className="text-gray-400 text-sm">
              Clean syntax and predictable semantics make Falcon accessible to developers of all levels.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Zap className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Hybrid Performance</h3>
            <p className="text-gray-400 text-sm">
              Compiler + VM + Interpreter execution model gives you the speed of compiled bytecode with flexibility.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Shield className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Production Ready</h3>
            <p className="text-gray-400 text-sm">
              Modular, extensible architecture with closures, loops, functions, and built-in runtime library.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800 rounded-lg p-4 border border-gray-700">
            <pre className="text-green-400 text-sm font-mono">
              <code>{`// Falcon Syntax Example
function greet(name) {
    return "Hello, " + name + "!";
}

show(greet("Falcon"));
// Output: Hello, Falcon!`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
