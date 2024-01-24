const apiKey="hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
const searchTerm='sun';
const limit = 10;
const offset = 2;

const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${limit}&offset=${offset}`;

async function fetchData (){
    try {
        const response = await fetch (apiUrl);
        if (!response.ok){
            throw new Error (`request failed with status:${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error){
        console.log("an error is here ");
    }
}
fetchData ();