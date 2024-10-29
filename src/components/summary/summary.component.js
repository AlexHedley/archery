function SummaryController($scope) {
    var ctrl = this;

    this.max = 0;

    this.$onInit = function () {
        // console.log("oninit");
    };

    this.$onChanges = function (changesObj) {
        // console.log("onchanges");
        if (changesObj.summaries.currentValue) {
            // this.max = getMax(this.summaries);
            // this.max = max.total;
        }
    }

    // function getMax(summaries) {
    //     var max = Math.max.apply(
    //         Math,
    //         summaries.map(function (item) {
    //             return item.total;
    //         })
    //     );
    //     return max;
    // }
    // const max = this.summaries.reduce(function (prev, current) {
    //     return prev && prev.total > current.total ? prev : current;
    // });
}

angular.module("app").component("summary", {
    templateUrl: "components/summary/summary.html",
    controller: SummaryController,
    // controllerAs: "model",
    bindings: {
        summaries: "<",
    },
});
