(() => {

  type heroe = {
    nombre: string,
    edad?: number,
    poderes: number[],
    getNombre?: () => string
  }

  let miVariableCustom: string | number | heroe = 'Manolo';

  console.log(typeof miVariableCustom);

  miVariableCustom = 20;
  console.log(typeof miVariableCustom);

  miVariableCustom = {
    nombre: 'Superman',
    edad: 60,
    poderes: [1]
  }

  console.log(typeof miVariableCustom);
  console.log(miVariableCustom);
  
})()