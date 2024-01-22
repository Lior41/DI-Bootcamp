function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === 'string')) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject('Error: Not all items in the array are strings.');
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject('Error: Array does not contain more than 4 items.');
        }
    });
}


// morse //

