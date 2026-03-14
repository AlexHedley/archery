function TargetReadonlyController() {
}

angular.module("app").component("targetReadonly", {
    templateUrl: "components/target-readonly/target-readonly.html",
    controller: TargetReadonlyController,
    bindings: {
        shots: "<",
    },
});
