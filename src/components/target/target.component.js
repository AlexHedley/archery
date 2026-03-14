function TargetController($scope) {
    var ctrl = this;

    $scope.lastScore = '_';
    $scope.shots = [];

    $scope.total = function () {
        return $scope.shots.reduce(function (sum, shot) {
            if (shot.score === 'X') return sum + 10;
            if (shot.score === 'M') return sum + 0;
            var val = parseInt(shot.score, 10);
            return sum + (isNaN(val) ? 0 : val);
        }, 0);
    };

    $scope.clearShots = function () {
        $scope.shots = [];
        $scope.lastScore = '_';
        $(".target-container .arrow").remove();
    };

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
            posX = $(".target-container").offset().left;
            posY = $(".target-container").offset().top;
            left = event.pageX - posX - 7;
            top = event.pageY - posY - 7;
            $scope.$apply(function () {
                $scope.lastScore = score;
                $scope.shots.push({ score: score, left: left, top: top });
            });
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
