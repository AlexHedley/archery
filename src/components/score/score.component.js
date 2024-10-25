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
        }
    };
}

angular.module("app").component("score", {
    templateUrl: "components/score/score.html",
    controller: ScoreController,
    // controllerAs: "model",
    bindings: {
        score: "<",
    },
});
