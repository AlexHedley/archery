var app = angular.module('app', []);
app.controller('controller', function ($scope, $http, $q, $filter) {

  $scope.scores = [];

  $scope.init = function () {
    showTab();
    getData();
  };

  getData = () => {
    var file = "data/scores.json";
    $http.get(file)
      .then(function (response) {
        $scope.scores = response.data;
      });
  };

  $scope.init();
});

function showTab() {
  var currentTab = localStorage.getItem('CurrentTab');
  $("#" + currentTab).tab('show');
}

$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
  localStorage.setItem('CurrentTab', $(e.target).attr('id'));
});

app.filter('roundTo', function (numberFilter) {
  return function (value, maxDecimals) {
    return numberFilter((value || 0).toFixed(maxDecimals).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1'));
  };
});

app.filter('toDate', function () {
  return function (items) {
    return new Date(items);
  };
});
