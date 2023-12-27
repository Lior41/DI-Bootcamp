// Exercice 1 //

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

 




// Exercice 2 //
//function winBattle(){
//    return true;
//}

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); 


// Exercice 3 //

const isString = (value) => typeof value === 'string';
console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0])); 

// Exercice 4 //
const sum = (a, b) => a + b;
const result = sum(9, 7);
console.log(result); 

// Exercice 5 //

function kgToGramsDeclaration(kg) {
    return kg * 1000;
}
console.log(kgToGramsDeclaration(50)); 


const kgToGramsExpression = function(kg) {
    return kg * 1000;
};
console.log(kgToGramsExpression(20)); 


const kgToGramsArrow = kg => kg * 1000;


console.log(kgToGramsArrow(10)); 

// Exercice 6 //

(function(numberOfChildren, partnerName, location, jobTitle) {
    var fortuneMessage = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
   console.log(fortuneMessage);
})(2, "Kelly", "Miami","Secret Agent","2", );

//Exercice 8 //

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const juiceDescription = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        console.log(juiceDescription);
    }

    const ingredients = [];

    addIngredients("Apple", "Banana", "Carrot");
    addIngredients("Dragonfruit", "Elderberry", "Fig");

    displayJuice();
}

makeJuice("large");

makeJuice("medium");
