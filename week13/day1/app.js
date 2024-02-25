const {getUsers} = require ("./user.js");

console.log(getUsers)

getUsers()
.then(data =>{
  data.forEach(element =>{
    console.log(element.name)
  })
})