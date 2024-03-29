(() => {

  interface Client {
    name: string; 
    age?: number;
    address?: Address;
    getFullAddress(id: number):void;
  }

  interface Address {
    id: number;
    cp: number;
    city: string;
  }

  const cliente1: Client = {
    name: 'Manuel',
    age: 24,
    address: {
      id: 125,
      cp: 43002,
      city: 'Leganes'
    },
    getFullAddress(id: number){
      return `${id} ${this.address?.id}`
    }
  }

})()