import { useState } from 'react'
import { Copy, Check, Play, Code } from 'lucide-react'
import PageSEO from '../components/PageSEO'

const ExamplesPage = () => {
  const [copiedCode, setCopiedCode] = useState(null)

  const copyToClipboard = (code, exampleId) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(exampleId)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const examples = [
    {
      id: 'hello',
      title: 'Hello World',
      description: 'Simple "Hello, World!" program to get started with Vyom',
      difficulty: 'Beginner',
      code: `// Basic "Hello, World!" program
show("Hello, Vyom!");

// Simple function
fn greet(name) {
    give "Hello, " + name + "!";
}

show(greet("World"));`,
      output: `Hello, Vyom!
Hello, World!`
    },
    {
      id: 'variables',
      title: 'Variables & Types',
      description: 'Variable declarations with const/var and type annotations',
      difficulty: 'Beginner',
      code: `// Constants (immutable)
const pi = 3.14159;
const name: string = "Vyom";

// Mutable variables
var count = 0;
var age: int = 25;

// Variable reassignment
count = count + 1;
age = age + 1;

show("Name:", name);
show("Age:", age);
show("Count:", count);
show("Pi:", pi);`,
      output: `Name: Vyom
Age: 26
Count: 1
Pi: 3.14159`
    },
    {
      id: 'functions',
      title: 'Functions',
      description: 'Function definitions with type annotations and return values',
      difficulty: 'Beginner',
      code: `// Function with type annotations
fn add(a: int, b: int): int {
    give a + b;
}

// Function without annotations
fn multiply(x, y) {
    give x * y;
}

// Function expression
const divide = fn(a, b) {
    when (b == 0) {
        give "Error: Division by zero";
    }
    give a / b;
};

show("5 + 3 =", add(5, 3));
show("4 * 7 =", multiply(4, 7));
show("10 / 2 =", divide(10, 2));
show("10 / 0 =", divide(10, 0));`,
      output: `5 + 3 = 8
4 * 7 = 28
10 / 2 = 5
10 / 0 = Error: Division by zero`
    },
    {
      id: 'pattern-matching',
      title: 'Pattern Matching',
      description: 'Advanced pattern matching with guards and destructuring',
      difficulty: 'Intermediate',
      code: `// Basic pattern matching
fn analyze(value) {
    give match value {
        case 0: "zero";
        case 1: "one";
        case n when n > 1: "positive";
        case _: "other";
    };
}

// Pattern matching with objects
fn analyze_person(person) {
    give match person {
        case {name: name, age: age} when age >= 18: {
            name + " is an adult (" + age + " years old)";
        }
        case {name: name, age: age}: {
            name + " is a minor (" + age + " years old)";
        }
        case _: {
            "Unknown person";
        }
    };
}

show(analyze(0));    // "zero"
show(analyze(5));    // "positive"
show(analyze(-1));   // "other"

show(analyze_person({name: "Alice", age: 25}));
show(analyze_person({name: "Bob", age: 16}));`,
      output: `zero
positive
other
Alice is an adult (25 years old)
Bob is a minor (16 years old)`
    },
    {
      id: 'collections',
      title: 'Collections',
      description: 'Working with lists, tuples, dictionaries, sets, and arrays',
      difficulty: 'Intermediate',
      code: `// List (dynamic array)
var lst = [1, 2, 3];
show("List:", lst);
show("First element:", lst[0]);
show("List length:", len(lst));

// Dictionary / Object
const obj = {name: "Vyom", version: "1.0.0"};
show("Dictionary:", obj);
show("Name:", obj.name);
show("Version:", obj["version"]);

// Set
const s = set{1, 2, 3};
show("Set:", s);

// List operations
lst.push(4);
lst.push(5);
show("Extended list:", lst);`,
      output: `List: [1, 2, 3]
First element: 1
List length: 3
Dictionary: {name: "Vyom", version: "1.0.0"}
Name: Vyom
Version: 1.0.0
Set: {1, 2, 3}
Extended list: [1, 2, 3, 4, 5]`
    },
    {
      id: 'factorial',
      title: 'Factorial (Recursion)',
      description: 'Recursive function example with factorial calculation',
      difficulty: 'Intermediate',
      code: `// Recursive factorial function
fn factorial(n) {
    when (n <= 1) {
        give 1;
    } else {
        give n * factorial(n - 1);
    }
}

show("5! =", factorial(5));
show("0! =", factorial(0));
show("1! =", factorial(1));`,
      output: `5! = 120
0! = 1
1! = 1`
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/50'
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/50'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    }
  }

  return (
    <>
      <PageSEO
        title="Examples - Vyom Programming Language Code Examples"
        description="Explore Vyom programming language examples. Learn pattern matching, type annotations, control flow, functions, and collections with practical code samples."
        keywords="Vyom examples, Vyom code samples, Vyom programming examples, pattern matching examples, Vyom syntax examples, Vyom tutorials"
        canonicalUrl="/examples"
      />
      <section id="examples" className="min-h-screen bg-gray-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Examples</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore Vyom programming language through practical examples from beginner to advanced
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examples.map((example) => (
              <div key={example.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-orange-500/50 transition-colors">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(example.difficulty)}`}>
                      {example.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{example.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Code</h4>
                      <button
                        onClick={() => copyToClipboard(example.code, example.id)}
                        className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                      >
                        {copiedCode === example.id ? (
                          <>
                            <Check size={14} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                      <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-400">Output</h4>
                      <button
                        onClick={() => {
                          // In a real implementation, this would run the code
                          alert('Code execution would be implemented here')
                        }}
                        className="flex items-center gap-2 px-3 py-1 text-xs bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors"
                      >
                        <Play size={14} />
                        Run
                      </button>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                      <pre className="text-blue-400 text-sm font-mono">
                        <code>{example.output}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ExamplesPage
