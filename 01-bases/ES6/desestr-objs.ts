(() => {

  type heroe = {
    superman: string;
    spiderman: string;
    batman: string;
    activos: boolean;
    poderTotal: number;
  }

  const heroes:heroe = {
    superman: 'Clark Kent',
    spiderman: 'Peter Parker',
    batman: 'Bruce Wayne',
    activos: true,
    poderTotal: 1500.32987432
  }

  // const { superman, activos, poderTotal } = heroes;
  // console.log(superman.toUpperCase(), poderTotal.toFixed(2));

  const imprimirPoderHeroes = ({poderTotal, ...resto}:heroe) => console.log(resto.superman);

  imprimirPoderHeroes(heroes);
  
  const arrayHeroes: [string, boolean, number] = ['Superman', true, 125];

  const [ , nombreSpiderman, nombreBatman ] = arrayHeroes;
  
  console.log(nombreSpiderman);
  

})()