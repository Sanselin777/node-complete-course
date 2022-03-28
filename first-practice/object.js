const person = {
  userName: "Nicolas",
  age: 29,
  greet() {
    console.log(`Hi, I am ${this.userName}`);
  },
};

person.greet();
