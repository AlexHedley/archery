function scoreService() {
    
    // One
    this.oneOneThree = function (score) {
        return score.rounds[0].score1 + score.rounds[0].score2 + score.rounds[0].score3;
    };

    this.oneTwoThree = function (score) {
        return score.rounds[1].score1 + score.rounds[1].score2 + score.rounds[1].score3;
    };

    this.oneSix = function (score) {
        return this.oneOneThree(score) + this.oneTwoThree(score);
    };

    // Two
    this.twoOneThree = function (score) {
        return score.rounds[2].score1 + score.rounds[2].score2 + score.rounds[2].score3;
    };

    this.twoTwoThree = function (score) {
        return score.rounds[3].score1 + score.rounds[3].score2 + score.rounds[3].score3;
    };

    this.twoSix = function (score) {
        return this.twoOneThree(score) + this.twoTwoThree(score);
    };

    // Three
    this.threeOneThree = function (score) {
        return score.rounds[4].score1 + score.rounds[4].score2 + score.rounds[4].score3;
    };

    this.threeTwoThree = function (score) {
        return score.rounds[5].score1 + score.rounds[5].score2 + score.rounds[5].score3;
    };

    this.threeSix = function (score) {
        return this.threeOneThree(score) + this.threeTwoThree(score);
    };

    // Four
    this.fourOneThree = function (score) {
        return score.rounds[6].score1 + score.rounds[6].score2 + score.rounds[6].score3;
    };

    this.fourTwoThree = function (score) {
        return score.rounds[7].score1 + score.rounds[7].score2 + score.rounds[7].score3;
    };

    this.fourSix = function (score) {
        return this.fourOneThree(score) + this.fourTwoThree(score);
    };

    // Five
    this.fiveOneThree = function (score) {
        return score.rounds[8].score1 + score.rounds[8].score2 + score.rounds[8].score3;
    };

    this.fiveTwoThree = function (score) {
        return score.rounds[9].score1 + score.rounds[9].score2 + score.rounds[9].score3;
    };

    this.fiveSix = function (score) {
        return this.fiveOneThree(score) + this.fiveTwoThree(score);
    };

    // Six
    this.sixOneThree = function (score) {
        return score.rounds[10].score1 + score.rounds[10].score2 + score.rounds[10].score3;
    };

    this.sixTwoThree = function (score) {
        return score.rounds[11].score1 + score.rounds[11].score2 + score.rounds[11].score3;
    };

    this.sixSix = function (score) {
        return this.sixOneThree(score) + this.sixTwoThree(score);
    };

    this.total = function (score) {
        return this.oneSix(score) + this.twoSix(score) + this.threeSix(score) + this.fourSix(score) + this.fiveSix(score) + this.sixSix(score);
    };

    // ctrl.first = this.score.rounds.reduce((n, { score1 }) => n + score1, 0);
    // ctrl.second = this.score.rounds.reduce((n, { score2 }) => n + score2, 0);
    // ctrl.third = this.score.rounds.reduce((n, { score3 }) => n + score3, 0);

    // ctrl.three_arrows = ""; // ctrl.first + ctrl.second + ctrl.third;

    // Hits
    this.round1 = function (score) {
        const round1 = [];
        round1.push(score.rounds[0].score1, score.rounds[0].score2, score.rounds[0].score3, score.rounds[1].score1, score.rounds[1].score2, score.rounds[1].score3);
        const hits_one = round1.filter((s) => s > 0).length;
        const tens_one = round1.filter((s) => s === 10).length;

        return { hits_one, tens_one };
    }

    this.round2 = function (score) {
        const round2 = [];
        round2.push(score.rounds[2].score1, score.rounds[2].score2, score.rounds[2].score3, score.rounds[3].score1, score.rounds[3].score2, score.rounds[3].score3);
        const hits_two = round2.filter((s) => s > 0).length;
        const tens_two = round2.filter((s) => s === 10).length;

        return { hits_two, tens_two };
    };

    this.round3 = function (score) {
        const round3 = [];
        round3.push(score.rounds[4].score1, score.rounds[4].score2, score.rounds[4].score3, score.rounds[5].score1, score.rounds[5].score2, score.rounds[5].score3);
        const hits_three = round3.filter((s) => s > 0).length;
        const tens_three = round3.filter((s) => s === 10).length;

        return { hits_three, tens_three };
    };
    
    this.round4 = function (score) {
        const round4 = [];
        round4.push(score.rounds[6].score1, score.rounds[6].score2, score.rounds[6].score3, score.rounds[7].score1, score.rounds[7].score2, score.rounds[7].score3);
        const hits_four = round4.filter((s) => s > 0).length;
        const tens_four = round4.filter((s) => s === 10).length;

        return { hits_four, tens_four };
    };

    this.round5 = function (score) {
        const round5 = [];
        round5.push(score.rounds[8].score1, score.rounds[8].score2, score.rounds[8].score3, score.rounds[9].score1, score.rounds[9].score2, score.rounds[9].score3);
        const hits_five = round5.filter((s) => s > 0).length;
        const tens_five = round5.filter((s) => s === 10).length;

        return { hits_five, tens_five };
    };

    this.round6 = function (score) {
        const round6 = [];
        round6.push(score.rounds[10].score1, score.rounds[10].score2, score.rounds[10].score3, score.rounds[11].score1, score.rounds[11].score2, score.rounds[11].score3);
        const hits_six = round6.filter((s) => s > 0).length;
        const tens_six = round6.filter((s) => s === 10).length;

        return { hits_six, tens_six };
    };
}

angular.module("app").service("scoreService", scoreService);