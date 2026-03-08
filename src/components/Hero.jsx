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
            A Modern Expressive Programming Language
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeInUp animate-delay-400">
            Clean syntax with advanced pattern matching, optional type annotations, and dual execution modes. 
            Optimized VM while maintaining full feature completeness.
            <br />
            <span className="text-orange-500">Vyom</span> combines modern language design with high-performance execution.
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
            <h3 className="text-white font-semibold mb-2">Advanced Pattern Matching</h3>
            <p className="text-gray-300 text-sm">
              Powerful pattern matching with guards, bindings, and destructuring. 
              Write expressive code with match expressions and statements.
            </p>
          </article>

          <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover-lift animate-fadeInUp animate-delay-700">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Zap className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Optimized VM</h3>
            <p className="text-gray-300 text-sm">
              High-performance virtual machine with optimized bytecode execution. 
              Experience sub-microsecond arithmetic and efficient memory management.
            </p>
          </article>

          <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover-lift animate-fadeInRight animate-delay-800">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg mb-4 mx-auto">
              <Shield className="text-orange-500" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-2">Type Annotations</h3>
            <p className="text-gray-300 text-sm">
              Optional static typing with runtime validation. 
              Get the safety of static types with the flexibility of dynamic languages.
            </p>
          </article>
        </div>

        <div className="mt-16 text-center animate-fadeInUp animate-delay-1000">
          <div className="inline-block bg-gray-800 rounded-lg p-4 border border-gray-700 code-animate">
            <pre className="text-green-400 text-sm font-mono">
              <code>{`// Vyom Programming Language Syntax Example
const name: string = "Vyom"
var count: int = 0

fn greet(name: string): string {
    give "Hello, " + name + "!"
}

fn analyze(value) {
    give match value {
        case 0: "zero";
        case n when n > 0: "positive";
        case _: "other";
    };
}

show(analyze(count))`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
