// Exercice1//
const people = ["Greg", "Mary", "Devon", "James"];

people.splice(people.indexOf("Greg"), 1);

people[people.indexOf("James")] = "Jason";

people.push("Lior");

console.log(people.indexOf("Mary"));

const copyPeople = people.slice(1, people.length - 1);

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];

people.forEach(person => console.log(person));

for (let person of people) {
    console.log(person);
    if (person === "Devon") break;
}

//exercice 2 //

const colors = ['blue', 'dark', 'red,', 'violet','pink'];
const suffixes=['first', 'nd', 'rd', 'th', 'th'];
colors.forEach((color, index) => {
    console.log(`My ${index + 1}${suffixes[index]} choice is ${color}`);
});

// Exercice 3 //

let number;
do{
    number=parseInt(prompt('enter a number'),10);
} while (number < 10 );

// Exercice 4 //

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
console.log(nameOfTenants.secondFloor + "Rooms"{dan});
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]+ building.numberOfRoomsAndRent.dan[1]);{
    building.numberOfRoomsAndRent.dan[1]=1200;
}

// Exercice 5 //

const family ={
    'father','mother','son','daughter'
};
for (let key in family) {
    console.log(key);  
    console.log(family[key]); 
}

//Exercice 6 //

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let sentence = "";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
  console.log(sentance.trim())

  // Exercice 7 //

  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
  const secretName = names.map(name => name[0]).sort().join('');
  console.log(secretName);
  