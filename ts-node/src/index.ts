import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
  .then(resp => console.log(resp))
  .catch(error => console.log(error))
  .finally(() => console.log('fin de getPokemon'))