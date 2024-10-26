function ScoreController($scope) {
    var ctrl = this;

    this.$onInit = function () {
        // console.log("oninit");
    };

    this.$onChanges = function (changesObj) {
        // console.log("onchanges");
        
        if (changesObj.score.currentValue) {
            ctrl.one_one_three = this.score.rounds[0].score1 + this.score.rounds[0].score2 + this.score.rounds[0].score3;
            ctrl.one_two_three = this.score.rounds[1].score1 + this.score.rounds[1].score2 + this.score.rounds[1].score3;
            ctrl.one_six = ctrl.one_one_three + ctrl.one_two_three;

            ctrl.two_one_three = this.score.rounds[2].score1 + this.score.rounds[2].score2 + this.score.rounds[2].score3;
            ctrl.two_two_three = this.score.rounds[3].score1 + this.score.rounds[3].score2 + this.score.rounds[3].score3;
            ctrl.two_six = ctrl.two_one_three + ctrl.two_two_three;

            ctrl.three_one_three = this.score.rounds[4].score1 + this.score.rounds[4].score2 + this.score.rounds[4].score3;
            ctrl.three_two_three = this.score.rounds[5].score1 + this.score.rounds[5].score2 + this.score.rounds[5].score3;
            ctrl.three_six = ctrl.three_one_three + ctrl.three_two_three;

            ctrl.four_one_three = this.score.rounds[6].score1 + this.score.rounds[6].score2 + this.score.rounds[6].score3;
            ctrl.four_two_three = this.score.rounds[7].score1 + this.score.rounds[7].score2 + this.score.rounds[7].score3;
            ctrl.four_six = ctrl.four_one_three + ctrl.four_two_three;

            ctrl.five_one_three = this.score.rounds[8].score1 + this.score.rounds[8].score2 + this.score.rounds[8].score3;
            ctrl.five_two_three = this.score.rounds[9].score1 + this.score.rounds[9].score2 + this.score.rounds[9].score3;
            ctrl.five_six = ctrl.five_one_three + ctrl.five_two_three;

            ctrl.six_one_three = this.score.rounds[10].score1 + this.score.rounds[10].score2 + this.score.rounds[10].score3;
            ctrl.six_two_three = this.score.rounds[11].score1 + this.score.rounds[11].score2 + this.score.rounds[11].score3;
            ctrl.six_six = ctrl.six_one_three + ctrl.six_two_three;

            ctrl.first = this.score.rounds.reduce((n, { score1 }) => n + score1, 0);
            ctrl.second = this.score.rounds.reduce((n, { score2 }) => n + score2, 0);
            ctrl.third = this.score.rounds.reduce((n, { score3 }) => n + score3, 0);

            ctrl.three_arrows = ""; // ctrl.first + ctrl.second + ctrl.third;
            ctrl.total = ctrl.one_six + ctrl.two_six + ctrl.three_six + ctrl.four_six + ctrl.five_six + ctrl.six_six;

            // Hits
            // const count = this.score.rounds[0].filter((obj) => obj.score1 > 0 || obj.score2 > 0 || obj.score3 > 0).length;
            const round1 = []; 
            round1.push(this.score.rounds[0].score1, this.score.rounds[0].score2, this.score.rounds[0].score3, this.score.rounds[1].score1, this.score.rounds[1].score2, this.score.rounds[1].score3);
            ctrl.hits_one = round1.filter((s) => s > 0).length;
            ctrl.tens_one = round1.filter((s) => s === 10).length;

            const round2 = [];
            round2.push(this.score.rounds[2].score1, this.score.rounds[2].score2, this.score.rounds[2].score3, this.score.rounds[3].score1, this.score.rounds[3].score2, this.score.rounds[3].score3);
            ctrl.hits_two = round2.filter((s) => s > 0).length;
            ctrl.tens_two = round2.filter((s) => s === 10).length;

            const round3 = [];
            round3.push(this.score.rounds[4].score1, this.score.rounds[4].score2, this.score.rounds[4].score3, this.score.rounds[5].score1, this.score.rounds[5].score2, this.score.rounds[5].score3);
            ctrl.hits_three = round3.filter((s) => s > 0).length;
            ctrl.tens_three = round3.filter((s) => s === 10).length;

            const round4 = [];
            round4.push(this.score.rounds[6].score1, this.score.rounds[6].score2, this.score.rounds[6].score3, this.score.rounds[7].score1, this.score.rounds[7].score2, this.score.rounds[7].score3);
            ctrl.hits_four = round4.filter((s) => s > 0).length;
            ctrl.tens_four = round4.filter((s) => s === 10).length;

            const round5 = [];
            round5.push(this.score.rounds[8].score1, this.score.rounds[8].score2, this.score.rounds[8].score3, this.score.rounds[9].score1, this.score.rounds[9].score2, this.score.rounds[9].score3);
            ctrl.hits_five = round5.filter((s) => s > 0).length;
            ctrl.tens_five = round5.filter((s) => s === 10).length;

            const round6 = [];
            round6.push(this.score.rounds[10].score1, this.score.rounds[10].score2, this.score.rounds[10].score3, this.score.rounds[11].score1, this.score.rounds[11].score2, this.score.rounds[11].score3);
            ctrl.hits_six = round6.filter((s) => s > 0).length;
            ctrl.tens_six = round6.filter((s) => s === 10).length;
        }
    };
}

angular.module("app").component("scoreAlt", {
    templateUrl: "components/score-alt/score-alt.html",
    controller: ScoreController,
    // controllerAs: "model",
    bindings: {
        score: "<",
    },
});
