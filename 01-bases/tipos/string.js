"use strict";
(function () {
    var _a;
    var batman = 'Batman';
    var superman = "Supeman";
    var aquaman = "H\u00E9roe: Aquaman";
    var abc = 123;
    console.log("Soy' ".concat(batman, ", ").concat(abc));
    console.log(batman.toUpperCase());
    // da error pero no lo marca como tal, con ? si funciona
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();