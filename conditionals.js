const x = 101;

// '==' compares the value only
// '===' is also comparing the data type
if (x === 10) {
    console.log('x is 10');
} else {
    console.log('Not matching')
}


const color = x > 10 ? 'yellow' : 'green';
console.log(color);

// switch statements
switch(color) {
    case 'yellow':
        console.log('Color is yellow');
        break;
    case 'green':
        console.log('Color is green')
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}