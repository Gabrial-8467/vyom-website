import React, { useState } from 'react';
import { Copy, Check, Play } from 'lucide-react';

const Examples = () => {
  const [copiedId, setCopiedId] = useState(null);

  const examples = [
    {
      id: 'hello',
      title: 'Hello World',
      description: 'Basic "Hello, World!" program with function definition',
      filename: 'hello.fn',
      code: `// Basic "Hello, World!" program
show("Hello, Falcon!");

// Simple function
function greet(name) {
    return "Hello, " + name + "!";
}

show(greet("World"));`
    },
    {
      id: 'easy-custom',
      title: 'Easy Custom Syntax',
      description: 'Super easy custom syntax with aliases for common keywords',
      filename: 'easy_custom.fn',
      code: `set count = 0

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
      id: 'variables',
      title: 'Variable Declarations',
      description: 'Different ways to declare and work with variables',
      filename: 'variables.fn',
      code: `// Easy declarations
set x = 10
set y = 20
show("x =", x)
show("y =", y)

// Constant declarations with =
const pi = 3.14159;
const name = "Falcon";
show("const pi =", pi);
show("const name =", name);

// Variable reassignment
x = x + 5;
show("x updated to:", x);`
    },
    {
      id: 'type-annotations',
      title: 'Type Annotations',
      description: 'Language-level type annotations for better code clarity',
      filename: 'type_annotations.fn',
      code: `var count: int := 3;
var title: string := "Falcon";
const enabled: bool = true;

function add(a: int, b: int): int {
    return a + b;
}

function label(names: list[string]): string {
    return "users:" + names[0];
}

var maybeName: string | null := "Ava";
show(add(count, 9));
show(label(["Falcon"]));
show(maybeName);`
    },
    {
      id: 'collections',
      title: 'Collection Types',
      description: 'Lists, tuples, dictionaries, sets, and arrays',
      filename: 'collections.fn',
      code: `// List (dynamic array)
var fruits := ["apple", "banana", "orange"];
show("List:", fruits);
show("First fruit:", fruits[0]);

// Tuple (immutable)
var coordinates := (10, 20, 30);
show("Tuple:", coordinates);
show("Second coordinate:", coordinates[1]);

// Dictionary / Object
var person := {
    name: "Alice",
    age: 25,
    city: "New York"
};
show("Dictionary:", person);
show("Name:", person.name);
show("Age:", person["age"]);`
    },
    {
      id: 'closure',
      title: 'Closures',
      description: 'Lexical scoping and closure demonstrations',
      filename: 'closure.fn',
      code: `// Simple counter closure
function makeCounter() {
    var c = 0;
    function inc() {
        c = c + 1;
        return c;
    }
    return inc;
}

// Create and use counter
var counter = makeCounter();
show("First call:", counter());  // 1
show("Second call:", counter()); // 2
show("Third call:", counter());  // 3

// Advanced closure with parameters
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
show("5 + 3 =", add5(3));    // 8`
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      description: 'If/else statements, loops, and break conditions',
      filename: 'control_flow.fn',
      code: `// If/else statements
function checkNumber(n) {
    if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

show("checkNumber(5) =", checkNumber(5));

// For loops with different steps
for i := 1 to 5 step 1 {
    show("Count up:", i);
}

// While loop
var counter := 0;
while (counter < 3) {
    show("While iteration:", counter);
    counter := counter + 1;
}`
    },
    {
      id: 'error-handling',
      title: 'Error Handling',
      description: 'Custom try/catch/throw error handling',
      filename: 'error_handling.fn',
      code: `function safeDivide(a, b) {
    if (b == 0) {
        throw "division by zero";
    }
    return a / b;
}

try {
    show("10 / 2 =", safeDivide(10, 2));
    show("10 / 0 =", safeDivide(10, 0));
} catch (err) {
    show("Caught error:", err);
}`
    }
  ];

  const copyToClipboard = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📘 <span className="gradient-text">Example Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Falcon's capabilities through these comprehensive examples 
            showcasing language features and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {example.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded">
                      {example.filename}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {example.description}
                </p>
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(example.code, example.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-falcon-600 transition-colors duration-200 text-sm"
                    >
                      {copiedId === example.id ? (
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
                  <div className="code-block">
                    <pre>
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-falcon-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-falcon-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to try Falcon?
            </h3>
            <p className="text-gray-600 mb-6">
              These examples are just the beginning. Falcon has much more to offer including 
              async/await, modules, classes, and generators coming soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#installation"
                className="inline-flex items-center justify-center bg-falcon-600 text-white px-6 py-3 rounded-lg hover:bg-falcon-700 transition-all duration-200 font-semibold"
              >
                <Play className="mr-2 w-4 h-4" />
                Get Started Now
              </a>
              <a
                href="https://github.com/Gabrial-8467/falcon/tree/main/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-200 hover:border-falcon-300 hover:bg-falcon-50 transition-all duration-200 font-semibold"
              >
                View All Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
