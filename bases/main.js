"use strict";
(() => {
    class Heroe {
        static getEdadAprox() {
            return this.name;
        }
        constructor(nombre, equipo, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
        bio() {
            return `${this.nombre} (${this.equipo})`;
        }
    }
    Heroe.edadAprox = 37;
    const superman = new Heroe('Superman', 'Marvel', 'Clark Kent');
    console.log(Heroe.getEdadAprox());
})();
//# sourceMappingURL=main.js.map