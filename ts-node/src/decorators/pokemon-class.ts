
function printToConsole(constructor: Function){
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean):Function => {
  if(print)
    return printToConsole
  else
    return () => {}
}

const blockPrototype = function(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

function checkValidPokemonId(){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800)
        return console.error('el id del pokemon debe estar entre 1 y 800');
      else
        return originalMethod(id);
    }
  }
}

@blockPrototype
// @printToConsoleConditional(true)
export class Pokemon{

  public publicAPI: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}

  @checkValidPokemonId()
  savePokemonToDB(id: number){
    console.log(`Pokemon save at DB with ID: ${id}`);
    
  }
}