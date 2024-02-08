"use strict";
(() => {
    let superman = {
        nombre: 'Clark Kent',
        edad: 37,
        poderes: [1, 2]
    };
    let spiderman = {
        nombre: 'Peter Parker',
        edad: 28,
        poderes: [3, 2],
        getNombre() {
            return this.nombre;
        },
    };
    console.log(superman);
})();
//# sourceMappingURL=main.js.map