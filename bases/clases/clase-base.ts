(() => {

  class Heroe {

    private nombre: string;
    
    public equipo: string;

    public nombreReal?: string;

    static edadAprox: number = 37;

    constructor(nombre: string, equipo: string, nombreReal?: string){
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
    }

  }

  const superman: Heroe = new Heroe('Superman', 'Marvel');

  console.log(superman);

  // console.log(Heroe.edadAprox);
  

})()