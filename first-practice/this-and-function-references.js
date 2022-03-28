//this , refiere a lo que esta ejecutando el codigo en una clase
//generalmente ser refiera a la clase o lo que esta ejecutando el evento por ejemplo
//para solucionar esto usamos bind()

class NameGenerator {
  constructor() {
    const btn = document.querySelector("button");
    this.names = ["Max", "Manu", "Anna"];
    this.currentName = 0;
    btn.addEventListener("click", this.addName.bind(this)); // hear we user again this, to refer the class and not the event or we can use an arrow function
    /* ()=> {
        this.addName();
    } */
  }

  addName() {
    console.log(this);
    const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}
