let name = "Nicolas";
let age = 34;
let hasHobbies = false;

//Normal Fucntions
function sumarizerUser(userName, userAge, userHasHobbies) {
  return `The name of the user is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}`;
}

console.log(sumarizerUser(name, age, hasHobbies));

//Anonimus Functions
const sumarizer = function (userName, userAge, userHasHobbies) {
  return `The name of the user is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}`;
};
console.log(sumarizer(name, age, hasHobbies));

//Arrow Functions

const sumarizerArrow = (userName, userAge, userHasHobbies) => {
  return `The name of the user is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}`;
};

console.log(sumarizerArrow(name, age, hasHobbies));

/* More Examples Arrow Functions */

const sumNumbers = (a, b) => a + b;
console.log(sumNumbers(2, 3));

const addOne = (a) => a + 1;
console.log(addOne(3));

const sumRandom = () => 3 + 3;
console.log(sumRandom());
