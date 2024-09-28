


// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

let array = [2, 3, 4, 6, 5, 48, 7, 9]

// console.log(array.map(x => x * x))


// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

function getGrade(score) {
    return score >= 90 ? 'A' :
        score >= 80 ? 'B' :
            score >= 70 ? 'C' :
                score >= 60 ? 'D' :
                    'F';
}

// console.log(getGrade(85));
// console.log(getGrade(92));
// console.log(getGrade(40));


// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

const car = {
    companyName: 'Toyota',
    model: 'Corolla',
    year: 2015
};

function updateCarYear(car, newYear) {
    car.year = newYear;
    return car;
}

const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`);


// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const primeNumbers = getPrimeNumbers(numbers);
// console.log(primeNumbers);


// Q5 -  State different use cases of map, filter and reduce functions.

const numbersArr = [1, 2, 3, 4, 5];
const doubledNumbers = numbersArr.map(num => num * 2);
// console.log(doubledNumbers); 

// 1 it modified the data or each element of array
// it return new modified calculated array
// we can convert the data types using this

const numbersArray = [1, 2, 3, 4, 5, 6];
const evenNumbersArray = numbersArray.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

// 1 it Removes unwanted data and can select specific data
// it return new array with selected data
// we can use it to filter data from array

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

// 1. it Calculate a sum or product
// it return a single value
// we can use it to calculate sum or product of array elements


// Combining Map, Filter, and Reduce

const arrNumbers = [1, 2, 3, 4, 5, 6];
const result = arrNumbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);
// console.log(result); // Output: 24


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// fetchData();



// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    contact: {
        email: 'johndoe@example.com',
        phone: '555-1234'
    }

}
const phoneNumber = person.contact?.phone;
console.log(phoneNumber);