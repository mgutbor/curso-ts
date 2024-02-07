(() => {

  const heroe: string = 'Superman';

  function retornaNombre(): string {
    return heroe;
  }

  const activarBatSignal = () => {
    return 'Barseñal activada';
  }

  console.log(typeof activarBatSignal);
  
  const nombreHeroe = retornaNombre();
  
})()