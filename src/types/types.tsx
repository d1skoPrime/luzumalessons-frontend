export const QuizEasy = [
  {
    id: 1,
    question: 'What does CSS stand for?',
    options: [
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    question: 'Which HTML tag is used to define an unordered list?',
    options: ['<ul>', '<ol>', '<li>', '<list>'],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    question:
      'What is the correct syntax to output "Hello World" in JavaScript?',
    options: [
      'print("Hello World")',
      'console.log("Hello World")',
      'echo "Hello World"',
      'document.write("Hello World")',
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    question: 'Which symbol is used for single-line comments in JavaScript?',
    options: ['//', '/*', '#', '--'],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: 'What is the default behavior of the "submit" button in a form?',
    options: [
      'Sends form data to the server',
      'Clears all form fields',
      'Redirects to the homepage',
      'Displays a confirmation dialog',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 6,
    question: 'Which of the following is a JavaScript data type?',
    options: ['String', 'Number', 'Boolean', 'All of the above'],
    correctAnswerIndex: 3,
  },
  {
    id: 7,
    question:
      'Which method is used to add an element to the end of an array in JavaScript?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    correctAnswerIndex: 0,
  },
  {
    id: 8,
    question: 'What does the "typeof" operator return for an array?',
    options: ['"array"', '"object"', '"undefined"', '"string"'],
    correctAnswerIndex: 1,
  },
  {
    id: 9,
    question: 'Which event occurs when the user clicks on an HTML element?',
    options: ['onmouseover', 'onchange', 'onclick', 'onmouseclick'],
    correctAnswerIndex: 2,
  },
  {
    id: 10,
    question:
      'Which function is used to parse a string to an integer in JavaScript?',
    options: ['parseInt()', 'parseFloat()', 'Number()', 'String()'],
    correctAnswerIndex: 0,
  },
];

export const QuizMedium = [
  {
    id: 1,
    question: 'What is the purpose of the "this" keyword in JavaScript?',
    options: [
      'Refers to the current object',
      'Refers to the previous object',
      'Refers to the global object',
      'Refers to the next object',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    question:
      'Which method is used to remove the last element from an array and return that element?',
    options: ['pop()', 'push()', 'shift()', 'unshift()'],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    question:
      'What will the following code output?\n\nconsole.log(0.1 + 0.2 === 0.3);',
    options: ['true', 'false', 'undefined', 'TypeError'],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    question:
      'Which built-in method combines the text of two strings and returns a new string?',
    options: ['concat()', 'append()', 'attach()', 'combine()'],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: 'What is the difference between "==" and "===" in JavaScript?',
    options: [
      '"==" checks for value equality, while "===" checks for both value and type equality',
      '"==" checks for type equality, while "===" checks for value equality',
      'There is no difference',
      '"===" is not a valid operator in JavaScript',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 6,
    question: 'Which of the following is not a falsy value in JavaScript?',
    options: ['0', 'null', 'undefined', '"false"'],
    correctAnswerIndex: 3,
  },
  {
    id: 7,
    question: 'What does the "bind()" method do in JavaScript?',
    options: [
      'Creates a new function that, when called, has its "this" keyword set to the provided value',
      'Immediately invokes the function with the provided value',
      'Binds two strings together',
      'None of the above',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 8,
    question:
      'Which of the following is a correct way to create an object in JavaScript?',
    options: [
      'var obj = {};',
      'var obj = ();',
      'var obj = [];',
      'var obj = <>;',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 9,
    question:
      'What is the output of the following code?\n\nconsole.log(typeof NaN);',
    options: ['"number"', '"NaN"', '"undefined"', '"object"'],
    correctAnswerIndex: 0,
  },
  {
    id: 10,
    question:
      'Which method is used to convert a JSON string into a JavaScript object?',
    options: [
      'JSON.parse()',
      'JSON.stringify()',
      'JSON.toObject()',
      'JSON.fromString()',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 11,
    question: 'What will the following code output?\n\nconsole.log([] + []);',
    options: ['""', '"undefined"', '0', 'TypeError'],
    correctAnswerIndex: 0,
  },
  {
    id: 12,
    question: 'Which operator is used to assign a default value to a variable?',
    options: ['||', '&&', '??', '?:'],
    correctAnswerIndex: 2,
  },
  {
    id: 13,
    question:
      'What is the purpose of the "use strict" directive in JavaScript?',
    options: [
      'Enforces stricter parsing and error handling in code',
      'Defines a block of code as strict',
      'Prevents the use of deprecated features',
      'None of the above',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 14,
    question:
      'Which of the following is true about the "let" keyword in JavaScript?',
    options: [
      'It allows block-level scoping',
      'It can be redeclared in the same scope',
      'It defines a global variable',
      'None of the above',
    ],
    correctAnswerIndex: 0,
  },
];

export const QuizHard = [
  {
    id: 1,
    question: 'What is a closure in JavaScript?',
    options: [
      'A function that remembers its lexical scope',
      'A function with no parameters',
      'A variable inside a function',
      'An error handling mechanism',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    question: 'What does the "await" keyword do in JavaScript?',
    options: [
      'Pauses execution until a Promise resolves',
      'Declares an asynchronous function',
      'Creates a delay',
      'Throws an error if the Promise fails',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    question: 'Which of the following is NOT a feature of React?',
    options: ['Two-way data binding', 'Virtual DOM', 'Components', 'JSX'],
    correctAnswerIndex: 0,
  },
  {
    id: 4,
    question: 'What is memoization?',
    options: [
      'An optimization technique to cache function results',
      'A way to store variables',
      'A method to loop arrays',
      'A CSS feature',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    question: 'What does REST stand for in web development?',
    options: [
      'Representational State Transfer',
      'Remote Execution Service Transfer',
      'Recursive Style Template',
      'Request and Exchange of Secure Tokens',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 6,
    question: 'What is the purpose of Webpack in a project?',
    options: [
      'To bundle and optimize JavaScript files',
      'To compile server-side code',
      'To run unit tests',
      'To deploy the app to production',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 7,
    question: 'What is "useEffect" in React?',
    options: [
      'To handle side effects in functional components',
      'To declare state variables',
      'To navigate between routes',
      'To style components',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 8,
    question: 'Which HTTP method is idempotent?',
    options: ['GET', 'POST', 'PATCH', 'OPTIONS'],
    correctAnswerIndex: 0,
  },
  {
    id: 9,
    question: 'What is a promise chain?',
    options: [
      'A sequence of `.then()` calls on a Promise',
      'A callback function inside a loop',
      'A dependency list in React',
      'An API call using fetch',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 10,
    question: 'What is hoisting in JavaScript?',
    options: [
      'Variable and function declarations are moved to the top',
      'Lifting elements in the DOM',
      'Increasing execution priority',
      'A type of memory leak',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 11,
    question: 'What is the role of "key" in React lists?',
    options: [
      'To help React identify which items changed',
      'To bind an element to a form',
      'To encrypt component data',
      'To track user input',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 12,
    question: 'What is the purpose of middleware in Express.js?',
    options: [
      'To execute code before reaching route handlers',
      'To serve HTML pages',
      'To connect to the database',
      'To define routes',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 13,
    question: 'What does "debouncing" do in JavaScript?',
    options: [
      'Limits the rate a function is executed',
      'Increases function speed',
      'Adds a bounce effect to animations',
      'Makes code asynchronous',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 14,
    question: 'What is a race condition?',
    options: [
      'An issue when the timing of operations causes unexpected behavior',
      'A loop that runs infinitely',
      'A competition between users in multiplayer games',
      'When two APIs call each other repeatedly',
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 15,
    question: 'What is the output of typeof null?',
    options: ['"object"', '"null"', '"undefined"', '"NaN"'],
    correctAnswerIndex: 0,
  },
  {
    id: 16,
    question: 'How does JavaScript handle asynchronous code by default?',
    options: [
      'Using an event loop',
      'By running everything in parallel',
      'Using threads',
    ],
    correctAnswerIndex: 0,
  },
];
export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};
