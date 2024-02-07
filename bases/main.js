"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo salvado!!!';
        }
    }
    class Villian extends Mutant {
        conquistarMundo() {
            return 'Mundo conquistado!!!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
})();
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
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Heroe {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameDesdeXmen() {
            return `${this.name} ${this.realName}`;
        }
    }
    const lobezno = new Xmen('Wolverine', 'Logan', true);
})();
//# sourceMappingURL=main.js.map