//#####  remarque: when the language does not support the private property, developers recognize the _ before the veariable name as a reference to private
// example : _prvt_prop: number = 10

// assignment 1

// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName: () => string;
}

// Do Not Edit The Code Below
let User: Member = {
  // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() {
    // 'getName' does not exist in type 'Member'
    return this.username;
  },
};

User.id = 200;
User.id = "200"; // Type 'string' is not assignable to type 'number'
User.state = false; // Cannot assign to 'state' because it is a read-only property

// assignment 2

// Create Interface Here
interface Client {
  id: number;
  username: string;
  active: Boolean;
  discount: number;
  getPrice: (price: number) => number;
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  },
};

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// assignment 3

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}
interface Superman extends Man, Bird {
  bodyType: string;
  origin: string;
}
let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton",
};

// assignment 4

// Create Class Here
class Player {
  constructor(
    private name: string,
    private type: string,
    private level: number | string,
    private vip?: boolean
  ) {}

  public details() {
    return this.vip
      ? `VIP ${this.name}, Type Is ${this.type} Level Is ${this.level}`
      : `${this.name}, Type Is ${this.type} Level Is ${this.level}`;
  }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// assignment 5

class Shorten {
  constructor(
    public id: number,
    public username: string,
    protected title: string
  ) {}
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

// assignment 6

class Show {
  constructor(private _title: string) {}
  public set(title: string) {
    this._title = title;
  }
  public get() {
    return this._title;
  }
}

let test = new Show("Elzero");

console.log(test.get()); // Property 'title' does not exist on type 'Show'
test.set("Osama"); // Property 'title' does not exist on type 'Show'
console.log(test.get()); // Property 'title' does not exist on type 'Show'

// assignment 7

interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Player2 implements Play {
  constructor(public id: number, public title: string, public level: number) {}
  public logIn() {
    console.log("Logged In");
  }
  public logOut(msg: string) {
    console.log(msg);
  }
}

let player10 = new Player2(100, "Elzero", 95);

console.log(player10.id); // 100pub
console.log(player10.title); // "Elzero"
console.log(player10.level); // 95
player10.logIn(); // Logged In
player10.logOut("Good Bye"); // Logged Out, Good Bye
