"use strict";
(function () {
    var numbersArray = [1, 2, 3, 4, 5, 6];
    numbersArray.push(7);
    console.log(numbersArray);
    var heroes = ['Superman', 'Batman', 'Aquaman'];
    heroes.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
