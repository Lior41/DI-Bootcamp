const faker = require('faker');
const inquirer = require('inquirer');

 let users = [];

// function addUser(){
//     const user = {
//         name : faker.name.findName(),
//         adress : {
//             street: faker.adress.streetAdress(),
//             country : faker.adress.country()
//         }
//     };
//     users.push(user);
// }


function addUserWithPrompt (){
    inquirer.createPromptModule([
        {name:'name', message:'Enter your name'},
        {name:'street', message:'Enter your street adress:'},
        {name:'country', message:'Enter your country:'}
    ]).then(answers =>{
        const user ={
            name: answers.name,
            adress:{
                street:answers.street,
                country:answers.country
            }
        };
        user.push(user);
        console.log(users);
    });
}

function addUserWithFakeData() {
    const user = {
      name: faker.name.findName(), 
      address: {
        street: faker.address.streetAddress(), 
        country: faker.address.country() 
      }
    };
    users.push(user);
    console.log(users); 
  }