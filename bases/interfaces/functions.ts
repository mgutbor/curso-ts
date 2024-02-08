(() => {

  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFuctions: addTwoNumbers;

  addNumbersFuctions = (a: number, b: number) => {
    return a + b;
  }

})()