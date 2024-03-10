class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`sleeping now ${this.name}`);
  }
}

const rayaan = new Person("ray", 1);
rayaan.sleep();
console.log(rayaan);

const person = {
  name: "namejj",
  job: "jobqq",
  3: "3zz",
};

const prop = "job";

console.log(person.name);
console.log(person["3"]);
console.log(person[prop]);

class Animal {
  name;
  color;
  constructor(petName, petColor) {
    this.name = petName;
    this.color = petColor;
  }

  showInfo() {
    console.log(`name: ${this.color}`);
  }
}

const cat = new Animal("cat", "white");
const dog = new Animal("dog", "black");
// console.log(cat.color);
// console.log(dog.color);
cat.showInfo();
