document.addEventListener('DOMContentLoaded', (event) => {
    let currentPokemonId = 1;

    async function fetchPokemon(id) {
        try {
            document.getElementById('loading').innerText = 'Loading...';
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const pokemonData = await response.json();
            displayPokemon(pokemonData);
            currentPokemonId = id;
        } catch (error) {
            console.error('Fetch error: ', error);
            document.getElementById('loading').innerText = 'Oh no! That Pokémon isn’t available…';
        }
    }

    function displayPokemon(data) {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('pokemon-image').style.display = 'block';
        document.getElementById('pokemon-image').src = data.sprites.front_default;
        document.getElementById('pokemon-name').innerText = `Name: ${data.name}`;
        document.getElementById('pokemon-id').innerText = `ID: ${data.id}`;
        document.getElementById('pokemon-height').innerText = `Height: ${data.height / 10} m`;
        document.getElementById('pokemon-weight').innerText = `Weight: ${data.weight / 10} kg`;
        let typeString = data.types.map(type => type.type.name).join(', ');
        document.getElementById('pokemon-type').innerText = `Type: ${typeString}`;
    }

    document.getElementById('random-btn').addEventListener('click', () => {
        const randomId = Math.floor(Math.random() * 898) + 1;
        fetchPokemon(randomId);
    });

    document.getElementById('previous-btn').addEventListener('click', () => {
        if (currentPokemonId > 1) {
            fetchPokemon(currentPokemonId - 1);
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentPokemonId < 898) {
            fetchPokemon(currentPokemonId + 1);
        }
    });

   
    document.getElementById('random-btn').click();
});
