class Persona {
  #name;
  #age;
  #phoneNumber

  setPerson(name, age, phoneNumber) {
    this.#name = name;
    this.#age = age;
    this.#phoneNumber  = phoneNumber;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getPhoneNumber() {
    return this.#phoneNumber;
  }

}

const p = new Persona();

p.setPerson('John Doe', 27, 116845917)

console.log(p.getName());
console.log(p.getAge());
console.log(p.getPhoneNumber());