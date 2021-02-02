const number = 5;
// Conditional - If/elseif/else
if (number === 2) {
  console.log('the value is 5');
} else if (number === 3) {
  console.log('the value is 3');
} else {
  console.log('I do not know this value :(');
}
// Conditional - ternary
const message = number === 5 ? 'the number is 5' : 'I do not know this number';
console.log(message);
// Conditional - Switch
const pokemon = 5;

switch (pokemon) {
  case 'Pikachu':
    console.log('We restored your Pikachu to full health!');
    break;
  case 'Squirtle':
  case 'Magikarp':
  case 'Bulbsaur':
  case 5:
    console.log('We restored your water pokemon to full health!');
    break;
  default:
    console.log('Sorry, we cannot heal your pokemon :(');
}
// Arrays

const pokemons = ['Pikachu', 'Squirtle', 'Charmander', 'Mewtwo'];
/* console.log(pokemons[0]); // Pikachu
console.log(pokemons[2]); // Charmander
console.log(pokemons.reverse()); // ['Charmander', 'Squirtle', 'Pikachu'] */
pokemons.forEach(pokemon => console.log(pokemon + ' ' + pokemon));

// Loops

// for

for (let i = 0; i <= 5; i++) {
  console.log(`I encountered ${i} pokemon so far`);
}

// While

let n = 0;

while (n <= 3) {
  console.log(n);
  n++;
}

// expected output: 3

// Do-while

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

function sayHello(name) {
  return `Hello my name is ${name}`;
}

const saidHello = sayHello('Jorge');

console.log(saidHello);

setTimeout(function () {
  console.log('I live in the future');
}, 5000);

// DOM Manipulation (tease)
const header = document.getElementById('header');
header.style.color = 'blue';

