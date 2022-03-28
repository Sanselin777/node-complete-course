const person = {
  userName: "Nicolas",
  age: 29,
  greet() {
    console.log(`Hi, I am ${this.userName}`);
  },
};

const { userName } = person;
console.log(userName);

const hobbies = ["play socer", "play play3"];

const [hobby] = hobbies;
console.log(hobby);
