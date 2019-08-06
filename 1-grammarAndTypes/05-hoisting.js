//Hoisting
//Hoisting dose not exist. It is an illusion. Code doesn't actually get oved.
//JS reads through code twice remembering left hand side variables
console.log(scissors);

scissors= 'blue';

console.log(scissors);

var scissors;

b();
console.log(a);

function b(){
    console.log('this is all hoisted!');
}

var a = 'This is not hoisted';
//Functions get hoisted variables do not
