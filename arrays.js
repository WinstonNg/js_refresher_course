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

// map
// returns an array of text from todo array
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log('JS Filter function', todoCompleted);

// filter + map
const todoCompletedText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log('Print out text where status = completed', todoCompletedText);