// Exercice 1 //

function displayNumbersDivisible(divisor=23){
    let sum = 0 ;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}

displayNumbersDivisible(); 
displayNumbersDivisible(3); 

// Exercice 2 //

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    shoppingList.forEach(item => {
        if (stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        }
    });
    return total;
}
console.log("Total Bill:", myBill());

// Exercice 3 //

function changeEnough(itemPrice, amountOfChange) {
    let totalChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01;
    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 

// Exercice 4 //

function HotelCost () {
      let nights = prompt('How many nights do you stay at the hotel?');
      while (!nights || isNaN (nights)) {
        nights = prompt ('Please a valid number of nights:');
      }
      return nights * 140
}

function PlanRideCost () {
    let destination = prompt ('What is your destination ?');
    while (!destination || isNaN (destination)){
        destination = prompt ('Please enter a valid destination :')
    }
    switch (destination.toLowerCase()) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}
function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");
    while (!days || isNaN(days)) {
        days = prompt("Please enter a valid number of days:");
    }
    let totalCost = days * 40;
    if (days > 10) {
        totalCost *= 0.95;
    }
    return totalCost;
}

function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    return `The total vacation cost is: Hotel - $${hotel}, Plane - $${plane}, Car Rental - $${car}`;
}

console.log(totalVacationCost());


