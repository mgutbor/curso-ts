
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

function readOnly(isWritable: boolean = true):Function{
  return function(target: any, propertyKey: string){
      const descriptor: PropertyDescriptor = {
        get(){
          console.log(this);
          return 'test';
        },
        set(this, val){
          // console.log(this, val);
          Object.defineProperty(this, propertyKey, {
            value: val,
            writable: !isWritable,
            enumerable: false
          })
        }
      }
    return descriptor;
  }
}

@blockPrototype
// @printToConsoleConditional(true)
export class Pokemon{

  @readOnly(true)
  public publicAPI: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}

  @checkValidPokemonId()
  savePokemonToDB(id: number){
    console.log(`Pokemon save at DB with ID: ${id}`);
    
  }
}