//Every Class in javascript is an object
 //Every Function in javascript is an object

//*************************Var/Let/Constant*************** */
//Var ->var variable is accessible in a function if we define any where
//let -> its only accessible in a block that define like in for loop
//const ->similarly to let but its value can't change (its read only)
/*

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("************");
  //console.log(i);
}
sayHello();
*/

// const a = 1;
// a = 2;

//*****************************END********************************* */

//******************************Objects******************************** */
/*
const person = {
  name: "Jhon",
  walk() {
    console.log("he can walk");
  },
  talk() {
    console.log("he can talk");
  },
};
person.walk();
const inputfeild = "Sunny";
person["name"] = inputfeild;
console.log(person["name"]);
*/
//*****************************END********************************* */

//******************************This Keyword******************************** */

/*
const person = {
  name: "Jhon",
  walk() {
    console.log(this);
  },
};

//person.walk();
const walk = person.walk();
console.log(walk);
*/
//walk(); // that will not work

//*****************************END********************************* */

//******************************Binding This******************************** */
/*
const person = {
  name: "Jhon",
  walk() {
    console.log(this.name);
  },
};

//person.walk();
const walk = person.walk.bind(person);
walk();
*/

//*****************************END********************************* */

//*************************Arrow Function******************************** */
//if its return line is single so we don't need to user "return Keyword"

/*
const square = (number) => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// const active_jobs = jobs.filter(function (job) {
//   return job.isActive;
// });

const active_jobs = jobs.filter((job) => job.isActive);
console.log(active_jobs);

*/

//*****************************END********************************* */

//*************************Array.map ******************************** */
// const colors = ["red", "yellow", "green"];
// const items = colors.map((color) => "<li>" + color + "</li>");
// console.log(items);

//*****************************END********************************* */

//*************************Template literals ******************************** */
// const colors = ["red", "yellow", "green"];
// const items = colors.map((color) => `<li>${color}</li>`);
// console.log(items);

//*****************************END********************************* */

//*************************Object Destructing ******************************** */
/*
const address = {
  street: "",
  city: "",
  country: "Pak",
};
//Old technique
// const street = address.street;
// const city = address.city;
// const country = address.country;
// console.log(country);

//const { street, city, country } = address;
const { country: CountryName } = address; // This is How we define Alias "CountryName"
console.log(CountryName);
*/

//*****************************END********************************* */

//*************************Spread Operator ******************************** */
// const first = [1, 2, 3];
// const second = [4, 5, 6];
////Old technique
// const combine = first.concat(second);
// console.log(combine);

//Spread
//const combine = [...first, ...second];
// const combine = [...first, "a", ...second];
// console.log(combine);

//For Obeject
// const first = { name: "Jhon" };
// const second = { job: "Engineer" };
// const combine = { ...first, ...second, Location: "Pak" };
// console.log(combine);

//*****************************END********************************* */

//*************************Classes******************************** */

/*class Person {
  constructor(input_name) {
    this.name = input_name;
    console.log(this.name);
  }
  walk() {
    console.log("He can walk");
  }
}
const obj = new Person("Jhon");
obj.walk();
const obj2 = new Person("Ali");
obj2.walk();

*/

//*****************************END********************************* */

//*************************Inheritance ******************************** */
//If we are adding constructor in child class we should 
use Super keyword in child class that extend
/*

class Person {
  constructor(input_name) {
    this.name = input_name;
    console.log(this.name);
  }
  walk() {
    console.log("He can walk");
  }
}

class Teacher extends Person {
  constructor(Subject, Dept, name) {
    super(name);  
    this.Subject = Subject;
    this.Dept = Dept;
  }
  teach() {
    console.log("He can teach");
  }
}

const teacher = new Teacher("English", "CS", "Ali");
console.log(teacher.Dept);
console.log(teacher.Subject);
console.log(teacher.name);
teacher.teach();
*/
//*****************************END********************************* */

//****************************Module******************************** */
/*
In module we divide the classes in seperate files
By default all the class are private so if we want 
to use it another file you should written "Export Keword"
before the class start
*/

// import { Teacher } from "./teacher";
// const teacher = new Teacher("English", "CS", "Ali");
// console.log(teacher.Dept);
// console.log(teacher.Subject);
// console.log(teacher.name);
// teacher.teach();

//*****************************END********************************* */

//********************Name and Default export ******************************** *
/*
Default export : import Classname from '';
Named export : import {} from ''
*/

//*****************************END********************************* */

//Person Class

export class Person {
  constructor(input_name) {
    this.name = input_name;
    console.log(this.name);
  }
  walk() {
    console.log("He can walk");
  }
}

//Teacher Class

import { Person } from "./person";
export class Teacher extends Person {
  constructor(Subject, Dept, name) {
    super(name);
    this.Subject = Subject;
    this.Dept = Dept;
  }
  teach() {
    console.log("He can teach");
  }
}

