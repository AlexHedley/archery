function TargetController($scope) {
    var ctrl = this;

    this.$onInit = function () {
        // console.log("oninit");
    };

    this.$onChanges = function (changesObj) {
        // if (changesObj.score.currentValue) {
        // }
    };
}

angular.module("app").component("targetAlt", {
    templateUrl: "components/target-alt/target-alt.html",
    controller: TargetController,
    // controllerAs: "model",
    // bindings: {
    //     score: "<",
    // },
});
