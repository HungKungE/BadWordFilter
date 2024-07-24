const beautiful = ['어머','아이쿠','뾰롱'];

const badWordPart = {
    // ONE WORD : NOM, JOT, GAE, SYANG
    // ELSE : SIBAL, SAEKI, EAEMI, BEUNGSIN, NUGEUMMA
    SI : ['시','씨','슈','쓔','쉬','쉽','쒸','쓉','씌'],
    BAL : ['바','발','벌','빠','빡','빨','뻘','파','팔','펄'],
    NOM : ['놈', '년', '련'],
    SYANG : ['썅', '상', '씹', '쌍'],
    SAE : ['새','색','샊','섀','섁','섂','세','섹','섺','셰','셱','셲','시',"쇆"],
    KI : ['끼','키','끠'],
    JOT : ['좆','좇','졷','좄','좃','좉','졽'],
    EAE : ['애','에', '니'],
    MI : ['미','비'],
    NU : ['느'],
    GEUM : ['금'],
    BEUNG : ['병', '빙'],
    SIN : ['신','싄','씐','씬']
};

module.exports = {
    beautiful,
    badWordPart
}