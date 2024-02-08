(() => {

  interface Hero {
    nombre: string,
    edad?: number,
    poderes: number[],
    getNombre?: () => string
  }

  let superman: Hero = {
    nombre: 'Clark Kent',
    edad: 37,
    poderes: [1, 2]
  }

  let spiderman: Hero = {
    nombre: 'Peter Parker',
    edad: 28,
    poderes: [3, 2],
    getNombre() {
      return this.nombre
    },
  }

  console.log(superman);
  

})()