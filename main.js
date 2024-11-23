// Example string concatenation using back ticks
const name = 'John';
const age = 30;

console.log(`My nameis ${name} and I am ${age}`);

// String Splitting into Array
const s = 'DNS, TCP/IP, HTTPS';
console.log(s.split(', '));

//Array example (Legacy declaration method)
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

// Array example (Common declaration method)
// In JS, arrays can contain different data types
const fruits = ['apples', 'oranges', 'pears', 'pineapples', 100]
// fruits[5] = 'grapes';
fruits.push('mangoes'); // Add item to back of the array
fruits.unshift('grapes'); // Add item to start of array
console.log(fruits);
console.log(`Is an array? ${Array.isArray(fruits)}`); // Check if variable is an array
console.log(fruits.indexOf('oranges')) // Check specified item is in which position in the array


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.hobbies[1]);

// Loops
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with client',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Marketing meeting',
        isCompleted: false
    }
];

// // Convert JS object into JSON object
// const toDoJSON = JSON.stringify(todos);


// For loop
for(let i = 0; i < 10; i++){
    console.log(`For loop ${i}`);
}

// // While loop
let i = 0;
while(i< 10){
    console.log(`While loop number ${i}`);
    i++;
}

// // loop through array
for(let i = 0; i < todos.length; i++){
    console.log(`TODOs ${todos[i].text}`);
}

// // for..of loop
for(let todo of todos) {
    console.log(`TODO let..of loop ${todo.text}`)
}

// forEach
todos.forEach(function(todo) {
    console.log(`For Each: ${todo.text}`);
});

// map
// returns an array of text from todo array
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log('JS Map Function', todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log('JS Filter function', todoCompleted);

