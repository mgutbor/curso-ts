(() => {

  let heroe: any = 123;
  let existe;
  let poder;

  heroe = 'Superman';
  console.log( (heroe as string).charAt(0));

  heroe = 150.235134342423;
  console.log((heroe as number).toFixed(2));

  console.log(existe);
  console.log(poder);
  
  
})()
