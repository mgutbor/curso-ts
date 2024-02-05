(() => {

  const numbersArray:number[] = [1,2,3,4,5,6];

  numbersArray.push(7);

  console.log(numbersArray);

  const heroes:string[] = ['Superman', 'Batman', 'Aquaman'];

  heroes.forEach( v => console.log(v.toUpperCase()));

  numbersArray.forEach( v => console.log(v));
  
})()
