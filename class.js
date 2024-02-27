class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`sleeping now ${this.name}`);
    }
}

const rayaan = new Person('ray', 1);
rayaan.sleep();
console.log(rayaan);

const person ={
    name: 'namejj',
    job: 'jobqq',
    3: '3zz',
}

const prop = 'job';

console.log(person.name);
console.log(person['3']);
console.log(person[prop]);