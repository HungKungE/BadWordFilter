const { changeBadWords, getRegex } = require('./regex_getter');
const fs = require('fs');

const tests = [
    '이 개씨!발럼아!',
    '그르륵 못참는다. 씌!발쇆끼',
    '씨를 발견했다.',
    "개새끼갸 존나 나대네, 뒤질라고 시발럼아!",
    "느금마 만수무강"
];

const doTest = () => {
    try {
        const data = fs.readFileSync('badWords.json', 'utf8');
        const regex = getRegex(JSON.parse(data));
        console.log(regex);
        // 파일을 읽은 후에 forEach 실행
        tests.forEach((test) => {
            const newText = changeBadWords(test, regex);
            console.log("원본 : " + test);
            console.log("바뀜 : " + newText);
        });
    } catch (err) {
        console.error('Error reading file', err);
    }
};

doTest();