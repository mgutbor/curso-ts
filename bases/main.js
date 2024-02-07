"use strict";
(() => {
    class Heroe {
        constructor(nombre, equipo, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }
    Heroe.edadAprox = 37;
    const superman = new Heroe('Superman', 'Marvel');
    console.log(superman);
})();
//# sourceMappingURL=main.js.map