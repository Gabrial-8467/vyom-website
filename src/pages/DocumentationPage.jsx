import { useState } from 'react'
import { ChevronDown, ChevronRight, Book, Code, FileText } from 'lucide-react'
import PageSEO from '../components/PageSEO'

const DocumentationPage = () => {
  const [expandedSections, setExpandedSections] = useState(['syntax', 'variables', 'functions', 'easy'])

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
        description: 'Vyom supports a clean, modern syntax with `fn` as the primary function declaration keyword.',
        examples: [
          {
            title: 'Variable Declarations',
            code: `// Easy declarations
set x = 10
set y = 20

// Standard declarations
set x = 10;
set y = 20;  
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
        description: 'Vyom supports dynamic typing with optional type annotations for runtime checking.',
        examples: [
          {
            title: 'Type Annotations',
            code: `set count: int = 3;
set title: string = "Vyom";
const enabled: bool = true;

fn add(a: int, b: int): int {
    give a + b;
}

fn banner(name: string): string {
    give "Hello, " + name;
}

show(add(count, 9));
show(banner(title));
show(enabled);`
          },
          {
            title: 'Collection Types',
            code: `// List (dynamic array)
set lst = [1, 2, 3];

// Tuple (immutable)
set tpl = (1, 2, 3);

// Dictionary / Object
set obj = { name: "Vyom", version: 0.3 };

// Set
set s = set{1, 2, 3};

// Array (fixed size)
set arr = array[5];

// Subscript and member access
show(lst[0]);        // 1
show(obj.name);      // "Vyom"
show(obj["version"]); // 0.3`
          }
        ]
      }
    },
    {
      id: 'functions',
      title: 'Functions',
      icon: <Code size={20} />,
      content: {
        description: 'Functions are first-class citizens with support for closures, lexical scoping, and the `fn` keyword.',
        examples: [
          {
            title: 'Function Declarations',
            code: `// Function declaration
fn add(a, b) {
    give a + b
}

// Function with multiple parameters
fn greet(name, age) {
    give "Hello, " + name + "! You are " + age + " years old."
}

// Function expression
set multiply = fn(x, y) {
    give x * y
}

// Higher-order function
fn applyOperation(a, b, operation) {
    give operation(a, b)
}

show("add(5, 3) =", add(5, 3));
show("multiply(4, 7) =", multiply(4, 7));
show("applyOperation(10, 5, add) =", applyOperation(10, 5, add));`
          },
          {
            title: 'Closures & Lexical Scoping',
            code: `fn makeCounter(start) {
    set count = start;
    give fn() {
        count = count + 1;
        give count;
    };
}

set next = makeCounter(0);
show(next());  // 1
show(next());  // 2
show(next());  // 3

// Advanced closure with parameters
fn makeAdder(x) {
    give fn(y) {
        give x + y;
    };
}

set add5 = makeAdder(5);
set add10 = makeAdder(10);
show("5 + 3 =", add5(3));    // 8
show("10 + 7 =", add10(7));  // 17`
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
            title: 'When/Else Statements',
            code: `fn checkNumber(n) {
    when (n > 0) {
        give "Positive";
    } else when (n < 0) {
        give "Negative";
    } else {
        give "Zero";
    }
}

show("checkNumber(5) =", checkNumber(5));
show("checkNumber(-3) =", checkNumber(-3));
show("checkNumber(0) =", checkNumber(0));`
          },
          {
            title: 'Loops',
            code: `// For loops with different steps
for set i = 1 to 5 step 1 {
    show("Count up:", i);
}

for set j = 10 to 1 step -2 {
    show("Count down by 2:", j);
}

// While loop
set counter = 0;
while (counter < 3) {
    show("While iteration:", counter);
    counter = counter + 1;
}

// Controlled infinite loop
fn limitedLoop(maxIterations) {
    set i = 0;
    loop {
        show("Loop iteration:", i);
        i = i + 1;
        when (i >= maxIterations) { break; }
    }
}
limitedLoop(3);`
          },
          {
            title: 'Pattern Matching with Guards',
            code: `fn classifyUser(user) {
    give match user {
        case { role: "admin", active: true, name: n }: "admin:" + n;
        case { role: "member", score: s } if s >= 90: "top-member";
        case { role: "member", score: s } if s >= 50: "member";
        case { role: "guest" }: "guest";
        case _: "unknown";
    };
}

show(classifyUser({ role: "admin", active: true, name: "Ava" }));
show(classifyUser({ role: "member", score: 95 }));
show(classifyUser({ role: "member", score: 64 }));
show(classifyUser({ role: "guest" }));
show(classifyUser({ foo: "bar" }));`
          }
        ]
      }
    },
    {
      id: 'easy',
      title: 'Easy Custom Syntax',
      icon: <Code size={20} />,
      content: {
        description: 'Vyom supports an easy custom style with `fn` as the primary function declaration and helpful keyword aliases.',
        examples: [
          {
            title: 'Keyword Aliases',
            code: `// Primary keyword: fn (function declaration)
// Helpful aliases for readability:
// give = return
// when = if
// say expr = show(expr)
// set name = value = easy variable declaration
// loop condition { ... } = while-style loop

// Example using easy syntax
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
}`
          },
          {
            title: 'Traditional vs Easy Syntax',
            code: `// Standard Vyom syntax (recommended)
fn greet(name) {
    give "Hello, " + name + "!";
}

// Easy custom syntax with aliases
fn greet(name) {
    give "Hello, " + name + "!";
}

// Both use the same fn keyword - just different aliases for readability`
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
            code: `// Arithmetic operations
set a = 10
set b = 3

show("10 + 3 =", a + b);      // 13
show("10 - 3 =", a - b);      // 7
show("10 * 3 =", a * b);      // 30
show("10 / 3 =", a / b);      // 3.333...
show("10 % 3 =", a % b);      // 1`
          },
          {
            title: 'Comparison Operations',
            code: `// Equality operators
set a = 10;
set b = 20;

show(a == b);   // false (equal to)
show(a != b);   // true  (not equal to)

// Relational operators
show(a < b);    // true  (less than)
show(a <= b);   // true  (less than or equal to)
show(a > b);    // false (greater than)
show(a >= b);   // false (greater than or equal to)

// In conditional statements
when (a < b) {
    show("a is less than b");
} else when (a > b) {
    show("a is greater than b");
} else {
    show("a equals b");
}`
          },
          {
            title: 'Logical Operations',
            code: `show(true && false);  // false
show(true || false);  // true
show(!true);          // false

// In conditions
when (x > 0 && y < 10) {
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
show("Hello, Vyom!");
console.log("Debug message");

// Formatted output
show("Value:", 42);
show("Result:", add(5, 3));`
          },
          {
            title: 'Error Handling',
            code: `fn safeDivide(a, b) {
    when (b == 0) {
        throw "division by zero";
    }
    give a / b;
}

try {
    show("10 / 2 =", safeDivide(10, 2));
    show("10 / 0 =", safeDivide(10, 0));
} catch (err) {
    show("Caught error:", err);
}`
          },
          {
            title: 'Promise API',
            code: `show("Starting async stub...");

// Create and resolve a promise
set p = Promise.resolve(42);

// Chain promise operations
p.then(fn(x) {
    show("Promise resolved with:");
    show(x);
    give x * 2;
}).then(fn(doubled) {
    show("Doubled value:", doubled);
});

// Promise constructor
set p2 = Promise(fn(resolve, reject) {
    resolve("Async operation complete!");
});

p2.then(fn(msg) {
    show("Constructor promise:", msg);
});

show("Promise scheduled.");`
          }
        ]
      }
    }
  ]

  return (
    <>
      <PageSEO
        title="Documentation - Vyom Programming Language Guide"
        description="Complete Vyom programming language documentation. Learn syntax, features, and best practices. Comprehensive guide for beginners and advanced developers."
        keywords="Vyom documentation, Vyom programming guide, Vyom language reference, Vyom syntax, Vyom tutorial, programming language documentation"
        canonicalUrl="/docs"
      />
      <section id="docs" className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete guide to Vyom programming language features and syntax
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
    </>
  )
}

export default DocumentationPage
