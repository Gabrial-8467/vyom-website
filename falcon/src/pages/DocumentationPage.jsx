import { useState } from 'react'
import { ChevronDown, ChevronRight, Book, Code, FileText } from 'lucide-react'

const DocumentationPage = () => {
  const [expandedSections, setExpandedSections] = useState(['syntax', 'variables', 'functions'])

  const toggleSection = (section) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const sections = [
    {
      id: 'syntax',
      title: 'Language Syntax',
      icon: <Book size={20} />,
      content: {
        description: 'Falcon supports a clean, modern syntax inspired by JavaScript but with enhanced readability.',
        examples: [
          {
            title: 'Variable Declarations',
            code: `// Easy declarations
set x = 10
set y = 20

// Standard declarations
var x := 10;
let y := 20;  
const z = 30;  // Constants

// Variable reassignment
x = x + 5;`
          },
          {
            title: 'Comments',
            code: `// This is a line comment

/* This is a block comment
   that can span multiple lines */`
          }
        ]
      }
    },
    {
      id: 'variables',
      title: 'Variables & Types',
      icon: <FileText size={20} />,
      content: {
        description: 'Falcon supports dynamic typing with optional type annotations for runtime checking.',
        examples: [
          {
            title: 'Type Annotations',
            code: `var count: int := 3;
var title: string := "Falcon";
const enabled: bool = true;

function add(a: int, b: int): int {
    return a + b;
}`
          },
          {
            title: 'Collection Types',
            code: `// List (dynamic array)
var lst := [1, 2, 3];

// Tuple (immutable)
var tpl := (1, 2, 3);

// Dictionary / Object
var obj := { name: "Falcon", version: 0.3 };

// Set
var s := set{1, 2, 3};

// Array (fixed size)
var arr := array[5];`
          }
        ]
      }
    },
    {
      id: 'functions',
      title: 'Functions',
      icon: <Code size={20} />,
      content: {
        description: 'Functions are first-class citizens with support for closures, lexical scoping, and multiple declaration styles.',
        examples: [
          {
            title: 'Function Declarations',
            code: `// Standard function
function add(a, b) {
    return a + b;
}

// Arrow-style function
fn multiply(x, y) => x * y

// Function with type annotations
fn divide(a: float, b: float): float => a / b`
          },
          {
            title: 'Closures & Lexical Scoping',
            code: `function makeCounter(start) {
    var count := start;
    return function() {
        count = count + 1;
        return count;
    };
}

var next := makeCounter(0);
show(next());  // 1
show(next());  // 2
show(next());  // 3`
          },
          {
            title: 'Higher-Order Functions',
            code: `function applyOperation(a, b, operation) {
    return operation(a, b);
}

show(applyOperation(10, 5, add));     // 15
show(applyOperation(10, 5, multiply)); // 50`
          }
        ]
      }
    },
    {
      id: 'control',
      title: 'Control Flow',
      icon: <Code size={20} />,
      content: {
        description: 'Comprehensive control flow structures including conditionals, loops, and pattern matching.',
        examples: [
          {
            title: 'If/Else Statements',
            code: `function checkNumber(n) {
    if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

show(checkNumber(5));   // "Positive"
show(checkNumber(-3));  // "Negative"
show(checkNumber(0));   // "Zero"`
          },
          {
            title: 'Loops',
            code: `// For loop with step
for i := 1 to 10 step 2 {
    show("Count:", i);
}

// While loop
var x := 0;
while (x < 5) {
    show(x);
    x = x + 1;
}

// Infinite loop with break
loop {
    show("Running...");
    if (some_condition) { break; }
}`
          },
          {
            title: 'Pattern Matching',
            code: `function classifyUser(user) {
    return match user {
        case { role: "admin", name: n }: "admin:" + n;
        case { role: "member", score: s } if s >= 90: "top-member";
        case { role: "member" }: "member";
        case { role: "guest" }: "guest";
        case _: "unknown";
    };
}`
          }
        ]
      }
    },
    {
      id: 'operators',
      title: 'Operators',
      icon: <Code size={20} />,
      content: {
        description: 'Full set of arithmetic, comparison, logical, and assignment operators.',
        examples: [
          {
            title: 'Arithmetic Operations',
            code: `set a = 10
set b = 3

show("10 + 3 =", a + b);      // 13
show("10 - 3 =", a - b);      // 7
show("10 * 3 =", a * b);      // 30
show("10 / 3 =", a / b);      // 3.333...
show("10 % 3 =", a % b);      // 1`
          },
          {
            title: 'Comparison Operations',
            code: `var a := 10;
var b := 20;

show(a == b);   // false (equal to)
show(a != b);   // true  (not equal to)
show(a < b);    // true  (less than)
show(a <= b);   // true  (less than or equal to)
show(a > b);    // false (greater than)
show(a >= b);   // false (greater than or equal to)`
          },
          {
            title: 'Logical Operations',
            code: `show(true && false);  // false
show(true || false);  // true
show(!true);          // false

// In conditions
if (x > 0 && y < 10) {
    show("x is positive and y is less than 10");
}`
          }
        ]
      }
    },
    {
      id: 'builtins',
      title: 'Built-in Functions',
      icon: <Code size={20} />,
      content: {
        description: 'Core runtime library with essential functions for I/O, data manipulation, and system interaction.',
        examples: [
          {
            title: 'Output Functions',
            code: `// Print to console
show("Hello, Falcon!");
console.log("Debug message");

// Formatted output
show("Value:", 42);
show("Result:", add(5, 3));`
          },
          {
            title: 'Collection Operations',
            code: `// List operations
var lst := [1, 2, 3];
show(lst[0]);        // 1
show(lst.length);    // 3

// Dictionary access
var obj := { name: "Falcon", version: 0.3 };
show(obj.name);      // "Falcon"
show(obj["version"]); // 0.3`
          },
          {
            title: 'Error Handling',
            code: `function safeDivide(a, b) {
    if (b == 0) {
        throw "division by zero";
    }
    return a / b;
}

try {
    show(safeDivide(10, 2));
    show(safeDivide(10, 0));
} catch (err) {
    show("Caught error:", err);
}`
          }
        ]
      }
    }
  ]

  return (
    <section id="docs" className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete guide to Falcon programming language features and syntax
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-lg mr-3">
                    <span className="text-orange-500">{section.icon}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                {expandedSections.includes(section.id) ? 
                  <ChevronDown className="text-gray-400" size={20} /> : 
                  <ChevronRight className="text-gray-400" size={20} />
                }
              </button>

              {expandedSections.includes(section.id) && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <p className="text-gray-300 mb-6 mt-4">{section.content.description}</p>
                  
                  <div className="space-y-6">
                    {section.content.examples.map((example, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-medium text-white mb-3">{example.title}</h3>
                        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                          <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                            <code>{example.code}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DocumentationPage
