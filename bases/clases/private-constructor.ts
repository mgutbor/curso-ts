(() => {

   class Apocalipsis {

    static instance: Apocalipsis;

    private constructor (
      public name: string
    ){}

    static callApocalipsis():Apocalipsis{
      if (!Apocalipsis.instance)
        Apocalipsis.instance = new Apocalipsis('Apocalisis inside');
      return Apocalipsis.instance;
    }

    changeName(name:string){
      this.name = name;
    }
   }

   const apocalipsis1 = Apocalipsis.callApocalipsis();
   const apocalipsis2 = Apocalipsis.callApocalipsis();
   const apocalipsis3 = Apocalipsis.callApocalipsis()

   apocalipsis1.changeName('Manolo');

   console.log(apocalipsis1, apocalipsis2, apocalipsis3);
   


  //  const apocalipisis = new Apocalipsis('Apocalipsis');
  //  const apocalipisis2 = new Apocalipsis('Apocalipsis2');
  //  const apocalipisis3 = new Apocalipsis('Apocalipsis3');
   

})()