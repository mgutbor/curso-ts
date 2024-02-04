"use strict";
(function () {
    var superman = {
        nombre: 'Clark Kent',
        edad: 37,
        poderes: [1, 2]
    };
    var spiderman = {
        nombre: 'Peter Parker',
        edad: 28,
        poderes: [3, 2],
        getNombre: function () {
            return this.nombre;
        },
    };
})();
