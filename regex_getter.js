const fs = require('fs');

const { beautiful } = require('./constants');

// 단어 사이에 아무 문자나 들어가도 OK

const getRegex = (badWords) => {
    return new RegExp(badWords.join("|"),"g");
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