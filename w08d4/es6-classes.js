// CLASSES
class Pet {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.fleas = 0;
  }

  play() {
    console.log('Playing with my human! 🥎');
  }
}

const myPet = new Pet('garfield');

console.log(myPet);
console.log(myPet.name);
console.log(myPet.legs);
console.log(myPet.fleas);
myPet.play();

// INHERITANCE
class Dog extends Pet {
  constructor(name) {
    super();
    this.name = name;
    this.fleas = 2;
  }

  bark() {
    console.log('Bark bark! 🐶');
  }
}

const myDog = new Dog('snoopy');

console.log(myDog);
console.log(myDog.name);
console.log(myDog.legs);
console.log(myDog.fleas);
myDog.play();
myDog.bark();

const otherDog = new Dog('snoopy');

console.log(otherDog);
console.log(otherDog.name);
console.log(otherDog.legs);
console.log(otherDog.fleas);
otherDog.play();
otherDog.bark();

class Cat extends Pet {
  constructor(name) {
    super();
    this.name = name;
  }

  meow() {
    console.log('Meeeeooooww! 😻');
  }
}

const myCat = new Cat('hello kitty');

console.log(myCat);
console.log(myCat.name);
console.log(myCat.legs);
console.log(myCat.fleas);
myCat.play();
myCat.meow();
