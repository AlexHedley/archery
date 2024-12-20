app.filter("roundTo", function (numberFilter) {
    return function (value, maxDecimals) {
        return numberFilter((value || 0).toFixed(maxDecimals).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1"));
    };
});

app.filter("toDate", function () {
    return function (items) {
        return new Date(items);
    };
});
