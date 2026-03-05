import React from 'react';
import { Code, Zap, Shield, Puzzle, Cpu, GitBranch } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Modern JavaScript-like Syntax",
      description: "Clean, familiar syntax with variable declarations, functions, and expressive control flow structures that make development intuitive.",
      code: `var x := 10;
function add(a, b) { 
  return a + b; 
}`
    },
    {
      icon: GitBranch,
      title: "First-Class Closures & Lexical Scoping",
      description: "Full support for closures with proper lexical scoping, enabling powerful functional programming patterns.",
      code: `function makeCounter(start) {
  var count := start;
  return function() {
    count = count + 1;
    return count;
  };
}`
    },
    {
      icon: Puzzle,
      title: "Rich Collection Types",
      description: "Comprehensive support for lists, tuples, dictionaries, sets, and arrays with intuitive member access.",
      code: `var lst := [1, 2, 3];
var obj := { name: "Falcon" };
show(lst[0]);        // 1
show(obj.name);      // "Falcon"`
    },
    {
      icon: Zap,
      title: "High-Performance Compiler Pipeline",
      description: "Bytecode caching, peephole optimization, and integer-based opcodes for maximum execution speed.",
      code: `// Automatic bytecode caching
// Peephole optimization
// Integer-based opcodes`
    },
    {
      icon: Cpu,
      title: "Advanced Control Flow",
      description: "Traditional for-loops, while loops, infinite loops with break/return, and sophisticated pattern matching.",
      code: `for i := 1 to 10 step 2 {
  show("Count:", i);
}
while (x < 5) {
  show(x);
  x = x + 1;
}`
    },
    {
      icon: Shield,
      title: "Hybrid Execution Model",
      description: "Compiler → Optimized Bytecode → VM execution with automatic interpreter fallback for dynamic features.",
      code: `// Fast path: Compiler → Bytecode
// VM executes bytecode efficiently  
// Fallback: Interpreter for closures`
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ✨ <span className="gradient-text">Highlights</span> (v1.0.0)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Falcon combines the best of compiled and interpreted languages, 
            giving you speed without sacrificing flexibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-falcon-100 rounded-lg flex items-center justify-center group-hover:bg-falcon-200 transition-colors duration-200">
                    <feature.icon className="w-6 h-6 text-falcon-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="code-block">
                    <pre>
                      <code>{feature.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Comparison Operations & Pattern Matching
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Equality & Relational</h4>
                <div className="code-block">
                  <pre>
                    <code>
{`show(a == b);   // false
show(a != b);   // true
show(a < b);    // true
show(a <= b);   // true
show(a > b);    // false
show(a >= b);   // false`}
                    </code>
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Pattern Matching</h4>
                <div className="code-block">
                  <pre>
                    <code>
{`function classifyUser(user) {
  return match user {
    case { role: "admin", name: n }: 
      "admin:" + n;
    case { role: "member", score: s } 
      if s >= 90: "top-member";
    case _: "unknown";
  };
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
