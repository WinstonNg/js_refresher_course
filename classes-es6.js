// Does the same thingas ES5, but written in prettier way

// Class
class Person {

    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        // Date object itself has multiple functions attached
        // eg: Get the year, date, etc......
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '2024-10-11')
const person2 = new Person('Georgia', 'Jinx', '2024-10-30')

console.log(person1)
console.log(person1.getBirthYear());
console.log(person1.getFullName());