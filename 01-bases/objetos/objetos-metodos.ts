(() => {

  let heroe: { nombre: string, edad?: number, poderes: string[], getNombre?: () => string } = {
    nombre: 'Clark Kent',
    edad: 37,
    poderes: ['Volar', 'Super fuerza']
  }

  heroe = {
    nombre: 'Otro nombre',
    // edad: 12,
    poderes: ['Ninguno'],
    getNombre(){
      return this.nombre;
    }
  }

  console.log(heroe.getNombre!());
  
  
})()