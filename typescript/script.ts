//tsc script.ts =>another script.js file to compile browser

//type=>parameter, result

const calculate = (num1: number, num2: number): number => {
  return num1 * num2;
};
calculate(1, 1);

//type=>boolean,string
const getResult: boolean = true;
const naming: string = "mgmg";

//type=object

interface User {
  name: string;
  age: number;
  gender: string;
}

const user: User = { name: "mgmg", age: 12, gender: "female" };

//type=>array

const user1: User[] = [
  //don't forget [] if we type array
  { name: "user1", age: 12, gender: "female" },
  { name: "user2", age: 15, gender: "male" },
  { name: "user3", age: 16, gender: "female" },
];

const orderId: (number | string)[] = [1, 2, 3, 4, 5, "mgmg", "aungaung"]; //type both number and string

// function's parameter
interface Menu {
  id: number;
  name: string;
  type: string;
  location?: string; //optional
}

const getMenu = (menu: Menu[]): number => {
  //menuက arrayပုံစံဖြစ်ပြီး သူ့ထဲက objတွေကို typeပြန်လုပ်ထား
  return menu.length;
};

getMenu([{ id: 1, name: "shan kyawt swell", type: "sweet" }]);
