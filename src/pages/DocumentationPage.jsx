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
        description: 'Vyom supports a clean, modern syntax with const/var declarations and comprehensive function definitions.',
        examples: [
          {
            title: 'Variable Declarations',
            code: `// Constants (immutable)
const pi = 3.14159;

// Mutable variables
var counter = 0;

// Typed variables
const name: string = "Vyom";
var count: int = 0;

// Variable reassignment
counter = counter + 5;`
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
            code: `const count: int = 3;
const title: string = "Vyom";
var enabled: bool = true;

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
var lst = [1, 2, 3];

// Tuple (immutable)
const tpl = (1, 2, 3);

// Dictionary / Object
const obj = { name: "Vyom", version: 0.3 };

// Set
const s = set{1, 2, 3};

// Array (fixed size)
const arr = array[5];

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
        description: 'Functions in Vyom use the fn keyword and must use give to return values.',
        examples: [
          {
            title: 'Function Declaration',
            code: `fn add(a: int, b: int): int {
    give a + b;
}

// Function expressions
const multiply = fn(x, y) { x * y };`
          },
          {
            title: 'Function with Type Annotations',
            code: `fn greet(name: string): string {
    give "Hello, " + name + "!";
}

show(greet("Vyom"));`
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
for var i = 1 to 5 step 1 {
    show("Count up:", i);
}

for var j = 10 to 1 step -2 {
    show("Count down by 2:", j);
}

// While loop
var counter = 0;
while (counter < 3) {
    show("While iteration:", counter);
    counter = counter + 1;
}

// Controlled infinite loop
fn limitedLoop(maxIterations) {
    var i = 0;
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
            code: `fn analyze_person(person) {
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

show(analyze_person({name: "Alice", age: 25}));
show(analyze_person({name: "Bob", age: 16}));`
          },
          {
            title: 'Match Expressions vs Statements',
            code: `// Match as expression (returns value)
fn categorize(value) {
    give match value {
        case 0: "zero";
        case 1: "one";
        case _: "other";
    };
}

// Match as statement (side effects)
fn process(data) {
    match data {
        case 0: show("zero");
        case 1: show("one");
        case _: show("other");
    }
}`
          }
        ]
      }
    },
    {
      id: 'pattern-matching',
      title: 'Pattern Matching',
      icon: <Code size={20} />,
      content: {
        description: 'Advanced pattern matching with guards, bindings, and destructuring for expressive code.',
        examples: [
          {
            title: 'Basic Pattern Matching',
            code: `fn analyze(value) {
    give match value {
        case 0: "zero";
        case 1: "one";
        case n when n > 1: "positive";
        case _: "other";
    };
}

show(analyze(0));    // "zero"
show(analyze(5));    // "positive"
show(analyze(-1));   // "other"`
          },
          {
            title: 'Pattern Matching with Collections',
            code: `fn analyze_collection(data) {
    give match data {
        case [x, y]: "pair: " + x + ", " + y;
        case {name: n}: "named: " + n;
        case [x, y, z]: "triple: " + x + ", " + y + ", " + z;
        case _: "unknown structure";
    };
}

show(analyze_collection([1, 2]));           // "pair: 1, 2"
show(analyze_collection({name: "test"}));    // "named: test"
show(analyze_collection([1, 2, 3]));       // "triple: 1, 2, 3"`
          },
          {
            title: 'Guard Conditions',
            code: `fn check_permission(user) {
    give match user {
        case {role: "admin", active: true, age: a } when a >= 18: {
            "admin access granted";
        }
        case {role: "member", score: s } when s >= 50: {
            "member access granted";
        }
        case {role: "guest" }: {
            "guest access";
        }
        case _: {
            "access denied";
        }
    };
}

show(check_permission({role: "admin", active: true, age: 25}));
show(check_permission({role: "member", score: 75}));`
        }
      ]
    }
  },
  {
    id: 'easy',
    title: 'Easy Custom Syntax',
    icon: <Code size={20} />,
    content: {
      description: 'Vyom supports an easy custom style with fn as the primary function declaration and helpful keyword aliases.',
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
var count = 0

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
var a = 10
var b = 3

show("10 + 3 =", a + b);      // 13
show("10 - 3 =", a - b);      // 7
show("10 * 3 =", a * b);      // 30
show("10 / 3 =", a / b);      // 3.333...
show("10 % 3 =", a % b);      // 1`
        },
        {
          title: 'Comparison Operations',
          code: `// Equality operators
var a = 10;
var b = 20;

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
      description: 'Comprehensive standard library with functions for common operations.',
      examples: [
        {
          title: 'Output Functions',
          code: `show("Hello, World!");        // Print to console
show(42);                     // Print numbers
show(true);                    // Print booleans`
        },
        {
          title: 'String Operations',
          code: `const text = "Vyom Language";
show(toString(42));             // "42"
show(regexMatch("Vyom", text)); // true
show(regexSearch("Lang", text)); // match object`
        },
        {
          title: 'Collection Operations',
          code: `const list = [1, 2, 3];
const dict = {name: "Vyom"};
const set = new Set([1, 2, 3]);

show(list.length);               // 3
show(Object.keys(dict).length);               // 1
show(set.size);                // 3`
        }
      ]
    }
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    icon: <Code size={20} />,
    content: {
      description: 'Try/catch/throw exception handling for robust error management.',
      examples: [
        {
          title: 'Try/Catch Blocks',
          code: `fn might_fail() {
    throw "Something went wrong";
}

try {
    might_fail();
} catch (error) {
    show("Caught error:", error);
}`
        },
        {
          title: 'Error Types',
          code: `// Runtime errors
fn divide(a, b) {
    when (b == 0) {
        throw "Division by zero";
    }
    give a / b;
}

// Type errors (when type checking enabled)
const name: string = 42;  // TypeCheckError`
        }
      ]
    }
  }
]

  return (
    <>
      <PageSEO
        title="Documentation - Vyom Programming Language Reference"
        description="Complete Vyom programming language documentation. Learn syntax, pattern matching, type annotations, control flow, collections, and advanced features with examples."
        keywords="Vyom documentation, Vyom language reference, Vyom syntax, pattern matching, type annotations, Vyom programming guide, Vyom tutorial"
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
