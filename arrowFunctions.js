// Example arrow function below
// Curly bracers are not needed if it's only a line of code and the result can be returned immediately, without return keyword
const addNums = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2)
}

// Example of single line arrow function
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums2(5, 5));