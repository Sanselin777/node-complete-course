let nameUser = "Nicolas";
console.log(nameUser);

let secondName = nameUser;
console.log(secondName);

nameUser = "Sanselin";

let person = {
  age: "28",
  name: "Max",
  hobbies: ["Sports", "Cooking"],
};
console.log(person);
//If we want to copy the exactly value of the object, to make a new object
let secondPerson = Object.assign({}, person);
let thirdPerson = person;
person.name = "Nicolas";
console.log(secondPerson);
console.log(thirdPerson);

//If we want to copy an array
let myHobbies = person.hobbies.slice();
person.hobbies.push("Netflix");
console.log(myHobbies);
console.log(person.hobbies);
