"use strict";
(function () {
    var nombreCompleto = function (nombre, apellido, upper) {
        if (upper === void 0) { upper = false; }
        if (upper)
            return "".concat(nombre, " ").concat(apellido || 'sin apellido').toUpperCase();
        else
            return "".concat(nombre, " ").concat(apellido || 'sin apellido');
    };
    var nombre = nombreCompleto('Manuel', 'gb', true);
    console.log({ nombre: nombre });
})();
//# sourceMappingURL=args-defecto.js.map