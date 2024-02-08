(() => {

  const nombreCompleto = ( nombre: string, apellido?: string, upper: boolean = false ): string => {
    if (upper)
      return `${nombre} ${apellido || 'sin apellido'}`.toUpperCase();
    else 
      return `${nombre} ${apellido || 'sin apellido'}`;
    
  }

  const nombre = nombreCompleto( 'Manuel', 'gb', true);

  console.log({nombre});
  
  
})()