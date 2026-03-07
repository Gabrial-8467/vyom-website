import { ArrowRight, Code, Zap, Shield } from 'lucide-react'
import Button from './Button'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mb-8">
          <div className="inline-flex items-center justify-center mb-6 animate-fadeInDown">
            <img 
              src="/vyom.png" 
              alt="Vyom Programming Language Logo - Modern Lightweight Language" 
              className="h-48 w-auto animate-float rounded-xl transition-all duration-300" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp animate-delay-200">
            Welcome to Vyom
          </h1>
          <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4 animate-fadeInUp animate-delay-300">
            A Modern Lightweight Programming Language for Developers
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeInUp animate-delay-400">
            Expressive and easy to learn syntax with hybrid execution model. Perfect for both experimental projects 
            and production applications. Learn Vyom programming language with our comprehensive 
            documentation and examples.
            <br />
            <span className="text-orange-500">Vyom</span> is a modern, lightweight programming language designed for simplicity and performance.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp animate-delay-500">
          <Button variant="outline" size="lg" href="/docs" className="hover-lift">
            View Documentation
          </Button>
          <Button variant="primary" size="lg" href="/install" className="hover-lift">
            Download <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover-lift animate-fadeInLeft animate-delay-600">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Code className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Easy to Learn Programming Language</h3>
            <p className="text-gray-300 text-sm">
              Clean syntax and predictable semantics make Vyom accessible to developers of all levels. 
              Perfect programming language for beginners and experts alike.
            </p>
          </article>

          <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover-lift animate-fadeInUp animate-delay-700">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Zap className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Hybrid Execution Model</h3>
            <p className="text-gray-300 text-sm">
              Compiler + VM + Interpreter execution gives you bytecode speed with interpreter flexibility. 
              Experience the best of both worlds in programming language design.
            </p>
          </article>

          <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover-lift animate-fadeInRight animate-delay-800">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Shield className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Modular & Extensible Architecture</h3>
            <p className="text-gray-300 text-sm">
              Clean compiler design with closures, loops, functions, and comprehensive runtime library. 
              Build powerful applications with this modern programming language.
            </p>
          </article>
        </div>

        <div className="mt-16 text-center animate-fadeInUp animate-delay-1000">
          <div className="inline-block bg-gray-800 rounded-lg p-4 border border-gray-700 code-animate">
            <pre className="text-green-400 text-sm font-mono">
              <code>{`// Vyom Programming Language Syntax Example
set count = 0

fn add(a: int, b: int) => int {
    give a + b
}

when count == 0 {
    say "start"
}

loop count < 3 {
    say add(count, 2)
    count = count + 1
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
