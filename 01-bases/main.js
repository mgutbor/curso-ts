"use strict";
(function () {
    var sumar = function (a, b) { return a + b; };
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(function () {
    var nombreCompleto = function (nombre, apellido, upper) {
        if (upper === void 0) { upper = false; }
        if (upper)
            return "".concat(nombre, " ").concat(apellido || 'sin apellido').toUpperCase();
        else
            return "".concat(nombre, " ").concat(apellido || 'sin apellido');
    };
    var nombre = nombreCompleto('Manuel', 'gb', true);
    console.log({ nombre: nombre });
})();
(function () {
    var nombreCompleto = function (nombre, apellido) {
        return "".concat(nombre, " ").concat(apellido);
    };
    var nombre = nombreCompleto('Manuel', 'GB');
    console.log({ nombre: nombre });
})();
(function () {
    var nombreCompleto = function (nombre, apellido) {
        return "".concat(nombre, " ").concat(apellido || 'sin apellido');
    };
    var nombre = nombreCompleto('Manuel');
    console.log({ nombre: nombre });
})();
(function () {
    var nombreCompleto = function (nombre) {
        var restoDelNombre = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restoDelNombre[_i - 1] = arguments[_i];
        }
        return "".concat(nombre, " ").concat(restoDelNombre.join(" "));
    };
    var superman = nombreCompleto('Clark', 'Kent', 'de', 'la', 'Pradera');
    console.log({ superman: superman });
})();
(function () {
    var heroe = 'Superman';
    function retornaNombre() {
        return heroe;
    }
    var activarBatSignal = function () {
        return 'Barseñal activada';
    };
    console.log(typeof activarBatSignal);
    var nombreHeroe = retornaNombre();
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var saludo = function (nombre) { return "Hola ".concat(nombre); };
    var salvarMundo = function () { return "El mundo esta salvado"; };
    var miFuncion;
    miFuncion = salvarMundo;
    console.log(miFuncion());
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
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
(function () {
    var heroe = {
        nombre: 'Clark Kent',
        edad: 37,
        poderes: ['Volar', 'Super fuerza']
    };
    heroe = {
        nombre: 'Otro nombre',
        poderes: ['Ninguno'],
    };
    console.log({ heroe: heroe });
})();
(function () {
    var heroe = {
        nombre: 'Clark Kent',
        edad: 37,
        poderes: ['Volar', 'Super fuerza']
    };
    heroe = {
        nombre: 'Otro nombre',
        edad: 12,
        poderes: ['Ninguno']
    };
})();
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
(function () {
    var miVariableCustom = 'Manolo';
    console.log(typeof miVariableCustom);
    miVariableCustom = 20;
    console.log(typeof miVariableCustom);
    miVariableCustom = {
        nombre: 'Superman',
        edad: 60,
        poderes: [1]
    };
    console.log(typeof miVariableCustom);
    console.log(miVariableCustom);
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        FuerzaHeroes[FuerzaHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        FuerzaHeroes[FuerzaHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        FuerzaHeroes[FuerzaHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    var fuerzaFlash = FuerzaHeroes.fuerzaFlash;
    var fuerzaSuperman = FuerzaHeroes.fuerzaSuperman;
    var fuerzaBatman = FuerzaHeroes.fuerzaBatman;
    var fuerzaAcuaman = FuerzaHeroes.fuerzaAcuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var heroe = 123;
    var existe;
    var poder;
    heroe = 'Superman';
    console.log(heroe.charAt(0));
    heroe = 150.235134342423;
    console.log(heroe.toFixed(2));
    console.log(existe);
    console.log(poder);
})();
(function () {
    var numbersArray = [1, 2, 3, 4, 5, 6];
    numbersArray.push(7);
    console.log(numbersArray);
    var heroes = ['Superman', 'Batman', 'Aquaman'];
    heroes.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbersArray.forEach(function (v) { return console.log(v); });
})();
(function () {
    var esSuperMan = false;
    var esBatman = true;
    esSuperMan = (esBatman) ? true : false;
    console.log({ esSuperMan: esSuperMan });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.medium;
    console.log({ currentAudioLevel: currentAudioLevel });
})();
(function () {
    var lanzaError = function (msg) {
        throw new Error(msg);
    };
    lanzaError("ERROR");
})();
(function () {
})();
(function () {
    var heroes = 10;
    console.log(heroes);
    var villanos = 20;
    if (heroes < villanos) {
        console.log('pierden los herores');
    }
    else {
        console.log('pierden los villanos');
    }
    heroes = Number('55A');
    console.log({ heroes: heroes });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var superman = "Supeman";
    var aquaman = "H\u00E9roe: Aquaman";
    var abc = 123;
    console.log("Soy' ".concat(batman, ", ").concat(abc));
    console.log(batman.toUpperCase());
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
(function () {
    function llamarBatman() {
    }
    var llamarSuperman = function () {
    };
    var a = llamarBatman();
    console.log(a);
    var b = llamarSuperman();
    console.log(b);
})();
//# sourceMappingURL=main.js.map