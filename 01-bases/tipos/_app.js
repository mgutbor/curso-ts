"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=_app.js.map