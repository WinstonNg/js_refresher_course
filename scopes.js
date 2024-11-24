// Block Scope Example
// const and let variables declared inside a block scope cannot be used outside of the block scope
// var variable cannot have block scope, var declared in block scope can be accessed outside of the block
{
    const x = 5;
    let y = 5;
    var z = 10;
}
console.log(z)
// console.log('x :', x, 'y :', y) // Uncaught reference error will be triggered, due to undefined variables.
// print(x, y)

// Local Scope
// Variables declared inside a function can only be used in the function itself
function myCar() {
    let carName = 'Volvo';
}
// console.log(carName) // the print line here won't work, as carName is a local scope only accessible within myCar function

// If we do not specify the variable 'let/const/var' when declaring a variable inside a function, it automatically becomes a global variable
myFunction()
console.log(firstName) // This print works, because firstName automatically becomes a global variable

function myFunction() {
    firstName = 'Jack'
}