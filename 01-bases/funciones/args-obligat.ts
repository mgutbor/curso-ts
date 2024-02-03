(() => {

  const nombreCompleto = ( nombre: string, apellido: string ): string => {
    return `${nombre} ${apellido}`
  }

  const nombre = nombreCompleto( 'Manuel', 'GB');

  console.log({nombre});
  
  
})()