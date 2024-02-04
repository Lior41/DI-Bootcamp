import people from './data.mjs';

function calculateAverageAge(persons) {
    const totalAge = persons.reduce((total, person) => total + person.age, 0);
    return totalAge / persons.length;
}

const averageAge = calculateAverageAge(people);
console.log(`The average age is: ${averageAge.toFixed(2)}`);
