"use strict";
(function () {
    var heroe = {
        nombre: 'Clark Kent',
        edad: 37,
        poderes: ['Volar', 'Super fuerza']
    };
    heroe = {
        nombre: 'Otro nombre',
        poderes: ['Ninguno'],
        getNombre: function () {
            return this.nombre;
        }
    };
    console.log(heroe.getNombre());
})();
//# sourceMappingURL=objetos-metodos.js.map