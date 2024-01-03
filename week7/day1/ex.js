// Exercice 1 Location //

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I'm John Doe from Vancouvert Canada. Latitude(49.2827), Longitude(-123.1207) //


// Exercice 3 User & ID //

const users = { user1: 18273, user2: 92833, user3: 90315 }

const userArray = Object.entries(users);
console.log (userArray);

const modifyUserArray = userArray.map(([user,id])=>[user,id * 2]);
console.log(modifyUserArray);


//Exercice 4 Person Class //


class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);

  // result is 'Object' //


// Exercice 6 //

// Evaluation of Expressions
console.log("[2] === [2]:", [2] === [2]); // False
console.log("{} === {}:", {} === {}); // False


const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log("object2.number:", object2.number);
console.log("object3.number:", object3.number);
console.log("object4.number:", object4.number);


class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(soundMade) {
    return `${soundMade} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}


const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo")); // 