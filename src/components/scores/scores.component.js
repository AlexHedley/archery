function ScoresController($scope, scoreService) {
    var ctrl = this;

    this.$onInit = function () {
        // console.log("oninit");
    };

    this.$onChanges = function (changesObj) {
        // console.log("onchanges");

        if (changesObj.scores.currentValue) {
        }
    }
}

angular.module("app").component("scores", {
    templateUrl: "components/scores/scores.html",
    controller: ScoresController,
    // controllerAs: "model",
    bindings: {
        scores: "<",
    },
});
