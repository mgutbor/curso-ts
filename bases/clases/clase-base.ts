(() => {

  class Heroe {

    static edadAprox: number = 37;
    static getEdadAprox(){
      return this.name;
    }

    constructor(
      private nombre: string,
      private equipo: string, 
      public nombreReal?: string
    ){}

    bio(): string{
      return `${this.nombre} (${this.equipo})`;
    }

  }

  const superman: Heroe = new Heroe('Superman', 'Marvel', 'Clark Kent');

  console.log(Heroe.getEdadAprox());

  // console.log(Heroe.edadAprox);
  

})()