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
            ctrl.one_six = scoreService.oneSix(this.score);

            ctrl.two_one_three = scoreService.twoOneThree(this.score);
            ctrl.two_two_three = scoreService.twoTwoThree(this.score);
            ctrl.two_six = scoreService.twoSix(this.score);

            ctrl.three_one_three = scoreService.threeOneThree(this.score);
            ctrl.three_two_three = scoreService.threeTwoThree(this.score);
            ctrl.three_six = scoreService.threeSix(this.score);

            ctrl.four_one_three = scoreService.fourOneThree(this.score);
            ctrl.four_two_three = scoreService.fourTwoThree(this.score);
            ctrl.four_six = scoreService.fourSix(this.score);

            ctrl.five_one_three = scoreService.fiveOneThree(this.score);
            ctrl.five_two_three = scoreService.fiveTwoThree(this.score);
            ctrl.five_six = scoreService.fiveSix(this.score);

            ctrl.six_one_three = scoreService.sixOneThree(this.score);
            ctrl.six_two_three = scoreService.sixOneThree(this.score);
            ctrl.six_six = scoreService.sixSix(this.score);

            ctrl.first = this.score.rounds.reduce((n, { score1 }) => n + score1, 0);
            ctrl.second = this.score.rounds.reduce((n, { score2 }) => n + score2, 0);
            ctrl.third = this.score.rounds.reduce((n, { score3 }) => n + score3, 0);

            ctrl.three_arrows = ""; // ctrl.first + ctrl.second + ctrl.third;
            ctrl.total = scoreService.total(this.score);
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

angular.module("app").component("score", {
    templateUrl: "components/score/score.html",
    controller: ScoreController,
    // controllerAs: "model",
    bindings: {
        score: "<",
    },
});
