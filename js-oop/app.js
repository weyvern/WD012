// The class keyword was introduced to JS in 2015 with ES6
class TerrestrialVehicle {
  constructor(wheels) {
    this.numberOfWheels = wheels;
  }
}

// The Car class extends from the TerrestrialVehicle class using th extends keyword
class Car extends TerrestrialVehicle {
  // Constructor runs as soon as the class is instantiated
  constructor(name, color, wheels) {
    super(wheels);
    this._name = name;
    this._color = color;
  }

  meow() {
    console.log(this._name + ': meow!');
  }
  goForward = () => {
    console.log(`I'm going forward and I'm ${this}`);
  };
}

// Instantiate => create an instance of a given class
const myCar = new Car('Ford', 'brown', 4);
const car2 = new Car('Renault', 'brown', 4);

console.log(myCar);
myCar.meow();
myCar.goForward();

// In ES5 we would instead create a function that would be used to create objects, uncomment the next block to try
/* function Car2(name, color, wheels) {
  this._name = name;
  this._color = color;
  this._wheels = wheels;
}

const es5Car = new Car2('Opel', 'brown', 4);
console.log(es5Car); */

const cars = [
  { name: 'ford', color: 'red' },
  { name: 'vw', color: 'blue' },
  { name: 'nissan', color: 'green' },
  { name: 'bentley', color: 'red' }
];

const newCars = cars.map(c => new Car(c.name, c.color, 4));

console.log(newCars);
