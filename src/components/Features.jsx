import { Code, Zap, Shield, Cpu, FileCode, GitBranch, Terminal, Package } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Syntax",
      description: "Clean, readable syntax with const/var declarations, functions, and comprehensive control flow.",
      code: `const name = "Vyom";
var count = 0;

fn add(a: int, b: int): int { 
    give a + b; 
}`
    },
    {
      icon: GitBranch,
      title: "Advanced Pattern Matching",
      description: "Powerful pattern matching with guards, bindings, and destructuring for expressive code.",
      code: `fn analyze(value) {
  give match value {
    case 0: "zero";
    case n when n > 0: "positive";
    case _: "other";
  };
}`
    },
    {
      icon: Package,
      title: "Rich Collections",
      description: "Support for lists, tuples, dictionaries, sets, and arrays with comprehensive operations.",
      code: `const list = [1, 2, 3];
const dict = {name: "Vyom"};
const set = {1, 2, 3};
show(dict.name);`
    },
    {
      icon: Terminal,
      title: "Type Annotations",
      description: "Optional static typing with type inference and runtime validation for safer code.",
      code: `const name: string = "Vyom";
var count: int = 0;

fn greet(name: string): string {
    give "Hello, " + name;
}`
    },
    {
      icon: Cpu,
      title: "5.38x Faster VM",
      description: "High-performance VM with optimized bytecode, pre-allocated stack, and peephole optimizer.",
      code: `// Sub-microsecond execution
// Optimized dispatch loop
// Constant folding
// 5.38x speedup achieved`
    },
    {
      icon: Shield,
      title: "Advanced Control Flow",
      description: "Traditional for-loops, while loops, and infinite loops with break/return statements.",
      code: `for set i = 1 to 10 step 2 {
  show("Count:", i);
}`
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vyom Programming Language Features (v1.0.0)
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why Vyom is the perfect modern programming language for your next project. 
            Experience the power of hybrid execution with clean, expressive syntax.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover-lift ${
                index % 3 === 0 ? 'animate-fadeInLeft' : 
                index % 3 === 1 ? 'animate-fadeInUp' : 'animate-fadeInRight'
              } animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-xl mb-6 mx-auto">
                <feature.icon className="text-orange-500" size={32} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600">
                <pre className="text-green-400 text-xs font-mono overflow-x-auto">
                  <code>{feature.code}</code>
                </pre>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeInUp animate-delay-700">
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Complete Feature Set (v1.0.0)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Core syntax</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Variable declarations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Function types</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Collections</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Closures & lexical scoping</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Control flow</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Member access & subscripting</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Built-in functions</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Comments</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Arithmetic operations</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Comparison operations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Logical operations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Pattern matching</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Type annotations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-300">Error handling</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-800/50 rounded-lg border border-gray-600">
              <h4 className="text-lg font-semibold text-white mb-4">🛠 Development Tooling</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">High-performance VM </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">Windows .exe installer</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">Interactive REPL environment</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">14 working examples</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
