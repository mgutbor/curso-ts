(() => {

  const nombreCompleto = ( nombre: string, apellido?: string ): string => {
    return `${nombre} ${apellido || 'sin apellido'}`
  }

  const nombre = nombreCompleto( 'Manuel');

  console.log({nombre});
  
  
})()