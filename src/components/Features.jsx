import { CheckCircle, Cpu, Layers, Rocket } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="text-orange-500" size={32} />,
      title: "Modern JavaScript-like Syntax",
      description: "Clean, familiar syntax with variable declarations, functions, and modern language features.",
      code: `// Variable declarations
var x := 10;
let y := 20;
const z = 30;

// Functions
function add(a, b) { 
    return a + b; 
}`
    },
    {
      icon: <Layers className="text-orange-500" size={32} />,
      title: "First-Class Closures & Lexical Scoping",
      description: "Full closure support with lexical scoping for powerful functional programming patterns.",
      code: `function makeCounter(start) {
    var count := start;
    return function() {
        count = count + 1;
        return count;
    };
}`
    },
    {
      icon: <Cpu className="text-orange-500" size={32} />,
      title: "Rich Collection Types",
      description: "Support for lists, tuples, dictionaries, sets, and arrays with member access.",
      code: `// Collection types
var lst := [1, 2, 3];        // List
var tpl := (1, 2, 3);        // Tuple
var obj := { name: "Falcon" }; // Dictionary
var s := set{1, 2, 3};       // Set`
    },
    {
      icon: <Rocket className="text-orange-500" size={32} />,
      title: "High-Performance Compiler",
      description: "Bytecode caching, peephole optimizer, and integer-based opcodes for fast execution.",
      code: `// Optimized bytecode execution
show(add(5, 3));  // Compiled to efficient bytecode
show(obj.name);   // Direct member access`
    }
  ]

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">✨ Features & Highlights</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Falcon combines modern language features with high-performance execution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-lg mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{feature.description}</p>
              
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                  <code>{feature.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Hybrid Execution Model</h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Falcon runs code through a sophisticated dual-path system: Compiler → Optimized Bytecode → VM execution, 
              with automatic interpreter fallback for closures and dynamic features.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                <span className="text-orange-500 font-semibold">Compiler</span>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                <span className="text-orange-500 font-semibold">Bytecode</span>
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                <span className="text-orange-500 font-semibold">VM</span>
              </div>
              <div className="text-gray-400">+</div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                <span className="text-orange-500 font-semibold">Interpreter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
