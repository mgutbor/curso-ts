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
})();
(() => {
    class Heroe {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor Heroe llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Heroe {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('constructor Xmen llamado');
        }
        getFullNameDesdeXmen() {
            return `${this.name} ${this.realName}`;
        }
    }
    const lobezno = new Xmen('Wolverine', 'Logan', true);
    console.log(lobezno.getFullNameDesdeXmen());
})();
//# sourceMappingURL=main.js.map