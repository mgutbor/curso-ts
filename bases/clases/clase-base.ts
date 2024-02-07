(() => {

  class Heroe {

    static edadAprox: number = 37;

    constructor(
      private nombre: string,
      private equipo: string, 
      public nombreReal?: string
    ){}

  }

  const superman: Heroe = new Heroe('Superman', 'Marvel', 'Clark Kent');

  console.log(superman);

  // console.log(Heroe.edadAprox);
  

})()