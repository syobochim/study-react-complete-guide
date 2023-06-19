// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function type, parameters

// Primitives
let age: number = 32;
age = 33;

let userName: string = "shobochim";
userName = "syobochim";

let isInstructor: boolean = true;
isInstructor = false;

let nullValue: null; // It can't be set to a non-null value.

// More complex types
// Array
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// let person: {
//   name: string;
//   age: number;
// };

// person = {
//   name: "Max",
//   age: 32,
// };

// Arias
type Person = {
  name: string;
  age: number;
};

let person: Person;

let people: Person[];

// Type inference (型推論)
let course = "React - The Complete Guide";
// course = 12345 -> This code has caused an error.

// Union Type
let lesson: string | number = "React - The Complete Guide";
lesson = 12345;

// Functions & Types

function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  // function never return value.
  console.log(value);
}
