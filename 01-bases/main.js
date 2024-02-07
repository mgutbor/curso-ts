"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const heroes = {
        superman: 'Clark Kent',
        spiderman: 'Peter Parker',
        batman: 'Bruce Wayne',
        activos: true,
        poderTotal: 1500.32987432
    };
    const imprimirPoderHeroes = (_a) => {
        var { poderTotal } = _a, resto = __rest(_a, ["poderTotal"]);
        return console.log(resto.superman);
    };
    imprimirPoderHeroes(heroes);
    const arrayHeroes = ['Superman', true, 125];
    const [, nombreSpiderman, nombreBatman] = arrayHeroes;
    console.log(nombreSpiderman);
})();
(() => {
    const superman = {
        nombre: 'Clark Kent',
        arma: 'Fuerza'
    };
    const spiderman = {
        nombre: 'Peter Parker',
        arma: 'Telaraña'
    };
    const batman = {
        nombre: 'Bruce Wayne',
        arma: 'batseñal'
    };
    const heroes = [superman, spiderman, batman];
    for (const heroe of heroes) {
        console.log(heroe.nombre);
    }
})();
(() => {
    const nombre = 'Manuel';
    const getname = () => {
        console.log('viejo getName');
    };
    getname();
})();
//# sourceMappingURL=main.js.map