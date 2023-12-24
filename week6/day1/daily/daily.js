// NOT BAD //

function modifySentence() {
    var sentence = document.getElementById('sentenceInput').value;
    var wordNot = sentence.indexOf('not');
    var wordBad = sentence.indexOf('bad');

    if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
        sentence = sentence.substring(0, wordNot) + 'good' + sentence.substring(wordBad + 3);
    }

    document.getElementById('output').innerText = sentence;
}

// STARS //

var numberOfLines = 6;

for (var i = 1; i <= numberOfLines; i++) {
    var stars = '';

    for (var j = 0; j < i; j++) {
        stars += '* ';
    }

    console.log(stars);
}
