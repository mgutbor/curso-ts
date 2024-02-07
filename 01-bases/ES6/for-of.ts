(() => {

  type Heroe = {
    nombre: string,
    arma: string
  }

  const superman: Heroe = {
    nombre: 'Clark Kent',
    arma: 'Fuerza'
  }

  const spiderman: Heroe = {
    nombre: 'Peter Parker',
    arma: 'Telaraña'
  }

  const batman: Heroe = {
    nombre: 'Bruce Wayne',
    arma: 'batseñal'
  }

  const heroes: Heroe[] = [superman, spiderman, batman]

  for (const heroe of heroes) {
    console.log(heroe.nombre);
    
  }



})()