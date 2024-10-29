function ScoreCreatorController($filter, scoreService) {
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
        }
    };

    function show() {
        alert(this.score.date);
    }

    this.show = show;
    this.getScores = getScores;
    this.copyScores = copyScores;
    this.deleteScores = deleteScores;

    function getScores() {
        scores = JSON.stringify(this.score);
        $("#Scores").html(scores);
    }

    function copyScores() {
        var scores = $("#Scores").html();
        navigator.clipboard.writeText(scores);
    }

    function deleteScores() {
        this.score = {};
        this.score.date = $filter("toDate")(Date.now());
        this.score.date = $filter("date")(this.score.date, "yyyy-MM-dd'T'HH:mm:ssZ");

        ctrl.one_one_three = 0;
        ctrl.one_two_three = 0;
        ctrl.one_six = 0;

        ctrl.two_one_three = 0;
        ctrl.two_two_three = 0;
        ctrl.two_six = 0;

        ctrl.three_one_three = 0;
        ctrl.three_two_three = 0;
        ctrl.three_six = 0;

        ctrl.four_one_three = 0;
        ctrl.four_two_three = 0;
        ctrl.four_six = 0;

        ctrl.five_one_three = 0;
        ctrl.five_two_three = 0;
        ctrl.five_six = 0;

        ctrl.six_one_three = 0;
        ctrl.six_two_three = 0;
        ctrl.six_six = 0;

        ctrl.first = 0;
        ctrl.second = 0;
        ctrl.third = 0;

        ctrl.three_arrows = ""; // ctrl.first + ctrl.second + ctrl.third;
        ctrl.total = 0;
    }
}

angular.module("app").component("scoreCreator", {
    templateUrl: "components/score-creator/score-creator.html",
    controller: ScoreCreatorController,
    bindings: {
        score: "<",
    },
});
