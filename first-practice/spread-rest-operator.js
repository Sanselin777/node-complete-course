//Spread Operator, we user to copy arrays anb objects (we copy the values, no the exactly array)

const person = {
  userName: "Nicolas",
  age: 29,
  greet() {
    console.log(`Hi, I am ${this.userName}`);
  },
};

const newPerson = { ...person };
person.age = 34;
console.log(person);
console.log(newPerson);

const hobbies = ["play socer", "play play3"];

//We can use slice() too

const newHobbies = hobbies;
const secondHobbies = [hobbies]; //make a new array within a element= the old array
const thirdHobbies = [...hobbies];
hobbies.push("programing");
console.log(newHobbies);
console.log(secondHobbies);
console.log(thirdHobbies);

//Rest Operator, is the opossite, look similar, but depends when we use

const arrayReturn = function (...args) {
  return args;
};

console.log(arrayReturn(1, 2, 3, 4));
