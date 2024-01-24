document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('searchInput').value;
    await fetchGif(searchTerm);
});

document.getElementById('deleteAll').addEventListener('click', function() {
    document.getElementById('gifContainer').innerHTML = '';
});

async function fetchGif(searchTerm) {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        appendGif(gifUrl);
    } catch (error) {
        console.error('Error:', error);
    }
}

function appendGif(gifUrl) {
    const gifContainer = document.getElementById('gifContainer');
    const gifElement = document.createElement('div');
    gifElement.innerHTML = `<img src="${gifUrl}" alt="Gif"><button onclick="deleteGif(this)">DELETE</button>`;
    gifContainer.appendChild(gifElement);
}

function deleteGif(button) {
    button.parentElement.remove();
}
