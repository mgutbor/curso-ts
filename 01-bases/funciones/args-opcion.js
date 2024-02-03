"use strict";
(function () {
    var nombreCompleto = function (nombre, apellido) {
        return "".concat(nombre, " ").concat(apellido || 'sin apellido');
    };
    var nombre = nombreCompleto('Manuel');
    console.log({ nombre: nombre });
})();
