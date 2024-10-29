var app = angular.module("app", []);
app.controller("controller", function ($scope, $http, $q, $filter, scoreService) {
    $scope.scores = [];
    $scope.summaries = [];

    $scope.init = function () {
        showTab();
        getData();
    };

    getData = () => {
        var file = "data/scores.json";
        $http.get(file).then(function (response) {
            $scope.scores = response.data;
            getSummaries($scope.scores);
        });
    };

    getSummaries = (scores) => {
        angular.forEach(
            scores,
            function (value, key) {
                this.push(scoreService.summary(value));
            },
            $scope.summaries
        );
    };

    $scope.init();
});

function showTab() {
    var currentTab = localStorage.getItem("CurrentTab");
    $("#" + currentTab).tab("show");
}

$('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    localStorage.setItem("CurrentTab", $(e.target).attr("id"));
});
