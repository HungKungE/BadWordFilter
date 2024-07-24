const fs = require('fs');

const { beautiful } = require('./constants');

// 단어 사이에 아무 문자나 들어가도 OK
const escapeRegex = (word) => {
    if (word.length === 1) {
        return `[${word}]`;
    }
    else {
        return word.split('').map(char => `\\${char}`).join('[^\\w]{0,1}');
    }
}

const getRegex = (badWords) => {
    return new RegExp(badWords.map(escapeRegex).join("|") + " | \시 [^\w]{0,1} \발 [^\w]{0,1} \럼","g");
};

const changeBadWords = (text, regex) => {
    const time = new Date().getTime();
    const beauty = beautiful[time % 2];

    return text.replace(regex, beauty);
};

module.exports = {
    getRegex,
    changeBadWords
}