class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `Hi I am ${this.name} and I am ${this.age} this year!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` My major is ${this.major}.`;
        }

        return description;
    }
}

const me = new Student('Tan Li Lin', 22, 'Information Systems');
const test = new Student();

//console.log(test.getDescription());
console.log(me.getDescription());
console.log(me.hasMajor());