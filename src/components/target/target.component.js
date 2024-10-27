function TargetController($scope) {
    var ctrl = this;

    this.$onInit = function () {
        // console.log("oninit");
    };

    this.$onChanges = function (changesObj) {
        // if (changesObj.score.currentValue) {
        // }
    };

    (function () {
        $(".wa, .target-container").click(function (event) {
            var left, posX, posY, score, top;
            event.stopPropagation();
            score = $(this).attr("score");
            $("#lastScore").text(score);
            posX = $(".target-container").offset().left;
            posY = $(".target-container").offset().top;
            left = event.pageX - posX - 7;
            top = event.pageY - posY - 7;
            $("#pos").text(left + " " + top);
            return $(".target-container").append("<div class='arrow' style='top: " + top + "px; left: " + left + "px'></div>");
        });
    }).call(this);
}

angular.module("app").component("target", {
    templateUrl: "components/target/target.html",
    controller: TargetController,
    // controllerAs: "model",
    // bindings: {
    //     score: "<",
    // },
});
