abstract class Car {
   constructor(protected brand: string, protected body: string, protected typeEngine: string) {

   }
   getInfo(): string {
      return `Brand: ${this.brand}, Body: ${this.body}, Engine type: ${this.typeEngine}`;
   }
}

class Mersedes extends Car {

   constructor(protected model: string,
      protected body: string,
      protected typeEngine: string,
      protected color: string,
      private winNumber: string) {
      super('Mersedes', body, typeEngine);
   }

   getInfo() {
      return `model:${this.model}, ${super.getInfo()}, color: ${this.color}, win: ${this.winNumber}`;
   }
}

class Nissan extends Car {

   constructor(protected model: string,
      protected body: string,
      protected typeEngine: string,
      protected color: string,
      private winNumber: string) {
      super('Nissan', body, typeEngine);

   }
   getInfo() {
      return `model:${this.model}, ${super.getInfo()}, color: ${this.color}, win: ${this.winNumber}`;
   }

}

class Ford extends Car {
   constructor(protected model: string,
      protected body: string,
      protected typeEngine: string,
      protected sistem: string,
      protected color: string,
      private winNumber: string) {
      super('Ford', body, typeEngine);
   }
   getInfo() {
      return `model:${this.model}, ${super.getInfo()}, color: ${this.color}, sistem: ${this.sistem} win: ${this.winNumber}`;
   }

}


const slc: Mersedes = new Mersedes('SLS', 'cupe', 'petrol', 'red', '45ER785758');
const vito: Mersedes = new Mersedes('Vito', 'Minivan', 'dizel', 'blue', 'GY6578987');
console.log(slc.getInfo());
console.log(vito.getInfo());

const fiesta: Ford = new Ford('Fiesta', 'hatchback', 'petrol', 'grey', 'EcoBoost', 'UG45333254');
const ecoSport: Ford = new Ford('EcoSport', 'SUV', 'dizel', 'green', 'EcoBoost', 'QW65432568')
console.log(fiesta.getInfo());
console.log(ecoSport.getInfo());

const leaf: Nissan = new Nissan('Leaf', 'hatchback', 'electro', 'white', 'NM754444');
const patrol: Nissan = new Nissan('Patrol', 'SUV', 'petrol', 'blak', 'YY567854389');
console.log(leaf.getInfo());
console.log(patrol.getInfo());
