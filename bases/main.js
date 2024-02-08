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
//# sourceMappingURL=main.js.map