(() => {

  class Heroe {
    constructor(
      public name:  string,
      public realName: string
    ){
      console.log('constructor Heroe llamado');
    }

    protected getFullName(){
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Heroe{
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ){
      super(name, realName);
      console.log('constructor Xmen llamado');
    }

    getFullNameDesdeXmen(){
      return `${this.name} ${this.realName}`;
    }
  }

  const lobezno: Xmen = new Xmen('Wolverine', 'Logan', true);

  console.log(lobezno.getFullNameDesdeXmen());
  

})()