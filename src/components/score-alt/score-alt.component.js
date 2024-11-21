function ScoreController($scope, scoreService) {
    var ctrl = this;

    this.$onInit = function () {
        // console.log("oninit");
    };

    this.$onChanges = function (changesObj) {
        // console.log("onchanges");

        if (changesObj.score.currentValue) {
            ctrl.one_one_three = scoreService.oneOneThree(this.score);
            ctrl.one_two_three = scoreService.oneTwoThree(this.score);
            ctrl.one_six = ctrl.one_one_three + ctrl.one_two_three;

            ctrl.two_one_three = scoreService.twoOneThree(this.score);
            ctrl.two_two_three = scoreService.twoTwoThree(this.score);
            ctrl.two_six = ctrl.two_one_three + ctrl.two_two_three;

            ctrl.three_one_three = scoreService.threeOneThree(this.score);
            ctrl.three_two_three = scoreService.threeTwoThree(this.score);
            ctrl.three_six = ctrl.three_one_three + ctrl.three_two_three;

            ctrl.four_one_three = scoreService.fourOneThree(this.score);
            ctrl.four_two_three = scoreService.fourTwoThree(this.score);
            ctrl.four_six = ctrl.four_one_three + ctrl.four_two_three;

            ctrl.five_one_three = scoreService.fiveOneThree(this.score);
            ctrl.five_two_three = scoreService.fiveTwoThree(this.score);
            ctrl.five_six = ctrl.five_one_three + ctrl.five_two_three;

            ctrl.six_one_three = scoreService.sixOneThree(this.score);
            ctrl.six_two_three = scoreService.sixTwoThree(this.score);
            ctrl.six_six = ctrl.six_one_three + ctrl.six_two_three;

            ctrl.first = this.score.rounds.reduce((n, { score1 }) => n + score1, 0);
            ctrl.second = this.score.rounds.reduce((n, { score2 }) => n + score2, 0);
            ctrl.third = this.score.rounds.reduce((n, { score3 }) => n + score3, 0);

            ctrl.three_arrows = ""; // ctrl.first + ctrl.second + ctrl.third;
            ctrl.total = scoreService.total(this.score);

            // Hits
            ctrl.round1 = scoreService.round1(this.score);
            ctrl.hits_one = ctrl.round1.hits_one;
            ctrl.tens_one = ctrl.round1.tens_one;

            ctrl.round2 = scoreService.round2(this.score);
            ctrl.hits_two = ctrl.round2.hits_two;
            ctrl.tens_two = ctrl.round2.tens_two;

            ctrl.round3 = scoreService.round3(this.score);
            ctrl.hits_three = ctrl.round3.hits_three;
            ctrl.tens_three = ctrl.round3.tens_three;

            ctrl.round4 = scoreService.round4(this.score);
            ctrl.hits_four = ctrl.round4.hits_four;
            ctrl.tens_four = ctrl.round4.tens_four;

            ctrl.round5 = scoreService.round5(this.score);
            ctrl.hits_five = ctrl.round5.hits_five;
            ctrl.tens_five = ctrl.round5.tens_five;

            ctrl.round6 = scoreService.round6(this.score);
            ctrl.hits_six = ctrl.round6.hits_six;
            ctrl.tens_six = ctrl.round6.tens_six;
        }
    };

    function calculateScoreColour(score) {
        var colour = "";
        switch (score) {
            case 0:
                colour = "green";
                break;
            case 1:
            case 2:
                colour = "white";
                break;
            case 3:
            case 4:
                colour = "black";
                break;
            case 5:
            case 6:
                colour = "blue";
                break;
            case 7:
            case 8:
                colour = "red";
                break;
            case 9:
            case 10:
                colour = "gold";
                break;
            case 11:
                colour = "gold";
                break;
            default:
                break;
        }
        return colour;
    }

    this.calculateScoreColour = calculateScoreColour;
}

angular.module("app").component("scoreAlt", {
    templateUrl: "components/score-alt/score-alt.html",
    controller: ScoreController,
    // controllerAs: "model",
    bindings: {
        score: "<",
    },
});
