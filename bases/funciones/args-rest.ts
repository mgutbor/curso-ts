(() => {

  const nombreCompleto = ( nombre: string, ...restoDelNombre:string[]): string => {
    return `${nombre} ${restoDelNombre.join(" ")}`;
  }

  const superman = nombreCompleto( 'Clark', 'Kent', 'de', 'la', 'Pradera' );

  console.log({superman});
  
  
  
})()