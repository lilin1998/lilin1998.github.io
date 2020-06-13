//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Tan Li Lin',
    skills: ['Java', 'Microsoft', 'NetBeans'],
    //es5 function because this keyword is not bounded in es6
    printSkills() {
        return this.skills.map((skill) => 
            this.name + ' knows ' + skill);
    }
};

console.log(user.printSkills());

const multiplier = {
    numbers: [2, 4, 6, 8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());