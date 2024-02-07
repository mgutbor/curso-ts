(() => {

  const lanzaError = (msg:string):never => {
    throw new Error(msg);
  }
  
  lanzaError("ERROR");

})()
