(() => {

  const batman:string = 'Batman';
  const superman:string = "Supeman";
  const aquaman:string = `Héroe: Aquaman`;
  
  const abc = 123;

  console.log(`Soy' ${batman}, ${abc}`);

  console.log(batman.toUpperCase());

  // da error pero no lo marca como tal, con ? si funciona
  console.log( batman[10]?.toUpperCase() );
  
  

})()
