(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum FuerzaHeroes{
      fuerzaAcuaman=0,
      fuerzaBatman=1,
      fuerzaFlash=5,
      fuerzaSuperman=100
    }
    const fuerzaFlash = FuerzaHeroes.fuerzaFlash;
    const fuerzaSuperman = FuerzaHeroes.fuerzaSuperman;
    const fuerzaBatman = FuerzaHeroes.fuerzaBatman;
    const fuerzaAcuaman = FuerzaHeroes.fuerzaAcuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  