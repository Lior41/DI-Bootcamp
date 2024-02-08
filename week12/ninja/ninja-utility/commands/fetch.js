const axios = require('axios');

async function fetch (){
    try{
        const response = await axios.getAdapter('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
    } catch (error){
        console.error('Error fetching data', error);
        }
    }

module.exports = fetch;