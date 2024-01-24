const API = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

async function getGiph (){
    const res = await fetch(API);
    console.log(res);
    if (res.ok){
        const data = await res.json();
        console.log(data.data);
    } else {
        console.log("There was an error");
    }
}

getGiph ();

