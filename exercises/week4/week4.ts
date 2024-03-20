// assignment 1

// Do Not Edit
type numandstring = number | string;

abstract class Gamee {
  constructor(public title: string, public price?: numandstring) {}
  abstract getLocation(): string;
  abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Gamee {
  constructor(title: string, public price: numandstring, public rate: number) {
    super(title);
  }
  public getLocation(): string {
    return "Location";
  }
  public getDiscount(): string {
    return "Location";
  }
}

class Action extends Gamee {
  constructor(
    title: string,
    public price: numandstring,
    public rate: number,
    public company: string
  ) {
    super(title);
  }
  public getLocation(): string {
    return "Location";
  }
  public getDiscount(): string {
    return "Location";
  }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

// assignment 2

// Write Function Code Here
function showTypes<T = {}, S = {}, U = {}>(
  valOne?: T,
  valTwo?: S,
  valThree?: U
) {
  return valThree
    ? `${valOne} - ${valTwo} - ${valThree}`
    : valTwo
    ? `${valOne} - ${valTwo} - Nothing`
    : valOne
    ? `${valOne} - Nothing - Nothing`
    : `Nothing - Nothing - Nothing`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

// assignment 3

// Write Class Code Here
class Gameee<Type> {
  constructor(public title: Type, public price: number) {}
  public getDiscount(value: Type) {
    console.log(`The Discount Is ${value}`);
  }
}
// Do Not Edit Here
let gameOne1 = new Gameee<string>("Ys", 100);
let gameTwo2 = new Gameee<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne1.title); // "Ys"
console.log(gameOne1.price); // 100
gameOne1.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo2.title); // 2064
console.log(gameTwo2.price); // 100
gameTwo2.getDiscount(80); // "The Discount Is 80"
