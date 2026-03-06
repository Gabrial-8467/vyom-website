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
      description: 'Simple "Hello, World!" program to get started with Falcon',
      difficulty: 'Beginner',
      code: `// Basic "Hello, World!" program
show("Hello, Falcon!");

// Simple function
fn greet(name) {
    give "Hello, " + name + "!";
}

show(greet("World"));`,
      output: `Hello, Falcon!
Hello, World!`
    },
    {
      id: 'easy-custom',
      title: 'Easy Syntax',
      description: 'Demonstrates Falcon\'s easy-to-read custom syntax with aliases',
      difficulty: 'Beginner',
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
}`,
      output: `start
2
3
4`
    },
    {
      id: 'variables',
      title: 'Variables & Types',
      description: 'Variable declarations, constants, and type annotations',
      difficulty: 'Beginner',
      code: `// Type annotations
set count: int = 3;
set title: string = "Falcon";
const enabled: bool = true;

fn add(a: int, b: int): int {
    give a + b;
}

fn banner(name: string): string {
    give "Hello, " + name;
}

show(add(count, 9));
show(banner(title));
show(enabled);`,
      output: `12
Hello, Falcon
true`
    },
    {
      id: 'functions',
      title: 'Functions & Closures',
      description: 'Function declarations, expressions, and closure support',
      difficulty: 'Intermediate',
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

// Closure example
fn makeCounter(start) {
    set count = start;
    give fn() {
        count = count + 1;
        give count;
    };
}

set next = makeCounter(0);
show("First call:", next());
show("Second call:", next());
show("Third call:", next());

show("add(5, 3) =", add(5, 3));
show("multiply(4, 7) =", multiply(4, 7));
show("applyOperation(10, 5, add) =", applyOperation(10, 5, add));`,
      output: `First call: 1
Second call: 2
Third call: 3
add(5, 3) = 8
multiply(4, 7) = 28
applyOperation(10, 5, add) = 15`
    },
    {
      id: 'collections',
      title: 'Collection Types',
      description: 'Lists, tuples, dictionaries, sets, and arrays',
      difficulty: 'Intermediate',
      code: `// List (dynamic array)
set fruits = ["apple", "banana", "orange"];
show("List:", fruits);
show("First fruit:", fruits[0]);

// Tuple (immutable)
set coordinates = (10, 20, 30);
show("Tuple:", coordinates);
show("Second coordinate:", coordinates[1]);

// Dictionary / Object
set person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
show("Dictionary:", person);
show("Name:", person.name);
show("Age:", person["age"]);

// Set
set numbers = set{1, 2, 3, 4, 5};
show("Set:", numbers);

// Array (fixed size)
set scores = array[5];
scores[0] = 95;
scores[1] = 87;
show("Array:", scores);`,
      output: `List: ["apple", "banana", "orange"]
First fruit: apple
Tuple: (10, 20, 30)
Second coordinate: 20
Dictionary: {"name": "Alice", "age": 25, "city": "New York"}
Name: Alice
Age: 25
Set: {1, 2, 3, 4, 5}
Array: [95, 87, null, null]`
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      description: 'If/else statements, loops, and pattern matching',
      difficulty: 'Intermediate',
      code: `// When/else statements
fn checkNumber(n) {
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
show("checkNumber(0) =", checkNumber(0));

// For loops with different steps
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

// Pattern matching
fn classifyUser(user) {
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
show(classifyUser({ foo: "bar" }));`,
      output: `checkNumber(5) = Positive
checkNumber(-3) = Negative
checkNumber(0) = Zero
Count up: 1
Count up: 2
Count up: 3
Count up: 4
Count up: 5
Count down by 2: 10
Count down by 2: 8
Count down by 2: 6
Count down by 2: 4
Count down by 2: 2
While iteration: 0
While iteration: 1
While iteration: 2
admin:Ava
top-member
member
guest`
    },
    {
      id: 'factorial',
      title: 'Recursive Functions',
      description: 'Classic factorial example demonstrating recursion',
      difficulty: 'Intermediate',
      code: `// Classic recursive factorial implementation
fn fact(n) {
    when (n == 0) { 
        give 1; 
    }
    give n * fact(n - 1);
}

// Test factorial function
show("5! =", fact(5));    // 120
show("6! =", fact(6));    // 720
show("10! =", fact(10));  // 3628800

// Recursive Fibonacci
fn fib(n) {
    when (n <= 1) {
        give n;
    }
    give fib(n - 1) + fib(n - 2);
}

show("fib(10) =", fib(10));  // 55`,
      output: `5! = 120
6! = 720
10! = 3628800
fib(10) = 55`
    },
    {
      id: 'error-handling',
      title: 'Error Handling',
      description: 'Try/catch/throw for robust error handling',
      difficulty: 'Advanced',
      code: `fn safeDivide(a, b) {
    when (b == 0) {
        throw "division by zero";
    }
    give a / b;
}

fn safeArrayAccess(arr, index) {
    when (index < 0 || index >= arr.length) {
        throw "index out of bounds";
    }
    give arr[index];
}

try {
    show("10 / 2 =", safeDivide(10, 2));
    show("10 / 0 =", safeDivide(10, 0));
} catch (err) {
    show("Caught error:", err);
}

try {
    set arr = [10, 20, 30];
    show("arr[1] =", safeArrayAccess(arr, 1));
    show("arr[5] =", safeArrayAccess(arr, 5));
} catch (err) {
    show("Caught error:", err);
}

// Nested try-catch
fn complexOperation() {
    try {
        set result = safeDivide(10, 0);
        give result;
    } catch (err) {
        show("Error in complexOperation:", err);
        give 0;
    }
}

show("Complex operation result:", complexOperation());`,
      output: `10 / 2 = 5
Caught error: division by zero
arr[1] = 20
Caught error: index out of bounds
Error in complexOperation: division by zero
Complex operation result: 0`
    },
    {
      id: 'async-stub',
      title: 'Promise API',
      description: 'Synchronous Promise API stub for async-like patterns',
      difficulty: 'Advanced',
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

// Promise rejection
set p3 = Promise(fn(resolve, reject) {
    reject("Something went wrong!");
});

p3.then(fn(msg) {
    show("This won't be called:", msg);
}).catch(fn(err) {
    show("Caught promise error:", err);
});

show("Promise scheduled.");`,
      output: `Starting async stub...
Promise resolved with:
42
Doubled value: 84
Constructor promise: Async operation complete!
Caught promise error: Something went wrong!
Promise scheduled.`
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
        title="Code Examples - Learn Falcon Programming Language"
        description="Explore Falcon programming language through practical code examples. From beginner Hello World to advanced closures, error handling, and async patterns. Learn by doing with interactive examples."
        keywords="Falcon examples, programming language examples, Falcon code samples, learn Falcon programming, programming language tutorial, code examples"
        canonicalUrl="/examples"
      />
      <section id="examples" className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Code Examples</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore Falcon programming language through practical examples from beginner to advanced
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
                <p className="text-gray-300">{example.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Code className="text-orange-500 mr-2" size={16} />
                      <span className="text-sm font-medium text-gray-400">Code</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(example.code, example.id)}
                      className="flex items-center text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {copiedCode === example.id ? (
                        <Check className="text-green-500" size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                    <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Play className="text-orange-500 mr-2" size={16} />
                    <span className="text-sm font-medium text-gray-400">Output</span>
                  </div>
                  <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                    <pre className="text-blue-400 text-sm font-mono">
                      {example.output}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Try Falcon?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These examples are just the beginning. Falcon offers many more features including 
              modules, classes, generators, and advanced type system features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                View All Examples on GitHub
              </button>
              <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors font-medium">
                Join the Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ExamplesPage
