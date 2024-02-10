import { genericFunctionArrow } from "../generics/functions";
import { Hero, Villain } from "../interfaces";

// console.log(genericFunction(123.1232234).toFixed(2));
// console.log(genericFunction('scanfor').charAt(2));
// console.log(genericFunction(new Date()).getDay());

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade',
  dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool));






