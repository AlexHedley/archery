function ScoreCreatorController(scoreService) {
    var ctrl = this;

    this.$onInit = function () {
        // console.log("oninit");
    };

    this.$onChanges = function (changesObj) {
        // console.log("onchanges");
        if (changesObj.score.currentValue) {
            ctrl.one_one_three = scoreService.oneOneThree(this.score);
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
    }
}

angular.module("app").component("scoreCreator", {
    templateUrl: "components/score-creator/score-creator.html",
    controller: ScoreCreatorController,
    bindings: {
        score: "<",
    },
});
