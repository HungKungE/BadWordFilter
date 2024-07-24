const fs = require('fs');

const { badWordPart } = require('./constants');

const getBadTwoWords = (A, B) => {
    const combinations = [];
    for (const a of A) {
        for (const b of B) {
            combinations.push(a + b);
        }
    }
    return combinations;
}

let total_words = [];
// 1글자
const one_word_list = [
    badWordPart.NOM,
    badWordPart.JOT,
    badWordPart.SYANG
];
one_word_list.map((list)=>{
    total_words = [...total_words, ...list];
});
// 2글자
const two_word_list = [
    [badWordPart.SI, badWordPart.BAL],
    [badWordPart.SAE, badWordPart.KI],
    [badWordPart.EAE, badWordPart.MI],
    [badWordPart.NU, badWordPart.GEUM],
    [badWordPart.BEUNG, badWordPart.SIN],
];
two_word_list.map((list)=>{
    total_words = [...total_words, ...getBadTwoWords(list[0], list[1])];
});

fs.writeFile('badWords.json', JSON.stringify(total_words, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('success');
    }
});