const fs = require('fs');

const { BETWEEN, badWordPart } = require('./constants');

const getBadWordsRegex = (words) => {
    const comMain = combineWords(...words.main);
    const comSub = combineSubWords(
        words.sub[0],
        combineWords(...words.sub[1])
    );
    
    return combineWords(comMain, comSub + '?');
}

const combineWords = (...words) => {
    return words.join(BETWEEN);
}

const combineSubWords = (A, B) => {
    return '(' + A + '|' + B + ')';
}

let regexs = [];

// 3글자 이상
const words_list = [
    {
        main : [badWordPart.SI, badWordPart.BAL],
        sub : [
            badWordPart.NOM,
            [badWordPart.SAE, badWordPart.KI]
        ]
    },
    {
        main : [badWordPart.SYANG],
        sub : [
            badWordPart.NOM,
            [badWordPart.SAE, badWordPart.KI]
        ]
    },
    {
        main : [badWordPart.BEUNG, badWordPart.SIN],
        sub : [
            badWordPart.NOM,
            [badWordPart.SAE, badWordPart.KI]
        ]
    }
];
words_list.map((words)=>{
    regexs.push(getBadWordsRegex(words));
});

// 2글자
const two_word_list = [
    [badWordPart.SAE, badWordPart.KI],
    [badWordPart.EAE, badWordPart.MI],
    [badWordPart.NU, badWordPart.GEUM, badWordPart.MA + '?'],
];
two_word_list.map((words)=>{
    regexs.push(combineWords(words[0], words[1]));
});
// 1글자
const one_word_list = [
    badWordPart.JOT,
    badWordPart.SYANG,
    badWordPart.NOM
];
one_word_list.map((word)=>{
    regexs.push(word);
});

fs.writeFile('badWords.json', JSON.stringify(regexs, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('success');
    }
});
