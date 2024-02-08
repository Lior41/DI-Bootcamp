const axios = require('axios');

async function fetchPosts(){
    try{
        const response = await axios.getAdapter('https://jsonplaceholder.typicode.com/posts');
        const posts=response.data;
        posts.forEach(post =>{
            console.log(post.title)
        });
     } catch (error){
        console.error(error);
     }
    }
module.exports=fetchPosts;