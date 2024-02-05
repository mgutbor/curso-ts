"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var saludo = function (nombre) { return "Hola ".concat(nombre); };
    var salvarMundo = function () { return "El mundo esta salvado"; };
    //! let miFuncion: (x: number, y: number) => number;
    //* let miFuncion: (x: string) => string;
    var miFuncion;
    //! miFuncion = 10;
    //! console.log(miFuncion);
    //* miFuncion = addNumbers;
    //* console.log(miFuncion(1,3));
    // miFuncion = saludo;
    // console.log(miFuncion('Manolo'));
    miFuncion = salvarMundo;
    console.log(miFuncion());
})();
//# sourceMappingURL=type-funct.js.map