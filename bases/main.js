"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`${this.nombre}, ${this.edad}, ${this.sexo}, ${this.estadoCivil})`);
    }
}
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
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${id}`;
        }
    }
})();
(() => {
    const cliente1 = {
        name: 'Manuel',
        age: 24,
        address: {
            id: 125,
            cp: 43002,
            city: 'Leganes'
        },
        getFullAddress(id) {
            var _a;
            return `${id} ${(_a = this.address) === null || _a === void 0 ? void 0 : _a.id}`;
        }
    };
})();
(() => {
    let addNumbersFuctions;
    addNumbersFuctions = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map