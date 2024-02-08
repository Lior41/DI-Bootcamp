const button=document.querySelector("button")
function getRandomId (){
    return Math.floor(Math.random()* 83)+1;
}

async function fetchCharacterData(){
    try{
        const random=getRandomId()
        const response = await fetch (`https://www.swapi.tech/api/people/${random}`);
        if (!response.ok){
            throw new Error(`Error status: ${response.status}`);
    } 
    const data = await response.json();
    console.log(data)
    const homeworld = await fetchHomeWorld(data.result.properties.homeworld)
} catch (e){
    console.log("there is an error ")
}
}
    console.log(homeworld.properties.name)

    async function fetchName(url){
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error (`no name ${response.status}`);
            }
            const data = await response.json();
            console.log(data.result)
           } catch (e){
            console.log('big error')
           }
    }
button.addEventListener("click",fetchCharacterData)

async function fetchHomeworld(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`error: ${response.status}`);
        }
        const homeworldData = await response.json();
        return homeworldData.result.properties.name;
    } catch (error) {
        console.log(' no  homeworld :', error);
    }
}