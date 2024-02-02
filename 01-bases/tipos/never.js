"use strict";
(function () {
    var lanzaError = function (msg) {
        throw new Error(msg);
    };
    lanzaError("ERROR");
})();
