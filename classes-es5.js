// JS Object Oriented Programming Pre-Classes (ES5)

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Date object itself has multiple functions attached
    // eg: Get the year, date, etc......
    this.dob = new Date(dob);
}

// We use prototype function when each object do not need certain functions
// Related to Interface Segregation
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear()
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '2024-10-11')
const person2 = new Person('Georgia', 'Jinx', '2024-10-30')

console.log(person1)
console.log(person1.getBirthYear());
console.log(person1.getFullName());