"use strict";
(function () {
    var nombreCompleto = function (nombre) {
        var restoDelNombre = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restoDelNombre[_i - 1] = arguments[_i];
        }
        return "".concat(nombre, " ").concat(restoDelNombre.join(" "));
    };
    var superman = nombreCompleto('Clark', 'Kent', 'de', 'la', 'Pradera');
    console.log({ superman: superman });
})();
//# sourceMappingURL=args-rest.js.map