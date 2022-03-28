let name = "Nicolas";
let age = 34;
let hasHobbies = false;

function sumarizerUser(userName, userAge, userHasHobbies) {
  return `The name of the user is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}`;
}

console.log(sumarizerUser(name, age, hasHobbies));
