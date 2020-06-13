//es5

const square = function(x) {
    return x * x;
};

//es6

//const squareArrow = (x) => {
//    return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));


const lastName = (name) => name.split(' ')[0];

console.log(lastName('Tan Li Lin'));