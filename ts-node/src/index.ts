import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.publicAPI = 'https://google.es'
console.log(charmander);

