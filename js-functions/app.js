console.log('Hey');

// Named functions - function declaration
// Parameter: list of comma separated values during the function declaration
// Argument: is the value that a parameter takes when the function is called
// Function declaration are hoisted

sayHello('Jorge');
function sayHello(name) {
  console.log(`Hello, ${name}`);
}

// Anonymous functions - either as callbacks / or assign to variables
const body = document.querySelector('body');
body.addEventListener('click', function () {
  console.log('body clicked');
});

// Function assignments are hoisted but not initialized
const myNewFunction = function () {
  // returing from a function, stops the execution
  return 'hi';
  console.log('deded');
};

const valueFromFunction = myNewFunction();
console.log(valueFromFunction);

// Parameters
function sayHello2(name, timeOfDay = 'day') {
  return `Hello, ${name}. Good ${timeOfDay}`;
}

const greeting = sayHello2('night', 'Aina');

// DOM manipulation tease
// DATA OBJECT MODEL
body.append(`${greeting}`);

// Arrow functions
// If the body of my function is a one-liner, I can get rid of the curly braces and the return keyword
// If the function only takes one parameter, you can get rid of the parentheses
// Lexical-scope

const sayHello3 = (name, timeOfDay = 'day') => `Hello, ${name}. Good ${timeOfDay}`;

body.append(sayHello3('Julia', 'afternoon'));

// Recursive functions
const factorial = function (number) {
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(1000));

// factorial(6) = 6 * factorial(5)
// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
//...
// factorial(0) = 1
