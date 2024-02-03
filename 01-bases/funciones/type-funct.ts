(() => {

  const addNumbers = (a: number, b: number) => a + b;

  const saludo = (nombre: string) => `Hola ${nombre}`;

  const salvarMundo = () => `El mundo esta salvado`;
  
  //! let miFuncion: (x: number, y: number) => number;

  //* let miFuncion: (x: string) => string;

  let miFuncion: () => void;

  //! miFuncion = 10;
  //! console.log(miFuncion);

  //* miFuncion = addNumbers;
  //* console.log(miFuncion(1,3));

  // miFuncion = saludo;
  // console.log(miFuncion('Manolo'));

  miFuncion = salvarMundo;
  console.log(miFuncion());

  
})()